"use client"

import { PlayfulLandingPageTemplate, playfulMarketingAgencyData } from "@/components/teamplates/corporate/playful"

export default function PlayfulLandingDemo() {
  return (
    <PlayfulLandingPageTemplate 
      data={playfulMarketingAgencyData}
      className="playful-corporate-demo"
    />
  )
}