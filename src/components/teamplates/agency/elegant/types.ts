/**
 * Dynamic Landing Page Template Types
 * 
 * These types define the structure for creating dynamic landing pages
 * that can be easily customized with different content while maintaining
 * consistent styling and layout.
 */

export interface HeaderData {
  logo: string
  contactCta: string
  contactLink: string
  breadcrumbs?: Array<{ label: string; href: string }>
}

export interface LandingPageData {
  // Header/Navigation
  header: {
    logo: string
    contactCta: string
    contactLink: string
    breadcrumbs?: Array<{ label: string; href: string }>
  }
  
  // Hero Section
  hero: {
    targetKeyword: string
    headline: string
    subheading: string
    primaryCtaText?: string
    primaryCtaLink?: string
    backgroundImage?: string
    badgeText?: string
  }
  
  // Credibility Strip
  credibility: {
    clientLogos: string[]
    metric: {
      value: string
      description: string
    }
  }
  
  // Services Section
  services: {
    title: string
    subtitle?: string
    items: Array<{
      title: string
      outcomeDescription: string
      workLink: string
    }>
  }
  
  // Featured Case Study
  caseStudy: {
    metric: string
    metricDescription: string
    clientQuote: string
    clientName: string
    clientTitle: string
    caseStudyLink: string
    backgroundImage?: string
  }
  
  // How We Work Section
  howWeWork: {
    title: string
    subtitle?: string
    steps: Array<{
      stepNumber: number
      title: string
      description: string
      icon?: React.ReactNode
    }>
  }
  
  // Testimonials Section
  testimonials: {
    title: string
    subtitle?: string
    items: Array<{
      quote: string
      clientName: string
      clientTitle: string
      clientCompany: string
      clientImage?: string
      videoUrl?: string
      rating?: number
    }>
  }
  
  // Pricing Section
  pricing: {
    title: string
    subtitle?: string
    showTransparentPricing: boolean
    packages?: Array<{
      name: string
      priceRange: string
      description: string
      features: string[]
      ctaText: string
      ctaLink: string
    }>
    customOption?: {
      title: string
      description: string
      ctaText: string
      ctaLink: string
    }
  }
  
  // Lead Capture Section
  leadCapture: {
    title: string
    subtitle?: string
    formType: 'form' | 'calendar'
    nextAvailability?: string
    formFields?: Array<{
      name: string
      label: string
      type: string
      required: boolean
    }>
    calendarEmbedUrl?: string
    submitText?: string
  }
  
  // Footer
  footer: {
    companyName: string
    contactInfo: {
      address?: string
      phone?: string
      email?: string
    }
    sitemapLinks: Array<{
      label: string
      href: string
    }>
    socialLinks?: Array<{
      platform: string
      url: string
    }>
  }
}

export interface HeroData {
  targetKeyword: string
  headline: string
  subheading: string
  primaryCtaText?: string
  primaryCtaLink?: string
  backgroundImage?: string
  badgeText?: string
}

export interface CredibilityData {
  clientLogos: string[]
  metric: {
    value: string
    description: string
  }
}

export interface ServiceItem {
  title: string
  outcomeDescription: string
  workLink: string
}

export interface ServicesData {
  title: string
  subtitle?: string
  items: ServiceItem[]
}

export interface CaseStudyData {
  metric: string
  metricDescription: string
  clientQuote: string
  clientName: string
  clientTitle: string
  caseStudyLink: string
  backgroundImage?: string
}

export interface WorkflowStep {
  stepNumber: number
  title: string
  description: string
  icon?: React.ReactNode
}

export interface HowWeWorkData {
  title: string
  subtitle?: string
  steps: WorkflowStep[]
}

export interface TestimonialItem {
  quote: string
  clientName: string
  clientTitle: string
  clientCompany: string
  clientImage?: string
  videoUrl?: string
  rating?: number
}

export interface TestimonialsData {
  title: string
  subtitle?: string
  items: TestimonialItem[]
}

export interface PricingPackage {
  name: string
  priceRange: string
  description: string
  features: string[]
  ctaText: string
  ctaLink: string
}

export interface CustomPricingOption {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

export interface PricingData {
  title: string
  subtitle?: string
  showTransparentPricing: boolean
  packages?: PricingPackage[]
  customOption?: CustomPricingOption
}

export interface FormField {
  name: string
  label: string
  type: string
  required: boolean
}

export interface LeadCaptureData {
  title: string
  subtitle?: string
  formType: 'form' | 'calendar'
  nextAvailability?: string
  formFields?: FormField[]
  calendarEmbedUrl?: string
  submitText?: string
}

export interface ContactInfo {
  address?: string
  phone?: string
  email?: string
}

export interface SitemapLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  url: string
}

export interface FooterData {
  companyName: string
  contactInfo: ContactInfo
  sitemapLinks: SitemapLink[]
  socialLinks?: SocialLink[]
}

export interface LandingPageData {
  header: HeaderData
  hero: HeroData
  credibility: CredibilityData
  services: ServicesData
  caseStudy: CaseStudyData
  howWeWork: HowWeWorkData
  testimonials: TestimonialsData
  pricing: PricingData
  leadCapture: LeadCaptureData
  footer: FooterData
}

export interface DynamicLandingPageTemplateProps {
  data: LandingPageData
  className?: string
}

// Utility types for partial updates
export type PartialLandingPageData = Partial<LandingPageData>
export type HeroUpdate = Partial<HeroData>
export type ServicesUpdate = Partial<ServicesData>
export type PricingUpdate = Partial<PricingData>

// Pre-built data templates for common industries
export interface IndustryTemplate {
  name: string
  description: string
  data: LandingPageData
}

// Template customization options
export interface TemplateCustomization {
  colorScheme?: 'elegant' | 'modern' | 'minimalist' | 'bold'
  typography?: 'serif' | 'sans-serif' | 'mixed'
  layout?: 'compact' | 'spacious'
  animations?: boolean
}

// Analytics and tracking
export interface TrackingConfig {
  googleAnalytics?: string
  facebookPixel?: string
  linkedInInsight?: string
  customEvents?: Record<string, unknown>
}

// A/B testing support
export interface ABTestVariant {
  name: string
  data: Partial<LandingPageData>
  weight: number
}

export interface ABTestConfig {
  testName: string
  variants: ABTestVariant[]
  trafficSplit: number
}

// SEO optimization
export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  structuredData?: Record<string, unknown>
}

// Complete page configuration
export interface LandingPageConfig {
  data: LandingPageData
  customization?: TemplateCustomization
  tracking?: TrackingConfig
  seo?: SEOData
  abTest?: ABTestConfig
}