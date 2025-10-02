import React from "react"
import DynamicLandingPageTemplate from "./DynamicLandingPageTemplate"
import { LandingPageData } from "./types"

// Example data for the dynamic landing page
const sampleLandingPageData: LandingPageData = {
  header: {
    logo: "Acme Agency",
    contactCta: "Get Free Consultation",
    contactLink: "#contact",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Digital Marketing", href: "/services/digital-marketing" }
    ]
  },
  
  hero: {
    targetKeyword: "Digital Marketing Agency",
    headline: "Transform Your Business with Data-Driven Digital Marketing",
    subheading: "We help ambitious companies grow their revenue through strategic digital marketing, conversion optimization, and performance analytics.",
    primaryCtaText: "Get a free strategy call",
    primaryCtaLink: "#contact",
    backgroundImage: "/images/hero-bg.jpg",
    badgeText: "Trusted by 200+ Companies"
  },
  
  credibility: {
    clientLogos: ["TECHCORP", "INNOVATE", "GROWTHCO", "NEXUS", "ELEVATE"],
    metric: {
      value: "+$5M",
      description: "in client revenue generated"
    }
  },
  
  services: {
    title: "Services That Drive Real Results",
    subtitle: "Our proven approach combines strategy, creativity, and data to deliver measurable growth.",
    items: [
      {
        title: "SEO & Content Strategy",
        outcomeDescription: "Increase organic traffic by 300% and establish thought leadership in your industry",
        workLink: "/case-studies/seo"
      },
      {
        title: "Paid Advertising (PPC)",
        outcomeDescription: "Generate qualified leads with 4x ROI through optimized Google and Facebook ads",
        workLink: "/case-studies/ppc"
      },
      {
        title: "Conversion Optimization",
        outcomeDescription: "Double your website conversion rate through systematic testing and optimization",
        workLink: "/case-studies/cro"
      }
    ]
  },
  
  caseStudy: {
    metric: "312%",
    metricDescription: "increase in qualified leads within 6 months",
    clientQuote: "Working with this team completely transformed our digital presence. We went from struggling to get leads to having a waiting list of qualified prospects.",
    clientName: "Sarah Johnson",
    clientTitle: "CEO",
    caseStudyLink: "/case-studies/saas-startup",
    backgroundImage: "/images/case-study-bg.jpg"
  },
  
  howWeWork: {
    title: "Our Proven 3-Step Process",
    subtitle: "Simple, transparent, and designed for maximum impact.",
    steps: [
      {
        stepNumber: 1,
        title: "Strategic Discovery",
        description: "We audit your current marketing, analyze your competition, and identify the biggest opportunities for growth."
      },
      {
        stepNumber: 2,
        title: "Execute & Optimize",
        description: "Our team implements proven strategies while continuously testing and optimizing for better performance."
      },
      {
        stepNumber: 3,
        title: "Scale & Grow",
        description: "As we see results, we scale successful campaigns and explore new channels to accelerate your growth."
      }
    ]
  },
  
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Don't just take our word for it - hear from companies we've helped grow.",
    items: [
      {
        quote: "The ROI we've seen from their campaigns is incredible. Our cost per acquisition dropped by 60% while our revenue increased by 200%.",
        clientName: "Mike Chen",
        clientTitle: "Marketing Director",
        clientCompany: "TechFlow Solutions",
        clientImage: "/images/client-mike.jpg",
        rating: 5
      },
      {
        quote: "They don't just execute campaigns - they become true partners in your business growth. Their strategic thinking is exceptional.",
        clientName: "Emily Rodriguez",
        clientTitle: "Founder",
        clientCompany: "GreenStart",
        clientImage: "/images/client-emily.jpg",
        videoUrl: "/testimonials/emily-video",
        rating: 5
      },
      {
        quote: "Finally, a marketing agency that actually understands B2B sales cycles. Our lead quality has never been better.",
        clientName: "David Kim",
        clientTitle: "VP of Sales",
        clientCompany: "Enterprise Pro",
        clientImage: "/images/client-david.jpg",
        rating: 5
      },
      {
        quote: "The data-driven approach and monthly reporting gives us complete transparency into what's working and what's not.",
        clientName: "Lisa Wang",
        clientTitle: "CMO",
        clientCompany: "ScaleUp Inc",
        clientImage: "/images/client-lisa.jpg",
        rating: 5
      }
    ]
  },
  
  pricing: {
    title: "Transparent Pricing That Scales With You",
    subtitle: "No hidden fees, no long-term contracts. Choose the plan that fits your growth stage.",
    showTransparentPricing: true,
    packages: [
      {
        name: "Growth Starter",
        priceRange: "$3,000 - $5,000/mo",
        description: "Perfect for startups and small businesses ready to scale their marketing efforts.",
        features: [
          "SEO optimization & content strategy",
          "Google Ads management",
          "Monthly performance reporting",
          "Dedicated account manager",
          "Landing page optimization"
        ],
        ctaText: "Start Growing",
        ctaLink: "#contact"
      },
      {
        name: "Scale Accelerator",
        priceRange: "$5,000 - $10,000/mo",
        description: "For established companies looking to dominate their market through multi-channel marketing.",
        features: [
          "Everything in Growth Starter",
          "Facebook & LinkedIn advertising",
          "Advanced conversion tracking",
          "A/B testing & optimization",
          "Custom reporting dashboard",
          "Quarterly strategy sessions"
        ],
        ctaText: "Accelerate Growth",
        ctaLink: "#contact"
      },
      {
        name: "Enterprise",
        priceRange: "$10,000+/mo",
        description: "Custom solutions for large organizations with complex marketing needs.",
        features: [
          "Everything in Scale Accelerator",
          "Custom integrations & automation",
          "Dedicated team of specialists",
          "Advanced attribution modeling",
          "White-label reporting",
          "Priority support & consulting"
        ],
        ctaText: "Get Custom Quote",
        ctaLink: "#contact"
      }
    ],
    customOption: {
      title: "Not Sure Which Plan Is Right?",
      description: "Every business is unique. Let's discuss your specific goals and create a custom strategy that fits your budget and objectives.",
      ctaText: "Schedule Free Consultation",
      ctaLink: "#contact"
    }
  },
  
  leadCapture: {
    title: "Ready to Transform Your Marketing?",
    subtitle: "Book a free 30-minute strategy session where we'll audit your current marketing and show you exactly how to improve your results.",
    formType: "form",
    nextAvailability: "Today at 3:00 PM EST",
    formFields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Business Email",
        type: "email",
        required: true
      },
      {
        name: "company",
        label: "Company Name",
        type: "text",
        required: true
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        required: false
      },
      {
        name: "revenue",
        label: "Annual Revenue",
        type: "select",
        required: false
      },
      {
        name: "challenges",
        label: "What's your biggest marketing challenge?",
        type: "textarea",
        required: true
      }
    ],
    submitText: "Book My Free Strategy Session"
  },
  
  footer: {
    companyName: "Acme Digital Agency",
    contactInfo: {
      address: "123 Business District, Suite 100\nNew York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "hello@acmedigital.com"
    },
    sitemapLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Services", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/company/acmedigital" },
      { platform: "Twitter", url: "https://twitter.com/acmedigital" },
      { platform: "Facebook", url: "https://facebook.com/acmedigital" }
    ]
  }
}

