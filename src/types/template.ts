/**
 * Template system types and interfaces
 */

export type BusinessCategory = 'saas' | 'ecommerce' | 'agency' | 'corporate';
export type StylePreference = 'minimalist' | 'modern' | 'bold' | 'elegant' | 'playful';
export type Industry = 'tech' | 'healthcare' | 'education' | 'retail';

export interface TemplateMetadata {
  id: string;
  name: string;
  category: BusinessCategory;
  style: StylePreference;
  industry: Industry[];
  description: string;
  features: string[];
  path: string;
  previewImage?: string;
  compatibility: {
    mobile: boolean;
    desktop: boolean;
    accessibility: boolean;
  };
}

export interface TemplateSelectionCriteria {
  businessCategory: BusinessCategory;
  stylePreference: StylePreference;
  industry: Industry;
  targetAudience?: string;
}

export interface TemplateSelectionResult {
  template: TemplateMetadata;
  matchScore: number;
  reasoning: string[];
}

export interface TemplateSelectionOptions {
  fallbackEnabled?: boolean;
  requireExactMatch?: boolean;
  includeAlternatives?: boolean;
  maxAlternatives?: number;
}