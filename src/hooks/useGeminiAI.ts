/**
 * Gemini AI Hook
 * Custom React hook for generating content using Gemini AI
 */

import { useState, useCallback } from 'react';
import type { LandingPageFormSchema } from '@/lib/validation/formSchema';
import type { TemplateSelectionResult } from '@/types/template';

export interface GeneratedContent {
  [key: string]: unknown; // Template-specific content structure
}

interface GeminiAIState {
  content: GeneratedContent | null;
  isLoading: boolean;
  error: string | null;
}

interface ContentGenerationResponse {
  success: boolean;
  data?: GeneratedContent;
  error?: string;
  message?: string;
}

export function useGeminiAI() {
  const [state, setState] = useState<GeminiAIState>({
    content: null,
    isLoading: false,
    error: null
  });

  const generateContent = useCallback(async (
    formData: LandingPageFormSchema,
    selectedTemplate: TemplateSelectionResult
  ): Promise<GeneratedContent> => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          template: selectedTemplate
        })
      });

      const result: ContentGenerationResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to generate content');
      }

      if (result.success && result.data) {
        setState({
          content: result.data,
          isLoading: false,
          error: null
        });

        return result.data;
      } else {
        throw new Error(result.message || 'Invalid response format');
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage
      }));
      throw error;
    }
  }, []);

  const regenerateSection = useCallback(async (
    sectionName: string,
    formData: LandingPageFormSchema,
    selectedTemplate: TemplateSelectionResult
  ): Promise<unknown> => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await fetch('/api/regenerate-section', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          section: sectionName,
          formData,
          template: selectedTemplate
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to regenerate section');
      }

      if (result.success && result.data) {
        // Update the specific section in the content
        setState(prev => ({
          ...prev,
          content: prev.content ? {
            ...prev.content,
            [sectionName]: result.data
          } : { [sectionName]: result.data },
          isLoading: false,
          error: null
        }));

        return result.data;
      } else {
        throw new Error(result.message || 'Invalid response format');
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage
      }));
      throw error;
    }
  }, []);

  const clearContent = useCallback(() => {
    setState({
      content: null,
      isLoading: false,
      error: null
    });
  }, []);

  return {
    ...state,
    generateContent,
    regenerateSection,
    clearContent
  };
}
