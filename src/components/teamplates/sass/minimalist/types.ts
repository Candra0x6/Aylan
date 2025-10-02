// Minimalist SaaS Landing Page Template - Type Definitions

import { ReactNode, ComponentType } from 'react'
import { LucideIcon } from 'lucide-react'

// Breadcrumb item for navigation
export interface MinimalistBreadcrumb {
  label: string
  href: string
}

// Navigation item
export interface MinimalistNavigationItem {
  label: string
  href: string
}

// Contact CTA button
export interface MinimalistContactCta {
  label: string
  href: string
}

// Header section data
export interface MinimalistHeaderData {
  logo: string
  navigation: MinimalistNavigationItem[]
  breadcrumbs?: MinimalistBreadcrumb[]
  contactCta: MinimalistContactCta
}

// CTA button interface
export interface MinimalistCta {
  label: string
  href: string
}

// Hero section data
export interface MinimalistHeroData {
  badge?: string
  headline: string
  targetKeyword: string
  subheadline: string
  primaryCta: MinimalistCta
  secondaryCta?: MinimalistCta
}

// Client logo for credibility section
export interface MinimalistClientLogo {
  src: string
  alt: string
}

// Credibility section data
export interface MinimalistCredibilityData {
  metric: string
  clientLogos: MinimalistClientLogo[]
}

// Service item
export interface MinimalistServiceItem {
  title: string
  outcome: string
  icon: LucideIcon
  link: string
}

// Services section data
export interface MinimalistServicesData {
  title: string
  subtitle: string
  services: MinimalistServiceItem[]
}

// Case study section data
export interface MinimalistCaseStudyData {
  title: string
  metric: string
  metricDescription: string
  clientQuote: string
  clientName: string
  clientTitle: string
  caseStudyLink: string
  image: string
  imageAlt: string
}

// Work process step
export interface MinimalistWorkStep {
  title: string
  description: string
  visual?: LucideIcon
}

// How we work section data
export interface MinimalistHowWeWorkData {
  title: string
  subtitle: string
  steps: MinimalistWorkStep[]
}

// Individual testimonial
export interface MinimalistTestimonialItem {
  quote: string
  name: string
  title: string
  company?: string
  photo?: string
  logo?: string
  rating: number
}

// Video testimonial
export interface MinimalistVideoTestimonial {
  thumbnail: string
  videoUrl: string
}

// Testimonials section data
export interface MinimalistTestimonialsData {
  title: string
  subtitle: string
  testimonials: MinimalistTestimonialItem[]
  videoTestimonial?: MinimalistVideoTestimonial
}

// Pricing package
export interface MinimalistPricingPackage {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  ctaText: string
  ctaLink: string
  featured?: boolean
}

// Custom pricing option
export interface MinimalistCustomOption {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

// Pricing section data
export interface MinimalistPricingData {
  title: string
  subtitle: string
  packages: MinimalistPricingPackage[]
  customOption?: MinimalistCustomOption
}

// Lead capture section data
export interface MinimalistLeadCaptureData {
  title: string
  subtitle: string
  formTitle: string
  formCta: string
  nextAvailability: string
  calendarLink: string
  email: string
  phone: string
  address?: string
}

// Footer link item
export interface MinimalistFooterLink {
  label: string
  href: string
}

// Footer link section
export interface MinimalistFooterSection {
  title: string
  items: MinimalistFooterLink[]
}

// Footer data
export interface MinimalistFooterData {
  logo: string
  description: string
  email: string
  phone: string
  address?: string
  links: MinimalistFooterSection[]
  privacy: MinimalistFooterLink
  terms: MinimalistFooterLink
  copyright: string
}

// Complete landing page data structure
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

// Main template props
export interface MinimalistLandingPageTemplateProps {
  data: MinimalistLandingPageData
}

// Utility types for component props
export type MinimalistComponentProps<T> = {
  data: T
}

// Icon component type for dynamic icons
export type IconComponent = ComponentType<{ className?: string }>

// Animation variants for different effects
export type MinimalistAnimationVariant = 
  | 'fade-in'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'scale'

// Theme variants for minimalist design system
export type MinimalistThemeVariant = 
  | 'light'
  | 'minimal'
  | 'clean'

// Size variants for components
export type MinimalistSizeVariant = 
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'

// Color variants following minimalist palette
export type MinimalistColorVariant = 
  | 'primary'      // muted teal
  | 'secondary'    // light gray
  | 'accent'       // very light teal-tinted gray
  | 'muted'        // subtle background
  | 'foreground'   // text color
  | 'background'   // main background

// Form field configuration
export interface MinimalistFormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  required?: boolean
  placeholder?: string
  options?: string[]
}

