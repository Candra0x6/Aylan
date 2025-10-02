/**
 * AI Service Module Index
 * Central exports for AI functionality
 */

export { AIContentService } from './service';
export { PromptBuilder } from './prompts';
export { FallbackContentGenerator } from './fallback';
export { AI_CONFIG, FALLBACK_CONFIG, ERROR_MESSAGES } from './config';

// Re-export types for convenience
export type {
  AIContentRequest,
  AIResponse,
  LandingPageContent,
  ContentGenerationOptions,
  SectionPrompt,
  HeroContent,
  FeaturesContent,
  AboutContent,
  CTAContent,
  TestimonialsContent,
  MetadataContent
} from '@/types/ai';