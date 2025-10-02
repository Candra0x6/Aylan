import DynamicLandingPageTemplate from "@/components/teamplates/agency/elegant/DynamicLandingPageTemplate"
import { createMinimalLandingPageData } from "@/components/teamplates/agency/elegant/ExampleUsage"

// Create sample data for the demo
const demoData = createMinimalLandingPageData({
  header: {
    logo: "Demo Agency",
    contactCta: "Get Free Consultation",
    contactLink: "#contact"
  },
  hero: {
    targetKeyword: "Digital Marketing Agency",
    headline: "Transform Your Business with Data-Driven Marketing",
    subheading: "We help ambitious companies grow their revenue through strategic digital marketing, conversion optimization, and performance analytics.",
    backgroundImage: "/images/hero-bg.jpg",
    badgeText: "Trusted by 100+ Companies"
  },
  credibility: {
    clientLogos: ["TECHCORP", "INNOVATE", "GROWTHCO", "NEXUS", "ELEVATE"],
    metric: {
      value: "+$3M",
      description: "in client revenue generated"
    }
  }
})

export default function DynamicLandingDemo() {
  return (
    <div className="min-h-screen">
      <DynamicLandingPageTemplate data={demoData} />
    </div>
  )
}