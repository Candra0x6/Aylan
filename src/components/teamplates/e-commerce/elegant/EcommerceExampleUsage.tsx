"use client"

import React from "react"
import { 
  Star, 
  Trophy, 
  Users, 
  TrendingUp, 
  Target, 
  Zap, 
  Award, 
  Shield, 
  Crown,
  Gem,
  Sparkles,
  Coffee,
  Lightbulb,
  Rocket,
  Heart,
  Briefcase,
  Globe
} from "lucide-react"
import { ElegantLandingPageData } from "./types"

// Complete example data for an elegant luxury consulting agency
export const elegantConsultingAgencyData: ElegantLandingPageData = {
  header: {
    logo: "Prestige Consulting",
    contactCta: "Schedule Consultation",
    contactLink: "#contact",
    logoImage: "/logos/prestige-logo.png",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Strategy", href: "/strategy" }
    ]
  },

  hero: {
    badge: "Trusted by Fortune 500 Companies",
    targetKeyword: "luxury business consulting",
    headline: "Build a premium brand that commands respect from day one",
    subheading: "Elegant strategies, refined execution, and effortless growth—crafted for visionary leaders who demand excellence.",
    primaryCtaText: "Get a free strategy call",
    primaryCtaLink: "#contact",
    secondaryCtaText: "View Our Portfolio",
    secondaryCtaLink: "#work",
    backgroundImage: "/images/luxury-office-hero.jpg",
    overlayOpacity: 0.6
  },

  credibility: {
    clientLogos: [
      { name: "Goldman Sachs", image: "/logos/goldman-sachs.svg" },
      { name: "McKinsey & Co", image: "/logos/mckinsey.svg" },
      { name: "JPMorgan Chase", image: "/logos/jpmorgan.svg" },
      { name: "Blackstone", image: "/logos/blackstone.svg" },
      { name: "Deloitte", image: "/logos/deloitte.svg" }
    ],
    metric: {
      value: "+$2M",
      description: "in client revenue generated",
      icon: <TrendingUp className="h-6 w-6" />
    },
    featuredInText: "Trusted by industry leaders"
  },

  services: {
    title: "Premium consulting services for ambitious leaders",
    subtitle: "Three core expertise areas that transform good businesses into market leaders",
    items: [
      {
        title: "Strategic Business Planning",
        outcomeDescription: "Transform your vision into a comprehensive roadmap that delivers measurable results and sustainable growth",
        workLink: "/case-studies/strategy",
        icon: <Target className="h-8 w-8" />,
        image: "/images/strategy-consulting.jpg",
        price: "From $15,000"
      },
      {
        title: "Executive Leadership Coaching",
        outcomeDescription: "Develop the leadership presence and decision-making skills that inspire teams and drive exceptional performance",
        workLink: "/case-studies/leadership",
        icon: <Crown className="h-8 w-8" />,
        image: "/images/leadership-coaching.jpg",
        price: "From $8,000"
      },
      {
        title: "Digital Transformation",
        outcomeDescription: "Modernize your operations with cutting-edge technology that streamlines processes and accelerates growth",
        workLink: "/case-studies/digital",
        icon: <Zap className="h-8 w-8" />,
        image: "/images/digital-transformation.jpg",
        price: "From $25,000"
      }
    ]
  },

  caseStudy: {
    metric: "400%",
    metricDescription: "increase in operational efficiency within 18 months",
    clientQuote: "Prestige Consulting didn't just improve our processes—they transformed our entire company culture. Our leadership team now operates with precision and confidence we never thought possible.",
    clientName: "Victoria Sterling",
    clientTitle: "CEO",
    clientCompany: "Sterling Financial Group",
    caseStudyLink: "/case-studies/sterling-financial",
    clientImage: "/clients/victoria-sterling.jpg",
    backgroundImage: "/images/sterling-case-study.jpg"
  },

  howWeWork: {
    title: "Our refined approach to transformation",
    subtitle: "A systematic methodology refined through years of working with industry leaders",
    steps: [
      {
        stepNumber: 1,
        title: "Discovery & Analysis",
        description: "We conduct comprehensive assessments to understand your unique challenges, opportunities, and organizational dynamics.",
        icon: <Lightbulb className="h-8 w-8" />,
        image: "/images/discovery-process.jpg"
      },
      {
        stepNumber: 2,
        title: "Strategy Development",
        description: "We craft bespoke strategies that align with your vision while addressing market realities and competitive dynamics.",
        icon: <Gem className="h-8 w-8" />,
        image: "/images/strategy-development.jpg"
      },
      {
        stepNumber: 3,
        title: "Implementation & Excellence",
        description: "We guide execution with precision, ensuring sustainable results and building internal capabilities for continued success.",
        icon: <Trophy className="h-8 w-8" />,
        image: "/images/implementation.jpg"
      }
    ]
  },

  testimonials: {
    title: "What distinguished leaders say about our work",
    subtitle: "Insights from executives who have transformed their organizations with our guidance",
    items: [
      {
        quote: "Working with Prestige Consulting elevated not just our business performance, but our entire approach to leadership. The ROI has been extraordinary.",
        clientName: "James Richardson",
        clientTitle: "Managing Director",
        clientCompany: "Richardson Capital",
        clientImage: "/clients/james-richardson.jpg",
        rating: 5
      },
      {
        quote: "Their strategic insights and execution excellence helped us navigate a complex market transformation. We couldn't have achieved these results without their expertise.",
        clientName: "Sarah Chen",
        clientTitle: "Chief Strategy Officer",
        clientCompany: "Global Tech Solutions",
        clientImage: "/clients/sarah-chen.jpg",
        videoUrl: "/testimonials/sarah-chen-video.mp4",
        rating: 5
      },
      {
        quote: "Prestige Consulting combines world-class strategic thinking with flawless execution. They are true partners in our success.",
        clientName: "Michael Thornton",
        clientTitle: "Founder & CEO",
        clientCompany: "Thornton Enterprises",
        clientImage: "/clients/michael-thornton.jpg",
        rating: 5
      },
      {
        quote: "The transformation they guided was remarkable. Our team performance, operational efficiency, and market position all improved dramatically.",
        clientName: "Elena Rodriguez",
        clientTitle: "President",
        clientCompany: "Rodriguez Holdings",
        clientImage: "/clients/elena-rodriguez.jpg",
        rating: 5
      }
    ]
  },

  pricing: {
    title: "Investment in excellence",
    subtitle: "Transparent pricing for transformational results - choose the engagement that fits your ambitions",
    showTransparentPricing: true,
    packages: [
      {
        name: "Strategic Foundation",
        priceRange: "$15,000 - $30,000",
        description: "Perfect for established businesses ready to refine their strategic direction",
        features: [
          "Comprehensive business assessment",
          "Strategic planning workshop",
          "Market analysis and competitive positioning",
          "3-month implementation roadmap",
          "Monthly progress reviews"
        ],
        ctaText: "Begin Strategy Session",
        ctaLink: "#contact",
        icon: <Target className="h-6 w-6" />
      },
      {
        name: "Leadership Excellence",
        priceRange: "$30,000 - $60,000",
        description: "For executives and leadership teams seeking transformational growth",
        features: [
          "Everything in Strategic Foundation",
          "Executive coaching program",
          "Leadership team alignment sessions",
          "Performance optimization strategies",
          "6-month ongoing support",
          "Quarterly leadership retreats"
        ],
        ctaText: "Elevate Leadership",
        ctaLink: "#contact",
        popular: true,
        icon: <Crown className="h-6 w-6" />
      },
      {
        name: "Complete Transformation",
        priceRange: "$60,000+",
        description: "For organizations ready for comprehensive organizational transformation",
        features: [
          "Everything in Leadership Excellence",
          "Full organizational transformation",
          "Digital integration and optimization",
          "Change management program",
          "12-month partnership",
          "Dedicated transformation team"
        ],
        ctaText: "Transform Organization",
        ctaLink: "#contact",
        icon: <Gem className="h-6 w-6" />
      }
    ],
    customOption: {
      title: "Bespoke Consulting Solutions",
      description: "Every organization is unique. Let's design a consulting engagement that addresses your specific challenges and objectives with precision.",
      ctaText: "Design Custom Engagement",
      ctaLink: "#contact"
    }
  },

  leadCapture: {
    title: "Ready to elevate your organization?",
    subtitle: "Schedule a confidential consultation to explore how we can accelerate your success",
    formType: "form",
    nextAvailability: "This week",
    backgroundImage: "/images/consultation-background.jpg",
    submitText: "Schedule Strategy Call",
    formFields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "Your name"
      },
      {
        name: "title",
        label: "Title",
        type: "text",
        required: true,
        placeholder: "Your title"
      },
      {
        name: "company",
        label: "Company",
        type: "text",
        required: true,
        placeholder: "Company name"
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "your.email@company.com"
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        required: false,
        placeholder: "(555) 123-4567"
      },
      {
        name: "revenue",
        label: "Annual Revenue Range",
        type: "select",
        required: false,
        placeholder: "Select range"
      },
      {
        name: "challenge",
        label: "Primary Challenge or Objective",
        type: "textarea",
        required: true,
        placeholder: "Describe your primary business challenge or strategic objective..."
      }
    ]
  },

  footer: {
    companyName: "Prestige Consulting",
    tagline: "Elevating businesses through strategic excellence and refined execution",
    logoImage: "/logos/prestige-logo.png",
    contactInfo: {
      address: "432 Park Avenue, Suite 1200, New York, NY 10016",
      phone: "(212) 555-0123",
      email: "consulting@prestige.com"
    },
    sitemapLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Our Services", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: "/careers" }
    ],
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/company/prestige-consulting",
        icon: <Briefcase className="h-5 w-5" />
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/prestigeconsult",
        icon: <Globe className="h-5 w-5" />
      }
    ]
  }
}

