'use client';

import { useState, useCallback } from 'react';
import { PreviewMode, PreviewState, TemplateContent } from '@/types/preview';
import { LandingPageFormData } from '@/types/form';

export function useTemplatePreview(initialTemplate?: string) {
  const [previewState, setPreviewState] = useState<PreviewState>({
    isLoading: false,
    error: null,
    mode: 'desktop',
    template: initialTemplate || null,
    content: null
  });

  const setMode = useCallback((mode: PreviewMode) => {
    setPreviewState(prev => ({ ...prev, mode }));
  }, []);

  const setTemplate = useCallback((templateId: string) => {
    setPreviewState(prev => ({ 
      ...prev, 
      template: templateId,
      isLoading: true,
      error: null 
    }));
  }, []);

  const setContent = useCallback((content: TemplateContent) => {
    setPreviewState(prev => ({ 
      ...prev, 
      content,
      isLoading: false,
      error: null 
    }));
  }, []);

  const setError = useCallback((error: string) => {
    setPreviewState(prev => ({ 
      ...prev, 
      error,
      isLoading: false 
    }));
  }, []);

  const refresh = useCallback(() => {
    setPreviewState(prev => ({ ...prev, isLoading: true, error: null }));
    
    // Simulate refresh delay
    setTimeout(() => {
      setPreviewState(prev => ({ ...prev, isLoading: false }));
    }, 1000);
  }, []);

  const reset = useCallback(() => {
    setPreviewState(prev => ({
      ...prev,
      content: null,
      error: null,
      isLoading: false
    }));
  }, []);

  const transformFormDataToContent = useCallback((data: LandingPageFormData): TemplateContent => {
    // Generate business name from industry and category
    const businessName = `${data.industry.charAt(0).toUpperCase() + data.industry.slice(1)} ${
      data.businessCategory.charAt(0).toUpperCase() + data.businessCategory.slice(1)
    }`;
    
    // Generate description based on keywords and category
    const description = data.brandKeywords || 
      `Professional ${data.businessCategory} solutions for ${data.targetAudience}`;
    
    return {
      hero: {
        headline: businessName,
        subheadline: description,
        cta: data.businessCategory === 'saas' ? 'Start Free Trial' : 'Get Started'
      },
      features: [
        {
          title: `${data.stylePreference.charAt(0).toUpperCase() + data.stylePreference.slice(1)} Design`,
          description: `Modern ${data.stylePreference} approach tailored for ${data.targetAudience}`,
          icon: 'star'
        },
        {
          title: `${data.industry.charAt(0).toUpperCase() + data.industry.slice(1)} Expertise`, 
          description: `Deep understanding of ${data.industry} industry requirements`,
          icon: 'shield'
        },
        {
          title: 'Targeted Solutions',
          description: `Specifically designed for ${data.targetAudience} in ${data.businessCategory}`,
          icon: 'zap'
        }
      ],
      about: {
        title: 'About Us',
        description: `We specialize in ${data.businessCategory} solutions for the ${data.industry} industry, focusing on ${data.targetAudience}. ${data.brandKeywords ? data.brandKeywords : 'Delivering exceptional results through innovative approaches.'}`
      },
      branding: {
        primaryColor: data.stylePreference === 'bold' ? '#dc2626' : 
                      data.stylePreference === 'elegant' ? '#6366f1' :
                      data.stylePreference === 'playful' ? '#f59e0b' : '#3b82f6',
        secondaryColor: data.stylePreference === 'bold' ? '#991b1b' : 
                        data.stylePreference === 'elegant' ? '#4f46e5' :
                        data.stylePreference === 'playful' ? '#d97706' : '#1e40af',
      }
    };
  }, []);

  return {
    previewState,
    actions: {
      setMode,
      setTemplate,
      setContent,
      setError,
      refresh,
      reset,
      transformFormDataToContent
    }
  };
}