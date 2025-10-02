/**
 * Generated Landing Page Component
 * Renders the final landing page using the selected template and AI-generated content
 */

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import type { TemplateSelectionResult } from '@/types/template';
import type { GeneratedContent } from '@/hooks/useGeminiAI';

// Import SaaS template components
import { ModernLandingPageTemplate } from '@/components/teamplates/sass/modern/ModernLandingPageTemplate';
import MinimalistLandingPageTemplate from '@/components/teamplates/sass/minimalist/MinimalistLandingPageTemplate';

// Agency templates
import DynamicLandingPageTemplate from '@/components/teamplates/agency/elegant/DynamicLandingPageTemplate';
import MinimalistAgencyTemplate from '@/components/teamplates/agency/minimalist/MinimalistLandingPageTemplate';

// Corporate templates
import PlayfulLandingPageTemplate from '@/components/teamplates/corporate/playful/PlayfulLandingPageTemplate';

// E-commerce templates
import ElegantLandingPageTemplate from '@/components/teamplates/e-commerce/elegant/EcommerceLandingPageTemplate';
import ModernEcommerceTemplate from '@/components/teamplates/e-commerce/modern/ModernLandingPageTemplate';

// Import type definitions
import type { ModernLandingPageData } from '@/components/teamplates/sass/modern/types';
import type { MinimalistLandingPageData } from '@/components/teamplates/sass/minimalist/types';

// Agency types
import type { MinimalistLandingPageData as AgencyMinimalistData } from '@/components/teamplates/agency/minimalist/MinimalistLandingPageTemplate';

// Corporate types
import type { PlayfulLandingPageData } from '@/components/teamplates/corporate/playful/PlayfulLandingPageTemplate';

// E-commerce types
import type { ElegantLandingPageData } from '@/components/teamplates/e-commerce/elegant/EcommerceLandingPageTemplate';

interface GeneratedLandingPageProps {
  template: TemplateSelectionResult;
  content: GeneratedContent;
  isLoading?: boolean;
  error?: string | null;
}

// Loading skeleton component
const TemplateLoadingSkeleton: React.FC = () => (
  <div className="w-full space-y-8 p-6">
    <div className="space-y-4">
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  </div>
);

export const GeneratedLandingPage: React.FC<GeneratedLandingPageProps> = ({
  template,
  content,
  isLoading = false,
  error = null
}) => {
  // Handle loading state
  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent"></div>
            Generating Your Landing Page...
          </CardTitle>
          <CardDescription>
            Creating personalized content with AI for your {template.template.name} template
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TemplateLoadingSkeleton />
        </CardContent>
      </Card>
    );
  }

  // Handle error state
  if (error) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            Generation Failed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  // Handle success state
  if (!content) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>No Content Generated</CardTitle>
          <CardDescription>
            Please submit the form to generate your landing page content.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  // Render the appropriate template component
  return (
    <div className="w-full">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="h-5 w-5" />
            Landing Page Generated Successfully!
          </CardTitle>
          
        </CardHeader>
      </Card>

      <div className="w-full border rounded-lg overflow-hidden shadow-lg">
        {renderTemplate(template, content)}
      </div>
    </div>
  );
};

