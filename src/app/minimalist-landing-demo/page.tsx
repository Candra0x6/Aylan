import MinimalistLandingPageTemplate from "@/components/teamplates/agency/minimalist/MinimalistLandingPageTemplate"
import { createMinimalMinimalistLandingPageData } from "@/components/teamplates/agency/minimalist/MinimalistExampleUsage"

// Create sample data for the minimalist demo
const minimalistDemoData = createMinimalMinimalistLandingPageData({
  header: {
    logo: "Minimal Studio",
    contactCta: "Start project",
    contactLink: "#contact"
  },
  hero: {
    tagline: "Design & Strategy",
    targetKeyword: "Minimalist Design Agency",
    headline: "Less noise. More impact. Better results.",
    subheading: "We help ambitious companies communicate clearly through strategic design and purposeful simplicity.",
    primaryCtaText: "Get a free strategy call",
    primaryCtaLink: "#contact",
    secondaryCtaText: "View our work",
    secondaryCtaLink: "#work"
  },
  credibility: {
    clientLogos: ["SIMPLE", "CLARITY", "FOCUS", "ESSENCE", "PURE"],
    metric: {
      value: "+180%",
      description: "brand recognition increase"
    }
  },
  services: {
    title: "What we do",
    subtitle: "Strategic solutions through thoughtful simplicity.",
    items: [
      {
        title: "Brand Clarity",
        outcomeDescription: "Distill your brand essence into clear, compelling messaging that resonates deeply.",
        workLink: "/work/brand-strategy"
      },
      {
        title: "Visual Systems",
        outcomeDescription: "Create cohesive design languages that work beautifully across every touchpoint.",
        workLink: "/work/visual-design"
      },
      {
        title: "Digital Experiences",
        outcomeDescription: "Build intuitive interfaces that users love and businesses depend on.",
        workLink: "/work/digital-products"
      }
    ]
  },
  caseStudy: {
    metric: "300%",
    metricDescription: "increase in user engagement",
    clientQuote: "They transformed our complex product into something beautifully simple. Our users finally understand what we do.",
    clientName: "Emma Watson",
    clientTitle: "Product Director",
    caseStudyLink: "/case-studies/saas-simplification"
  }
})

export default function MinimalistLandingDemo() {
  return (
    <div className="min-h-screen">
      <MinimalistLandingPageTemplate data={minimalistDemoData} />
    </div>
  )
}