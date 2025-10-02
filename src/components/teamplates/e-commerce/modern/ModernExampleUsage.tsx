"use client"

import React from 'react'
import { 
  Target,
  TrendingUp,
  Users,
  Zap,
  Shield,
  CheckCircle,
  MessageSquare,
  BarChart3
} from 'lucide-react'
import ModernLandingPageTemplate from './ModernLandingPageTemplate'
import { ModernLandingPageData } from './types'

// Example data for Modern E-commerce Landing Page Template
export const modernLandingPageExampleData: ModernLandingPageData = {
  header: {
    logo: "TrendEase",
    navigation: [
      { label: "Services", href: "#services" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "About", href: "#about" },
      { label: "Blog", href: "/blog" }
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "E-commerce Growth", href: "/services/ecommerce" }
    ],
    contactCta: {
      label: "Get Started",
      href: "#contact"
    }
  },

  hero: {
    badge: "Proven E-commerce Growth",
    headline: "Scale Your Online Store with Data-Driven E-commerce Marketing",
    targetKeyword: "E-commerce Marketing",
    subheadline: "We help ambitious e-commerce brands achieve 300%+ revenue growth through strategic digital marketing, conversion optimization, and customer acquisition systems.",
    primaryCta: {
      label: "Get a free strategy call",
      href: "#contact"
    },
    secondaryCta: {
      label: "Watch Success Stories",
      href: "#testimonials"
    }
  },

  credibility: {
    metric: "+$15M in client revenue generated",
    clientLogos: [
      { src: "/logos/shopify-plus.png", alt: "Shopify Plus" },
      { src: "/logos/woocommerce.png", alt: "WooCommerce" },
      { src: "/logos/magento.png", alt: "Magento" },
      { src: "/logos/bigcommerce.png", alt: "BigCommerce" },
      { src: "/logos/amazon.png", alt: "Amazon" },
      { src: "/logos/facebook-ads.png", alt: "Facebook Ads" }
    ]
  },

  services: {
    title: "Complete E-commerce Growth Solutions",
    subtitle: "Everything you need to scale your online store, increase conversions, and maximize customer lifetime value.",
    services: [
      {
        title: "Performance Marketing",
        outcome: "Achieve 4x ROAS through optimized ad campaigns across Google, Facebook, and Amazon",
        icon: Target,
        link: "/services/performance-marketing"
      },
      {
        title: "Conversion Rate Optimization",
        outcome: "Increase website conversions by 150%+ with data-driven UX improvements",
        icon: TrendingUp,
        link: "/services/conversion-optimization"
      },
      {
        title: "Customer Retention Systems",
        outcome: "Build automated email sequences that generate 30% of total revenue",
        icon: Users,
        link: "/services/retention-marketing"
      }
    ]
  },

  caseStudy: {
    title: "How We Scaled FashionForward from $50K to $500K Monthly Revenue",
    metric: "900% Revenue Growth",
    metricDescription: "In just 18 months",
    clientQuote: "TrendEase transformed our struggling online boutique into a multi-million dollar brand. Their strategic approach to Facebook ads and email marketing was a complete game-changer for our business.",
    clientName: "Sarah Mitchell",
    clientTitle: "Founder",
    caseStudyLink: "/case-studies/fashionforward",
    image: "/case-study-fashionforward.jpg",
    imageAlt: "FashionForward case study results dashboard"
  },

  howWeWork: {
    title: "Our Proven 3-Step Growth Framework",
    subtitle: "A systematic approach that has helped 100+ e-commerce brands achieve sustainable, profitable growth.",
    steps: [
      {
        title: "Data-Driven Audit",
        description: "We analyze your current performance, identify growth opportunities, and create a custom strategy blueprint tailored to your brand.",
        visual: BarChart3
      },
      {
        title: "Strategic Implementation",
        description: "Our team executes high-impact campaigns across multiple channels while optimizing your conversion funnel for maximum results.",
        visual: Zap
      },
      {
        title: "Scale & Optimize",
        description: "We continuously monitor performance, scale winning campaigns, and implement advanced retention strategies for long-term growth.",
        visual: TrendingUp
      }
    ]
  },

  testimonials: {
    title: "Success Stories From Our E-commerce Partners",
    subtitle: "Don't just take our word for it. Here's what our clients say about working with TrendEase.",
    testimonials: [
      {
        quote: "Our ROAS went from 2.1x to 6.4x in just 3 months. The team's expertise in Facebook and Google ads is unmatched. They don't just run campaigns - they build growth engines.",
        name: "Marcus Johnson",
        title: "CEO",
        company: "TechGear Pro",
        photo: "/testimonials/marcus-johnson.jpg",
        logo: "/logos/techgear-pro.png",
        rating: 5
      },
      {
        quote: "The email marketing automation they built generates over $80K monthly recurring revenue. It's like having a salesperson that never sleeps. Absolutely incredible results.",
        name: "Lisa Chen",
        title: "Marketing Director",
        company: "WellnessWorld",
        photo: "/testimonials/lisa-chen.jpg",
        logo: "/logos/wellness-world.png",
        rating: 5
      },
      {
        quote: "From $15K to $150K monthly revenue in 8 months. The conversion rate optimization work they did on our product pages was a complete transformation. Our customers love the new experience.",
        name: "David Rodriguez",
        title: "Founder",
        company: "HomeDecor Plus",
        photo: "/testimonials/david-rodriguez.jpg",
        logo: "/logos/homedecor-plus.png",
        rating: 5
      }
    ],
    videoTestimonial: {
      thumbnail: "/video-testimonial-thumbnail.jpg",
      videoUrl: "https://www.youtube.com/watch?v=example"
    }
  },

  pricing: {
    title: "Transparent, Performance-Based Pricing",
    subtitle: "Choose the plan that fits your current revenue level. All plans include our core growth strategies with varying levels of support and customization.",
    packages: [
      {
        name: "Growth Starter",
        description: "Perfect for stores doing $10K-50K monthly revenue",
        price: "$2,500",
        period: "per month",
        features: [
          "Google & Facebook Ads Management",
          "Basic Email Marketing Setup",
          "Monthly Performance Reports",
          "Conversion Tracking Implementation",
          "Monthly Strategy Call"
        ],
        ctaText: "Start Growing",
        ctaLink: "#contact",
        featured: false
      },
      {
        name: "Scale Pro",
        description: "For established stores doing $50K-200K monthly revenue",
        price: "$4,500",
        period: "per month",
        features: [
          "Multi-Channel Ad Management",
          "Advanced Email & SMS Automation",
          "A/B Testing & CRO",
          "Custom Landing Pages",
          "Weekly Strategy Calls",
          "Dedicated Account Manager",
          "Performance Bonus Structure"
        ],
        ctaText: "Scale Now",
        ctaLink: "#contact",
        featured: true
      },
      {
        name: "Enterprise",
        description: "For high-volume stores doing $200K+ monthly revenue",
        price: "$7,500",
        period: "per month",
        features: [
          "Full-Service Marketing Department",
          "Advanced Analytics & Attribution",
          "Custom Software Integrations",
          "Influencer Partnership Management",
          "24/7 Priority Support",
          "Quarterly Business Reviews",
          "Revenue Share Partnership Options"
        ],
        ctaText: "Get Enterprise",
        ctaLink: "#contact",
        featured: false
      }
    ],
    customOption: {
      title: "Custom Enterprise Solutions",
      description: "For brands with unique needs or doing $500K+ monthly revenue, we create completely customized growth strategies.",
      ctaText: "Discuss Custom Plan",
      ctaLink: "#contact"
    }
  },

  leadCapture: {
    title: "Ready to Scale Your E-commerce Business?",
    subtitle: "Get a free strategic consultation and custom growth plan for your online store. No commitments, just actionable insights.",
    formTitle: "Get Your Free E-commerce Growth Strategy",
    formCta: "Get My Free Strategy",
    nextAvailability: "Today at 2:00 PM EST",
    calendarLink: "https://calendly.com/trendeasy/strategy-call",
    email: "hello@trendeasy.com",
    phone: "+1 (555) 123-4567",
    address: "1234 Commerce Street, Suite 100, New York, NY 10001"
  },

  footer: {
    logo: "TrendEase",
    description: "We help ambitious e-commerce brands achieve sustainable, profitable growth through data-driven marketing strategies and conversion optimization.",
    email: "hello@trendeasy.com",
    phone: "+1 (555) 123-4567",
    address: "1234 Commerce Street, Suite 100, New York, NY 10001",
    links: [
      {
        title: "Services",
        items: [
          { label: "Performance Marketing", href: "/services/performance-marketing" },
          { label: "Conversion Optimization", href: "/services/conversion-optimization" },
          { label: "Email Marketing", href: "/services/email-marketing" },
          { label: "Social Media Marketing", href: "/services/social-media" }
        ]
      },
      {
        title: "Resources",
        items: [
          { label: "Case Studies", href: "/case-studies" },
          { label: "E-commerce Blog", href: "/blog" },
          { label: "Free Tools", href: "/tools" },
          { label: "Growth Calculator", href: "/calculator" }
        ]
      },
      {
        title: "Company",
        items: [
          { label: "About Us", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Partner Program", href: "/partners" },
          { label: "Contact", href: "/contact" }
        ]
      }
    ],
    privacy: { label: "Privacy Policy", href: "/privacy" },
    terms: { label: "Terms of Service", href: "/terms" },
    copyright: "© 2024 TrendEase. All rights reserved."
  }
}

