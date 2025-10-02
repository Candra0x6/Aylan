import { MinimalistLandingPageTemplate } from "@/components/teamplates/sass/minimalist";
import { minimalistLandingPageExampleData } from "@/components/teamplates/sass/minimalist";

export default function MinimalistSaaSDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <MinimalistLandingPageTemplate data={minimalistLandingPageExampleData} />
    </div>
  );
}