import { 
  Zap, 
  Target, 
  Rocket, 
  Github, 
  Star,
  TrendingUp,
  Award,
  Lightbulb
} from "lucide-react"
import { ModernLandingPageData } from "./ModernLandingPageTemplate"

// Example data for TechFlow - Developer Platform
export const modernLandingPageExampleData: ModernLandingPageData = {
  header: {
    logo: "TechFlow",
    navigation: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#integrations" },
      { label: "Documentation", href: "#docs" },
      { label: "Blog", href: "/blog" }
    ],
    contactCta: {
      label: "Get Started",
      href: "#contact"
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Developer Platform" }
    ]
  },

  hero: {
    headline: "Build scalable applications with the ultimate developer platform",
    targetKeyword: "developer platform",
    subheadline: "Streamline your development workflow with AI-powered tools, seamless integrations, and enterprise-grade infrastructure that scales with your team.",
    primaryCta: {
      label: "Get a free strategy call",
      href: "#contact"
    },
    secondaryCta: {
      label: "Watch Demo",
      href: "#demo",
      hasPlayIcon: true
    }
  },

  credibility: {
    metric: "+$2M in client revenue",
    description: "Generated through improved development efficiency and faster time-to-market",
    clientLogos: [
      { name: "Netflix" },
      { name: "Shopify" },
      { name: "GitHub" },
      { name: "Stripe" },
      { name: "Vercel" },
      { name: "Linear" }
    ]
  },

  services: {
    title: "Accelerate your development cycle",
    subtitle: "Our platform provides the essential tools and services to help your team ship faster and more reliably.",
    services: [
      {
        title: "AI-Powered Development",
        outcome: "Reduce coding time by 60% with intelligent code generation and suggestions",
        icon: Lightbulb,
        workLink: "/case-studies/ai-development"
      },
      {
        title: "Seamless CI/CD Pipeline",
        outcome: "Deploy 10x faster with automated testing and deployment workflows",
        icon: Rocket,
        workLink: "/case-studies/cicd-automation"
      },
      {
        title: "Performance Monitoring",
        outcome: "Improve app performance by 40% with real-time insights and optimization",
        icon: Target,
        workLink: "/case-studies/performance-monitoring"
      }
    ]
  },

  caseStudy: {
    metric: "150% faster deployment",
    metricDescription: "Average improvement in deployment speed across our client base",
    quote: "TechFlow transformed our development process. We went from weekly deployments to multiple deployments per day, and our team productivity has never been higher.",
    clientName: "Sarah Chen",
    clientRole: "VP of Engineering", 
    clientCompany: "InnovateCorp",
    fullCaseStudyLink: "/case-studies/innovatecorp"
  },

  howWeWork: {
    title: "How we work",
    subtitle: "Our proven methodology gets you from concept to production in record time.",
    steps: [
      {
        number: 1,
        title: "Discovery & Strategy",
        description: "We analyze your current workflow and identify optimization opportunities.",
        icon: Target
      },
      {
        number: 2,
        title: "Implementation & Integration",
        description: "Seamlessly integrate our platform with your existing tools and processes.",
        icon: Zap
      },
      {
        number: 3,
        title: "Launch & Optimization",
        description: "Go live with confidence and continuously optimize based on performance data.",
        icon: Rocket
      }
    ]
  },

  testimonials: {
    title: "What developers are saying",
    subtitle: "Join thousands of developers who have transformed their workflow with TechFlow.",
    testimonials: [
      {
        quote: "TechFlow has completely revolutionized how we build and deploy applications. The AI assistance is incredible.",
        clientName: "Alex Rodriguez",
        clientRole: "Senior Developer",
        clientCompany: "StartupXYZ",
        rating: 5
      },
      {
        quote: "The performance monitoring tools caught issues before they became problems. Saved us countless hours.",
        clientName: "Jessica Kim",
        clientRole: "DevOps Engineer", 
        clientCompany: "ScaleInc",
        rating: 5,
        videoUrl: "https://youtube.com/watch?v=testimonial1"
      },
      {
        quote: "Integration was seamless. We were up and running in less than an hour with full team onboarding.",
        clientName: "Michael Thompson",
        clientRole: "Technical Lead",
        clientCompany: "Enterprise Solutions",
        rating: 5
      }
    ]
  },

  pricing: {
    title: "Simple, transparent pricing",
    subtitle: "Choose the plan that fits your team size and project requirements. Scale as you grow.",
    plans: [
      {
        name: "Starter",
        priceRange: "$49-99/month",
        description: "Perfect for small teams and side projects",
        features: [
          "Up to 5 team members",
          "10 projects",
          "Basic AI assistance",
          "Community support",
          "Standard integrations"
        ],
        cta: {
          label: "Start Free Trial",
          href: "/signup?plan=starter"
        }
      },
      {
        name: "Professional",
        priceRange: "$199-399/month", 
        description: "Best for growing development teams",
        features: [
          "Up to 25 team members",
          "Unlimited projects",
          "Advanced AI features",
          "Priority support",
          "All integrations",
          "Performance analytics",
          "Custom workflows"
        ],
        cta: {
          label: "Get Started",
          href: "/signup?plan=professional"
        },
        featured: true
      },
      {
        name: "Enterprise",
        priceRange: "$999+/month",
        description: "For large organizations with complex needs",
        features: [
          "Unlimited team members",
          "Enterprise security",
          "Custom integrations",
          "24/7 dedicated support",
          "On-premise deployment",
          "Advanced analytics",
          "Custom SLA"
        ],
        cta: {
          label: "Contact Sales",
          href: "/contact-sales"
        }
      }
    ],
    customOption: {
      title: "Need something different?",
      description: "We offer custom solutions tailored to your specific requirements and scale.",
      cta: {
        label: "Discuss Custom Pricing",
        href: "#contact"
      }
    }
  },

  leadCapture: {
    title: "Ready to transform your development workflow?",
    subtitle: "Get started with a free consultation and see how TechFlow can accelerate your team's productivity.",
    form: {
      fields: [
        {
          name: "name",
          label: "Full Name",
          type: "text",
          required: true
        },
        {
          name: "email", 
          label: "Work Email",
          type: "email",
          required: true
        },
        {
          name: "company",
          label: "Company",
          type: "text",
          required: true
        },
        {
          name: "team_size",
          label: "Team Size",
          type: "text"
        },
        {
          name: "message",
          label: "Tell us about your current challenges",
          type: "textarea"
        }
      ],
      submitLabel: "Get a free strategy call",
      submitHref: "/contact"
    },
    calendar: {
      nextAvailability: "Today at 3:00 PM PST",
      bookingUrl: "https://calendly.com/techflow/strategy-call"
    },
    contact: {
      phone: "+1 (555) 123-4567",
      email: "hello@techflow.dev",
      address: "123 Innovation Street, Suite 100, San Francisco, CA 94105"
    }
  },

  footer: {
    logo: "TechFlow",
    description: "The complete platform for modern development teams. Build faster, deploy smarter, scale confidently.",
    contact: {
      phone: "+1 (555) 123-4567",
      email: "hello@techflow.dev",
      address: "123 Innovation Street, Suite 100, San Francisco, CA 94105"
    },
    links: {
      product: [
        { label: "Features", href: "/features" },
        { label: "Integrations", href: "/integrations" },
        { label: "Pricing", href: "/pricing" },
        { label: "Changelog", href: "/changelog" }
      ],
      resources: [
        { label: "Documentation", href: "/docs" },
        { label: "Blog", href: "/blog" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Community", href: "/community" }
      ],
      company: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Press", href: "/press" }
      ],
      legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Security", href: "/security" },
        { label: "GDPR", href: "/gdpr" }
      ]
    },
    social: [
      {
        platform: "GitHub",
        href: "https://github.com/techflow",
        icon: Github
      },
      {
        platform: "Twitter",
        href: "https://twitter.com/techflow",
        icon: Star
      }
    ],
    copyright: "© 2025 TechFlow. All rights reserved."
  }
}