// Alternative example data for an elegant luxury e-commerce business
export const elegantLuxuryEcommerceData: ElegantLandingPageData = {
  header: {
    logo: "Luxe Collection",
    contactCta: "VIP Access",
    contactLink: "#vip",
    logoImage: "/logos/luxe-logo.png"
  },

  hero: {
    badge: "Curated for Discerning Tastes",
    targetKeyword: "luxury lifestyle products",
    headline: "Discover exceptional pieces that define sophisticated living",
    subheading: "Meticulously curated luxury goods, refined aesthetics, and unparalleled quality—crafted for those who appreciate the finest things in life.",
    primaryCtaText: "Explore Collection",
    primaryCtaLink: "#collection",
    secondaryCtaText: "Learn Our Story",
    secondaryCtaLink: "#story",
    backgroundImage: "/images/luxury-lifestyle-hero.jpg",
    overlayOpacity: 0.4
  },

  credibility: {
    clientLogos: [
      { name: "Ritz-Carlton", image: "/logos/ritz-carlton.svg" },
      { name: "Four Seasons", image: "/logos/four-seasons.svg" },
      { name: "Bergdorf Goodman", image: "/logos/bergdorf.svg" },
      { name: "Harrods", image: "/logos/harrods.svg" },
      { name: "Saks Fifth Avenue", image: "/logos/saks.svg" }
    ],
    metric: {
      value: "10,000+",
      description: "satisfied luxury connoisseurs",
      icon: <Crown className="h-6 w-6" />
    },
    featuredInText: "Featured in the world's finest establishments"
  },

  services: {
    title: "Curated luxury collections for the discerning",
    subtitle: "Three distinct categories of exceptional products for sophisticated living",
    items: [
      {
        title: "Home & Living",
        outcomeDescription: "Transform your space with handcrafted furnishings and accessories that embody timeless elegance",
        workLink: "/collections/home",
        icon: <Heart className="h-8 w-8" />,
        image: "/images/luxury-home.jpg",
        price: "From $500"
      },
      {
        title: "Fashion & Accessories",
        outcomeDescription: "Discover exclusive pieces from renowned artisans and emerging designers who value craftsmanship",
        workLink: "/collections/fashion",
        icon: <Gem className="h-8 w-8" />,
        image: "/images/luxury-fashion.jpg",
        price: "From $200"
      },
      {
        title: "Art & Collectibles",
        outcomeDescription: "Acquire unique pieces that appreciate in value while bringing beauty and sophistication to your collection",
        workLink: "/collections/art",
        icon: <Sparkles className="h-8 w-8" />,
        image: "/images/luxury-art.jpg",
        price: "From $1,000"
      }
    ]
  },

  caseStudy: {
    metric: "98%",
    metricDescription: "customer satisfaction rate with luxury purchases",
    clientQuote: "Luxe Collection has elevated our home to a level of sophistication we never imagined. Every piece tells a story and brings us joy daily.",
    clientName: "Alexandra Whitmore",
    clientTitle: "Art Collector",
    clientCompany: "Whitmore Foundation",
    caseStudyLink: "/stories/whitmore-collection",
    clientImage: "/clients/alexandra-whitmore.jpg",
    backgroundImage: "/images/whitmore-home.jpg"
  },

  howWeWork: {
    title: "Your journey to exceptional living",
    subtitle: "A personalized experience designed to match your unique taste and lifestyle",
    steps: [
      {
        stepNumber: 1,
        title: "Personal Consultation",
        description: "We begin with an intimate conversation about your aesthetic preferences, lifestyle, and collection goals.",
        icon: <Coffee className="h-8 w-8" />,
        image: "/images/personal-consultation.jpg"
      },
      {
        stepNumber: 2,
        title: "Curated Selection",
        description: "Our experts handpick pieces that align with your vision, ensuring each item meets our exacting standards.",
        icon: <Award className="h-8 w-8" />,
        image: "/images/curated-selection.jpg"
      },
      {
        stepNumber: 3,
        title: "White-Glove Delivery",
        description: "Every purchase is delivered with care and presented beautifully, creating an unforgettable unboxing experience.",
        icon: <Shield className="h-8 w-8" />,
        image: "/images/luxury-delivery.jpg"
      }
    ]
  },

  testimonials: {
    title: "What our connoisseurs say",
    subtitle: "Experiences from those who appreciate the finest in luxury and craftsmanship",
    items: [
      {
        quote: "The attention to detail and quality of curation is unmatched. Every piece I've acquired has exceeded my expectations.",
        clientName: "Marcus Wellington",
        clientTitle: "Private Collector",
        clientCompany: "Wellington Estate",
        clientImage: "/clients/marcus-wellington.jpg",
        rating: 5
      },
      {
        quote: "Luxe Collection understands luxury in a way few retailers do. Their pieces have become conversation starters in our home.",
        clientName: "Isabella Thornfield",
        clientTitle: "Interior Designer",
        clientCompany: "Thornfield Interiors",
        clientImage: "/clients/isabella-thornfield.jpg",
        rating: 5
      }
    ]
  },

  pricing: {
    title: "Exclusive membership tiers",
    subtitle: "Choose the level of access that matches your collecting ambitions",
    showTransparentPricing: true,
    packages: [
      {
        name: "Connoisseur",
        priceRange: "Free",
        description: "Access to our main collection and seasonal releases",
        features: [
          "Access to main collection",
          "Seasonal lookbooks",
          "Standard customer service",
          "Free shipping on orders over $1,000"
        ],
        ctaText: "Join Free",
        ctaLink: "#signup",
        icon: <Star className="h-6 w-6" />
      },
      {
        name: "Curator",
        priceRange: "$500/year",
        description: "Enhanced access with early previews and expert consultations",
        features: [
          "Everything in Connoisseur",
          "Early access to new collections",
          "Personal shopping consultations",
          "Complimentary gift wrapping",
          "Priority customer service"
        ],
        ctaText: "Become Curator",
        ctaLink: "#curator",
        popular: true,
        icon: <Gem className="h-6 w-6" />
      },
      {
        name: "Collector",
        priceRange: "$2,500/year",
        description: "Exclusive access to rare pieces and private events",
        features: [
          "Everything in Curator",
          "Access to exclusive collections",
          "Private showroom appointments",
          "Invitation to collector events",
          "White-glove delivery service",
          "Investment piece authentication"
        ],
        ctaText: "Join Elite Circle",
        ctaLink: "#collector",
        icon: <Crown className="h-6 w-6" />
      }
    ]
  },

  leadCapture: {
    title: "Begin your luxury journey",
    subtitle: "Schedule a private consultation to discover pieces that reflect your refined taste",
    formType: "form",
    nextAvailability: "Within 48 hours",
    backgroundImage: "/images/luxury-showroom.jpg",
    submitText: "Request Consultation",
    formFields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "Your name"
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "your.email@example.com"
      },
      {
        name: "interest",
        label: "Areas of Interest",
        type: "select",
        required: false,
        placeholder: "Select category"
      },
      {
        name: "budget",
        label: "Investment Range",
        type: "select",
        required: false,
        placeholder: "Select range"
      },
      {
        name: "preferences",
        label: "Style Preferences",
        type: "textarea",
        required: false,
        placeholder: "Tell us about your aesthetic preferences and collecting goals..."
      }
    ]
  },

  footer: {
    companyName: "Luxe Collection",
    tagline: "Curating exceptional pieces for sophisticated living",
    logoImage: "/logos/luxe-logo.png",
    contactInfo: {
      address: "1 Fifth Avenue, New York, NY 10003",
      phone: "(212) 555-LUXE",
      email: "concierge@luxecollection.com"
    },
    sitemapLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Collections", href: "/collections" },
      { label: "Our Story", href: "/story" },
      { label: "Care Guide", href: "/care" },
      { label: "Authentication", href: "/authentication" }
    ],
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://instagram.com/luxecollection",
        icon: <Heart className="h-5 w-5" />
      },
      {
        platform: "Pinterest",
        url: "https://pinterest.com/luxecollection",
        icon: <Sparkles className="h-5 w-5" />
      }
    ]
  }
}

