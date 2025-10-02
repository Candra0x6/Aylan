'use client';

import { useState } from 'react';
import { LandingPageForm } from '@/components/form/LandingPageForm';
import TemplatePreview from '@/components/preview/TemplatePreview';
import { useTemplateSelection } from '@/hooks/useTemplateSelection';

import type { LandingPageFormSchema } from '@/lib/validation/formSchema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type AppStep = 'form' | 'preview' | 'export';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<AppStep>('form');
  const [formData, setFormData] = useState<LandingPageFormSchema | null>(null);
  
  const {
    selectedTemplate,
    error: templateError,
    selectTemplate
  } = useTemplateSelection();



  const handleFormSubmit = async (data: LandingPageFormSchema) => {
    console.log('Form submitted with data:', data);
    setFormData(data);
    
    // Select template based on form data
    try {
      await selectTemplate(data);
      setCurrentStep('preview');
    } catch (error) {
      console.error('Template selection failed:', error);
    }
  };

  const handleBackToForm = () => {
    setCurrentStep('form');
  };

  const handleContinueToExport = () => {
    setCurrentStep('export');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            AI Landing Page Generator
          </h1>
          <p className="text-lg text-gray-600">
            Create professional landing pages in minutes with AI
          </p>
          <div className="mt-4">
            <Button 
              variant="outline" 
              onClick={() => window.open('/ai-demo', '_blank')}
              className="mr-2"
            >
              ✨ Try AI Content Generator
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.open('/unified-template-demo', '_blank')}
            >
              📝 Manual Form Mode
            </Button>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-2 ${currentStep === 'form' ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep === 'form' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <span>Configure</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className={`flex items-center space-x-2 ${currentStep === 'preview' ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep === 'preview' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <span>Preview</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className={`flex items-center space-x-2 ${currentStep === 'export' ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep === 'export' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                3
              </div>
              <span>Export</span>
            </div>
          </div>
        </div>

        {/* Content */}
        {currentStep === 'form' && (
          <LandingPageForm 
            onSubmit={handleFormSubmit}
          />
        )}

        {currentStep === 'preview' && (
          <div className="space-y-6">
            {/* Preview Controls */}
            <div className="flex items-center justify-between">
              <Button 
                variant="outline" 
                onClick={handleBackToForm}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Form
              </Button>
              <Button 
                onClick={handleContinueToExport}
                className="gap-2"
              >
                Continue to Export
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Template Preview */}
            <TemplatePreview
              selectedTemplate={selectedTemplate}
              formData={formData}
            />

            {templateError && (
              <Card className="border-red-200 bg-red-50">
                <CardContent className="pt-6">
                  <p className="text-red-600">Error: {templateError}</p>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {currentStep === 'export' && (
          <Card>
            <CardHeader>
              <CardTitle>Export Your Landing Page</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Export functionality will be implemented in the next phase.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep('preview')}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Preview
                </Button>
                <Button disabled>
                  Export as HTML
                </Button>
                <Button disabled>
                  Deploy to Vercel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