// Alternative data example for a different use case (SaaS company)
export const saasLandingPageData: LandingPageData = {
  header: {
    logo: "CloudSync Pro",
    contactCta: "Start Free Trial",
    contactLink: "/signup",
  },
  
  hero: {
    targetKeyword: "Team Collaboration Software",
    headline: "Streamline Your Team's Workflow with CloudSync Pro",
    subheading: "The all-in-one collaboration platform that helps remote teams stay connected, organized, and productive.",
    primaryCtaText: "Start 14-day free trial",
    primaryCtaLink: "/signup",
    badgeText: "Trusted by 10,000+ Teams"
  },
  
  credibility: {
    clientLogos: ["SLACK", "MICROSOFT", "GOOGLE", "SALESFORCE", "HUBSPOT"],
    metric: {
      value: "40%",
      description: "increase in team productivity"
    }
  },
  
  services: {
    title: "Everything Your Team Needs to Succeed",
    items: [
      {
        title: "Real-time Collaboration",
        outcomeDescription: "Eliminate version control issues and enable seamless teamwork across time zones",
        workLink: "/features/collaboration"
      },
      {
        title: "Project Management",
        outcomeDescription: "Keep projects on track with intuitive planning tools and automated progress tracking",
        workLink: "/features/project-management"
      },
      {
        title: "Advanced Analytics",
        outcomeDescription: "Make data-driven decisions with comprehensive insights into team performance",
        workLink: "/features/analytics"
      }
    ]
  },
  
  caseStudy: {
    metric: "87%",
    metricDescription: "reduction in project delivery time",
    clientQuote: "CloudSync Pro transformed how our distributed team works together. Projects that used to take months now get completed in weeks.",
    clientName: "Alex Thompson",
    clientTitle: "Head of Operations",
    caseStudyLink: "/case-studies/remote-agency"
  },
  
  howWeWork: {
    title: "Get Started in Minutes",
    steps: [
      {
        stepNumber: 1,
        title: "Quick Setup",
        description: "Create your workspace and invite team members with just a few clicks."
      },
      {
        stepNumber: 2,
        title: "Customize Your Workflow",
        description: "Configure project templates, automation rules, and team permissions."
      },
      {
        stepNumber: 3,
        title: "Start Collaborating",
        description: "Begin working together more efficiently with your entire team aligned."
      }
    ]
  },
  
  testimonials: {
    title: "Loved by Teams Worldwide",
    items: [
      {
        quote: "We tried dozens of tools before finding CloudSync Pro. It's the only platform that actually makes remote work feel natural.",
        clientName: "Jennifer Adams",
        clientTitle: "Project Manager",
        clientCompany: "Creative Solutions",
        rating: 5
      },
      {
        quote: "The integration capabilities are incredible. We connected all our existing tools and now have a single source of truth.",
        clientName: "Robert Martinez",
        clientTitle: "CTO",
        clientCompany: "TechStart",
        rating: 5
      }
    ]
  },
  
  pricing: {
    title: "Simple, Transparent Pricing",
    showTransparentPricing: true,
    packages: [
      {
        name: "Starter",
        priceRange: "$9/user/month",
        description: "Perfect for small teams getting started with collaboration.",
        features: [
          "Up to 10 team members",
          "Basic project management",
          "Real-time collaboration",
          "5GB storage per user",
          "Email support"
        ],
        ctaText: "Start Free Trial",
        ctaLink: "/signup"
      },
      {
        name: "Professional",
        priceRange: "$19/user/month",
        description: "Advanced features for growing teams and complex projects.",
        features: [
          "Unlimited team members",
          "Advanced project templates",
          "Time tracking & reporting",
          "25GB storage per user",
          "Priority support",
          "Custom integrations"
        ],
        ctaText: "Start Free Trial",
        ctaLink: "/signup"
      },
      {
        name: "Enterprise",
        priceRange: "Custom",
        description: "Tailored solutions for large organizations with specific needs.",
        features: [
          "Everything in Professional",
          "Advanced security & compliance",
          "Dedicated account manager",
          "Custom training & onboarding",
          "SLA guarantee",
          "API access"
        ],
        ctaText: "Contact Sales",
        ctaLink: "/contact-sales"
      }
    ]
  },
  
  leadCapture: {
    title: "Ready to Transform Your Team's Productivity?",
    subtitle: "Join thousands of teams who have revolutionized their workflow with CloudSync Pro.",
    formType: "form",
    formFields: [
      {
        name: "email",
        label: "Work Email",
        type: "email",
        required: true
      },
      {
        name: "company",
        label: "Company Name",
        type: "text",
        required: true
      },
      {
        name: "team_size",
        label: "Team Size",
        type: "select",
        required: false
      }
    ],
    submitText: "Start Free 14-Day Trial"
  },
  
  footer: {
    companyName: "CloudSync Pro",
    contactInfo: {
      email: "support@cloudsyncpro.com"
    },
    sitemapLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security", href: "/security" },
      { label: "API Documentation", href: "/docs" },
      { label: "Help Center", href: "/help" }
    ]
  }
}

