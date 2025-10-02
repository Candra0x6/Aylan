"use client"

import React from "react"
import { 
  Heart, 
  Sparkles, 
  Star, 
  Zap, 
  Target, 
  Users, 
  TrendingUp,
  Palette,
  Megaphone,
  BarChart3,
  Trophy,
  Rocket,
  Coffee,
  Lightbulb,
  Gift
} from "lucide-react"
import { PlayfulLandingPageData } from "./types"

// Sample mascot and decorative icons
export const playfulMascotIcon = <Heart className="h-6 w-6" />
export const decorativeSparkles = <Sparkles className="h-8 w-8 text-accent/70" />
export const decorativeHeart = <Heart className="h-6 w-6 text-secondary/60" />
export const decorativeZap = <Zap className="h-10 w-10 text-primary/50" />
export const decorativeGift = <Gift className="h-7 w-7 text-accent/60" />

// Complete example data for a playful corporate marketing agency
export const playfulMarketingAgencyData: PlayfulLandingPageData = {
  header: {
    logo: "🚀 BrandBoost",
    contactCta: "Let's Chat! 💬",
    contactLink: "#contact",
    mascotIcon: playfulMascotIcon,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Marketing", href: "/marketing" }
    ]
  },

  hero: {
    badge: "✨ #1 Fun Marketing Agency",
    targetKeyword: "playful marketing solutions",
    headline: "Turn Your Brand Into Everyone's Favorite! 🎉",
    subheading: "We make marketing so fun, your competitors will wish they hired us first. Ready to boost your brand with creativity, strategy, and a sprinkle of magic?",
    primaryCtaText: "Get a free strategy call ☕",
    primaryCtaLink: "#contact",
    secondaryCtaText: "See Our Work 👀",
    secondaryCtaLink: "#work",
    mascotImage: "/playful-mascot.png",
    decorativeElements: [
      decorativeSparkles,
      decorativeHeart,
      decorativeZap,
      decorativeGift
    ]
  },

  credibility: {
    clientLogos: [
      "💼 TechStart",
      "🏢 GrowthCorp", 
      "🛍️ ShopSmart",
      "💊 HealthPlus",
      "🎨 CreativeCo"
    ],
    metric: {
      value: "+$2M",
      description: "in client revenue generated",
      icon: <TrendingUp className="h-6 w-6" />
    },
    communityCount: "500+"
  },

  services: {
    title: "How We Make Magic Happen ✨",
    subtitle: "Three core services that transform boring businesses into beloved brands",
    items: [
      {
        title: "Brand Strategy & Identity 🎨",
        outcomeDescription: "Turn your brand into a personality people can't help but love and remember",
        workLink: "/case-studies/branding",
        icon: <Palette className="h-8 w-8" />,
        color: "primary"
      },
      {
        title: "Digital Marketing Campaigns 📱",
        outcomeDescription: "Get your ideal customers sliding into your DMs (and buying your stuff)",
        workLink: "/case-studies/digital-marketing",
        icon: <Megaphone className="h-8 w-8" />,
        color: "accent"
      },
      {
        title: "Growth Analytics & Optimization 📊",
        outcomeDescription: "Turn data into dollars with insights that actually make sense",
        workLink: "/case-studies/analytics",
        icon: <BarChart3 className="h-8 w-8" />,
        color: "secondary"
      }
    ]
  },

  caseStudy: {
    metric: "300%",
    metricDescription: "increase in organic traffic in just 6 months",
    clientQuote: "BrandBoost didn't just improve our marketing - they made our entire team excited about our brand again! Our customers love the new personality we've developed.",
    clientName: "Sarah Johnson",
    clientTitle: "CEO",
    clientCompany: "GrowthTech Solutions",
    caseStudyLink: "/case-studies/growthtech",
    clientImage: "/clients/sarah-johnson.jpg",
    backgroundColor: "accent"
  },

  howWeWork: {
    title: "Our Super Simple Process 🛠️",
    subtitle: "No boring meetings, no confusing jargon - just results that make you smile",
    steps: [
      {
        stepNumber: 1,
        title: "Discovery & Coffee ☕",
        description: "We get to know your business, your dreams, and your favorite type of coffee. This helps us create strategies that actually fit your vibe.",
        icon: <Coffee className="h-8 w-8" />,
        color: "primary"
      },
      {
        stepNumber: 2,
        title: "Strategy & Magic ✨",
        description: "We blend data-driven insights with creative sparkle to craft a marketing strategy that's uniquely yours.",
        icon: <Lightbulb className="h-8 w-8" />,
        color: "accent"
      },
      {
        stepNumber: 3,
        title: "Launch & Celebrate 🎉",
        description: "We execute your campaigns while you focus on what you do best. Then we celebrate the wins together!",
        icon: <Rocket className="h-8 w-8" />,
        color: "secondary"
      }
    ]
  },

  testimonials: {
    title: "What Our Happy Clients Say 😊",
    subtitle: "Don't just take our word for it - hear from the businesses we've helped shine",
    items: [
      {
        quote: "Working with BrandBoost feels like having the coolest, smartest friend help with your business. They made our boring SaaS company actually fun!",
        clientName: "Mike Chen",
        clientTitle: "Founder",
        clientCompany: "ProductHub",
        clientImage: "/clients/mike-chen.jpg",
        rating: 5,
        emoji: "🚀"
      },
      {
        quote: "Our social media engagement went through the roof! BrandBoost knows how to make people actually care about what we're doing.",
        clientName: "Emma Rodriguez",
        clientTitle: "Marketing Director",
        clientCompany: "EcoFriendly Co",
        clientImage: "/clients/emma-rodriguez.jpg",
        videoUrl: "/testimonials/emma-video.mp4",
        rating: 5,
        emoji: "🌱"
      },
      {
        quote: "Finally, a marketing agency that gets it! They helped us triple our revenue while staying true to our values. Magic is real!",
        clientName: "David Park",
        clientTitle: "Co-founder",
        clientCompany: "LocalCraft",
        clientImage: "/clients/david-park.jpg",
        rating: 5,
        emoji: "🎨"
      },
      {
        quote: "BrandBoost transformed our entire customer experience. Our clients now rave about working with us - it's been incredible to watch!",
        clientName: "Lisa Thompson",
        clientTitle: "CEO",
        clientCompany: "ServicePro",
        clientImage: "/clients/lisa-thompson.jpg",
        rating: 5,
        emoji: "⭐"
      }
    ]
  },

  pricing: {
    title: "Investment Options That Work 💰",
    subtitle: "Transparent pricing that grows with your business - no surprises, just results",
    showTransparentPricing: true,
    packages: [
      {
        name: "Starter Magic ✨",
        priceRange: "$2,500-5,000/mo",
        description: "Perfect for small businesses ready to make a big impression",
        features: [
          "Brand strategy foundation",
          "Social media management (3 platforms)",
          "Monthly performance reports",
          "Email marketing setup",
          "Basic analytics tracking"
        ],
        ctaText: "Start Your Journey",
        ctaLink: "#contact",
        color: "secondary",
        icon: <Star className="h-6 w-6" />
      },
      {
        name: "Growth Accelerator 🚀",
        priceRange: "$5,000-10,000/mo",
        description: "For businesses ready to dominate their market with style",
        features: [
          "Everything in Starter Magic",
          "Paid advertising management",
          "Advanced analytics & optimization",
          "Custom content creation",
          "Monthly strategy sessions",
          "A/B testing & conversion optimization"
        ],
        ctaText: "Accelerate Growth",
        ctaLink: "#contact",
        popular: true,
        color: "primary",
        icon: <Rocket className="h-6 w-6" />
      },
      {
        name: "Market Domination 👑",
        priceRange: "$10,000+/mo",
        description: "For established businesses ready to become industry leaders",
        features: [
          "Everything in Growth Accelerator",
          "Full-service creative team",
          "Multi-channel campaign management",
          "Advanced automation setup",
          "Weekly strategy calls",
          "Priority support & rapid execution"
        ],
        ctaText: "Dominate Your Market",
        ctaLink: "#contact",
        color: "accent",
        icon: <Trophy className="h-6 w-6" />
      }
    ],
    customOption: {
      title: "Need Something Special? 🎯",
      description: "Every business is unique, and so are our solutions. Let's create a custom package that fits your specific needs and budget perfectly.",
      ctaText: "Design Custom Package",
      ctaLink: "#contact"
    }
  },

  leadCapture: {
    title: "Ready to Make Your Brand Irresistible? 🎯",
    subtitle: "Book a free strategy call and let's turn your business into everyone's favorite",
    formType: "form",
    nextAvailability: "Tomorrow at 2 PM EST",
    backgroundColor: "accent",
    submitText: "Book My Strategy Call 📞",
    decorativeElements: [
      decorativeSparkles,
      decorativeHeart,
      decorativeGift
    ],
    formFields: [
      {
        name: "name",
        label: "What should we call you?",
        type: "text",
        required: true,
        placeholder: "Your awesome name"
      },
      {
        name: "email",
        label: "Where can we reach you?",
        type: "email",
        required: true,
        placeholder: "your.email@awesome.com"
      },
      {
        name: "company",
        label: "What's your business called?",
        type: "text",
        required: false,
        placeholder: "Your amazing company"
      },
      {
        name: "revenue",
        label: "What's your monthly revenue range?",
        type: "select",
        required: false,
        placeholder: "Select range"
      },
      {
        name: "challenge",
        label: "What's your biggest marketing challenge?",
        type: "textarea",
        required: true,
        placeholder: "Tell us what's keeping you up at night..."
      }
    ]
  },

  footer: {
    companyName: "BrandBoost",
    tagline: "Making marketing fun, one brand at a time! 🎉",
    mascotIcon: playfulMascotIcon,
    contactInfo: {
      address: "123 Creative Street, Marketing City, MC 12345",
      phone: "(555) 123-BOOST",
      email: "hello@brandboost.com"
    },
    sitemapLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Our Services", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" }
    ],
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://instagram.com/brandboost",
        icon: <span>📸</span>
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/brandboost",
        icon: <span>🐦</span>
      },
      {
        platform: "LinkedIn", 
        url: "https://linkedin.com/company/brandboost",
        icon: <span>💼</span>
      },
      {
        platform: "TikTok",
        url: "https://tiktok.com/@brandboost",
        icon: <span>🎵</span>
      }
    ]
  }
}

