import React from "react"
import MinimalistLandingPageTemplate, { MinimalistLandingPageData } from "./MinimalistLandingPageTemplate"

// Example data for the minimalist landing page
const sampleMinimalistLandingPageData: MinimalistLandingPageData = {
  header: {
    logo: "Studio Clarity",
    contactCta: "Start project",
    contactLink: "#contact",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Brand Strategy", href: "/services/brand-strategy" }
    ]
  },
  
  hero: {
    tagline: "Design & Strategy",
    targetKeyword: "Brand Strategy Agency",
    headline: "Clear thinking. Purposeful design. Meaningful results.",
    subheading: "We help ambitious companies build brands that matter through strategic thinking and thoughtful design.",
    primaryCtaText: "Get a free strategy call",
    primaryCtaLink: "#contact",
    secondaryCtaText: "View our work",
    secondaryCtaLink: "#work"
  },
  
  credibility: {
    clientLogos: ["VERTEX", "LUNAR", "AXIOM", "PULSE", "ZENITH"],
    metric: {
      value: "+250%",
      description: "average brand value increase"
    }
  },
  
  services: {
    title: "Services",
    subtitle: "Clear structure, fewer steps, better outcomes.",
    items: [
      {
        title: "Brand Strategy",
        outcomeDescription: "Positioning and messaging that clarifies your unique value and resonates with your audience.",
        workLink: "/work/brand-strategy"
      },
      {
        title: "Visual Identity",
        outcomeDescription: "Cohesive design systems that communicate your brand essence across all touchpoints.",
        workLink: "/work/visual-identity"
      },
      {
        title: "Digital Experience",
        outcomeDescription: "Websites and digital products that are both beautiful and highly functional.",
        workLink: "/work/digital-experience"
      }
    ]
  },
  
  caseStudy: {
    metric: "185%",
    metricDescription: "increase in qualified leads",
    clientQuote: "Studio Clarity didn't just redesign our brand—they redefined our entire market position. The results speak for themselves.",
    clientName: "Marcus Chen",
    clientTitle: "Founder & CEO",
    caseStudyLink: "/case-studies/tech-startup"
  },
  
  howWeWork: {
    title: "How we work",
    subtitle: "A clear process that delivers meaningful results.",
    steps: [
      {
        stepNumber: 1,
        title: "Discover",
        description: "We dive deep into your business, market, and audience to uncover strategic opportunities."
      },
      {
        stepNumber: 2,
        title: "Define",
        description: "We craft a clear brand strategy and visual direction that sets you apart from competitors."
      },
      {
        stepNumber: 3,
        title: "Deliver",
        description: "We execute with precision, creating touchpoints that bring your brand to life consistently."
      }
    ]
  },
  
  testimonials: {
    title: "What clients say",
    subtitle: "Trusted by forward-thinking companies.",
    items: [
      {
        quote: "The strategic thinking and design execution were flawless. Our brand now truly reflects who we are and where we're going.",
        clientName: "Sarah Johnson",
        clientTitle: "CMO",
        clientCompany: "InnovateHub",
        clientImage: "/images/client-sarah.jpg",
        rating: 5
      },
      {
        quote: "Working with Studio Clarity was transformative. They helped us see our brand from a completely new perspective.",
        clientName: "David Kim",
        clientTitle: "Founder",
        clientCompany: "GrowthLab",
        clientImage: "/images/client-david.jpg",
        videoUrl: "/testimonials/david-video",
        rating: 5
      },
      {
        quote: "Their minimalist approach to design and strategy cuts through the noise. Every element serves a purpose.",
        clientName: "Elena Rodriguez",
        clientTitle: "Creative Director",
        clientCompany: "FutureScope",
        clientImage: "/images/client-elena.jpg",
        rating: 5
      },
      {
        quote: "The brand strategy they developed became the foundation for our entire business transformation.",
        clientName: "James Wilson",
        clientTitle: "CEO",
        clientCompany: "NextGen Solutions",
        clientImage: "/images/client-james.jpg",
        rating: 5
      }
    ]
  },
  
  pricing: {
    title: "Investment",
    subtitle: "Transparent pricing for clear value.",
    showTransparentPricing: true,
    packages: [
      {
        name: "Brand Foundation",
        priceRange: "$8,000 - $15,000",
        description: "Essential brand strategy and visual identity for startups and small businesses.",
        features: [
          "Brand strategy workshop",
          "Logo and visual identity system",
          "Brand guidelines document",
          "Basic stationery design",
          "2 rounds of revisions"
        ],
        ctaText: "Get started",
        ctaLink: "#contact"
      },
      {
        name: "Brand Evolution",
        priceRange: "$15,000 - $30,000",
        description: "Comprehensive rebrand for established companies looking to evolve.",
        features: [
          "In-depth brand audit",
          "Complete visual identity system",
          "Comprehensive brand guidelines",
          "Website design concepts",
          "Marketing collateral templates",
          "3 rounds of revisions"
        ],
        ctaText: "Learn more",
        ctaLink: "#contact"
      },
      {
        name: "Brand Transformation",
        priceRange: "$30,000+",
        description: "Full-scale brand transformation for enterprises and high-growth companies.",
        features: [
          "Extensive market research",
          "Complete brand architecture",
          "Full digital experience design",
          "Brand implementation strategy",
          "Team training and workshops",
          "Ongoing brand consultation"
        ],
        ctaText: "Discuss project",
        ctaLink: "#contact"
      }
    ],
    customOption: {
      title: "Need something different?",
      description: "Every brand challenge is unique. Let's discuss how we can help you achieve your specific goals.",
      ctaText: "Start conversation",
      ctaLink: "#contact"
    }
  },
  
  leadCapture: {
    title: "Ready to clarify your brand?",
    subtitle: "Let's discuss how we can help you build a brand that truly matters.",
    formType: "form",
    nextAvailability: "This week",
    formFields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        required: true
      },
      {
        name: "company",
        label: "Company",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true
      },
      {
        name: "phone",
        label: "Phone",
        type: "tel",
        required: false
      },
      {
        name: "project_type",
        label: "Project type",
        type: "text",
        required: false
      },
      {
        name: "timeline",
        label: "Timeline",
        type: "text",
        required: false
      },
      {
        name: "message",
        label: "Tell us about your project",
        type: "textarea",
        required: true
      }
    ],
    submitText: "Send message"
  },
  
  footer: {
    companyName: "Studio Clarity",
    tagline: "Let's make it clear.",
    contactInfo: {
      address: "123 Design District\nNew York, NY 10001",
      email: "hello@studioclarity.com",
      phone: "+1 (555) 123-4567"
    },
    sitemapLinks: [
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Journal", href: "/journal" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" }
    ],
    socialLinks: [
      { platform: "Instagram", url: "https://instagram.com/studioclarity" },
      { platform: "LinkedIn", url: "https://linkedin.com/company/studioclarity" },
      { platform: "Twitter", url: "https://twitter.com/studioclarity" }
    ]
  }
}

