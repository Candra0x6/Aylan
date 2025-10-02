/**
 * Template Preview Types
 * Interfaces for the preview system
 */

export type PreviewMode = 'desktop' | 'tablet' | 'mobile';

export interface TemplateContent {
  hero?: {
    headline?: string;
    subheadline?: string;
    cta?: string;
  };
  features?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  testimonials?: Array<{
    name: string;
    role: string;
    content: string;
    avatar?: string;
  }>;
  about?: {
    title?: string;
    description?: string;
  };
  contact?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  branding?: {
    primaryColor?: string;
    secondaryColor?: string;
    logo?: string;
  };
}

export interface PreviewState {
  isLoading: boolean;
  error: string | null;
  mode: PreviewMode;
  template: string | null;
  content: TemplateContent | null;
}

export interface PreviewConfig {
  mode: PreviewMode;
  templateId: string;
  content?: TemplateContent;
  width?: number;
  height?: number;
}

export interface PreviewActions {
  setMode: (mode: PreviewMode) => void;
  setTemplate: (templateId: string) => void;
  setContent: (content: TemplateContent) => void;
  refresh: () => void;
  reset: () => void;
}

export interface PreviewDimensions {
  desktop: { width: number; height: number };
  tablet: { width: number; height: number };
  mobile: { width: number; height: number };
}