// Alternative example data for a playful tech startup
export const playfulTechStartupData: PlayfulLandingPageData = {
  header: {
    logo: "⚡ InnovateTech",
    contactCta: "Get Demo 🎮",
    contactLink: "#demo",
    mascotIcon: <Zap className="h-6 w-6" />
  },

  hero: {
    badge: "🏆 Winner - Best Innovation 2024",
    targetKeyword: "revolutionary tech solutions",
    headline: "Tech That Actually Makes Sense! 🧠",
    subheading: "We build software so intuitive, even your grandma would become a power user. Ready to simplify your workflow and supercharge your productivity?",
    primaryCtaText: "Try Free Demo 🎮",
    primaryCtaLink: "#demo",
    secondaryCtaText: "See Features ⚡",
    secondaryCtaLink: "#features",
    decorativeElements: [
      <Sparkles key="1" className="h-10 w-10 text-primary/60" />,
      <Zap key="2" className="h-8 w-8 text-accent/70" />,
      <Target key="3" className="h-6 w-6 text-secondary/50" />
    ]
  },

  credibility: {
    clientLogos: [
      "🏦 FinanceFirst",
      "🏥 HealthTech",
      "🏫 EduSmart",
      "🏭 ManufacturePro",
      "🛒 RetailGenius"
    ],
    metric: {
      value: "99.9%",
      description: "uptime guarantee",
      icon: <Target className="h-6 w-6" />
    },
    communityCount: "10,000+"
  },

  services: {
    title: "What We Do Best 🛠️", 
    subtitle: "Three game-changing solutions that transform how you work",
    items: [
      {
        title: "Smart Automation Platform 🤖",
        outcomeDescription: "Automate the boring stuff so you can focus on what actually matters",
        workLink: "/features/automation",
        icon: <Zap className="h-8 w-8" />,
        color: "primary"
      },
      {
        title: "Intuitive Analytics Dashboard 📈",
        outcomeDescription: "Get insights that actually help you make better decisions",
        workLink: "/features/analytics", 
        icon: <BarChart3 className="h-8 w-8" />,
        color: "accent"
      },
      {
        title: "Seamless Team Collaboration 👥",
        outcomeDescription: "Work together like you're all in the same room (even when you're not)",
        workLink: "/features/collaboration",
        icon: <Users className="h-8 w-8" />,
        color: "secondary"
      }
    ]
  },

  caseStudy: {
    metric: "75%",
    metricDescription: "reduction in manual work for our users",
    clientQuote: "InnovateTech transformed our entire workflow. What used to take hours now happens automatically. It's like having a super-smart assistant that never takes a break!",
    clientName: "Alex Kim", 
    clientTitle: "Operations Director",
    clientCompany: "ScaleUp Inc",
    caseStudyLink: "/case-studies/scaleup",
    backgroundColor: "primary"
  },

  howWeWork: {
    title: "Getting Started Is Easy! 🎯",
    subtitle: "From signup to success in three simple steps",
    steps: [
      {
        stepNumber: 1,
        title: "Quick Setup ⚡",
        description: "Connect your existing tools in minutes, not hours. Our setup wizard makes it painless.",
        icon: <Rocket className="h-8 w-8" />,
        color: "primary"
      },
      {
        stepNumber: 2,
        title: "Smart Learning 🧠",
        description: "Our AI learns your patterns and preferences to deliver personalized experiences.",
        icon: <Lightbulb className="h-8 w-8" />,
        color: "accent"
      },
      {
        stepNumber: 3,
        title: "Continuous Growth 📈",
        description: "We constantly improve based on your usage and feedback. Your tool gets better as you use it.",
        icon: <TrendingUp className="h-8 w-8" />,
        color: "secondary"
      }
    ]
  },

  testimonials: {
    title: "Happy Users Say It Best 😊",
    subtitle: "See how we've helped teams work smarter, not harder",
    items: [
      {
        quote: "I was skeptical about another tech tool, but InnovateTech actually delivers on its promises. My team's productivity has skyrocketed!",
        clientName: "Maria Santos",
        clientTitle: "Team Lead",
        clientCompany: "ProductiveCorp",
        rating: 5,
        emoji: "🚀"
      },
      {
        quote: "The automation features saved us 20 hours per week. Now we can focus on strategy instead of busy work.",
        clientName: "James Wilson",
        clientTitle: "CEO",
        clientCompany: "GrowthStartup",
        rating: 5,
        emoji: "⏰"
      }
    ]
  },

  pricing: {
    title: "Simple, Fair Pricing 💰",
    subtitle: "Choose the plan that grows with your team",
    showTransparentPricing: true,
    packages: [
      {
        name: "Starter 🌱",
        priceRange: "$29/user/mo",
        description: "Perfect for small teams getting started",
        features: [
          "Core automation features",
          "Basic analytics",
          "5 team members",
          "Email support"
        ],
        ctaText: "Start Free Trial",
        ctaLink: "#trial",
        color: "secondary"
      },
      {
        name: "Professional 💼",
        priceRange: "$49/user/mo", 
        description: "For growing teams that need more power",
        features: [
          "Advanced automation",
          "Full analytics suite",
          "Unlimited team members",
          "Priority support",
          "Custom integrations"
        ],
        ctaText: "Upgrade Now",
        ctaLink: "#upgrade",
        popular: true,
        color: "primary"
      }
    ]
  },

  leadCapture: {
    title: "Ready to Work Smarter? 🎯",
    subtitle: "Start your free trial today - no credit card required",
    formType: "form",
    backgroundColor: "secondary",
    submitText: "Start Free Trial 🚀",
    formFields: [
      {
        name: "email",
        label: "Work Email",
        type: "email",
        required: true,
        placeholder: "you@company.com"
      },
      {
        name: "company",
        label: "Company Name",
        type: "text",
        required: true,
        placeholder: "Your Company"
      },
      {
        name: "team_size",
        label: "Team Size",
        type: "select",
        required: false,
        placeholder: "Select size"
      }
    ]
  },

  footer: {
    companyName: "InnovateTech",
    tagline: "Making technology work for you, not against you! ⚡",
    contactInfo: {
      email: "hello@innovatetech.com",
      phone: "(555) 987-TECH"
    },
    sitemapLinks: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Support", href: "/support" }
    ]
  }
}

