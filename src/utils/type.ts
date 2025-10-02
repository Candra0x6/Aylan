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