// Contact form configuration
export interface MinimalistContactFormConfig {
  fields: MinimalistFormField[]
  submitText: string
  successMessage: string
  errorMessage: string
}

// Extended lead capture with form configuration
export interface MinimalistExtendedLeadCaptureData extends MinimalistLeadCaptureData {
  formConfig?: MinimalistContactFormConfig
}

// SEO and meta data
export interface MinimalistSeoData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonicalUrl?: string
}

// Analytics and tracking
export interface MinimalistAnalyticsData {
  googleAnalyticsId?: string
  mixpanelId?: string
  hotjarId?: string
  customEvents?: Record<string, string | number | boolean>[]
}

// Complete page configuration with additional features
export interface MinimalistPageConfig {
  seo: MinimalistSeoData
  analytics?: MinimalistAnalyticsData
  theme?: MinimalistThemeVariant
  animations?: boolean
}

// Full template props with configuration
export interface MinimalistFullTemplateProps {
  data: MinimalistLandingPageData
  config?: MinimalistPageConfig
  className?: string
  children?: ReactNode
}

// Component variants for different use cases
export type MinimalistComponentVariant = 
  | 'default'
  | 'compact'
  | 'expanded'
  | 'minimal'
  | 'clean'

// Responsive breakpoint values
export type MinimalistBreakpoint = 
  | 'mobile'
  | 'tablet'
  | 'desktop'
  | 'wide'

// Layout configuration
export interface MinimalistLayoutConfig {
  maxWidth?: string
  padding?: string
  spacing?: MinimalistSizeVariant
  breakpoint?: MinimalistBreakpoint
}

// Section visibility configuration
export interface MinimalistSectionConfig {
  header?: boolean
  hero?: boolean
  credibility?: boolean
  services?: boolean
  caseStudy?: boolean
  howWeWork?: boolean
  testimonials?: boolean
  pricing?: boolean
  leadCapture?: boolean
  footer?: boolean
}

// Advanced template configuration
export interface MinimalistAdvancedConfig extends MinimalistPageConfig {
  layout?: MinimalistLayoutConfig
  sections?: MinimalistSectionConfig
  customCss?: string
  customJs?: string
}

// Complete advanced template props
export interface MinimalistAdvancedTemplateProps {
  data: MinimalistLandingPageData
  config?: MinimalistAdvancedConfig
  onFormSubmit?: (formData: FormData) => void
  onAnalyticsEvent?: (event: string, data?: Record<string, string | number | boolean>) => void
  className?: string
  children?: ReactNode
}

// Grid system configuration (matching minimalist aesthetic)
export interface MinimalistGridConfig {
  columns: number
  gap: MinimalistSizeVariant
  responsive?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
}

// Visual element configuration for minimalist design
export interface MinimalistVisualConfig {
  showGridElements?: boolean
  accentColor?: MinimalistColorVariant
  borderRadius?: MinimalistSizeVariant
  shadows?: 'none' | 'subtle' | 'medium'
}

// Complete design system configuration
export interface MinimalistDesignSystemConfig {
  colors?: Record<MinimalistColorVariant, string>
  typography?: {
    fontFamily?: string
    fontSize?: Record<MinimalistSizeVariant, string>
    lineHeight?: Record<MinimalistSizeVariant, string>
  }
  spacing?: Record<MinimalistSizeVariant, string>
  borders?: {
    width?: string
    radius?: Record<MinimalistSizeVariant, string>
  }
  grid?: MinimalistGridConfig
  visuals?: MinimalistVisualConfig
}

// Master template configuration combining all options
export interface MinimalistMasterTemplateProps {
  data: MinimalistLandingPageData
  config?: MinimalistAdvancedConfig
  designSystem?: MinimalistDesignSystemConfig
  onFormSubmit?: (formData: FormData) => void
  onAnalyticsEvent?: (event: string, data?: Record<string, string | number | boolean>) => void
  className?: string
  children?: ReactNode
}

export default MinimalistLandingPageTemplateProps