/**
 * Minimalist Landing Page Template Types
 * 
 * These types define the structure for creating minimalist landing pages
 * that follow clean design principles with maximum impact through simplicity.
 */

export interface MinimalistHeaderData {
  logo: string
  contactCta: string
  contactLink: string
  breadcrumbs?: Array<{ label: string; href: string }>
}

export interface MinimalistHeroData {
  tagline?: string
  targetKeyword: string
  headline: string
  subheading: string
  primaryCtaText?: string
  primaryCtaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export interface MinimalistCredibilityData {
  clientLogos: string[]
  metric: {
    value: string
    description: string
  }
}

export interface MinimalistServiceItem {
  title: string
  outcomeDescription: string
  workLink: string
}

export interface MinimalistServicesData {
  title: string
  subtitle?: string
  items: MinimalistServiceItem[]
}

export interface MinimalistCaseStudyData {
  metric: string
  metricDescription: string
  clientQuote: string
  clientName: string
  clientTitle: string
  caseStudyLink: string
}

export interface MinimalistWorkflowStep {
  stepNumber: number
  title: string
  description: string
}

export interface MinimalistHowWeWorkData {
  title: string
  subtitle?: string
  steps: MinimalistWorkflowStep[]
}

export interface MinimalistTestimonialItem {
  quote: string
  clientName: string
  clientTitle: string
  clientCompany: string
  clientImage?: string
  videoUrl?: string
  rating?: number
}

export interface MinimalistTestimonialsData {
  title: string
  subtitle?: string
  items: MinimalistTestimonialItem[]
}

export interface MinimalistPricingPackage {
  name: string
  priceRange: string
  description: string
  features: string[]
  ctaText: string
  ctaLink: string
}

export interface MinimalistCustomPricingOption {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

export interface MinimalistPricingData {
  title: string
  subtitle?: string
  showTransparentPricing: boolean
  packages?: MinimalistPricingPackage[]
  customOption?: MinimalistCustomPricingOption
}

export interface MinimalistFormField {
  name: string
  label: string
  type: string
  required: boolean
}

export interface MinimalistLeadCaptureData {
  title: string
  subtitle?: string
  formType: 'form' | 'calendar'
  nextAvailability?: string
  formFields?: MinimalistFormField[]
  calendarEmbedUrl?: string
  submitText?: string
}

export interface MinimalistContactInfo {
  address?: string
  phone?: string
  email?: string
}

export interface MinimalistSitemapLink {
  label: string
  href: string
}

export interface MinimalistSocialLink {
  platform: string
  url: string
}

export interface MinimalistFooterData {
  companyName: string
  tagline?: string
  contactInfo: MinimalistContactInfo
  sitemapLinks: MinimalistSitemapLink[]
  socialLinks?: MinimalistSocialLink[]
}

export interface MinimalistLandingPageData {
  header: MinimalistHeaderData
  hero: MinimalistHeroData
  credibility: MinimalistCredibilityData
  services: MinimalistServicesData
  caseStudy: MinimalistCaseStudyData
  howWeWork: MinimalistHowWeWorkData
  testimonials: MinimalistTestimonialsData
  pricing: MinimalistPricingData
  leadCapture: MinimalistLeadCaptureData
  footer: MinimalistFooterData
}

export interface MinimalistLandingPageTemplateProps {
  data: MinimalistLandingPageData
  className?: string
}

// Utility types for partial updates
export type PartialMinimalistLandingPageData = Partial<MinimalistLandingPageData>
export type MinimalistHeroUpdate = Partial<MinimalistHeroData>
export type MinimalistServicesUpdate = Partial<MinimalistServicesData>
export type MinimalistPricingUpdate = Partial<MinimalistPricingData>

// Pre-built data templates for common industries
export interface MinimalistIndustryTemplate {
  name: string
  description: string
  data: MinimalistLandingPageData
}

// Template customization options specific to minimalist design
export interface MinimalistTemplateCustomization {
  spacing?: 'compact' | 'standard' | 'generous'
  typography?: 'light' | 'regular' | 'mixed'
  animations?: boolean
  borders?: 'none' | 'subtle' | 'defined'
}

// Analytics and tracking
export interface MinimalistTrackingConfig {
  googleAnalytics?: string
  simpleAnalytics?: string
  customEvents?: Record<string, unknown>
}

// A/B testing support
export interface MinimalistABTestVariant {
  name: string
  data: Partial<MinimalistLandingPageData>
  weight: number
}

export interface MinimalistABTestConfig {
  testName: string
  variants: MinimalistABTestVariant[]
  trafficSplit: number
}

// SEO optimization for minimalist approach
export interface MinimalistSEOData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  structuredData?: Record<string, unknown>
}

// Complete page configuration
export interface MinimalistLandingPageConfig {
  data: MinimalistLandingPageData
  customization?: MinimalistTemplateCustomization
  tracking?: MinimalistTrackingConfig
  seo?: MinimalistSEOData
  abTest?: MinimalistABTestConfig
}

// Design system tokens specific to minimalist aesthetic
export interface MinimalistDesignTokens {
  colors: {
    background: string
    foreground: string
    accent: string
    border: string
  }
  typography: {
    fontFamily: string
    fontWeights: {
      light: number
      regular: number
      bold: number
    }
    sizes: Record<string, string>
  }
  spacing: Record<string, string>
  borders: {
    radius: string
    width: string
  }
}