// Utility functions for customizing elegant templates
export const elegantTemplateUtils = {
  // Generate service icons for different industries
  generateServiceIcons: () => ({
    strategy: <Target className="h-8 w-8" />,
    leadership: <Crown className="h-8 w-8" />,
    technology: <Zap className="h-8 w-8" />,
    luxury: <Gem className="h-8 w-8" />,
    premium: <Award className="h-8 w-8" />,
    excellence: <Trophy className="h-8 w-8" />
  }),

  // Generate step icons for process sections
  generateStepIcons: () => ({
    discovery: <Lightbulb className="h-8 w-8" />,
    consultation: <Coffee className="h-8 w-8" />,
    strategy: <Gem className="h-8 w-8" />,
    execution: <Rocket className="h-8 w-8" />,
    excellence: <Trophy className="h-8 w-8" />,
    delivery: <Shield className="h-8 w-8" />
  }),

  // Generate social media icons
  generateSocialIcons: () => ({
    linkedin: <Briefcase className="h-5 w-5" />,
    twitter: <Globe className="h-5 w-5" />,
    instagram: <Heart className="h-5 w-5" />,
    pinterest: <Sparkles className="h-5 w-5" />
  }),

  // Generate metric icons
  generateMetricIcons: () => ({
    revenue: <TrendingUp className="h-6 w-6" />,
    clients: <Users className="h-6 w-6" />,
    satisfaction: <Crown className="h-6 w-6" />,
    growth: <Rocket className="h-6 w-6" />,
    excellence: <Trophy className="h-6 w-6" />
  }),

  // Color theme variations
  generateColorThemes: () => ({
    dark: {
      background: 'oklch(0.14 0 0)',
      foreground: 'oklch(0.98 0 0)',
      accent: 'oklch(0.8 0.12 85)'
    },
    light: {
      background: 'oklch(0.98 0 0)',
      foreground: 'oklch(0.14 0 0)',
      accent: 'oklch(0.6 0.12 85)'
    },
    luxury: {
      background: 'oklch(0.08 0 0)',
      foreground: 'oklch(0.95 0 0)',
      accent: 'oklch(0.75 0.15 45)'
    }
  }),

  // Content tone variations
  generateToneVariations: () => ({
    professional: {
      ctaSuffix: "",
      titlePrefix: "",
      greeting: "Welcome"
    },
    luxury: {
      ctaSuffix: "",
      titlePrefix: "Exclusive ",
      greeting: "Discover"
    },
    premium: {
      ctaSuffix: "",
      titlePrefix: "Premium ",
      greeting: "Experience"
    }
  })
}

