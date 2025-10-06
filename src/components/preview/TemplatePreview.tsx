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
    try {
      // Safely extract data with fallbacks
      const industry = data?.industry || 'business';
      const businessCategory = data?.businessCategory || 'service';
      const targetAudience = data?.targetAudience || 'customers';
      const stylePreference = data?.stylePreference || 'modern';
      const brandKeywords = data?.brandKeywords || '';

      // Generate business name from industry and category
      const businessName = `${industry.charAt(0).toUpperCase() + industry.slice(1)} ${
        businessCategory.charAt(0).toUpperCase() + businessCategory.slice(1)
      }`;
      
      // Generate description based on keywords and category
      const description = brandKeywords || 
        `Professional ${businessCategory} solutions for ${targetAudience}`;
      
      return {
        hero: {
          headline: businessName,
          subheadline: description,
          cta: businessCategory === 'saas' ? 'Start Free Trial' : 'Get Started'
        },
        features: [
          {
            title: `${stylePreference.charAt(0).toUpperCase() + stylePreference.slice(1)} Design`,
            description: `Modern ${stylePreference} approach tailored for ${targetAudience}`,
            icon: 'star'
          },
          {
            title: `${industry.charAt(0).toUpperCase() + industry.slice(1)} Expertise`, 
            description: `Deep understanding of ${industry} industry requirements`,
            icon: 'shield'
          },
          {
            title: 'Targeted Solutions',
            description: `Specifically designed for ${targetAudience} in ${businessCategory}`,
            icon: 'zap'
          }
        ],
        about: {
          title: 'About Us',
          description: `We specialize in ${businessCategory} solutions for the ${industry} industry, focusing on ${targetAudience}. ${brandKeywords ? brandKeywords : 'Delivering exceptional results through innovative approaches.'}`
        },
        branding: {
          primaryColor: stylePreference === 'bold' ? '#dc2626' : 
                        stylePreference === 'elegant' ? '#6366f1' :
                        stylePreference === 'playful' ? '#f59e0b' : '#3b82f6',
          secondaryColor: stylePreference === 'bold' ? '#991b1b' : 
                          stylePreference === 'elegant' ? '#4f46e5' :
                          stylePreference === 'playful' ? '#d97706' : '#1e40af',
        }
      };
    } catch (error) {
      console.error('Error transforming form data:', error);
      // Return default content if transformation fails
      return {
        hero: {
          headline: 'Your Business',
          subheadline: 'Professional solutions for your needs',
          cta: 'Get Started'
        },
        features: [
          {
            title: 'Professional Service',
            description: 'High-quality solutions tailored to your needs',
            icon: 'star'
          },
          {
            title: 'Expert Team',
            description: 'Experienced professionals dedicated to your success',
            icon: 'shield'
          },
          {
            title: 'Reliable Solutions',
            description: 'Dependable services you can count on',
            icon: 'zap'
          }
        ],
        about: {
          title: 'About Us',
          description: 'We provide professional services and solutions to help your business succeed.'
        },
        branding: {
          primaryColor: '#3b82f6',
          secondaryColor: '#1e40af'
        }
      };
    }
  };

  // Initialize content when form data changes
  useEffect(() => {
    if (formData) {
      try {
        const content = transformFormDataToContent(formData);
        setPreviewState(prev => ({
          ...prev,
          content,
          isLoading: false,
          error: null
        }));
      } catch (error) {
        console.error('Error initializing preview content:', error);
        setPreviewState(prev => ({
          ...prev,
          isLoading: false,
          error: 'Failed to process form data. Please check your input and try again.'
        }));
      }
    }
  }, [formData]);

  const handleModeChange = (mode: PreviewMode) => {
    setPreviewState(prev => ({ ...prev, mode }));
  };

  const handleRefresh = () => {
    setPreviewState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Force refresh the iframe
      if (iframeRef.current) {
        iframeRef.current.src = 'about:blank';
      }
      
      // Simulate refresh delay and regenerate content
      setTimeout(() => {
        if (formData) {
          const content = transformFormDataToContent(formData);
          setPreviewState(prev => ({
            ...prev,
            content,
            isLoading: false
          }));
        } else {
          setPreviewState(prev => ({ ...prev, isLoading: false }));
        }
      }, 500);
    } catch (error) {
      console.error('Error during refresh:', error);
      setPreviewState(prev => ({ 
        ...prev, 
        isLoading: false,
        error: 'Failed to refresh preview'
      }));
    }
  };

  const handleReset = () => {
    try {
      if (formData) {
        const content = transformFormDataToContent(formData);
        setPreviewState(prev => ({
          ...prev,
          content,
          isLoading: false,
          error: null
        }));
      }
    } catch (error) {
      console.error('Error during reset:', error);
      setPreviewState(prev => ({
        ...prev,
        error: 'Failed to reset preview content'
      }));
    }
  };

  const generatePreviewHTML = React.useCallback((): string => {
    if (!selectedTemplate || !previewState.content) return '';
    
    const { content } = previewState;
    
    // Escape potential XSS and handle undefined values safely
    const safeContent = {
      hero: {
        headline: content.hero?.headline?.replace(/[<>]/g, '') || 'Landing Page',
        subheadline: content.hero?.subheadline?.replace(/[<>]/g, '') || 'Your business description',
        cta: content.hero?.cta?.replace(/[<>]/g, '') || 'Get Started'
      },
      features: content.features || [],
      about: {
        title: content.about?.title?.replace(/[<>]/g, '') || 'About Us',
        description: content.about?.description?.replace(/[<>]/g, '') || 'Tell your story here'
      },
      branding: {
        primaryColor: content.branding?.primaryColor || '#3b82f6',
        secondaryColor: content.branding?.secondaryColor || '#1e40af'
      }
    };
    
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview - ${safeContent.hero.headline}</title>
        <style>
          * {
            box-sizing: border-box;
          }
          body { 
            margin: 0; 
            padding: 0; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            background: linear-gradient(135deg, ${safeContent.branding.primaryColor} 0%, ${safeContent.branding.secondaryColor} 100%);
            min-height: 100vh;
            line-height: 1.6;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            position: relative;
          }
          .hero h1 {
            font-size: clamp(2rem, 5vw, 4rem);
            font-weight: 700;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }
          .hero p {
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            margin-bottom: 2rem;
            opacity: 0.9;
            max-width: 600px;
          }
          .cta-button {
            background: white;
            color: ${safeContent.branding.primaryColor};
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            font-size: 1.1rem;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
          }
          .cta-button:hover {
            background: #f8f9fa;
            transform: translateY(-2px);
          }
          .features {
            padding: 5rem 0;
            background: white;
          }
          .features h2 {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 3rem;
            color: #1a1a1a;
          }
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          .feature-card {
            text-align: center;
            padding: 2rem;
          }
          .feature-icon {
            width: 4rem;
            height: 4rem;
            background: ${safeContent.branding.primaryColor}20;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            font-size: 1.5rem;
          }
          .feature-card h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #1a1a1a;
          }
          .feature-card p {
            color: #666;
            line-height: 1.6;
          }
          .about {
            padding: 5rem 0;
            background: #f8f9fa;
            text-align: center;
          }
          .about h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 2rem;
            color: #1a1a1a;
          }
          .about p {
            font-size: 1.1rem;
            color: #666;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.8;
          }
          .footer {
            background: #1a1a1a;
            color: white;
            padding: 2rem 0;
            text-align: center;
          }
          @media (max-width: 768px) {
            .container {
              padding: 0 1rem;
            }
            .features-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
            .feature-card {
              padding: 1.5rem;
            }
          }
        </style>
      </head>
      <body>
        <!-- Hero Section -->
        <section class="hero">
          <div class="container">
            <h1>${safeContent.hero.headline}</h1>
            <p>${safeContent.hero.subheadline}</p>
            <button class="cta-button" onclick="return false;">
              ${safeContent.hero.cta}
            </button>
          </div>
        </section>

        <!-- Features Section -->
        <section class="features">
          <div class="container">
            <h2>Key Features</h2>
            <div class="features-grid">
              ${safeContent.features.map(feature => `
                <div class="feature-card">
                  <div class="feature-icon">
                    <span>${feature.icon === 'star' ? '⭐' : feature.icon === 'shield' ? '🛡️' : '⚡'}</span>
                  </div>
                  <h3>${feature.title || 'Feature'}</h3>
                  <p>${feature.description || 'Feature description'}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section class="about">
          <div class="container">
            <h2>${safeContent.about.title}</h2>
            <p>${safeContent.about.description}</p>
          </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
          <div class="container">
            <p>&copy; 2024 ${safeContent.hero.headline}. All rights reserved.</p>
          </div>
        </footer>
        
        <script>
          // Prevent any external script injection
          (function() {
            'use strict';
            // Disable eval and similar functions for security
            window.eval = function() { throw new Error('eval is disabled for security'); };
            // Prevent form submissions and external navigation
            document.addEventListener('click', function(e) {
              if (e.target.tagName === 'A') {
                e.preventDefault();
              }
            });
          })();
        </script>
      </body>
      </html>
    `;
  }, [selectedTemplate, previewState]);

  // Update iframe content when state changes
  useEffect(() => {
    if (!iframeRef.current || previewState.isLoading) return;
    
    const iframe = iframeRef.current;
    
    try {
      // Wait for iframe to load before accessing its document
      const updateContent = () => {
        try {
          const doc = iframe.contentDocument || iframe.contentWindow?.document;
          
          if (doc) {
            const htmlContent = generatePreviewHTML();
            
            // Use srcdoc for better security and compatibility
            if (htmlContent) {
              iframe.srcdoc = htmlContent;
            }
          }
        } catch (error) {
          console.warn('Failed to update iframe content:', error);
          setPreviewState(prev => ({ 
            ...prev, 
            error: 'Failed to load preview. Please try refreshing.' 
          }));
        }
      };

      // If iframe is already loaded, update immediately
      if (iframe.contentDocument?.readyState === 'complete') {
        updateContent();
      } else {
        // Otherwise wait for it to load
        iframe.onload = updateContent;
      }

    } catch (error) {
      console.error('Error setting up iframe:', error);
      setPreviewState(prev => ({ 
        ...prev, 
        error: 'Unable to create preview. Browser compatibility issue.' 
      }));
    }
  }, [previewState.content, previewState.isLoading, selectedTemplate, generatePreviewHTML]);

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
                  style={{
                    backgroundColor: 'white',
                    border: 'none',
                    outline: 'none'
                  }}
                  onError={(e) => {
                    console.error('Iframe error:', e);
                    setPreviewState(prev => ({
                      ...prev,
                      error: 'Preview failed to load. Please try refreshing.'
                    }));
                  }}
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