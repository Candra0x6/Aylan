// Main exports for Modern SaaS Landing Page Template

// Main component
export { 
  ModernLandingPageTemplate as default,
  ModernLandingPageTemplate 
} from './ModernLandingPageTemplate'

// Example data
export { 
  modernLandingPageExampleData,
  modernAnalyticsPlatformData 
} from './ModernExampleUsage'

// Types and interfaces
export type {
  ModernLandingPageData,
  ModernHeaderData,
  ModernHeroData,
  ModernCredibilityData,
  ModernServiceItem,
  ModernServicesData,
  ModernCaseStudyData,
  ModernWorkStep,
  ModernHowWeWorkData,
  ModernTestimonial,
  ModernTestimonialsData,
  ModernPricingPlan,
  ModernPricingData,
  ModernLeadCaptureData,
  ModernFooterData,
  CreateModernServiceItem,
  CreateModernTestimonial,
  CreateModernWorkStep,
  CreateModernPricingPlan,
  ModernColorSystem,
  ModernFontConfig,
  ModernAnimationConfig,
  ModernSpacingConfig,
  ModernBreakpoints,
  ButtonVariant,
  ButtonSize,
  CardVariant,
  BadgeVariant
} from './types'

// Constants and configuration
export {
  MODERN_COLORS,
  MODERN_FONTS,
  MODERN_ANIMATIONS,
  MODERN_SPACING,
  MODERN_BREAKPOINTS
} from './types'

// Helper functions (re-export from main component)
export {
  createModernServiceItem,
  createModernTestimonial,
  createModernWorkStep,
  createModernPricingPlan
} from './ModernLandingPageTemplate'