// Utility functions for customizing playful templates
export const playfulTemplateUtils = {
  // Generate random decorative elements
  generateDecorations: (count: number = 4) => {
    const decorations = [
      <Sparkles key="sparkles" className="h-8 w-8 text-accent/60" />,
      <Heart key="heart" className="h-6 w-6 text-secondary/70" />,
      <Zap key="zap" className="h-10 w-10 text-primary/50" />,
      <Star key="star" className="h-7 w-7 text-accent/80" />,
      <Gift key="gift" className="h-8 w-8 text-secondary/60" />
    ]
    return decorations.slice(0, count)
  },

  // Generate color-coordinated service icons
  generateServiceIcons: () => ({
    creative: <Palette className="h-8 w-8" />,
    marketing: <Megaphone className="h-8 w-8" />,
    analytics: <BarChart3 className="h-8 w-8" />,
    automation: <Zap className="h-8 w-8" />,
    collaboration: <Users className="h-8 w-8" />,
    growth: <TrendingUp className="h-8 w-8" />
  }),

  // Generate step icons for process sections
  generateStepIcons: () => ({
    discovery: <Coffee className="h-8 w-8" />,
    strategy: <Lightbulb className="h-8 w-8" />,
    execution: <Rocket className="h-8 w-8" />,
    optimization: <Target className="h-8 w-8" />,
    celebration: <Trophy className="h-8 w-8" />
  }),

  // Generate social media icons
  generateSocialIcons: () => ({
    instagram: <span>📸</span>,
    twitter: <span>🐦</span>,
    linkedin: <span>💼</span>,
    tiktok: <span>🎵</span>,
    youtube: <span>📺</span>,
    facebook: <span>👥</span>
  }),

  // Generate mascot variations
  generateMascots: () => ({
    heart: <Heart className="h-6 w-6" />,
    sparkles: <Sparkles className="h-6 w-6" />,
    zap: <Zap className="h-6 w-6" />,
    rocket: <Rocket className="h-6 w-6" />,
    star: <Star className="h-6 w-6" />
  }),

  // Color theme generator
  generateColorThemes: () => ({
    energetic: {
      primary: "primary",
      accent: "accent", 
      secondary: "secondary"
    },
    warm: {
      primary: "accent",
      accent: "secondary",
      secondary: "primary"
    },
    cool: {
      primary: "secondary",
      accent: "primary",
      secondary: "accent"
    }
  }),

  // Content tone variations
  generateToneVariations: () => ({
    friendly: {
      ctaSuffix: " 😊",
      titlePrefix: "",
      greeting: "Hey there!"
    },
    exciting: {
      ctaSuffix: " 🚀", 
      titlePrefix: "",
      greeting: "Ready to rock?"
    },
    professional: {
      ctaSuffix: " ✨",
      titlePrefix: "",
      greeting: "Let's get started!"
    }
  })
}

