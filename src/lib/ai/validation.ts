/**
 * Content Validation Utilities
 * Validates AI-generated content for quality and compliance
 */

import type { LandingPageContent } from '@/types/ai';
import { CONTENT_LIMITS } from '@/lib/ai/config';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  score: number; // 0-100 quality score
}

export class ContentValidator {
  static validateLandingPageContent(content: LandingPageContent): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];
    let score = 100;

    try {
      // Basic validation for required fields
      if (!content.hero?.headline) {
        errors.push('Hero headline is required');
        score -= 20;
      }

      if (!content.hero?.subheadline) {
        errors.push('Hero subheadline is required');
        score -= 15;
      }

      if (!content.hero?.ctaText) {
        errors.push('Hero CTA text is required');
        score -= 10;
      }

      if (!content.features?.features || !Array.isArray(content.features.features) || content.features.features.length === 0) {
        errors.push('Features section is required with at least one feature');
        score -= 20;
      }

      if (!content.cta?.title || !content.cta?.buttonText) {
        errors.push('CTA section requires title and button text');
        score -= 15;
      }

      if (!content.metadata?.title || !content.metadata?.description) {
        errors.push('SEO metadata (title and description) is required');
        score -= 10;
      }

      // Length validations
      if (content.hero?.headline && (content.hero.headline.length < CONTENT_LIMITS.headline.min || content.hero.headline.length > CONTENT_LIMITS.headline.max)) {
        warnings.push(`Headline length should be between ${CONTENT_LIMITS.headline.min}-${CONTENT_LIMITS.headline.max} characters`);
        score -= 5;
      }

      if (content.hero?.subheadline && (content.hero.subheadline.length < CONTENT_LIMITS.subheadline.min || content.hero.subheadline.length > CONTENT_LIMITS.subheadline.max)) {
        warnings.push(`Subheadline length should be between ${CONTENT_LIMITS.subheadline.min}-${CONTENT_LIMITS.subheadline.max} characters`);
        score -= 5;
      }

      // Feature count validation
      if (content.features?.features && content.features.features.length < 3) {
        warnings.push('Consider adding more features for better user engagement');
        score -= 5;
      }

      // SEO validation
      if (content.metadata?.title && content.metadata.title.length > 60) {
        warnings.push('SEO title is too long (over 60 characters)');
        score -= 5;
      }

      if (content.metadata?.description && (content.metadata.description.length < 120 || content.metadata.description.length > 160)) {
        warnings.push('SEO description should be 120-160 characters');
        score -= 5;
      }

    } catch (error) {
      errors.push('Validation error occurred');
      score -= 10;
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      score: Math.max(0, Math.round(score))
    };
  }

  // Content quality scoring
  static calculateContentQuality(content: LandingPageContent): number {
    const validation = this.validateLandingPageContent(content);
    return validation.score;
  }

  // Check for common content issues
  static checkContentIssues(content: LandingPageContent): string[] {
    const issues: string[] = [];

    try {
      // Check for repetitive content
      const allText = [
        content.hero?.headline || '',
        content.hero?.subheadline || '',
        content.about?.description || '',
        content.cta?.description || ''
      ].join(' ').toLowerCase();

      // Simple repetition detection
      const words = allText.split(/\s+/);
      const wordCount: Record<string, number> = {};
      
      words.forEach(word => {
        if (word.length > 4) { // Only check longer words
          wordCount[word] = (wordCount[word] || 0) + 1;
        }
      });

      Object.entries(wordCount).forEach(([word, count]) => {
        if (count > 3) {
          issues.push(`Word "${word}" appears ${count} times - consider using synonyms`);
        }
      });
    } catch {
      issues.push('Content analysis error occurred');
    }

    return issues;
  }
}