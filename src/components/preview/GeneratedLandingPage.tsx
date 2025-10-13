/**
 * Generated Landing Page Component - Safari Safe
 * Renders the final landing page using the selected template and AI-generated content
 * Prevents "Right side of assignment cannot be destructured" errors on Safari macOS
 */

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import type { TemplateSelectionResult } from '@/types/template';
import type { GeneratedContent } from '@/hooks/useGeminiAI';
import { safeExtract, isSafariOnMacOS } from '@/utils/macOSCompatibility';

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

// Safari-safe template rendering function
function safariSafeRenderTemplate(template: TemplateSelectionResult, content: GeneratedContent): React.ReactNode {
  if (!template || !content) {
    return renderSafeErrorState('Missing template or content data');
  }

  try {
    // Safely access template properties to avoid destructuring errors
    const templateObj = template.template || {};
    const category = templateObj.category || 'unknown';
    const style = templateObj.style || 'unknown';
    const name = templateObj.name || 'Unknown Template';

    const templateKey = `${category}-${style}`;

    // Log for debugging
    console.log('Safari-safe rendering template:', templateKey, 'isSafari:', isSafariOnMacOS());

    // Route to the appropriate template component with safe rendering
    switch (templateKey) {
      // SaaS Templates
      case 'saas-modern':
        return safariSafeRenderComponent(() => {
          const saasModernData = content as unknown as ModernLandingPageData;
          return <ModernLandingPageTemplate data={saasModernData} />;
        }, 'ModernLandingPageTemplate');
        
      case 'saas-minimalist':
        return safariSafeRenderComponent(() => {
          const saasMinimalistData = content as unknown as MinimalistLandingPageData;
          return <MinimalistLandingPageTemplate data={saasMinimalistData} />;
        }, 'MinimalistLandingPageTemplate');

      // Agency Templates
      case 'agency-elegant':
        return safariSafeRenderComponent(() => {
          const agencyElegantData = content as unknown as AgencyMinimalistData;
          return <DynamicLandingPageTemplate data={agencyElegantData} />;
        }, 'DynamicLandingPageTemplate');
        
      case 'agency-minimalist':
        return safariSafeRenderComponent(() => {
          const agencyMinimalistData = content as unknown as AgencyMinimalistData;
          return <MinimalistAgencyTemplate data={agencyMinimalistData} />;
        }, 'MinimalistAgencyTemplate');

      // Corporate Templates
      case 'corporate-playful':
        return safariSafeRenderComponent(() => {
          const corporatePlayfulData = content as unknown as PlayfulLandingPageData;
          return <PlayfulLandingPageTemplate data={corporatePlayfulData} />;
        }, 'PlayfulLandingPageTemplate');
        
      case 'corporate-modern':
        return safariSafeRenderComponent(() => {
          const corporateModernData = content as unknown as ModernLandingPageData;
          return <ModernLandingPageTemplate data={corporateModernData} />;
        }, 'ModernLandingPageTemplate');
        
      case 'corporate-minimalist':
        return safariSafeRenderComponent(() => {
          const corporateMinimalistData = content as unknown as MinimalistLandingPageData;
          return <MinimalistLandingPageTemplate data={corporateMinimalistData} />;
        }, 'MinimalistLandingPageTemplate');

      // E-commerce Templates
      case 'ecommerce-elegant':
        return safariSafeRenderComponent(() => {
          const ecommerceElegantData = content as unknown as ElegantLandingPageData;
          return <ElegantLandingPageTemplate data={ecommerceElegantData} />;
        }, 'ElegantLandingPageTemplate');
        
      case 'ecommerce-modern':
        return safariSafeRenderComponent(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const ecommerceModernData = content as any;
          return <ModernEcommerceTemplate data={ecommerceModernData} />;
        }, 'ModernEcommerceTemplate');
        
      case 'ecommerce-minimalist':
        return safariSafeRenderComponent(() => {
          const ecommerceMinimalistData = content as unknown as MinimalistLandingPageData;
          return <MinimalistLandingPageTemplate data={ecommerceMinimalistData} />;
        }, 'MinimalistLandingPageTemplate');

      // Legacy and additional mappings
      case 'agency-modern':
        return safariSafeRenderComponent(() => {
          const agencyModernData = content as unknown as ModernLandingPageData;
          return <ModernLandingPageTemplate data={agencyModernData} />;
        }, 'ModernLandingPageTemplate');

      // Fallback to content preview for unmapped templates
      default:
        console.warn(`Template not found: ${templateKey}`);
        return renderSafeContentPreview(template, content, `Template ${templateKey} not found`);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Safari-safe template rendering error:', errorMessage);
    return renderSafeContentPreview(template, content, errorMessage);
  }
}