// Template renderer function - renders the actual template components
function renderTemplate(template: TemplateSelectionResult, content: GeneratedContent): React.ReactNode {
  const templateKey = `${template.template.category}-${template.template.style}`;

  try {
    // Route to the appropriate template component based on the template selection
    switch (templateKey) {
      // SaaS Templates
      case 'saas-modern':
        const saasModernData = content as unknown as ModernLandingPageData;
        return <ModernLandingPageTemplate data={saasModernData} />;
        
      case 'saas-minimalist':
        const saasMinimalistData = content as unknown as MinimalistLandingPageData;
        return <MinimalistLandingPageTemplate data={saasMinimalistData} />;

      // Agency Templates
      case 'agency-elegant':
        const agencyElegantData = content as unknown as AgencyMinimalistData;
        return <DynamicLandingPageTemplate data={agencyElegantData} />;
        
      case 'agency-minimalist':
        const agencyMinimalistData = content as unknown as AgencyMinimalistData;
        return <MinimalistAgencyTemplate data={agencyMinimalistData} />;

      // Corporate Templates
      case 'corporate-playful':
        const corporatePlayfulData = content as unknown as PlayfulLandingPageData;
        return <PlayfulLandingPageTemplate data={corporatePlayfulData} />;
        
      case 'corporate-modern':
        const corporateModernData = content as unknown as ModernLandingPageData;
        return <ModernLandingPageTemplate data={corporateModernData} />;
        
      case 'corporate-minimalist':
        const corporateMinimalistData = content as unknown as MinimalistLandingPageData;
        return <MinimalistLandingPageTemplate data={corporateMinimalistData} />;

      // E-commerce Templates
      case 'ecommerce-elegant':
      case 'ecommerce-elegant':
        const ecommerceElegantData = content as unknown as ElegantLandingPageData;
        return <ElegantLandingPageTemplate data={ecommerceElegantData} />;
        
      case 'ecommerce-modern':
      case 'ecommerce-modern':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ecommerceModernData = content as any;
        return <ModernEcommerceTemplate data={ecommerceModernData} />;
        
      case 'ecommerce-minimalist':
      case 'ecommerce-minimalist':
        const ecommerceMinimalistData = content as unknown as MinimalistLandingPageData;
        return <MinimalistLandingPageTemplate data={ecommerceMinimalistData} />;

      // Legacy and additional mappings
      case 'agency-modern':
        const agencyModernData = content as unknown as ModernLandingPageData;
        return <ModernLandingPageTemplate data={agencyModernData} />;

      // Fallback to content preview for unmapped templates
      default:
        console.warn(`Template not found: ${templateKey}`);
        return renderContentPreview(template, content);
    }
  } catch (error) {
    console.error('Error rendering template:', error);
    // Fallback to content preview on error
    return renderContentPreview(template, content);
  }
}

// Fallback content preview function
function renderContentPreview(template: TemplateSelectionResult, content: GeneratedContent): React.ReactNode {
  const templateKey = `${template.template.category}-${template.template.style}`;

  return (
    <div className="p-8 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Generated Content Preview
        </h2>
        <p className="text-muted-foreground">
          Template: <strong>{template.template.name}</strong> ({templateKey})
        </p>
      </div>

      <div className="grid gap-6">
        {/* Hero Section Preview */}
        {'hero' in content && (
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">
                    {(content.hero as Record<string, unknown>)?.headline as string || 'Generated Headline'}
                  </h3>
                  <p className="text-muted-foreground">
                    {(content.hero as Record<string, unknown>)?.subheadline as string || 'Generated subheadline'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Services Section Preview */}
        {'services' in content && (
          <Card>
            <CardHeader>
              <CardTitle>Services Section</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h3 className="font-semibold">
                  {(content.services as Record<string, unknown>)?.title as string || 'Generated Services Title'}
                </h3>
                <p className="text-muted-foreground">
                  {(content.services as Record<string, unknown>)?.subtitle as string || 'Generated services description'}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Pricing Section Preview */}
        {'pricing' in content && (
          <Card>
            <CardHeader>
              <CardTitle>Pricing Section</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h3 className="font-semibold">
                  {(content.pricing as Record<string, unknown>)?.title as string || 'Generated Pricing Title'}
                </h3>
                <p className="text-muted-foreground">
                  {(content.pricing as Record<string, unknown>)?.subtitle as string || 'Generated pricing description'}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Raw Content Display */}
        <Card>
          <CardHeader>
            <CardTitle>Generated Content (JSON)</CardTitle>
            <CardDescription>
              This is the raw AI-generated content structure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
              {JSON.stringify(content, null, 2)}
            </pre>
          </CardContent>
        </Card>

        {/* Template Information */}
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Note:</strong> This is a fallback preview. The content above is generated but the 
            specific template component ({templateKey}) could not be rendered properly.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

export default GeneratedLandingPage;