// Example usage component
export default function ExampleLandingPage() {
  return (
    <div>
      {/* Digital Agency Landing Page */}
      <DynamicLandingPageTemplate data={sampleLandingPageData} />
      
      {/* You can easily switch to a different data set */}
      {/* <DynamicLandingPageTemplate data={saasLandingPageData} /> */}
    </div>
  )
}

// Additional utility functions for creating landing page data
export const createMinimalLandingPageData = (overrides: Partial<LandingPageData>): LandingPageData => {
  const defaultData: LandingPageData = {
    header: {
      logo: "Your Company",
      contactCta: "Get Started",
      contactLink: "#contact"
    },
    hero: {
      targetKeyword: "Your Service",
      headline: "Transform Your Business Today",
      subheading: "We help companies achieve their goals through proven strategies and expert execution."
    },
    credibility: {
      clientLogos: ["CLIENT 1", "CLIENT 2", "CLIENT 3"],
      metric: { value: "100%", description: "client satisfaction" }
    },
    services: {
      title: "Our Services",
      items: [
        { title: "Service 1", outcomeDescription: "Achieve amazing results", workLink: "#work" },
        { title: "Service 2", outcomeDescription: "Drive real growth", workLink: "#work" },
        { title: "Service 3", outcomeDescription: "Maximize your ROI", workLink: "#work" }
      ]
    },
    caseStudy: {
      metric: "200%",
      metricDescription: "improvement in results",
      clientQuote: "This team delivered exceptional results for our business.",
      clientName: "John Doe",
      clientTitle: "CEO",
      caseStudyLink: "#case-study"
    },
    howWeWork: {
      title: "How We Work",
      steps: [
        { stepNumber: 1, title: "Discovery", description: "We understand your needs" },
        { stepNumber: 2, title: "Strategy", description: "We create a custom plan" },
        { stepNumber: 3, title: "Execution", description: "We deliver results" }
      ]
    },
    testimonials: {
      title: "What Clients Say",
      items: [
        {
          quote: "Outstanding service and results.",
          clientName: "Jane Smith",
          clientTitle: "Marketing Director",
          clientCompany: "ABC Corp",
          rating: 5
        }
      ]
    },
    pricing: {
      title: "Our Packages",
      showTransparentPricing: false,
      customOption: {
        title: "Custom Solutions",
        description: "Every business is unique. Let's create a solution that works for you.",
        ctaText: "Get Custom Quote",
        ctaLink: "#contact"
      }
    },
    leadCapture: {
      title: "Ready to Get Started?",
      subtitle: "Contact us today to learn how we can help your business grow.",
      formType: "form",
      formFields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "Message", type: "textarea", required: true }
      ],
      submitText: "Send Message"
    },
    footer: {
      companyName: "Your Company",
      contactInfo: { email: "contact@yourcompany.com" },
      sitemapLinks: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms", href: "/terms" }
      ]
    }
  }

  return { ...defaultData, ...overrides }
}