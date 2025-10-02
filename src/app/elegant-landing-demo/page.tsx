"use client"

import { ElegantLandingPageTemplate, elegantConsultingAgencyData } from "@/components/teamplates/e-commerce/elegant"

export default function ElegantLandingDemo() {
  return (
    <ElegantLandingPageTemplate 
      data={elegantConsultingAgencyData}
      className="elegant-ecommerce-demo"
    />
  )
}