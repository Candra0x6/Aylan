import { ReactNode } from 'react'

// Base interface for all playful corporate landing page components
export interface PlayfulBaseProps {
  className?: string
  'data-testid'?: string
}

// Header/Navigation Types
export interface PlayfulHeaderData {
  logo: string
  contactCta: string
  contactLink: string
  breadcrumbs?: Array<{
    label: string
    href: string
  }>
  mascotIcon?: ReactNode
}

// Hero Section Types
export interface PlayfulHeroData {
  badge?: string
  targetKeyword: string
  headline: string
  subheading: string
  primaryCtaText?: string
  primaryCtaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  mascotImage?: string
  decorativeElements?: ReactNode[]
}

// Credibility Strip Types
export interface PlayfulCredibilityData {
  clientLogos: string[]
  metric: {
    value: string
    description: string
    icon?: ReactNode
  }
  communityCount?: string
}

// Services Section Types
export interface PlayfulServiceItem {
  title: string
  outcomeDescription: string
  workLink: string
  icon?: ReactNode
  color?: 'primary' | 'accent' | 'secondary'
}

export interface PlayfulServicesData {
  title: string
  subtitle?: string
  items: PlayfulServiceItem[]
}

// Case Study Types
export interface PlayfulCaseStudyData {
  metric: string
  metricDescription: string
  clientQuote: string
  clientName: string
  clientTitle: string
  clientCompany?: string
  caseStudyLink: string
  clientImage?: string
  backgroundColor?: 'primary' | 'accent' | 'secondary'
}

// How We Work Types
export interface PlayfulWorkStep {
  stepNumber: number
  title: string
  description: string
  icon?: ReactNode
  color?: 'primary' | 'accent' | 'secondary'
}

export interface PlayfulHowWeWorkData {
  title: string
  subtitle?: string
  steps: PlayfulWorkStep[]
}

// Testimonials Types
export interface PlayfulTestimonialItem {
  quote: string
  clientName: string
  clientTitle: string
  clientCompany: string
  clientImage?: string
  videoUrl?: string
  rating?: number
  emoji?: string
}

export interface PlayfulTestimonialsData {
  title: string
  subtitle?: string
  items: PlayfulTestimonialItem[]
}

// Pricing Types
export interface PlayfulPricingPackage {
  name: string
  priceRange: string
  description: string
  features: string[]
  ctaText: string
  ctaLink: string
  popular?: boolean
  color?: 'primary' | 'accent' | 'secondary'
  icon?: ReactNode
}

export interface PlayfulCustomPricingOption {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

export interface PlayfulPricingData {
  title: string
  subtitle?: string
  showTransparentPricing: boolean
  packages?: PlayfulPricingPackage[]
  customOption?: PlayfulCustomPricingOption
}

// Lead Capture Types
export interface PlayfulFormField {
  name: string
  label: string
  type: string
  required: boolean
  placeholder?: string
}

export interface PlayfulLeadCaptureData {
  title: string
  subtitle?: string
  formType: 'form' | 'calendar'
  nextAvailability?: string
  formFields?: PlayfulFormField[]
  calendarEmbedUrl?: string
  submitText?: string
  backgroundColor?: 'primary' | 'accent' | 'secondary'
  decorativeElements?: ReactNode[]
}

// Footer Types
export interface PlayfulSocialLink {
  platform: string
  url: string
  icon?: ReactNode
}

export interface PlayfulFooterData {
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
  socialLinks?: PlayfulSocialLink[]
  mascotIcon?: ReactNode
}

// Main Landing Page Data Interface
export interface PlayfulLandingPageData {
  header: PlayfulHeaderData
  hero: PlayfulHeroData
  credibility: PlayfulCredibilityData
  services: PlayfulServicesData
  caseStudy: PlayfulCaseStudyData
  howWeWork: PlayfulHowWeWorkData
  testimonials: PlayfulTestimonialsData
  pricing: PlayfulPricingData
  leadCapture: PlayfulLeadCaptureData
  footer: PlayfulFooterData
}

// Component Props Interface
export interface PlayfulLandingPageTemplateProps extends PlayfulBaseProps {
  data: PlayfulLandingPageData
}

// Animated Button Props Interface
export interface PlayfulAnimatedButtonProps extends PlayfulBaseProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  bounceOnClick?: boolean
  disabled?: boolean
}

