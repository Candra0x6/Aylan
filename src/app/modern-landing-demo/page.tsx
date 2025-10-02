"use client"

import ModernLandingPageTemplate from '@/components/teamplates/e-commerce/modern/ModernLandingPageTemplate'
import { modernLandingPageExampleData } from '@/components/teamplates/e-commerce/modern/ModernExampleUsage'

export default function ModernLandingDemo() {
  return (
    <div className="min-h-screen">
      <ModernLandingPageTemplate data={modernLandingPageExampleData} />
    </div>
  )
}