// Template presets for different industries
export const playfulIndustryPresets = {
  marketing: playfulMarketingAgencyData,
  tech: playfulTechStartupData,
  
  // Consulting preset
  consulting: {
    ...playfulMarketingAgencyData,
    hero: {
      ...playfulMarketingAgencyData.hero,
      headline: "Business Problems? We've Got Solutions! 🎯",
      subheading: "We turn your biggest challenges into your competitive advantages. Ready to unlock your business potential?"
    },
    services: {
      title: "How We Transform Businesses 🚀",
      subtitle: "Three proven approaches that deliver real results",
      items: [
        {
          title: "Strategic Planning 🎯",
          outcomeDescription: "Get clear direction and actionable roadmaps that actually work",
          workLink: "/services/strategy",
          icon: <Target className="h-8 w-8" />,
          color: "primary" as const
        },
        {
          title: "Process Optimization ⚡",
          outcomeDescription: "Streamline operations and eliminate bottlenecks holding you back",
          workLink: "/services/optimization",
          icon: <Zap className="h-8 w-8" />,
          color: "accent" as const
        },
        {
          title: "Growth Implementation 📈",
          outcomeDescription: "Execute strategies that drive measurable business growth",
          workLink: "/services/growth",
          icon: <TrendingUp className="h-8 w-8" />,
          color: "secondary" as const
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
      placeholder: "John Doe"
    },
    {
      name: "email", 
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "john@example.com"
    },
    {
      name: "message",
      label: "How can we help?",
      type: "textarea", 
      required: true,
      placeholder: "Tell us about your project..."
    }
  ],
  detailed: [
    {
      name: "name",
      label: "What should we call you?",
      type: "text",
      required: true,
      placeholder: "Your awesome name"
    },
    {
      name: "email",
      label: "Where can we reach you?",
      type: "email", 
      required: true,
      placeholder: "your.email@awesome.com"
    },
    {
      name: "company",
      label: "Company Name",
      type: "text",
      required: false,
      placeholder: "Your amazing company"
    },
    {
      name: "budget",
      label: "Project Budget Range",
      type: "select",
      required: false,
      placeholder: "Select budget range"
    },
    {
      name: "timeline",
      label: "When do you need this completed?",
      type: "select",
      required: false,
      placeholder: "Select timeline"
    },
    {
      name: "details",
      label: "Project Details",
      type: "textarea",
      required: true,
      placeholder: "Tell us all about your project goals, challenges, and dreams..."
    }
  ]
}

export default playfulMarketingAgencyData