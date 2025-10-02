/**
 * Template Selection Service
 * Implements intelligent template selection based on user preferences
 */

import type {
  TemplateMetadata,
  TemplateSelectionCriteria,
  TemplateSelectionResult,
  TemplateSelectionOptions,
  BusinessCategory,
  StylePreference,
  Industry
} from '@/types/template';
import { templateRegistry } from '@/data/templates/templateRegistry';

/**
 * Template selection scoring weights
 */
const SCORING_WEIGHTS = {
  EXACT_CATEGORY_MATCH: 50,
  EXACT_STYLE_MATCH: 40,
  INDUSTRY_MATCH: 30,
  PARTIAL_INDUSTRY_MATCH: 15,
  COMPATIBILITY_BONUS: 10
} as const;

/**
 * Calculate match score for a template against selection criteria
 */
function calculateMatchScore(
  template: TemplateMetadata,
  criteria: TemplateSelectionCriteria
): { score: number; reasoning: string[] } {
  let score = 0;
  const reasoning: string[] = [];

  // Exact business category match
  if (template.category === criteria.businessCategory) {
    score += SCORING_WEIGHTS.EXACT_CATEGORY_MATCH;
    reasoning.push(`Perfect match for ${criteria.businessCategory} business category`);
  }

  // Exact style preference match
  if (template.style === criteria.stylePreference) {
    score += SCORING_WEIGHTS.EXACT_STYLE_MATCH;
    reasoning.push(`Perfect match for ${criteria.stylePreference} style preference`);
  }

  // Industry match
  if (template.industry.includes(criteria.industry)) {
    score += SCORING_WEIGHTS.INDUSTRY_MATCH;
    reasoning.push(`Optimized for ${criteria.industry} industry`);
  } else if (template.industry.length > 0) {
    // Partial industry compatibility
    const hasRelatedIndustry = template.industry.some(industry => 
      getRelatedIndustries(criteria.industry).includes(industry)
    );
    if (hasRelatedIndustry) {
      score += SCORING_WEIGHTS.PARTIAL_INDUSTRY_MATCH;
      reasoning.push(`Compatible with related industries`);
    }
  }

  // Compatibility bonus
  if (template.compatibility.mobile && template.compatibility.desktop && template.compatibility.accessibility) {
    score += SCORING_WEIGHTS.COMPATIBILITY_BONUS;
    reasoning.push(`Full mobile, desktop, and accessibility support`);
  }

  return { score, reasoning };
}

/**
 * Get related industries for better matching
 */
function getRelatedIndustries(industry: Industry): Industry[] {
  const industryRelations: Record<Industry, Industry[]> = {
    tech: ['healthcare', 'education'],
    healthcare: ['tech', 'education'],
    education: ['tech', 'healthcare'],
    retail: ['tech']
  };

  return industryRelations[industry] || [];
}

/**
 * Select the best template based on criteria
 */
export function selectTemplate(
  criteria: TemplateSelectionCriteria,
  options: TemplateSelectionOptions = {}
): TemplateSelectionResult & { alternatives?: TemplateSelectionResult[] } {
  const {
    fallbackEnabled = true,
    requireExactMatch = false,
    includeAlternatives = false,
    maxAlternatives = 3
  } = options;

  // Calculate scores for all templates
  const scoredTemplates = templateRegistry.map(template => {
    const { score, reasoning } = calculateMatchScore(template, criteria);
    return {
      template,
      matchScore: score,
      reasoning
    };
  });

  // Sort by score (highest first)
  scoredTemplates.sort((a, b) => b.matchScore - a.matchScore);

  const bestMatch = scoredTemplates[0];

  // Check if we have a good enough match
  const minimumScore = requireExactMatch ? 90 : 50;
  
  if (!bestMatch || bestMatch.matchScore < minimumScore) {
    if (!fallbackEnabled) {
      throw new Error(`No suitable template found for ${criteria.businessCategory} + ${criteria.stylePreference}`);
    }
    
    // Return default fallback template
    return getFallbackTemplate(criteria);
  }

  const result: TemplateSelectionResult & { alternatives?: TemplateSelectionResult[] } = bestMatch;

  // Include alternatives if requested
  if (includeAlternatives && scoredTemplates.length > 1) {
    result.alternatives = scoredTemplates.slice(1, maxAlternatives + 1);
  }

  return result;
}

/**
 * Get multiple template alternatives
 */
export function getTemplateAlternatives(
  criteria: TemplateSelectionCriteria,
  maxResults: number = 3
): TemplateSelectionResult[] {
  const scoredTemplates = templateRegistry.map(template => {
    const { score, reasoning } = calculateMatchScore(template, criteria);
    return {
      template,
      matchScore: score,
      reasoning
    };
  });

  return scoredTemplates
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, maxResults);
}

/**
 * Fallback template selection when no good match is found
 */
function getFallbackTemplate(criteria: TemplateSelectionCriteria): TemplateSelectionResult {
  // Try to find any template with matching category
  let fallback = templateRegistry.find(t => t.category === criteria.businessCategory);
  
  // If no category match, find any template with matching style
  if (!fallback) {
    fallback = templateRegistry.find(t => t.style === criteria.stylePreference);
  }
  
  // Ultimate fallback - first template in registry
  if (!fallback) {
    fallback = templateRegistry[0];
  }

  return {
    template: fallback,
    matchScore: 25, // Low score to indicate this is a fallback
    reasoning: ['Fallback template selected - no perfect match found', `Closest available option for ${criteria.businessCategory} business`]
  };
}

/**
 * Validate template selection criteria
 */
export function validateSelectionCriteria(criteria: TemplateSelectionCriteria): string[] {
  const errors: string[] = [];

  const validCategories: BusinessCategory[] = ['saas', 'ecommerce', 'agency', 'corporate'];
  const validStyles: StylePreference[] = ['minimalist', 'modern', 'bold', 'elegant', 'playful'];
  const validIndustries: Industry[] = ['tech', 'healthcare', 'education', 'retail'];

  if (!validCategories.includes(criteria.businessCategory)) {
    errors.push(`Invalid business category: ${criteria.businessCategory}`);
  }

  if (!validStyles.includes(criteria.stylePreference)) {
    errors.push(`Invalid style preference: ${criteria.stylePreference}`);
  }

  if (!validIndustries.includes(criteria.industry)) {
    errors.push(`Invalid industry: ${criteria.industry}`);
  }

  return errors;
}

/**
 * Get template selection statistics
 */
export function getTemplateStats() {
  const stats = {
    totalTemplates: templateRegistry.length,
    byCategory: {} as Record<BusinessCategory, number>,
    byStyle: {} as Record<StylePreference, number>,
    byIndustry: {} as Record<Industry, number>
  };

  templateRegistry.forEach(template => {
    // Count by category
    stats.byCategory[template.category] = (stats.byCategory[template.category] || 0) + 1;
    
    // Count by style
    stats.byStyle[template.style] = (stats.byStyle[template.style] || 0) + 1;
    
    // Count by industry
    template.industry.forEach(industry => {
      stats.byIndustry[industry] = (stats.byIndustry[industry] || 0) + 1;
    });
  });

  return stats;
}