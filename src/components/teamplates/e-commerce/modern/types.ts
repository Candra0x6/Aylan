// Modern E-commerce Landing Page Template - Type Definitions

import { ReactNode, ComponentType } from 'react'
import { LucideIcon } from 'lucide-react'

// Breadcrumb item for navigation
export interface ModernBreadcrumb {
  label: string
  href: string
}

// Navigation item
export interface ModernNavigationItem {
  label: string
  href: string
}

// Contact CTA button
export interface ModernContactCta {
  label: string
  href: string
}

// Header section data
export interface ModernHeaderData {
  logo: string
  navigation: ModernNavigationItem[]
  breadcrumbs?: ModernBreadcrumb[]
  contactCta: ModernContactCta
}

// CTA button interface
export interface ModernCta {
  label: string
  href: string
}

// Hero section data
export interface ModernHeroData {
  badge: string
  headline: string
  targetKeyword: string
  subheadline: string
  primaryCta: ModernCta
  secondaryCta?: ModernCta
}

// Client logo for credibility section
export interface ModernClientLogo {
  src: string
  alt: string
}

// Credibility section data
export interface ModernCredibilityData {
  metric: string
  clientLogos: ModernClientLogo[]
}

// Service item
export interface ModernServiceItem {
  title: string
  outcome: string
  icon: LucideIcon
  link: string
}

// Services section data
export interface ModernServicesData {
  title: string
  subtitle: string
  services: ModernServiceItem[]
}

// Case study section data
export interface ModernCaseStudyData {
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
export interface ModernWorkStep {
  title: string
  description: string
  visual?: LucideIcon
}

// How we work section data
export interface ModernHowWeWorkData {
  title: string
  subtitle: string
  steps: ModernWorkStep[]
}

// Individual testimonial
export interface ModernTestimonialItem {
  quote: string
  name: string
  title: string
  company?: string
  photo?: string
  logo?: string
  rating: number
}

// Video testimonial
export interface ModernVideoTestimonial {
  thumbnail: string
  videoUrl: string
}

// Testimonials section data
export interface ModernTestimonialsData {
  title: string
  subtitle: string
  testimonials: ModernTestimonialItem[]
  videoTestimonial?: ModernVideoTestimonial
}

// Pricing package
export interface ModernPricingPackage {
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
export interface ModernCustomOption {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

// Pricing section data
export interface ModernPricingData {
  title: string
  subtitle: string
  packages: ModernPricingPackage[]
  customOption?: ModernCustomOption
}

// Lead capture section data
export interface ModernLeadCaptureData {
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
export interface ModernFooterLink {
  label: string
  href: string
}

// Footer link section
export interface ModernFooterSection {
  title: string
  items: ModernFooterLink[]
}

// Footer data
export interface ModernFooterData {
  logo: string
  description: string
  email: string
  phone: string
  address?: string
  links: ModernFooterSection[]
  privacy: ModernFooterLink
  terms: ModernFooterLink
  copyright: string
}

// Complete landing page data structure
export interface ModernLandingPageData {
  header: ModernHeaderData
  hero: ModernHeroData
  credibility: ModernCredibilityData
  services: ModernServicesData
  caseStudy: ModernCaseStudyData
  howWeWork: ModernHowWeWorkData
  testimonials: ModernTestimonialsData
  pricing: ModernPricingData
  leadCapture: ModernLeadCaptureData
  footer: ModernFooterData
}

// Main template props
export interface ModernLandingPageTemplateProps {
  data: ModernLandingPageData
}

// Utility types for component props
export type ModernComponentProps<T> = {
  data: T
}

// Icon component type for dynamic icons
export type IconComponent = ComponentType<{ className?: string }>

// Animation variants for different effects
export type ModernAnimationVariant = 
  | 'fade-in'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'bounce'
  | 'float'
  | 'scale'

// Theme variants for modern design system
export type ModernThemeVariant = 
  | 'light'
  | 'dark'
  | 'warm'
  | 'cool'

// Size variants for components
export type ModernSizeVariant = 
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'

// Color variants following modern palette
export type ModernColorVariant = 
  | 'primary'      // vibrant orange
  | 'secondary'    // neutral
  | 'accent'       // fresh green
  | 'muted'        // subtle background
  | 'foreground'   // text color
  | 'background'   // main background

// Form field configuration
export interface ModernFormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  required?: boolean
  placeholder?: string
  options?: string[]
}

// Contact form configuration
export interface ModernContactFormConfig {
  fields: ModernFormField[]
  submitText: string
  successMessage: string
  errorMessage: string
}

// Extended lead capture with form configuration
export interface ModernExtendedLeadCaptureData extends ModernLeadCaptureData {
  formConfig?: ModernContactFormConfig
}

// SEO and meta data
export interface ModernSeoData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonicalUrl?: string
}

// Analytics and tracking
export interface ModernAnalyticsData {
  googleAnalyticsId?: string
  facebookPixelId?: string
  linkedInInsightId?: string
  customEvents?: Record<string, string | number | boolean>[]
}

// Complete page configuration with additional features
export interface ModernPageConfig {
  seo: ModernSeoData
  analytics?: ModernAnalyticsData
  theme?: ModernThemeVariant
  animations?: boolean
  darkMode?: boolean
}

// Full template props with configuration
export interface ModernFullTemplateProps {
  data: ModernLandingPageData
  config?: ModernPageConfig
  className?: string
  children?: ReactNode
}

// Component variants for different use cases
export type ModernComponentVariant = 
  | 'default'
  | 'compact'
  | 'expanded'
  | 'minimal'
  | 'detailed'

// Responsive breakpoint values
export type ModernBreakpoint = 
  | 'mobile'
  | 'tablet'
  | 'desktop'
  | 'wide'

// Layout configuration
export interface ModernLayoutConfig {
  maxWidth?: string
  padding?: string
  spacing?: ModernSizeVariant
  breakpoint?: ModernBreakpoint
}

// Section visibility configuration
export interface ModernSectionConfig {
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
export interface ModernAdvancedConfig extends ModernPageConfig {
  layout?: ModernLayoutConfig
  sections?: ModernSectionConfig
  customCss?: string
  customJs?: string
}

// Complete advanced template props
export interface ModernAdvancedTemplateProps {
  data: ModernLandingPageData
  config?: ModernAdvancedConfig
  onFormSubmit?: (formData: FormData) => void
  onAnalyticsEvent?: (event: string, data?: Record<string, string | number | boolean>) => void
  className?: string
  children?: ReactNode
}

export default ModernLandingPageTemplateProps