// Alternative data example for a different use case (Tech consultancy)
export const techConsultancyLandingPageData: MinimalistLandingPageData = {
  header: {
    logo: "Vector Labs",
    contactCta: "Book consultation",
    contactLink: "/consultation",
  },
  
  hero: {
    tagline: "Technology & Innovation",
    targetKeyword: "Technology Consulting",
    headline: "Precise solutions. Scalable systems. Measurable impact.",
    subheading: "We help technology companies build robust, scalable solutions through strategic consulting and technical expertise.",
    primaryCtaText: "Get a free strategy call",
    primaryCtaLink: "#contact",
    secondaryCtaText: "View case studies",
    secondaryCtaLink: "#work"
  },
  
  credibility: {
    clientLogos: ["KUBERNETES", "DOCKER", "AWS", "TERRAFORM", "REDIS"],
    metric: {
      value: "99.9%",
      description: "system uptime achieved"
    }
  },
  
  services: {
    title: "Expertise",
    subtitle: "Strategic technology consulting for modern challenges.",
    items: [
      {
        title: "Cloud Architecture",
        outcomeDescription: "Scalable, secure cloud infrastructure that grows with your business needs.",
        workLink: "/services/cloud-architecture"
      },
      {
        title: "DevOps & Automation",
        outcomeDescription: "Streamlined deployment pipelines that reduce errors and accelerate delivery.",
        workLink: "/services/devops"
      },
      {
        title: "System Optimization",
        outcomeDescription: "Performance improvements that reduce costs and enhance user experience.",
        workLink: "/services/optimization"
      }
    ]
  },
  
  caseStudy: {
    metric: "75%",
    metricDescription: "reduction in deployment time",
    clientQuote: "Vector Labs transformed our entire development workflow. What used to take hours now takes minutes.",
    clientName: "Alex Thompson",
    clientTitle: "CTO",
    caseStudyLink: "/case-studies/fintech-platform"
  },
  
  howWeWork: {
    title: "Our approach",
    subtitle: "Systematic methodology for lasting results.",
    steps: [
      {
        stepNumber: 1,
        title: "Assess",
        description: "We analyze your current systems and identify optimization opportunities."
      },
      {
        stepNumber: 2,
        title: "Architect",
        description: "We design scalable solutions tailored to your specific requirements."
      },
      {
        stepNumber: 3,
        title: "Implement",
        description: "We execute with precision, ensuring minimal disruption to your operations."
      }
    ]
  },
  
  testimonials: {
    title: "Client feedback",
    items: [
      {
        quote: "Their technical expertise and strategic thinking helped us scale from startup to enterprise seamlessly.",
        clientName: "Maria Santos",
        clientTitle: "VP Engineering",
        clientCompany: "ScaleUp Inc",
        rating: 5
      },
      {
        quote: "The system architecture they designed has been running flawlessly for two years. Outstanding work.",
        clientName: "Robert Chen",
        clientTitle: "Lead Developer",
        clientCompany: "DataFlow Systems",
        rating: 5
      }
    ]
  },
  
  pricing: {
    title: "Engagement models",
    showTransparentPricing: false,
    customOption: {
      title: "Tailored solutions",
      description: "Every technology challenge requires a unique approach. Let's discuss your specific needs and create a custom engagement plan.",
      ctaText: "Schedule consultation",
      ctaLink: "#contact"
    }
  },
  
  leadCapture: {
    title: "Ready to optimize your systems?",
    subtitle: "Let's discuss how we can help you build more efficient, scalable technology solutions.",
    formType: "form",
    formFields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        required: true
      },
      {
        name: "company",
        label: "Company",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true
      },
      {
        name: "challenge",
        label: "Technical challenge",
        type: "textarea",
        required: true
      }
    ],
    submitText: "Start conversation"
  },
  
  footer: {
    companyName: "Vector Labs",
    contactInfo: {
      email: "hello@vectorlabs.io"
    },
    sitemapLinks: [
      { label: "Services", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Team", href: "/team" },
      { label: "Blog", href: "/blog" },
      { label: "Privacy", href: "/privacy" }
    ]
  }
}