// Template presets for different industries
export const elegantIndustryPresets = {
  consulting: elegantConsultingAgencyData,
  luxury: elegantLuxuryEcommerceData,
  
  // Financial services preset
  financial: {
    ...elegantConsultingAgencyData,
    hero: {
      ...elegantConsultingAgencyData.hero,
      headline: "Sophisticated wealth management for discerning clients",
      subheading: "Personalized investment strategies, refined portfolio management, and exceptional service—crafted for those who value financial excellence."
    },
    services: {
      title: "Comprehensive wealth management services",
      subtitle: "Three pillars of financial excellence for sophisticated investors",
      items: [
        {
          title: "Investment Management",
          outcomeDescription: "Sophisticated portfolio strategies that preserve and grow wealth across market cycles",
          workLink: "/services/investment",
          icon: <TrendingUp className="h-8 w-8" />,
          image: "/images/investment-management.jpg",
          price: "From $100,000 minimum"
        },
        {
          title: "Estate Planning",
          outcomeDescription: "Comprehensive wealth transfer strategies that protect and preserve family legacy",
          workLink: "/services/estate",
          icon: <Shield className="h-8 w-8" />,
          image: "/images/estate-planning.jpg",
          price: "Custom fee structure"
        },
        {
          title: "Private Banking",
          outcomeDescription: "Exclusive banking services with personalized attention and bespoke financial solutions",
          workLink: "/services/private-banking",
          icon: <Crown className="h-8 w-8" />,
          image: "/images/private-banking.jpg",
          price: "By invitation only"
        }
      ]
    }
  }
}

// Export commonly used sample data sets
export const sampleFormFields = {
  basic: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Your name"
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "your.email@company.com"
    },
    {
      name: "message",
      label: "How can we assist you?",
      type: "textarea",
      required: true,
      placeholder: "Describe your needs or objectives..."
    }
  ],
  executive: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Your name"
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      placeholder: "Your title"
    },
    {
      name: "company",
      label: "Company",
      type: "text",
      required: true,
      placeholder: "Company name"
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "your.email@company.com"
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      required: false,
      placeholder: "(555) 123-4567"
    },
    {
      name: "revenue",
      label: "Annual Revenue Range",
      type: "select",
      required: false,
      placeholder: "Select range"
    },
    {
      name: "challenge",
      label: "Primary Objective",
      type: "textarea",
      required: true,
      placeholder: "Describe your primary business objective or challenge..."
    }
  ]
}

export default elegantConsultingAgencyData
