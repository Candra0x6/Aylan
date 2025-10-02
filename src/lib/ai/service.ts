/**
 * AI Content Generation Service
 * Main service for generating landing page content using Google's Gemini AI
 */

import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import type { 
  AIContentRequest, 
  AIResponse, 
  LandingPageContent, 
  ContentGenerationOptions,
  SectionPrompt 
} from '@/types/ai';
import { PromptBuilder } from './prompts';
import { FallbackContentGenerator } from './fallback';
import { AI_CONFIG, FALLBACK_CONFIG, ERROR_MESSAGES } from './config';

export class AIContentService {
  private genAI: GoogleGenerativeAI | null = null;
  private model: GenerativeModel | null = null;

  constructor() {
    this.initializeAI();
  }

  private initializeAI(): void {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY;
    
    if (!apiKey) {
      console.warn('Google AI API key not found. AI features will use fallback content.');
      return;
    }

    try {
      this.genAI = new GoogleGenerativeAI(apiKey);
      this.model = this.genAI.getGenerativeModel({ 
        model: AI_CONFIG.model,
        generationConfig: {
          temperature: AI_CONFIG.temperature,
          maxOutputTokens: AI_CONFIG.maxTokens,
        }
      });
    } catch (error) {
      console.error('Failed to initialize Google AI:', error);
    }
  }

  async generateContent(
    request: AIContentRequest, 
    options: ContentGenerationOptions = {}
  ): Promise<AIResponse<LandingPageContent>> {
    const startTime = Date.now();

    // Validate request
    const validationError = this.validateRequest(request);
    if (validationError) {
      return {
        success: false,
        error: validationError,
        processingTime: Date.now() - startTime
      };
    }

    // If AI is not available, use fallback immediately
    if (!this.model) {
      const fallbackGenerator = new FallbackContentGenerator(request);
      return {
        success: true,
        data: fallbackGenerator.generateFallbackContent(),
        fallbackUsed: true,
        processingTime: Date.now() - startTime
      };
    }

    // Try AI generation with retries
    let lastError: string | null = null;
    
    for (let attempt = 1; attempt <= AI_CONFIG.retryAttempts; attempt++) {
      try {
        const content = await this.generateWithAI(request, options);
        
        if (content) {
          return {
            success: true,
            data: content,
            fallbackUsed: false,
            processingTime: Date.now() - startTime
          };
        }
      } catch (error) {
        lastError = error instanceof Error ? error.message : 'Unknown error';
        console.warn(`AI generation attempt ${attempt} failed:`, lastError);
        
        if (attempt < AI_CONFIG.retryAttempts) {
          await this.delay(FALLBACK_CONFIG.fallbackDelay * attempt);
        }
      }
    }

    // All AI attempts failed, use fallback
    if (FALLBACK_CONFIG.enabled) {
      const fallbackGenerator = new FallbackContentGenerator(request);
      return {
        success: true,
        data: fallbackGenerator.generateFallbackContent(),
        fallbackUsed: true,
        error: `AI generation failed: ${lastError}`,
        processingTime: Date.now() - startTime
      };
    }

    return {
      success: false,
      error: lastError || ERROR_MESSAGES.GENERATION_FAILED,
      processingTime: Date.now() - startTime
    };
  }

  private async generateWithAI(
    request: AIContentRequest, 
    options: ContentGenerationOptions
  ): Promise<LandingPageContent | null> {
    if (!this.model) return null;

    const promptBuilder = new PromptBuilder(request);
    const prompts = promptBuilder.getAllPrompts();
    
    // Filter prompts based on options
    const filteredPrompts = prompts.filter(prompt => {
      if (!options.includeTestimonials && prompt.section === 'testimonials') {
        return false;
      }
      return true;
    });

    const content: Partial<LandingPageContent> = {};
    
    // Generate content for each section
    for (const prompt of filteredPrompts) {
      try {
        const sectionContent = await this.generateSection(prompt);
        if (sectionContent) {
          (content as Record<string, unknown>)[prompt.section] = sectionContent;
        }
      } catch (error) {
        console.warn(`Failed to generate ${prompt.section}:`, error);
        // Continue with other sections even if one fails
      }
    }

    // Validate that we have the minimum required content
    if (!content.hero || !content.features || !content.cta) {
      throw new Error('Failed to generate minimum required content sections');
    }

    return content as LandingPageContent;
  }

  private async generateSection(prompt: SectionPrompt): Promise<unknown> {
    if (!this.model) return null;

    const fullPrompt = `${prompt.systemPrompt}\n\n${prompt.userPrompt}`;
    
    try {
      const result = await Promise.race([
        this.model.generateContent(fullPrompt),
        this.timeoutPromise(AI_CONFIG.timeoutMs)
      ]);

      const response = result.response;
      const text = response.text();

      // Parse JSON from response
      const parsedContent = this.parseJSONResponse(text);
      
      // Validate content if validation function is provided
      if (prompt.validation && !prompt.validation(parsedContent)) {
        throw new Error(`Generated content failed validation for ${prompt.section}`);
      }

      return parsedContent;
    } catch (error) {
      throw new Error(`Section generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private parseJSONResponse(text: string): unknown {
    try {
      // Remove markdown code block markers if present
      const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(cleanText);
    } catch {
      // Try to extract JSON from the text
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          return JSON.parse(jsonMatch[0]);
        } catch {
          throw new Error('Failed to parse JSON response');
        }
      }
      throw new Error('No valid JSON found in response');
    }
  }

  private validateRequest(request: AIContentRequest): string | null {
    if (!request.businessCategory || !request.stylePreference || !request.industry || !request.targetAudience) {
      return ERROR_MESSAGES.INVALID_REQUEST;
    }
    return null;
  }

  private timeoutPromise(ms: number): Promise<never> {
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error(ERROR_MESSAGES.TIMEOUT_ERROR)), ms);
    });
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Public method to test AI availability
  async testConnection(): Promise<boolean> {
    if (!this.model) return false;
    
    try {
      const result = await this.model.generateContent('Test connection. Respond with "OK".');
      const response = result.response.text();
      return response.toLowerCase().includes('ok');
    } catch {
      return false;
    }
  }

  // Public method to get service status
  getServiceStatus(): { available: boolean; model: string | null; fallbackEnabled: boolean } {
    return {
      available: !!this.model,
      model: this.model ? AI_CONFIG.model : null,
      fallbackEnabled: FALLBACK_CONFIG.enabled
    };
  }
}