// Alternative example data for DataFlow - Analytics Platform
export const modernAnalyticsPlatformData: ModernLandingPageData = {
  header: {
    logo: "DataFlow",
    navigation: [
      { label: "Platform", href: "#platform" },
      { label: "Solutions", href: "#solutions" },
      { label: "Pricing", href: "#pricing" },
      { label: "Resources", href: "#resources" }
    ],
    contactCta: {
      label: "Book Demo",
      href: "#contact"
    }
  },

  hero: {
    headline: "Turn your data into actionable business insights",
    targetKeyword: "business insights",
    subheadline: "Advanced analytics platform that helps enterprise teams make data-driven decisions 10x faster with AI-powered insights and real-time dashboards.",
    primaryCta: {
      label: "Get a free strategy call",
      href: "#contact"
    },
    secondaryCta: {
      label: "Explore Platform",
      href: "#platform"
    }
  },

  credibility: {
    metric: "+$5M in client revenue",
    description: "Additional revenue generated through data-driven decision making",
    clientLogos: [
      { name: "Salesforce" },
      { name: "Adobe" },
      { name: "Microsoft" },
      { name: "Oracle" },
      { name: "IBM" },
      { name: "Tableau" }
    ]
  },

  services: {
    title: "Transform data into competitive advantage",
    subtitle: "Our platform provides enterprise-grade analytics tools that scale with your business needs.",
    services: [
      {
        title: "Real-time Analytics",
        outcome: "Get insights 90% faster with live data processing and visualization",
        icon: TrendingUp,
        workLink: "/case-studies/real-time-analytics"
      },
      {
        title: "Predictive Modeling",
        outcome: "Improve forecast accuracy by 85% with AI-powered predictions",
        icon: Target,
        workLink: "/case-studies/predictive-modeling"
      },
      {
        title: "Custom Dashboards",
        outcome: "Reduce reporting time by 75% with automated, customizable dashboards",
        icon: Award,
        workLink: "/case-studies/custom-dashboards"
      }
    ]
  },

  caseStudy: {
    metric: "300% ROI increase",
    metricDescription: "Average return on investment achieved by our enterprise clients",
    quote: "DataFlow helped us identify $2M in cost savings within the first quarter. The predictive analytics completely transformed our supply chain optimization.",
    clientName: "Marcus Johnson",
    clientRole: "Chief Data Officer",
    clientCompany: "GlobalTech Industries",
    fullCaseStudyLink: "/case-studies/globaltech"
  },

  howWeWork: {
    title: "How we work",
    subtitle: "Our proven methodology ensures successful analytics transformation for enterprise clients.",
    steps: [
      {
        number: 1,
        title: "Data Assessment",
        description: "Comprehensive audit of your data infrastructure and analytics maturity.",
        icon: Target
      },
      {
        number: 2,
        title: "Platform Integration",
        description: "Seamless deployment and integration with your existing data ecosystem.",
        icon: Zap
      },
      {
        number: 3,
        title: "Insights & Optimization",
        description: "Continuous improvement and optimization based on business outcomes.",
        icon: Award
      }
    ]
  },

  testimonials: {
    title: "Trusted by data leaders",
    subtitle: "See how enterprise teams are leveraging DataFlow to drive business growth.",
    testimonials: [
      {
        quote: "DataFlow's predictive models helped us reduce inventory costs by 40% while improving customer satisfaction.",
        clientName: "Lisa Wang",
        clientRole: "Director of Analytics",
        clientCompany: "RetailCorp",
        rating: 5
      },
      {
        quote: "The real-time dashboards gave our executives the visibility they needed to make critical decisions during market volatility.",
        clientName: "David Park",
        clientRole: "VP of Strategy",
        clientCompany: "FinanceFirst",
        rating: 5
      },
      {
        quote: "Implementation was smooth and the support team was exceptional. We saw results within the first month.",
        clientName: "Amanda Foster",
        clientRole: "Head of Business Intelligence",
        clientCompany: "TechGiant",
        rating: 5
      }
    ]
  },

  pricing: {
    title: "Enterprise-grade pricing",
    subtitle: "Flexible pricing options designed for organizations of all sizes.",
    plans: [
      {
        name: "Professional",
        priceRange: "$999-1,999/month",
        description: "For growing companies with expanding data needs",
        features: [
          "Up to 100GB data processing",
          "10 custom dashboards",
          "Basic AI insights",
          "Email support",
          "Standard integrations",
          "Monthly reports"
        ],
        cta: {
          label: "Start Trial",
          href: "/signup?plan=professional"
        }
      },
      {
        name: "Enterprise",
        priceRange: "$4,999-9,999/month",
        description: "For large organizations with complex analytics needs",
        features: [
          "Unlimited data processing",
          "Unlimited dashboards",
          "Advanced AI & ML models",
          "24/7 phone support",
          "Custom integrations",
          "Real-time alerts",
          "Advanced security"
        ],
        cta: {
          label: "Contact Sales",
          href: "/contact-sales"
        },
        featured: true
      },
      {
        name: "Enterprise Plus",
        priceRange: "$15,000+/month",
        description: "For Fortune 500 companies requiring maximum customization",
        features: [
          "White-label solution",
          "Dedicated infrastructure",
          "Custom AI model training",
          "Dedicated success manager",
          "On-premise deployment",
          "Custom SLA",
          "Advanced compliance"
        ],
        cta: {
          label: "Schedule Consultation",
          href: "/enterprise-consultation"
        }
      }
    ],
    customOption: {
      title: "Need a custom solution?",
      description: "We work with Fortune 500 companies to create bespoke analytics platforms.",
      cta: {
        label: "Discuss Enterprise Needs",
        href: "#contact"
      }
    }
  },

  leadCapture: {
    title: "Ready to unlock your data's potential?",
    subtitle: "Schedule a personalized demo and see how DataFlow can transform your analytics capabilities.",
    form: {
      fields: [
        {
          name: "name",
          label: "Full Name",
          type: "text",
          required: true
        },
        {
          name: "email",
          label: "Corporate Email",
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
          name: "title",
          label: "Job Title",
          type: "text"
        },
        {
          name: "data_size",
          label: "Monthly Data Volume",
          type: "text"
        },
        {
          name: "requirements",
          label: "Specific Analytics Requirements",
          type: "textarea"
        }
      ],
      submitLabel: "Get a free strategy call",
      submitHref: "/enterprise-contact"
    },
    calendar: {
      nextAvailability: "Tomorrow at 10:00 AM EST",
      bookingUrl: "https://calendly.com/dataflow/enterprise-demo"
    },
    contact: {
      phone: "+1 (555) 987-6543",
      email: "enterprise@dataflow.com",
      address: "456 Analytics Avenue, Suite 200, New York, NY 10001"
    }
  },

  footer: {
    logo: "DataFlow",
    description: "Enterprise analytics platform trusted by Fortune 500 companies to drive data-driven decision making.",
    contact: {
      phone: "+1 (555) 987-6543",
      email: "enterprise@dataflow.com",
      address: "456 Analytics Avenue, Suite 200, New York, NY 10001"
    },
    links: {
      platform: [
        { label: "Features", href: "/features" },
        { label: "Integrations", href: "/integrations" },
        { label: "Security", href: "/security" },
        { label: "API", href: "/api" }
      ],
      solutions: [
        { label: "Real-time Analytics", href: "/solutions/real-time" },
        { label: "Predictive Modeling", href: "/solutions/predictive" },
        { label: "Custom Dashboards", href: "/solutions/dashboards" },
        { label: "Enterprise AI", href: "/solutions/ai" }
      ],
      resources: [
        { label: "Documentation", href: "/docs" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Webinars", href: "/webinars" },
        { label: "White Papers", href: "/white-papers" }
      ],
      company: [
        { label: "About", href: "/about" },
        { label: "Leadership", href: "/leadership" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" }
      ]
    },
    social: [
      {
        platform: "LinkedIn",
        href: "https://linkedin.com/company/dataflow",
        icon: Star
      }
    ],
    copyright: "© 2025 DataFlow Analytics. All rights reserved."
  }
}