// Safari-safe component renderer
function safariSafeRenderComponent(componentRenderer: () => React.ReactNode, componentName: string): React.ReactNode {
  try {
    return componentRenderer();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    // Check if it's a Safari destructuring error
    if (errorMessage.includes('Right side of assignment cannot be destructured') ||
        errorMessage.includes('Cannot destructure property')) {
      console.warn(`Safari destructuring error prevented in ${componentName}:`, errorMessage);
      
      return renderSafeErrorState(`Safari compatibility issue in ${componentName}. ${errorMessage}`);
    }
    
    // Re-throw other errors
    throw error;
  }
}

// Safe error state renderer
function renderSafeErrorState(message: string): React.ReactNode {
  return (
    <div className="p-8">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          <strong>Template Rendering Error:</strong> {message}
          {isSafariOnMacOS() && (
            <div className="mt-2 text-sm">
              <strong>Safari Compatibility Mode:</strong> This error has been safely handled to prevent crashes.
            </div>
          )}
        </AlertDescription>
      </Alert>
    </div>
  );
}

// Safe content preview renderer
function renderSafeContentPreview(template: TemplateSelectionResult, content: GeneratedContent, errorMessage?: string): React.ReactNode {
  const templateObj = template?.template || {};
  const category = templateObj.category || 'unknown';
  const style = templateObj.style || 'unknown';
  const name = templateObj.name || 'Unknown Template';
  const templateKey = `${category}-${style}`;

  return (
    <div className="p-8 space-y-6">
      {errorMessage && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Template Error:</strong> {errorMessage}
          </AlertDescription>
        </Alert>
      )}

      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Generated Content Preview
        </h2>
        <p className="text-muted-foreground">
          Template: <strong>{name}</strong> ({templateKey})
        </p>
        {isSafariOnMacOS() && (
          <p className="text-xs text-green-600 mt-1">
            ✓ Safari compatibility mode active
          </p>
        )}
      </div>

      <div className="grid gap-6">
        {/* Safe Hero Section Preview */}
        {content && typeof content === 'object' && 'hero' in content && (
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">
                    {safeGetProperty(content.hero, 'headline', 'Generated Headline')}
                  </h3>
                  <p className="text-muted-foreground">
                    {safeGetProperty(content.hero, 'subheadline', 'Generated subheadline')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Safe Services Section Preview */}
        {content && typeof content === 'object' && 'services' in content && (
          <Card>
            <CardHeader>
              <CardTitle>Services Section</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h3 className="font-semibold">
                  {safeGetProperty(content.services, 'title', 'Generated Services Title')}
                </h3>
                <p className="text-muted-foreground">
                  {safeGetProperty(content.services, 'subtitle', 'Generated services description')}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Safe Pricing Section Preview */}
        {content && typeof content === 'object' && 'pricing' in content && (
          <Card>
            <CardHeader>
              <CardTitle>Pricing Section</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h3 className="font-semibold">
                  {safeGetProperty(content.pricing, 'title', 'Generated Pricing Title')}
                </h3>
                <p className="text-muted-foreground">
                  {safeGetProperty(content.pricing, 'subtitle', 'Generated pricing description')}
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
      </div>
    </div>
  );
}

// Safe property accessor
function safeGetProperty(obj: unknown, key: string, fallback: string): string {
  try {
    if (obj && typeof obj === 'object' && key in obj) {
      const value = (obj as Record<string, unknown>)[key];
      return typeof value === 'string' ? value : fallback;
    }
    return fallback;
  } catch (error) {
    console.warn('Safe property access failed:', error);
    return fallback;
  }
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
          {isSafariOnMacOS() && (
            <CardDescription className="text-xs text-green-600">
              ✓ Safari compatibility mode active - Destructuring errors prevented
            </CardDescription>
          )}
        </CardHeader>
      </Card>

      <div className="w-full border rounded-lg overflow-hidden shadow-lg">
        {isSafariOnMacOS() ? safariSafeRenderTemplate(template, content) : renderTemplate(template, content)}
      </div>
    </div>
  );
};

// Template renderer function - renders the actual template components (Safari-safe version)
function renderTemplate(template: TemplateSelectionResult, content: GeneratedContent): React.ReactNode {
  // Safari-safe property access - avoid direct destructuring
  const templateObj = template?.template || {};
  const category = templateObj.category || 'unknown';
  const style = templateObj.style || 'unknown';
  const templateKey = `${category}-${style}`;

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

// Fallback content preview function (Safari-safe)
function renderContentPreview(template: TemplateSelectionResult, content: GeneratedContent): React.ReactNode {
  // Safari-safe property access
  const templateObj = template?.template || {};
  const category = templateObj.category || 'unknown';
  const style = templateObj.style || 'unknown';
  const name = templateObj.name || 'Unknown Template';
  const templateKey = `${category}-${style}`;

  return (
    <div className="p-8 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Generated Content Preview
        </h2>
        <p className="text-muted-foreground">
          Template: <strong>{name}</strong> ({templateKey})
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
