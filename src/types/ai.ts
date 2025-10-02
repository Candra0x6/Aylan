/**
 * AI Service Types and Interfaces
 * Defines the structure for AI-generated content and service configuration
 */

import type { BusinessCategory, StylePreference, Industry } from './template';

export interface AIContentRequest {
  businessCategory: BusinessCategory;
  stylePreference: StylePreference;
  industry: Industry;
  targetAudience: string;
  brandKeywords?: string;
  companyName?: string;
}

export interface LandingPageContent {
  hero: HeroContent;
  features: FeaturesContent;
  about: AboutContent;
  cta: CTAContent;
  testimonials: TestimonialsContent;
  metadata: MetadataContent;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  backgroundText?: string;
}

export interface FeaturesContent {
  sectionTitle: string;
  features: Feature[];
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface AboutContent {
  sectionTitle: string;
  description: string;
  highlights: string[];
}

export interface CTAContent {
  title: string;
  description: string;
  buttonText: string;
  secondaryText?: string;
}

export interface TestimonialsContent {
  sectionTitle: string;
  testimonials: Testimonial[];
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

export interface MetadataContent {
  title: string;
  description: string;
  keywords: string[];
}

export interface AIServiceConfig {
  model: string;
  temperature: number;
  maxTokens: number;
  retryAttempts: number;
  timeoutMs: number;
}

export interface AIResponse<T = LandingPageContent> {
  success: boolean;
  data?: T;
  error?: string;
  fallbackUsed?: boolean;
  processingTime?: number;
}

export interface ContentGenerationOptions {
  includeTestimonials?: boolean;
  featureCount?: number;
  tone?: 'professional' | 'casual' | 'friendly' | 'authoritative';
  includeEmojis?: boolean;
}

export type ContentSection = 'hero' | 'features' | 'about' | 'cta' | 'testimonials' | 'metadata';

export interface SectionPrompt {
  section: ContentSection;
  systemPrompt: string;
  userPrompt: string;
  validation?: (content: unknown) => boolean;
}