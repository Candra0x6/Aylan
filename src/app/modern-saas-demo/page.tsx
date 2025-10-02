"use client"
import { ModernLandingPageTemplate } from "@/components/teamplates/sass/modern";
import { modernLandingPageExampleData } from "@/components/teamplates/sass/modern";

export default function ModernSaaSDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <ModernLandingPageTemplate data={modernLandingPageExampleData} />
    </div>
  );
}