// Color Theme Types
export type PlayfulColorTheme = 'primary' | 'accent' | 'secondary'

// Animation Types
export type PlayfulAnimationType = 'wiggle' | 'bounce-soft' | 'press-bounce' | 'hover-bounce'

// Responsive Breakpoint Types
export interface PlayfulResponsiveProps {
  mobile?: unknown
  tablet?: unknown
  desktop?: unknown
}

// Utility Types for Content Management
export interface PlayfulContentSection {
  id: string
  name: string
  enabled: boolean
  order: number
  customizations?: Record<string, unknown>
}

// Meta Information Types for SEO and Analytics
export interface PlayfulLandingPageMeta {
  title: string
  description: string
  keywords: string[]
  targetKeyword: string
  ogImage?: string
  canonicalUrl?: string
  schema?: Record<string, unknown>
}

// Analytics and Tracking Types
export interface PlayfulAnalyticsConfig {
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
export interface PlayfulABTestVariant {
  id: string
  name: string
  weight: number
  overrides: Partial<PlayfulLandingPageData>
}

export interface PlayfulABTestConfig {
  testId: string
  variants: PlayfulABTestVariant[]
  defaultVariant: string
}

// Form Validation Types
export interface PlayfulFormValidation {
  fieldName: string
  rules: Array<{
    type: 'required' | 'email' | 'phone' | 'minLength' | 'maxLength' | 'pattern'
    value?: unknown
    message: string
  }>
}

// Theme Customization Types
export interface PlayfulThemeCustomization {
  colors?: {
    primary?: string
    accent?: string
    secondary?: string
    background?: string
    foreground?: string
  }
  fonts?: {
    display?: string
    body?: string
    mono?: string
  }
  borderRadius?: string
  animations?: {
    duration?: string
    easing?: string
    disabled?: boolean
  }
}

// Complete Page Configuration
export interface PlayfulLandingPageConfig {
  data: PlayfulLandingPageData
  meta: PlayfulLandingPageMeta
  theme?: PlayfulThemeCustomization
  analytics?: PlayfulAnalyticsConfig
  abTest?: PlayfulABTestConfig
  formValidation?: PlayfulFormValidation[]
  enabledSections?: string[]
  customCss?: string
}

// Export utility type for props with refs
export type PlayfulPropsWithRef<T> = T & {
  ref?: React.Ref<HTMLDivElement>
}

// Template Generation Types (for dynamic content)
export interface PlayfulTemplateGenerator {
  generateFromKeyword: (keyword: string, industry: string) => Promise<PlayfulLandingPageData>
  generateVariations: (baseData: PlayfulLandingPageData, count: number) => PlayfulLandingPageData[]
  optimizeForConversion: (data: PlayfulLandingPageData) => PlayfulLandingPageData
}

// Integration Types
export interface PlayfulIntegrationConfig {
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
  analytics?: PlayfulAnalyticsConfig
}

// Performance Optimization Types
export interface PlayfulPerformanceConfig {
  lazyLoadImages: boolean
  prefetchLinks: boolean
  optimizeImages: boolean
  minifyAssets: boolean
  enableCdn: boolean
  cacheStrategy: 'static' | 'dynamic' | 'hybrid'
}

// Accessibility Configuration
export interface PlayfulAccessibilityConfig {
  enableSkipLinks: boolean
  focusManagement: boolean
  screenReaderOptimized: boolean
  highContrastMode: boolean
  reducedMotion: boolean
  keyboardNavigation: boolean
}

// Multi-language Support
export interface PlayfulI18nConfig {
  defaultLocale: string
  supportedLocales: string[]
  translations: Record<string, Record<string, string>>
  rtlSupport: boolean
}

// Complete Template System Configuration
export interface PlayfulTemplateSystemConfig {
  page: PlayfulLandingPageConfig
  integrations?: PlayfulIntegrationConfig
  performance?: PlayfulPerformanceConfig
  accessibility?: PlayfulAccessibilityConfig
  i18n?: PlayfulI18nConfig
}