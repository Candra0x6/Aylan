// Export all TypeScript interfaces and types for the Modern Landing Page Template

export interface ModernHeaderData {
  logo: string
  navigation: Array<{
    label: string
    href: string
  }>
  contactCta: {
    label: string
    href: string
  }
  breadcrumbs?: Array<{
    label: string
    href?: string
  }>
}

export interface ModernHeroData {
  headline: string
  targetKeyword: string
  subheadline: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
    hasPlayIcon?: boolean
  }
  visualElement?: React.ReactNode
}

export interface ModernCredibilityData {
  metric: string
  clientLogos: Array<{
    name: string
    logo?: string
  }>
  description?: string
}

export interface ModernServiceItem {
  title: string
  outcome: string
  icon: React.ComponentType<{ className?: string }>
  workLink: string
}

export interface ModernServicesData {
  title: string
  subtitle?: string
  services: ModernServiceItem[]
}

export interface ModernCaseStudyData {
  metric: string
  metricDescription: string
  quote: string
  clientName: string
  clientRole: string
  clientCompany: string
  image?: string
  fullCaseStudyLink: string
}

export interface ModernWorkStep {
  number: number
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface ModernHowWeWorkData {
  title: string
  subtitle?: string
  steps: ModernWorkStep[]
}

export interface ModernTestimonial {
  quote: string
  clientName: string
  clientRole: string
  clientCompany: string
  photo?: string
  logo?: string
  rating?: number
  videoUrl?: string
}

export interface ModernTestimonialsData {
  title: string
  subtitle?: string
  testimonials: ModernTestimonial[]
}

export interface ModernPricingPlan {
  name: string
  priceRange: string
  description: string
  features: string[]
  cta: {
    label: string
    href: string
  }
  featured?: boolean
}

export interface ModernPricingData {
  title: string
  subtitle?: string
  plans: ModernPricingPlan[]
  customOption: {
    title: string
    description: string
    cta: {
      label: string
      href: string
    }
  }
}

export interface ModernLeadCaptureData {
  title: string
  subtitle?: string
  form: {
    fields: Array<{
      name: string
      label: string
      type: 'text' | 'email' | 'textarea'
      required?: boolean
    }>
    submitLabel: string
    submitHref: string
  }
  calendar?: {
    nextAvailability: string
    bookingUrl: string
  }
  contact: {
    phone?: string
    email?: string
    address?: string
  }
}

export interface ModernFooterData {
  logo: string
  description: string
  contact: {
    phone?: string
    email?: string
    address?: string
  }
  links: {
    [category: string]: Array<{
      label: string
      href: string
    }>
  }
  social?: Array<{
    platform: string
    href: string
    icon: React.ComponentType<{ className?: string }>
  }>
  copyright: string
}

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

// Helper function types
export type CreateModernServiceItem = (
  title: string,
  outcome: string,
  icon: React.ComponentType<{ className?: string }>,
  workLink: string
) => ModernServiceItem

export type CreateModernTestimonial = (
  quote: string,
  clientName: string,
  clientRole: string,
  clientCompany: string,
  photo?: string,
  logo?: string,
  rating?: number,
  videoUrl?: string
) => ModernTestimonial

export type CreateModernWorkStep = (
  number: number,
  title: string,
  description: string,
  icon?: React.ComponentType<{ className?: string }>
) => ModernWorkStep

export type CreateModernPricingPlan = (
  name: string,
  priceRange: string,
  description: string,
  features: string[],
  cta: { label: string; href: string },
  featured?: boolean
) => ModernPricingPlan

// Color system types for the modern design system
export interface ModernColorSystem {
  light: {
    background: string
    foreground: string
    card: string
    cardForeground: string
    popover: string
    popoverForeground: string
    primary: string
    primaryForeground: string
    secondary: string
    secondaryForeground: string
    muted: string
    mutedForeground: string
    accent: string
    accentForeground: string
    destructive: string
    destructiveForeground: string
    border: string
    input: string
    ring: string
  }
  dark: {
    background: string
    foreground: string
    card: string
    cardForeground: string
    popover: string
    popoverForeground: string
    primary: string
    primaryForeground: string
    secondary: string
    secondaryForeground: string
    muted: string
    mutedForeground: string
    accent: string
    accentForeground: string
    destructive: string
    destructiveForeground: string
    border: string
    input: string
    ring: string
  }
}

// Modern design system constants
export const MODERN_COLORS: ModernColorSystem = {
  light: {
    background: 'oklch(0.98 0.005 264)',
    foreground: 'oklch(0.15 0.02 264)',
    card: 'oklch(0.99 0.002 264)',
    cardForeground: 'oklch(0.15 0.02 264)',
    popover: 'oklch(0.99 0.002 264)',
    popoverForeground: 'oklch(0.15 0.02 264)',
    primary: 'oklch(0.6 0.25 264)',
    primaryForeground: 'oklch(0.98 0.005 264)',
    secondary: 'oklch(0.95 0.01 264)',
    secondaryForeground: 'oklch(0.2 0.02 264)',
    muted: 'oklch(0.96 0.008 264)',
    mutedForeground: 'oklch(0.5 0.01 264)',
    accent: 'oklch(0.7 0.2 180)',
    accentForeground: 'oklch(0.98 0.005 264)',
    destructive: 'oklch(0.6 0.25 15)',
    destructiveForeground: 'oklch(0.98 0.005 264)',
    border: 'oklch(0.9 0.01 264)',
    input: 'oklch(0.9 0.01 264)',
    ring: 'oklch(0.6 0.25 264)'
  },
  dark: {
    background: 'oklch(0.08 0.02 264)',
    foreground: 'oklch(0.95 0.01 264)',
    card: 'oklch(0.1 0.02 264)',
    cardForeground: 'oklch(0.95 0.01 264)',
    popover: 'oklch(0.1 0.02 264)',
    popoverForeground: 'oklch(0.95 0.01 264)',
    primary: 'oklch(0.7 0.2 180)',
    primaryForeground: 'oklch(0.08 0.02 264)',
    secondary: 'oklch(0.15 0.02 264)',
    secondaryForeground: 'oklch(0.9 0.01 264)',
    muted: 'oklch(0.12 0.02 264)',
    mutedForeground: 'oklch(0.6 0.01 264)',
    accent: 'oklch(0.65 0.22 300)',
    accentForeground: 'oklch(0.95 0.01 264)',
    destructive: 'oklch(0.65 0.25 15)',
    destructiveForeground: 'oklch(0.95 0.01 264)',
    border: 'oklch(0.18 0.02 264)',
    input: 'oklch(0.18 0.02 264)',
    ring: 'oklch(0.7 0.2 180)'
  }
}

// Font configuration types
export interface ModernFontConfig {
  sans: string
  mono: string
}

export const MODERN_FONTS: ModernFontConfig = {
  sans: 'Inter, system-ui, sans-serif',
  mono: 'JetBrains Mono, ui-monospace, monospace'
}

// Animation and transition types
export interface ModernAnimationConfig {
  durations: {
    fast: string    // 150ms
    normal: string  // 300ms
    slow: string    // 500ms
  }
  easings: {
    default: string
    smooth: string
    bounce: string
  }
}

export const MODERN_ANIMATIONS: ModernAnimationConfig = {
  durations: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms'
  },
  easings: {
    default: 'ease',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
}

// Spacing and sizing types
export interface ModernSpacingConfig {
  radius: string
  containerMaxWidth: string
  sectionPadding: {
    mobile: string
    desktop: string
  }
}

export const MODERN_SPACING: ModernSpacingConfig = {
  radius: '0.75rem',
  containerMaxWidth: '1200px',
  sectionPadding: {
    mobile: '3rem 0',  // py-12
    desktop: '5rem 0'  // py-20
  }
}

// Component variant types
export type ButtonVariant = 'default' | 'ghost' | 'outline' | 'secondary' | 'destructive'
export type ButtonSize = 'sm' | 'default' | 'lg'
export type CardVariant = 'default' | 'elevated' | 'outlined'
export type BadgeVariant = 'default' | 'secondary' | 'outline' | 'destructive'

// Responsive breakpoint types
export interface ModernBreakpoints {
  sm: string   // 640px
  md: string   // 768px
  lg: string   // 1024px
  xl: string   // 1280px
  '2xl': string // 1536px
}

export const MODERN_BREAKPOINTS: ModernBreakpoints = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}