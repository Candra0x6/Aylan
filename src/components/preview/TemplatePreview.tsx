'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Monitor, Tablet, Smartphone, RotateCcw, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  PreviewMode, 
  PreviewState, 
  TemplateContent 
} from '@/types/preview';
import { LandingPageFormData } from '@/types/form';


import { TemplateSelectionResult } from '@/types/template';

interface TemplatePreviewProps {
  selectedTemplate: TemplateSelectionResult | null;
  formData: LandingPageFormData | null;
  onClose?: () => void;
}

const DEVICE_DIMENSIONS = {
  desktop: { width: 1200, height: 800 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 375, height: 667 }
};

export default function TemplatePreview({ 
  selectedTemplate, 
  formData, 
  onClose 
}: TemplatePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [previewState, setPreviewState] = useState<PreviewState>({
    isLoading: true,
    error: null,
    mode: 'desktop',
    template: selectedTemplate?.template.id || null,
    content: null
  });

  // Transform form data to template content
  const transformFormDataToContent = (data: LandingPageFormData): TemplateContent => {
    // Generate business name from industry and category
    const businessName = `${data.industry.charAt(0).toUpperCase() + data.industry.slice(1)} ${
      data.businessCategory.charAt(0).toUpperCase() + data.businessCategory.slice(1)
    }`;
    
    // Generate description based on keywords and category
    const description = data.brandKeywords || 
      `Professional ${data.businessCategory} solutions for ${data.targetAudience}`;
    
    return {
      hero: {
        headline: businessName,
        subheadline: description,
        cta: data.businessCategory === 'saas' ? 'Start Free Trial' : 'Get Started'
      },
      features: [
        {
          title: `${data.stylePreference.charAt(0).toUpperCase() + data.stylePreference.slice(1)} Design`,
          description: `Modern ${data.stylePreference} approach tailored for ${data.targetAudience}`,
          icon: 'star'
        },
        {
          title: `${data.industry.charAt(0).toUpperCase() + data.industry.slice(1)} Expertise`, 
          description: `Deep understanding of ${data.industry} industry requirements`,
          icon: 'shield'
        },
        {
          title: 'Targeted Solutions',
          description: `Specifically designed for ${data.targetAudience} in ${data.businessCategory}`,
          icon: 'zap'
        }
      ],
      about: {
        title: 'About Us',
        description: `We specialize in ${data.businessCategory} solutions for the ${data.industry} industry, focusing on ${data.targetAudience}. ${data.brandKeywords ? data.brandKeywords : 'Delivering exceptional results through innovative approaches.'}`
      },
      branding: {
        primaryColor: data.stylePreference === 'bold' ? '#dc2626' : 
                      data.stylePreference === 'elegant' ? '#6366f1' :
                      data.stylePreference === 'playful' ? '#f59e0b' : '#3b82f6',
        secondaryColor: data.stylePreference === 'bold' ? '#991b1b' : 
                        data.stylePreference === 'elegant' ? '#4f46e5' :
                        data.stylePreference === 'playful' ? '#d97706' : '#1e40af',
      }
    };
  };

  // Initialize content when form data changes
  useEffect(() => {
    if (formData) {
      const content = transformFormDataToContent(formData);
      setPreviewState(prev => ({
        ...prev,
        content,
        isLoading: false
      }));
    }
  }, [formData]);

  const handleModeChange = (mode: PreviewMode) => {
    setPreviewState(prev => ({ ...prev, mode }));
  };

  const handleRefresh = () => {
    setPreviewState(prev => ({ ...prev, isLoading: true }));
    
    // Simulate refresh delay
    setTimeout(() => {
      setPreviewState(prev => ({ ...prev, isLoading: false }));
    }, 1000);
  };

  const handleReset = () => {
    if (formData) {
      const content = transformFormDataToContent(formData);
      setPreviewState(prev => ({
        ...prev,
        content,
        isLoading: false,
        error: null
      }));
    }
  };

  const generatePreviewHTML = React.useCallback((): string => {
    if (!selectedTemplate || !previewState.content) return '';
    
    const { content } = previewState;
    
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview - ${content.hero?.headline || 'Landing Page'}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          body { 
            margin: 0; 
            padding: 0; 
            font-family: system-ui, -apple-system, sans-serif;
            background: linear-gradient(135deg, ${content.branding?.primaryColor || '#3b82f6'} 0%, ${content.branding?.secondaryColor || '#1e40af'} 100%);
            min-height: 100vh;
          }
        </style>
      </head>
      <body>
        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center justify-center text-white">
          <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
              ${content.hero?.headline || 'Your Business Name'}
            </h1>
            <p class="text-xl md:text-2xl mb-8 opacity-90">
              ${content.hero?.subheadline || 'Your business description here'}
            </p>
            <button class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              ${content.hero?.cta || 'Get Started'}
            </button>
          </div>
        </section>

        <!-- Features Section -->
        <section class="py-20 bg-white">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div class="grid md:grid-cols-3 gap-8">
              ${content.features?.map(feature => `
                <div class="text-center">
                  <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">${feature.icon === 'star' ? '⭐' : feature.icon === 'shield' ? '🛡️' : '⚡'}</span>
                  </div>
                  <h3 class="text-xl font-semibold mb-2">${feature.title}</h3>
                  <p class="text-gray-600">${feature.description}</p>
                </div>
              `).join('') || ''}
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section class="py-20 bg-gray-50">
          <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-8">${content.about?.title || 'About Us'}</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              ${content.about?.description || 'Tell your story here'}
            </p>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-8">
          <div class="container mx-auto px-4 text-center">
            <p>&copy; 2024 ${content.hero?.headline || 'Your Business'}. All rights reserved.</p>
          </div>
        </footer>
      </body>
      </html>
    `;
  }, [selectedTemplate, previewState]);

  // Update iframe content when state changes
  useEffect(() => {
    if (iframeRef.current && !previewState.isLoading) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      
      if (doc) {
        doc.open();
        doc.write(generatePreviewHTML());
        doc.close();
      }
    }
  }, [previewState, selectedTemplate, generatePreviewHTML]);

  if (!selectedTemplate) {
    return (
      <Alert>
        <AlertDescription>
          Please select a template to preview.
        </AlertDescription>
      </Alert>
    );
  }

  const currentDimensions = DEVICE_DIMENSIONS[previewState.mode];

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              Template Preview
              <Badge variant="secondary">{selectedTemplate.template.name}</Badge>
            </CardTitle>
          </div>
          <div className="flex items-center gap-2">
            {onClose && (
              <Button variant="outline" size="sm" onClick={onClose}>
                Close
              </Button>
            )}
          </div>
        </div>

        {/* Preview Controls */}
        <div className="flex items-center justify-between pt-4">
          {/* Device Mode Selector */}
          <div className="flex items-center gap-1 bg-muted p-1 rounded-lg">
            <Button
              variant={previewState.mode === 'desktop' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => handleModeChange('desktop')}
              className="gap-1"
            >
              <Monitor className="w-4 h-4" />
              Desktop
            </Button>
            <Button
              variant={previewState.mode === 'tablet' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => handleModeChange('tablet')}
              className="gap-1"
            >
              <Tablet className="w-4 h-4" />
              Tablet
            </Button>
            <Button
              variant={previewState.mode === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => handleModeChange('mobile')}
              className="gap-1"
            >
              <Smartphone className="w-4 h-4" />
              Mobile
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={previewState.isLoading}
              className="gap-1"
            >
              <RotateCcw className="w-4 h-4" />
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="gap-1"
            >
              Reset
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button
              variant="outline"
              size="sm"
              className="gap-1"
            >
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {previewState.error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{previewState.error}</AlertDescription>
          </Alert>
        )}

        {/* Preview Container */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden">
          <div className="flex items-center justify-center p-8">
            <div 
              className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300"
              style={{
                width: Math.min(currentDimensions.width, 1200),
                height: Math.min(currentDimensions.height, 800),
                transform: previewState.mode === 'mobile' ? 'scale(0.8)' : 'scale(1)'
              }}
            >
              {previewState.isLoading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading preview...</p>
                  </div>
                </div>
              ) : (
                <iframe
                  ref={iframeRef}
                  className="w-full h-full border-0"
                  title="Template Preview"
                  sandbox="allow-scripts allow-same-origin"
                />
              )}
            </div>
          </div>
        </div>

        {/* Preview Info */}
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>Template: {selectedTemplate.template.name}</span>
            <span>•</span>
            <span>Mode: {previewState.mode}</span>
            <span>•</span>
            <span>Dimensions: {currentDimensions.width} × {currentDimensions.height}</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {selectedTemplate.template.category}
            </Badge>
            <Badge variant="outline" className="text-xs">
              Score: {selectedTemplate.matchScore?.toFixed(1) || 'N/A'}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}