/**
 * Template metadata registry
 * Maps available templates to their business categories, styles, and features
 */

import type { TemplateMetadata } from '@/types/template';

export const templateRegistry: TemplateMetadata[] = [
  // SaaS Templates
  {
    id: 'saas-minimalist',
    name: 'SaaS Minimalist',
    category: 'saas',
    style: 'minimalist',
    industry: ['tech'],
    description: 'Clean, focused design perfect for SaaS products with emphasis on features and pricing',
    features: ['Hero section', 'Feature highlights', 'Pricing table', 'Testimonials', 'CTA sections'],
    path: '/templates/sass/minimalist',
    compatibility: {
      mobile: true,
      desktop: true,
      accessibility: true
    }
  },
  {
    id: 'saas-modern',
    name: 'SaaS Modern',
    category: 'saas',
    style: 'modern',
    industry: ['tech', 'healthcare'],
    description: 'Contemporary SaaS design with interactive elements and API documentation',
    features: ['Animated hero', 'API docs', 'Integration diagram', 'Pricing tiers', 'Developer-focused'],
    path: '/templates/sass/modern',
    compatibility: {
      mobile: true,
      desktop: true,
      accessibility: true
    }
  },

  // E-commerce Templates
  {
    id: 'ecommerce-elegant',
    name: 'E-commerce Elegant',
    category: 'ecommerce',
    style: 'elegant',
    industry: ['retail'],
    description: 'Sophisticated e-commerce design focusing on product presentation and brand trust',
    features: ['Product showcase', 'Brand story', 'Trust indicators', 'Customer reviews', 'Premium feel'],
    path: '/templates/e-commerce/elegant',
    compatibility: {
      mobile: true,
      desktop: true,
      accessibility: true
    }
  },
  {
    id: 'ecommerce-modern',
    name: 'E-commerce Modern',
    category: 'ecommerce',
    style: 'modern',
    industry: ['retail', 'tech'],
    description: 'Modern e-commerce with advanced filtering and product discovery features',
    features: ['Hero carousel', 'Product filters', 'Rating system', 'Modern header', 'Product cards'],
    path: '/templates/e-commerce/modern',
    compatibility: {
      mobile: true,
      desktop: true,
      accessibility: true
    }
  },

  // Agency Templates
  {
    id: 'agency-elegant',
    name: 'Agency Elegant',
    category: 'agency',
    style: 'elegant',
    industry: ['tech', 'healthcare', 'education'],
    description: 'Professional agency template with case studies and client testimonials',
    features: ['Case studies', 'Client logos', 'Services showcase', 'Team profiles', 'Testimonial slider'],
    path: '/templates/agency/elegant',
    compatibility: {
      mobile: true,
      desktop: true,
      accessibility: true
    }
  },
  {
    id: 'agency-minimalist',
    name: 'Agency Minimalist',
    category: 'agency',
    style: 'minimalist',
    industry: ['tech', 'education'],
    description: 'Clean agency design focusing on portfolio and services with minimal distractions',
    features: ['Portfolio grid', 'Services list', 'Client logos', 'Contact form', 'Minimal navigation'],
    path: '/templates/agency/minimalist',
    compatibility: {
      mobile: true,
      desktop: true,
      accessibility: true
    }
  },

  // Corporate Templates
  {
    id: 'corporate-playful',
    name: 'Corporate Playful',
    category: 'corporate',
    style: 'playful',
    industry: ['education', 'healthcare'],
    description: 'Engaging corporate template with interactive elements and community focus',
    features: ['Interactive polls', 'Community stories', 'Milestone tracking', 'Mascot elements', 'Engagement tools'],
    path: '/templates/corporate/playful',
    compatibility: {
      mobile: true,
      desktop: true,
      accessibility: true
    }
  }
];

/**
 * Get all available templates
 */
export const getAllTemplates = (): TemplateMetadata[] => {
  return templateRegistry;
};

/**
 * Get templates by business category
 */
export const getTemplatesByCategory = (category: string): TemplateMetadata[] => {
  return templateRegistry.filter(template => template.category === category);
};

/**
 * Get templates by style preference
 */
export const getTemplatesByStyle = (style: string): TemplateMetadata[] => {
  return templateRegistry.filter(template => template.style === style);
};

/**
 * Get template by ID
 */
export const getTemplateById = (id: string): TemplateMetadata | undefined => {
  return templateRegistry.find(template => template.id === id);
};