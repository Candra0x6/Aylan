/**
 * AI Service Configuration
 * Centralized configuration for AI services and API settings
 */

import type { AIServiceConfig } from '@/types/ai';

export const AI_CONFIG: AIServiceConfig = {
  model: 'gemini-2.5-flash', // Fast and efficient for content generation
  temperature: 0.7, // Balanced creativity and consistency
  maxTokens: 8192, // Sufficient for landing page content
  retryAttempts: 3,
  timeoutMs: 30000, // 30 seconds timeout
};

export const FALLBACK_CONFIG = {
  enabled: true,
  maxFallbackAttempts: 2,
  fallbackDelay: 1000, // 1 second delay between attempts
};

export const CONTENT_LIMITS = {
  headline: { min: 10, max: 80 },
  subheadline: { min: 20, max: 160 },
  description: { min: 50, max: 300 },
  featureTitle: { min: 5, max: 50 },
  featureDescription: { min: 20, max: 150 },
  testimonialQuote: { min: 20, max: 200 },
};

export const SUPPORTED_INDUSTRIES = [
  'tech', 
  'healthcare', 
  'education', 
  'retail'
] as const;

export const SUPPORTED_CATEGORIES = [
  'saas', 
  'ecommerce', 
  'agency', 
  'corporate'
] as const;

export const SUPPORTED_STYLES = [
  'minimalist', 
  'modern', 
  'bold', 
  'elegant', 
  'playful'
] as const;

export const ERROR_MESSAGES = {
  API_KEY_MISSING: 'Google AI API key is not configured',
  INVALID_REQUEST: 'Invalid content generation request',
  GENERATION_FAILED: 'Failed to generate content with AI',
  TIMEOUT_ERROR: 'Content generation timed out',
  RATE_LIMIT_ERROR: 'Rate limit exceeded, please try again later',
  VALIDATION_ERROR: 'Generated content failed validation',
  FALLBACK_EXHAUSTED: 'All fallback attempts exhausted',
};