// Example usage component
export default function MinimalistExampleLandingPage() {
  return (
    <div>
      {/* Design Agency Landing Page */}
      <MinimalistLandingPageTemplate data={sampleMinimalistLandingPageData} />
      
      {/* You can easily switch to a different data set */}
      {/* <MinimalistLandingPageTemplate data={techConsultancyLandingPageData} /> */}
    </div>
  )
}

// Utility function for creating minimal landing page data
export const createMinimalMinimalistLandingPageData = (overrides: Partial<MinimalistLandingPageData>): MinimalistLandingPageData => {
  const defaultData: MinimalistLandingPageData = {
    header: {
      logo: "Your Studio",
      contactCta: "Start project",
      contactLink: "#contact"
    },
    hero: {
      tagline: "Design & Strategy",
      targetKeyword: "Your Service",
      headline: "Clear thinking. Purposeful design.",
      subheading: "We help companies build meaningful brands through strategic thinking and thoughtful design."
    },
    credibility: {
      clientLogos: ["CLIENT", "PARTNER", "BRAND"],
      metric: { value: "100%", description: "client satisfaction" }
    },
    services: {
      title: "Services",
      items: [
        { title: "Strategy", outcomeDescription: "Clear direction for your brand", workLink: "#work" },
        { title: "Design", outcomeDescription: "Thoughtful visual solutions", workLink: "#work" },
        { title: "Digital", outcomeDescription: "Seamless user experiences", workLink: "#work" }
      ]
    },
    caseStudy: {
      metric: "150%",
      metricDescription: "improvement in key metrics",
      clientQuote: "Outstanding results that exceeded our expectations.",
      clientName: "Client Name",
      clientTitle: "Title",
      caseStudyLink: "#case-study"
    },
    howWeWork: {
      title: "How we work",
      steps: [
        { stepNumber: 1, title: "Discover", description: "We understand your needs" },
        { stepNumber: 2, title: "Define", description: "We create strategic solutions" },
        { stepNumber: 3, title: "Deliver", description: "We execute with precision" }
      ]
    },
    testimonials: {
      title: "What clients say",
      items: [
        {
          quote: "Exceptional work that transformed our business.",
          clientName: "Client Name",
          clientTitle: "Title",
          clientCompany: "Company",
          rating: 5
        }
      ]
    },
    pricing: {
      title: "Investment",
      showTransparentPricing: false,
      customOption: {
        title: "Custom solutions",
        description: "Every project is unique. Let's discuss your specific needs.",
        ctaText: "Start conversation",
        ctaLink: "#contact"
      }
    },
    leadCapture: {
      title: "Ready to start?",
      subtitle: "Let's discuss how we can help you achieve your goals.",
      formType: "form",
      formFields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "Message", type: "textarea", required: true }
      ],
      submitText: "Send message"
    },
    footer: {
      companyName: "Your Studio",
      contactInfo: { email: "hello@yourstudio.com" },
      sitemapLinks: [
        { label: "Work", href: "/work" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" }
      ]
    }
  }

  return { ...defaultData, ...overrides }
}