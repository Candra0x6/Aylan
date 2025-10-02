import { ReactNode } from 'react'

// Base interface for all elegant e-commerce landing page components
export interface ElegantBaseProps {
  className?: string
  'data-testid'?: string
}

// Header/Navigation Types
export interface ElegantHeaderData {
  logo: string
  contactCta: string
  contactLink: string
  breadcrumbs?: Array<{
    label: string
    href: string
  }>
  logoImage?: string
}

// Hero Section Types
export interface ElegantHeroData {
  badge?: string
  targetKeyword: string
  headline: string
  subheading: string
  primaryCtaText?: string
  primaryCtaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  backgroundImage?: string
  overlayOpacity?: number
}

// Credibility Strip Types
export interface ElegantCredibilityData {
  clientLogos: Array<{
    name: string
    image?: string
  }>
  metric: {
    value: string
    description: string
    icon?: ReactNode
  }
  featuredInText?: string
}

// Services Section Types
export interface ElegantServiceItem {
  title: string
  outcomeDescription: string
  workLink: string
  icon?: ReactNode
  image?: string
  price?: string
}

export interface ElegantServicesData {
  title: string
  subtitle?: string
  items: ElegantServiceItem[]
}

// Case Study Types
export interface ElegantCaseStudyData {
  metric: string
  metricDescription: string
  clientQuote: string
  clientName: string
  clientTitle: string
  clientCompany?: string
  caseStudyLink: string
  clientImage?: string
  backgroundImage?: string
}

// How We Work Types
export interface ElegantWorkStep {
  stepNumber: number
  title: string
  description: string
  icon?: ReactNode
  image?: string
}

export interface ElegantHowWeWorkData {
  title: string
  subtitle?: string
  steps: ElegantWorkStep[]
}

// Testimonials Types
export interface ElegantTestimonialItem {
  quote: string
  clientName: string
  clientTitle: string
  clientCompany: string
  clientImage?: string
  videoUrl?: string
  rating?: number
}

export interface ElegantTestimonialsData {
  title: string
  subtitle?: string
  items: ElegantTestimonialItem[]
}

// Pricing Types
export interface ElegantPricingPackage {
  name: string
  priceRange: string
  description: string
  features: string[]
  ctaText: string
  ctaLink: string
  popular?: boolean
  icon?: ReactNode
}

