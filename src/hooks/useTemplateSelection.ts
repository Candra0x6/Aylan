/**
 * Template Selection Hook
 * Custom React hook for template selection functionality
 */

import { useState, useCallback } from 'react';
import type { LandingPageFormSchema } from '@/lib/validation/formSchema';
import type { TemplateSelectionResult, TemplateSelectionCriteria } from '@/types/template';

interface TemplateSelectionState {
  selectedTemplate: TemplateSelectionResult | null;
  alternatives: TemplateSelectionResult[];
  isLoading: boolean;
  error: string | null;
}

interface TemplateSelectionResponse {
  success: boolean;
  data?: {
    selectedTemplate: TemplateSelectionResult;
    alternatives: TemplateSelectionResult[];
    criteria: TemplateSelectionCriteria;
    timestamp: string;
  };
  error?: string;
  message?: string;
}

export function useTemplateSelection() {
  const [state, setState] = useState<TemplateSelectionState>({
    selectedTemplate: null,
    alternatives: [],
    isLoading: false,
    error: null
  });

  const selectTemplate = useCallback(async (formData: LandingPageFormSchema) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await fetch('/api/select-template', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result: TemplateSelectionResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to select template');
      }

      if (result.success && result.data) {
        setState({
          selectedTemplate: result.data.selectedTemplate,
          alternatives: result.data.alternatives,
          isLoading: false,
          error: null
        });

        return result.data.selectedTemplate;
      } else {
        throw new Error('Invalid response format');
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

  const clearSelection = useCallback(() => {
    setState({
      selectedTemplate: null,
      alternatives: [],
      isLoading: false,
      error: null
    });
  }, []);

  const selectAlternative = useCallback((alternative: TemplateSelectionResult) => {
    setState(prev => ({
      ...prev,
      selectedTemplate: alternative,
      alternatives: prev.alternatives.filter(alt => alt.template.id !== alternative.template.id)
    }));
  }, []);

  return {
    ...state,
    selectTemplate,
    clearSelection,
    selectAlternative
  };
}