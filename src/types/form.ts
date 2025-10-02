/**
 * TypeScript types for the AI Landing Page Generator form
 */

export interface LandingPageFormData {
  industry: Industry;
  businessCategory: BusinessCategory;
  targetAudience: TargetAudience;
  stylePreference: StylePreference;
  brandKeywords: string;
}

export type Industry = 'tech' | 'healthcare' | 'education' | 'retail';

export type BusinessCategory = 'saas' | 'ecommerce' | 'agency' | 'corporate';

export type TargetAudience = 'professionals' | 'consumers' | 'entrepreneurs' | 'developers';

export type StylePreference = 'minimalist' | 'modern' | 'bold' | 'elegant' | 'playful';

export interface FormOption {
  value: string;
  label: string;
  description?: string;
}

export interface FormFieldError {
  message: string;
}

export interface FormSubmissionState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}