// Alternative example for SaaS E-commerce Tools
export const saasEcommerceExampleData: ModernLandingPageData = {
  header: {
    logo: "CommerceFlow",
    navigation: [
      { label: "Platform", href: "#platform" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" },
      { label: "Resources", href: "/resources" }
    ],
    contactCta: {
      label: "Start Free Trial",
      href: "#signup"
    }
  },

  hero: {
    badge: "All-in-One E-commerce Platform",
    headline: "Build, Launch, and Scale Your Online Store with Intelligent E-commerce Automation",
    targetKeyword: "E-commerce Automation",
    subheadline: "The complete platform that combines store building, inventory management, marketing automation, and analytics in one powerful solution. Used by 10,000+ growing brands.",
    primaryCta: {
      label: "Get a free strategy call",
      href: "#contact"
    },
    secondaryCta: {
      label: "Watch Platform Demo",
      href: "#demo"
    }
  },

  credibility: {
    metric: "10,000+ successful stores launched",
    clientLogos: [
      { src: "/logos/stripe.png", alt: "Stripe" },
      { src: "/logos/paypal.png", alt: "PayPal" },
      { src: "/logos/mailchimp.png", alt: "Mailchimp" },
      { src: "/logos/klaviyo.png", alt: "Klaviyo" },
      { src: "/logos/shipstation.png", alt: "ShipStation" },
      { src: "/logos/quickbooks.png", alt: "QuickBooks" }
    ]
  },

  services: {
    title: "Everything You Need to Run Your E-commerce Business",
    subtitle: "From store setup to advanced automation, CommerceFlow provides all the tools you need to compete with enterprise brands.",
    services: [
      {
        title: "Smart Store Builder",
        outcome: "Launch a professional store in minutes with AI-powered design and optimization",
        icon: Zap,
        link: "/features/store-builder"
      },
      {
        title: "Inventory Intelligence",
        outcome: "Never run out of stock with predictive inventory management and automated reordering",
        icon: BarChart3,
        link: "/features/inventory"
      },
      {
        title: "Marketing Automation",
        outcome: "Increase sales by 40% with automated email campaigns, abandoned cart recovery, and customer segmentation",
        icon: MessageSquare,
        link: "/features/marketing"
      }
    ]
  },

  caseStudy: {
    title: "How PetSupply Co. Grew from Startup to $2M ARR in 12 Months",
    metric: "2,400% Revenue Growth",
    metricDescription: "From $0 to $2M ARR",
    clientQuote: "CommerceFlow gave us everything we needed to compete with major pet supply companies. The inventory management alone saved us 20 hours per week, and the marketing automation drove 60% of our sales.",
    clientName: "Jennifer Walsh",
    clientTitle: "Co-Founder",
    caseStudyLink: "/case-studies/petsupply-co",
    image: "/case-study-petsupply.jpg",
    imageAlt: "PetSupply Co. growth dashboard showing revenue increase"
  },

  howWeWork: {
    title: "Get Your Store Running in 3 Simple Steps",
    subtitle: "Our guided setup process gets you from idea to selling in less than 24 hours, no technical experience required.",
    steps: [
      {
        title: "Setup Your Store",
        description: "Use our AI-powered store builder to create a professional e-commerce site. Choose from 100+ themes or let our AI design one for you.",
        visual: CheckCircle
      },
      {
        title: "Connect & Configure",
        description: "Integrate with payment processors, shipping providers, and marketing tools. Our platform handles all the technical setup automatically.",
        visual: Shield
      },
      {
        title: "Launch & Grow",
        description: "Go live with confidence. Our automation tools handle inventory, marketing, and customer service while you focus on growing your business.",
        visual: TrendingUp
      }
    ]
  },

  testimonials: {
    title: "Trusted by Growing E-commerce Brands",
    subtitle: "See how businesses like yours are using CommerceFlow to scale faster and more efficiently.",
    testimonials: [
      {
        quote: "The marketing automation increased our conversion rate from 1.2% to 4.8%. The abandoned cart recovery alone generates $15K additional revenue monthly. This platform pays for itself many times over.",
        name: "Alex Thompson",
        title: "Founder",
        company: "FitGear Express",
        photo: "/testimonials/alex-thompson.jpg",
        logo: "/logos/fitgear-express.png",
        rating: 5
      },
      {
        quote: "Managing inventory across 5 sales channels used to be a nightmare. Now everything syncs automatically and we never oversell. The predictive reordering has reduced stockouts by 90%.",
        name: "Maria Gonzalez",
        title: "Operations Manager",
        company: "Artisan Crafts Co",
        photo: "/testimonials/maria-gonzalez.jpg",
        logo: "/logos/artisan-crafts.png",
        rating: 5
      },
      {
        quote: "We launched our store on a Monday and had our first sale by Wednesday. The setup process was incredibly smooth, and the customer support team was amazing throughout the entire process.",
        name: "Ryan Park",
        title: "Co-Founder",
        company: "Urban Plant Co",
        photo: "/testimonials/ryan-park.jpg",
        logo: "/logos/urban-plant.png",
        rating: 5
      }
    ]
  },

  pricing: {
    title: "Simple, Transparent Pricing That Grows With You",
    subtitle: "Start free and upgrade as you grow. No hidden fees, no long-term contracts, and no transaction fees on any plan.",
    packages: [
      {
        name: "Starter",
        description: "Perfect for new stores getting started",
        price: "Free",
        period: "forever",
        features: [
          "Up to 50 products",
          "Basic store themes",
          "SSL certificate included",
          "Mobile-responsive design",
          "Basic analytics",
          "Email support"
        ],
        ctaText: "Start Free",
        ctaLink: "#signup",
        featured: false
      },
      {
        name: "Growth",
        description: "For stores ready to scale their business",
        price: "$29",
        period: "per month",
        features: [
          "Unlimited products",
          "Advanced themes & customization",
          "Marketing automation",
          "Abandoned cart recovery",
          "Advanced analytics",
          "Multi-channel selling",
          "Priority support",
          "API access"
        ],
        ctaText: "Start Growing",
        ctaLink: "#signup",
        featured: true
      },
      {
        name: "Pro",
        description: "For high-volume stores and teams",
        price: "$79",
        period: "per month",
        features: [
          "Everything in Growth",
          "Advanced inventory management",
          "Customer segmentation",
          "A/B testing tools",
          "Advanced integrations",
          "Custom reporting",
          "Phone & chat support",
          "Account manager"
        ],
        ctaText: "Go Pro",
        ctaLink: "#signup",
        featured: false
      }
    ],
    customOption: {
      title: "Enterprise Solutions",
      description: "For large businesses with custom needs, we offer tailored solutions with dedicated support and custom integrations.",
      ctaText: "Contact Sales",
      ctaLink: "#contact"
    }
  },

  leadCapture: {
    title: "Ready to Build Your Dream Store?",
    subtitle: "Join thousands of successful e-commerce entrepreneurs who chose CommerceFlow to power their online business.",
    formTitle: "Start Your Free Trial Today",
    formCta: "Create My Store",
    nextAvailability: "Available now",
    calendarLink: "https://calendly.com/commerceflow/demo",
    email: "support@commerceflow.com",
    phone: "+1 (555) 987-6543"
  },

  footer: {
    logo: "CommerceFlow",
    description: "The complete e-commerce platform that helps businesses build, launch, and scale their online stores with intelligent automation and powerful integrations.",
    email: "support@commerceflow.com",
    phone: "+1 (555) 987-6543",
    links: [
      {
        title: "Platform",
        items: [
          { label: "Store Builder", href: "/features/store-builder" },
          { label: "Inventory Management", href: "/features/inventory" },
          { label: "Marketing Tools", href: "/features/marketing" },
          { label: "Analytics", href: "/features/analytics" }
        ]
      },
      {
        title: "Resources",
        items: [
          { label: "Help Center", href: "/help" },
          { label: "Developer API", href: "/developers" },
          { label: "Templates", href: "/templates" },
          { label: "Webinars", href: "/webinars" }
        ]
      },
      {
        title: "Company",
        items: [
          { label: "About", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Press", href: "/press" },
          { label: "Contact", href: "/contact" }
        ]
      }
    ],
    privacy: { label: "Privacy Policy", href: "/privacy" },
    terms: { label: "Terms of Service", href: "/terms" },
    copyright: "© 2024 CommerceFlow. All rights reserved."
  }
}

// Component for demonstrating usage
export default function ModernExampleUsage() {
  return (
    <div className="space-y-20">
      <div>
        <h2 className="text-2xl font-bold mb-4">E-commerce Marketing Agency Example</h2>
        <ModernLandingPageTemplate data={modernLandingPageExampleData} />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">SaaS E-commerce Platform Example</h2>
        <ModernLandingPageTemplate data={saasEcommerceExampleData} />
      </div>
    </div>
  )
}

// Utility functions for creating custom data
export const createModernServiceItem = (
  title: string,
  outcome: string,
  icon: typeof Target,
  link: string
) => ({
  title,
  outcome,
  icon,
  link
})

export const createModernTestimonial = (
  quote: string,
  name: string,
  title: string,
  company?: string,
  photo?: string,
  logo?: string,
  rating: number = 5
) => ({
  quote,
  name,
  title,
  company,
  photo,
  logo,
  rating
})

export const createModernPricingPackage = (
  name: string,
  description: string,
  price: string,
  period: string,
  features: string[],
  ctaText: string,
  ctaLink: string,
  featured: boolean = false
) => ({
  name,
  description,
  price,
  period,
  features,
  ctaText,
  ctaLink,
  featured
})