"use client"

import React from 'react'
import { 
  Target,
  TrendingUp,
  Users,
  Zap,
  Award,
  CheckCircle2,
  BarChart3,
  Workflow,
  Gauge,
  Brain
} from 'lucide-react'
import MinimalistLandingPageTemplate from './MinimalistLandingPageTemplate'

// Example data for Minimalist SaaS Landing Page Template
export const minimalistLandingPageExampleData = {
  header: {
    logo: "FlowSpace",
    navigation: [
      { label: "Features", href: "#features" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Pricing", href: "#pricing" },
      { label: "Resources", href: "/resources" }
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Workflow Automation", href: "/solutions/workflow" }
    ],
    contactCta: {
      label: "Get Started",
      href: "#contact"
    }
  },

  hero: {
    badge: "Workflow Automation Platform",
    headline: "Streamline Professional Workflows with Clarity and Speed",
    targetKeyword: "Workflows",
    subheadline: "FlowSpace is a minimalist platform designed for focused teams. Automate routine tasks, align processes, and move work forward with confidence. Built for productivity and trust.",
    primaryCta: {
      label: "Get a free strategy call",
      href: "#contact"
    },
    secondaryCta: {
      label: "Watch Demo",
      href: "#demo"
    }
  },

  credibility: {
    metric: "+$2M in client revenue saved through automation",
    clientLogos: [
      { src: "/logos/slack.png", alt: "Slack" },
      { src: "/logos/notion.png", alt: "Notion" },
      { src: "/logos/linear.png", alt: "Linear" },
      { src: "/logos/figma.png", alt: "Figma" },
      { src: "/logos/github.png", alt: "GitHub" },
      { src: "/logos/stripe.png", alt: "Stripe" }
    ]
  },

  services: {
    title: "Built for Productivity and Trust",
    subtitle: "A structured, grid-first system that keeps your team aligned and accountable while reducing noise.",
    services: [
      {
        title: "Workflow Automation",
        outcome: "Reduce manual tasks by 80% with intelligent automation that learns your processes",
        icon: Workflow,
        link: "/services/automation"
      },
      {
        title: "Performance Analytics",
        outcome: "Gain clear visibility into bottlenecks and optimize team productivity with data-driven insights",
        icon: Gauge,
        link: "/services/analytics"
      },
      {
        title: "Smart Integrations",
        outcome: "Connect all your tools seamlessly with 200+ pre-built integrations and custom API support",
        icon: Brain,
        link: "/services/integrations"
      }
    ]
  },

  caseStudy: {
    title: "How TechCorp Reduced Manual Work by 75% in 3 Months",
    metric: "75% Efficiency Gain",
    metricDescription: "Manual work reduction in Q1",
    clientQuote: "FlowSpace transformed how our engineering team operates. What used to take hours of manual coordination now happens automatically. Our deployment frequency increased 3x while errors decreased by 90%.",
    clientName: "Sarah Chen",
    clientTitle: "VP of Engineering",
    caseStudyLink: "/case-studies/techcorp",
    image: "/case-study-techcorp-dashboard.jpg",
    imageAlt: "TechCorp workflow automation dashboard showing efficiency gains"
  },

  howWeWork: {
    title: "Simple Setup, Powerful Results",
    subtitle: "Get your team automated and aligned in three focused steps. No complex training or lengthy onboarding required.",
    steps: [
      {
        title: "Map Your Workflows",
        description: "Our intuitive visual builder helps you map existing processes and identify automation opportunities within minutes.",
        visual: BarChart3
      },
      {
        title: "Automate & Connect",
        description: "Set up intelligent automations and connect your existing tools with our pre-built integrations and smart triggers.",
        visual: Zap
      },
      {
        title: "Monitor & Optimize",
        description: "Track performance, identify bottlenecks, and continuously improve your workflows with real-time analytics and insights.",
        visual: TrendingUp
      }
    ]
  },

  testimonials: {
    title: "Trusted by Teams That Ship Fast",
    subtitle: "See how forward-thinking companies use FlowSpace to eliminate busywork and focus on what matters most.",
    testimonials: [
      {
        quote: "Our deployment pipeline went from 4 hours of manual work to 15 minutes fully automated. The ROI was immediate and the setup was surprisingly simple.",
        name: "Marcus Rodriguez",
        title: "DevOps Lead",
        company: "StartupXYZ",
        photo: "/testimonials/marcus-rodriguez.jpg",
        logo: "/logos/startupxyz.png",
        rating: 5
      },
      {
        quote: "FlowSpace helped us scale from 10 to 100 employees without adding operational overhead. Our processes stayed clean and everyone knew exactly what to do.",
        name: "Jennifer Kim",
        title: "COO",
        company: "GrowthCo",
        photo: "/testimonials/jennifer-kim.jpg",
        logo: "/logos/growthco.png",
        rating: 5
      },
      {
        quote: "The analytics helped us identify that 60% of our support tickets were automatable. We reduced response time from hours to minutes.",
        name: "David Park",
        title: "Head of Customer Success",
        company: "ServicePro",
        photo: "/testimonials/david-park.jpg",
        logo: "/logos/servicepro.png",
        rating: 5
      }
    ],
    videoTestimonial: {
      thumbnail: "/video-testimonial-flowspace.jpg",
      videoUrl: "https://www.youtube.com/watch?v=example"
    }
  },

  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle: "Choose a plan that fits your team's pace and complexity. Start free and scale as you grow.",
    packages: [
      {
        name: "Starter",
        description: "For individuals and small teams getting started.",
        price: "$19",
        period: "/mo",
        features: [
          "Unlimited workflows",
          "Basic automations", 
          "Email support",
          "Core integrations",
          "Up to 5 team members"
        ],
        ctaText: "Start Free",
        ctaLink: "#signup",
        featured: false
      },
      {
        name: "Pro",
        description: "Advanced controls for growing teams.",
        price: "$49",
        period: "/mo",
        features: [
          "All Starter features",
          "Advanced automations",
          "Role-based access",
          "Priority support",
          "Custom integrations",
          "Advanced analytics",
          "Up to 25 team members"
        ],
        ctaText: "Upgrade",
        ctaLink: "#signup",
        featured: true
      },
      {
        name: "Business",
        description: "Security, compliance, and tailored onboarding.",
        price: "Custom",
        period: "",
        features: [
          "SSO & SAML",
          "Audit logs",
          "Dedicated success manager",
          "Custom SLA",
          "Advanced security",
          "Unlimited team members"
        ],
        ctaText: "Contact Sales",
        ctaLink: "#contact",
        featured: false
      }
    ],
    customOption: {
      title: "Enterprise Solutions",
      description: "For large organizations with specific compliance, security, and integration requirements.",
      ctaText: "Discuss Custom Plan",
      ctaLink: "#contact"
    }
  },

  leadCapture: {
    title: "Ready to Automate Your Workflows?",
    subtitle: "Join hundreds of teams already saving hours every week with intelligent automation.",
    formTitle: "Get Your Free Workflow Analysis",
    formCta: "Get My Free Analysis",
    nextAvailability: "Today at 3:00 PM EST",
    calendarLink: "https://calendly.com/flowspace/workflow-analysis",
    email: "hello@flowspace.io",
    phone: "+1 (555) 234-5678",
    address: "123 Automation Street, Suite 200, San Francisco, CA 94107"
  },

  footer: {
    logo: "FlowSpace",
    description: "A minimalist workflow automation platform designed for focused teams. Streamline processes, reduce manual work, and scale with confidence.",
    email: "hello@flowspace.io",
    phone: "+1 (555) 234-5678",
    address: "123 Automation Street, Suite 200, San Francisco, CA 94107",
    links: [
      {
        title: "Product",
        items: [
          { label: "Features", href: "/features" },
          { label: "Integrations", href: "/integrations" },
          { label: "Security", href: "/security" },
          { label: "API", href: "/api" }
        ]
      },
      {
        title: "Resources",
        items: [
          { label: "Documentation", href: "/docs" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Blog", href: "/blog" },
          { label: "Templates", href: "/templates" }
        ]
      },
      {
        title: "Company",
        items: [
          { label: "About", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
          { label: "Partners", href: "/partners" }
        ]
      }
    ],
    privacy: { label: "Privacy Policy", href: "/privacy" },
    terms: { label: "Terms of Service", href: "/terms" },
    copyright: "© 2024 FlowSpace. All rights reserved."
  }
}

// Alternative example for Project Management SaaS
export const projectManagementExampleData = {
  header: {
    logo: "TaskGrid",
    navigation: [
      { label: "Platform", href: "#platform" },
      { label: "Solutions", href: "#solutions" },
      { label: "Pricing", href: "#pricing" },
      { label: "Support", href: "/support" }
    ],
    contactCta: {
      label: "Start Trial",
      href: "#signup"
    }
  },

  hero: {
    badge: "Clean Project Management",
    headline: "Organize Projects with Minimal Complexity and Maximum Focus",
    targetKeyword: "Projects",
    subheadline: "TaskGrid eliminates project management bloat. Simple grids, clear ownership, and essential features that help teams deliver without the noise.",
    primaryCta: {
      label: "Get a free strategy call",
      href: "#contact"
    },
    secondaryCta: {
      label: "View Live Demo",
      href: "#demo"
    }
  },

  credibility: {
    metric: "+500 teams manage projects more efficiently",
    clientLogos: [
      { src: "/logos/vercel.png", alt: "Vercel" },
      { src: "/logos/supabase.png", alt: "Supabase" },
      { src: "/logos/resend.png", alt: "Resend" },
      { src: "/logos/cal.png", alt: "Cal.com" },
      { src: "/logos/railway.png", alt: "Railway" },
      { src: "/logos/planetscale.png", alt: "PlanetScale" }
    ]
  },

  services: {
    title: "Everything You Need, Nothing You Don't",
    subtitle: "Focus on shipping great work with tools designed for clarity, not complexity.",
    services: [
      {
        title: "Grid-Based Planning",
        outcome: "Visualize project timelines and dependencies with simple, intuitive grids that everyone understands",
        icon: BarChart3,
        link: "/features/planning"
      },
      {
        title: "Smart Task Management",
        outcome: "Auto-organize tasks by priority and deadlines while keeping teams focused on what matters most",
        icon: Target,
        link: "/features/tasks"
      },
      {
        title: "Minimal Reporting",
        outcome: "Get essential project insights without overwhelming dashboards or complex analytics",
        icon: TrendingUp,
        link: "/features/reports"
      }
    ]
  },

  caseStudy: {
    title: "How DesignStudio Shipped 3x More Projects with TaskGrid",
    metric: "300% Project Velocity",
    metricDescription: "Increase in completed projects per quarter",
    clientQuote: "TaskGrid gave our design team the structure we needed without the overhead. We went from missed deadlines to consistently shipping ahead of schedule. The simplicity is what makes it powerful.",
    clientName: "Alex Thompson",
    clientTitle: "Creative Director",
    caseStudyLink: "/case-studies/designstudio",
    image: "/case-study-designstudio.jpg",
    imageAlt: "DesignStudio project dashboard showing improved delivery metrics"
  },

  howWeWork: {
    title: "From Chaos to Clarity in Minutes",
    subtitle: "Transform how your team works with a process so simple, everyone adopts it immediately.",
    steps: [
      {
        title: "Create Your Grid",
        description: "Start with our clean project template or import from existing tools. Set up takes less than 5 minutes.",
        visual: CheckCircle2
      },
      {
        title: "Invite Your Team",
        description: "Add team members with clear roles and permissions. Everyone sees exactly what they need to do.",
        visual: Users
      },
      {
        title: "Ship & Iterate",
        description: "Track progress with minimal overhead. Focus on work, not managing the system that tracks the work.",
        visual: Award
      }
    ]
  },

  testimonials: {
    title: "Loved by Teams Who Value Simplicity",
    subtitle: "See how teams use TaskGrid to cut through project management complexity and focus on great work.",
    testimonials: [
      {
        quote: "Finally, a project management tool that doesn't require a manual. We were productive from day one and our projects have never been more organized.",
        name: "Lisa Zhang",
        title: "Product Manager",
        company: "InnovateTech",
        photo: "/testimonials/lisa-zhang.jpg",
        logo: "/logos/innovatetech.png",
        rating: 5
      },
      {
        quote: "TaskGrid helped us eliminate 3 other tools while actually improving our workflow. Less complexity, better results, happier team.",
        name: "James Wilson",
        title: "Engineering Manager",
        company: "BuildCo",
        photo: "/testimonials/james-wilson.jpg",
        logo: "/logos/buildco.png",
        rating: 5
      },
      {
        quote: "Our client projects are now consistently delivered on time and under budget. The visibility and simplicity transformed how we work.",
        name: "Maria Santos",
        title: "Agency Owner",
        company: "CreativeFlow",
        photo: "/testimonials/maria-santos.jpg",
        logo: "/logos/creativeflow.png",
        rating: 5
      }
    ]
  },

  pricing: {
    title: "Straightforward Pricing for Every Team",
    subtitle: "Start with what you need today and scale as you grow. No hidden fees or complex tiers.",
    packages: [
      {
        name: "Solo",
        description: "Perfect for individual contributors and freelancers.",
        price: "Free",
        period: "forever",
        features: [
          "Up to 3 projects",
          "Basic task management",
          "Grid view",
          "File attachments",
          "Email notifications"
        ],
        ctaText: "Start Free",
        ctaLink: "#signup",
        featured: false
      },
      {
        name: "Team",
        description: "For small to medium teams working together.",
        price: "$12",
        period: "/user/mo",
        features: [
          "Unlimited projects",
          "Team collaboration",
          "Advanced views",
          "Time tracking",
          "Custom fields",
          "Priority support"
        ],
        ctaText: "Start Trial",
        ctaLink: "#signup",
        featured: true
      },
      {
        name: "Organization",
        description: "For larger teams with advanced needs.",
        price: "$24",
        period: "/user/mo",
        features: [
          "Everything in Team",
          "Advanced permissions",
          "Custom workflows",
          "API access",
          "SSO integration",
          "Dedicated support"
        ],
        ctaText: "Contact Sales",
        ctaLink: "#contact",
        featured: false
      }
    ],
    customOption: {
      title: "Enterprise",
      description: "Custom solutions for large organizations with specific security and compliance requirements.",
      ctaText: "Discuss Enterprise",
      ctaLink: "#contact"
    }
  },

  leadCapture: {
    title: "Ready to Simplify Your Projects?",
    subtitle: "Join teams who chose clarity over complexity. Start managing projects the simple way.",
    formTitle: "Start Your Free Trial",
    formCta: "Start Free Trial",
    nextAvailability: "Setup in under 5 minutes",
    calendarLink: "https://calendly.com/taskgrid/demo",
    email: "support@taskgrid.co",
    phone: "+1 (555) 345-6789"
  },

  footer: {
    logo: "TaskGrid",
    description: "Clean, simple project management that helps teams focus on great work instead of managing complex systems.",
    email: "support@taskgrid.co",
    phone: "+1 (555) 345-6789",
    links: [
      {
        title: "Product",
        items: [
          { label: "Features", href: "/features" },
          { label: "Templates", href: "/templates" },
          { label: "Mobile App", href: "/mobile" },
          { label: "Integrations", href: "/integrations" }
        ]
      },
      {
        title: "Resources",
        items: [
          { label: "Help Center", href: "/help" },
          { label: "Best Practices", href: "/guides" },
          { label: "Webinars", href: "/webinars" },
          { label: "Community", href: "/community" }
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
    copyright: "© 2024 TaskGrid. All rights reserved."
  }
}

// Component for demonstrating usage
export default function MinimalistExampleUsage() {
  return (
    <div className="space-y-20">
      <div>
        <h2 className="text-2xl font-bold mb-4">Workflow Automation Platform Example</h2>
        <MinimalistLandingPageTemplate data={minimalistLandingPageExampleData} />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Project Management SaaS Example</h2>
        <MinimalistLandingPageTemplate data={projectManagementExampleData} />
      </div>
    </div>
  )
}

// Utility functions for creating custom data
export const createMinimalistServiceItem = (
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

export const createMinimalistTestimonial = (
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

export const createMinimalistPricingPackage = (
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