export interface ElegantCustomPricingOption {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

export interface ElegantPricingData {
  title: string
  subtitle?: string
  showTransparentPricing: boolean
  packages?: ElegantPricingPackage[]
  customOption?: ElegantCustomPricingOption
}

// Lead Capture Types
export interface ElegantFormField {
  name: string
  label: string
  type: string
  required: boolean
  placeholder?: string
}

export interface ElegantLeadCaptureData {
  title: string
  subtitle?: string
  formType: 'form' | 'calendar'
  nextAvailability?: string
  formFields?: ElegantFormField[]
  calendarEmbedUrl?: string
  submitText?: string
  backgroundImage?: string
}

// Footer Types
export interface ElegantSocialLink {
  platform: string
  url: string
  icon?: ReactNode
}

export interface ElegantFooterData {
  companyName: string
  tagline?: string
  contactInfo: {
    address?: string
    phone?: string
    email?: string
  }
  sitemapLinks: Array<{
    label: string
    href: string
  }>
  socialLinks?: ElegantSocialLink[]
  logoImage?: string
}

// Main Landing Page Data Interface
export interface ElegantLandingPageData {
  header: ElegantHeaderData
  hero: ElegantHeroData
  credibility: ElegantCredibilityData
  services: ElegantServicesData
  caseStudy: ElegantCaseStudyData
  howWeWork: ElegantHowWeWorkData
  testimonials: ElegantTestimonialsData
  pricing: ElegantPricingData
  leadCapture: ElegantLeadCaptureData
  footer: ElegantFooterData
}

// Component Props Interface
export interface ElegantLandingPageTemplateProps extends ElegantBaseProps {
  data: ElegantLandingPageData
}

// Responsive Breakpoint Types
export interface ElegantResponsiveProps {
  mobile?: unknown
  tablet?: unknown
  desktop?: unknown
}

// Utility Types for Content Management
export interface ElegantContentSection {
  id: string
  name: string
  enabled: boolean
  order: number
  customizations?: Record<string, unknown>
}

// Meta Information Types for SEO and Analytics
export interface ElegantLandingPageMeta {
  title: string
  description: string
  keywords: string[]
  targetKeyword: string
  ogImage?: string
  canonicalUrl?: string
  schema?: Record<string, unknown>
}

// Analytics and Tracking Types
export interface ElegantAnalyticsConfig {
  googleAnalyticsId?: string
  facebookPixelId?: string
  hotjarId?: string
  customEvents?: Array<{
    name: string
    trigger: string
    properties?: Record<string, unknown>
  }>
}

// A/B Testing Types
export interface ElegantABTestVariant {
  id: string
  name: string
  weight: number
  overrides: Partial<ElegantLandingPageData>
}

export interface ElegantABTestConfig {
  testId: string
  variants: ElegantABTestVariant[]
  defaultVariant: string
}

// Form Validation Types
export interface ElegantFormValidation {
  fieldName: string
  rules: Array<{
    type: 'required' | 'email' | 'phone' | 'minLength' | 'maxLength' | 'pattern'
    value?: unknown
    message: string
  }>
}

// Theme Customization Types
export interface ElegantThemeCustomization {
  colors?: {
    background?: string
    foreground?: string
    accent?: string
    muted?: string
    border?: string
  }
  fonts?: {
    serif?: string
    sans?: string
    mono?: string
  }
  borderRadius?: string
  spacing?: {
    section?: string
    container?: string
  }
}

// Complete Page Configuration
export interface ElegantLandingPageConfig {
  data: ElegantLandingPageData
  meta: ElegantLandingPageMeta
  theme?: ElegantThemeCustomization
  analytics?: ElegantAnalyticsConfig
  abTest?: ElegantABTestConfig
  formValidation?: ElegantFormValidation[]
  enabledSections?: string[]
  customCss?: string
}

// Export utility type for props with refs
export type ElegantPropsWithRef<T> = T & {
  ref?: React.Ref<HTMLDivElement>
}

// Template Generation Types (for dynamic content)
export interface ElegantTemplateGenerator {
  generateFromKeyword: (keyword: string, industry: string) => Promise<ElegantLandingPageData>
  generateVariations: (baseData: ElegantLandingPageData, count: number) => ElegantLandingPageData[]
  optimizeForConversion: (data: ElegantLandingPageData) => ElegantLandingPageData
}

// Integration Types
export interface ElegantIntegrationConfig {
  calendar?: {
    provider: 'calendly' | 'acuity' | 'calendar.com'
    embedUrl: string
    redirectUrl?: string
  }
  crm?: {
    provider: 'hubspot' | 'salesforce' | 'pipedrive'
    apiKey: string
    endpoint: string
  }
  email?: {
    provider: 'mailchimp' | 'convertkit' | 'activecampaign'
    listId: string
    apiKey: string
  }
  analytics?: ElegantAnalyticsConfig
}

// Performance Optimization Types
export interface ElegantPerformanceConfig {
  lazyLoadImages: boolean
  prefetchLinks: boolean
  optimizeImages: boolean
  minifyAssets: boolean
  enableCdn: boolean
  cacheStrategy: 'static' | 'dynamic' | 'hybrid'
}

// Accessibility Configuration
export interface ElegantAccessibilityConfig {
  enableSkipLinks: boolean
  focusManagement: boolean
  screenReaderOptimized: boolean
  highContrastMode: boolean
  reducedMotion: boolean
  keyboardNavigation: boolean
}

// Multi-language Support
export interface ElegantI18nConfig {
  defaultLocale: string
  supportedLocales: string[]
  translations: Record<string, Record<string, string>>
  rtlSupport: boolean
}

// E-commerce Specific Types
export interface ElegantProductData {
  id: string
  name: string
  description: string
  price: number
  compareAtPrice?: number
  images: string[]
  category: string
  inStock: boolean
  featured?: boolean
}

export interface ElegantCollectionData {
  id: string
  name: string
  description: string
  image?: string
  products: ElegantProductData[]
}

export interface ElegantEcommerceConfig {
  products: ElegantProductData[]
  collections: ElegantCollectionData[]
  currency: string
  paymentMethods: string[]
  shippingOptions: Array<{
    name: string
    price: number
    estimatedDays: string
  }>
}

// Complete Template System Configuration
export interface ElegantTemplateSystemConfig {
  page: ElegantLandingPageConfig
  ecommerce?: ElegantEcommerceConfig
  integrations?: ElegantIntegrationConfig
  performance?: ElegantPerformanceConfig
  accessibility?: ElegantAccessibilityConfig
  i18n?: ElegantI18nConfig
}

// Color Scheme Types
export type ElegantColorScheme = 'dark' | 'light' | 'auto'

// Animation Types
export type ElegantAnimationType = 'fade' | 'slide' | 'scale' | 'none'

// Layout Types
export type ElegantLayoutType = 'standard' | 'wide' | 'narrow' | 'full-width'
