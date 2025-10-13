/**
 * AI Landing Page Generator Demo Component
 * Main component that handles the complete flow:
 * 1. Form submission
 * 2. Template selection
 * 3. Content generation with Gemini AI
 * 4. Landing page rendering
 */

'use client';

import React, { useState } from 'react';
import { SimpleLandingPageForm } from '@/components/form/SimpleLandingPageForm';
import { GeneratedLandingPage } from '@/components/preview/GeneratedLandingPage';
import { useTemplateSelection } from '@/hooks/useTemplateSelection';
import { useGeminiAI } from '@/hooks/useGeminiAI';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Sparkles, Zap, Target, Wand2 } from 'lucide-react';
import type { LandingPageFormSchema } from '@/lib/validation/formSchema';
import { SafariSafeLandingPageForm } from '../form/SafariSafeLandingPageForm';

type GenerationStep = 'form' | 'template-selection' | 'content-generation' | 'preview';

interface GenerationState {
  step: GenerationStep;
  formData: LandingPageFormSchema | null;
  error: string | null;
}

export const AIContentGeneratorDemo: React.FC = () => {
  const [generationState, setGenerationState] = useState<GenerationState>({
    step: 'form',
    formData: null,
    error: null
  });

  const {
    selectedTemplate,
    isLoading: templateLoading,
    selectTemplate,
    error: templateError
  } = useTemplateSelection();

  const {
    content,
    isLoading: contentLoading,
    error: contentError,
    generateContent,
    clearContent
  } = useGeminiAI();

  const handleFormSubmit = async (formData: LandingPageFormSchema) => {
    try {
      console.log('Form submitted with data:', formData);
      setGenerationState({ step: 'template-selection', formData, error: null });
      
      // Step 1: Select the appropriate template
      const template = await selectTemplate(formData);
      console.log('Selected template:', template);
      
      setGenerationState({ step: 'content-generation', formData, error: null });
      
      // Step 2: Generate content with Gemini AI
      console.log('Generating content with:', { formData, template });
      await generateContent(formData, template);
      
      setGenerationState({ step: 'preview', formData, error: null });
      
    } catch (error) {
      console.error('Error in handleFormSubmit:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setGenerationState(prev => ({ ...prev, error: errorMessage }));
    }
  };

  const handleRestart = () => {
    setGenerationState({ step: 'form', formData: null, error: null });
    clearContent();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wand2 className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Landing Page Generator
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create professional, high-converting landing pages in minutes using AI-powered content generation
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-start mb-8  ">
          <div className="flex items-center space-x-4 ml-36">
            <StepIndicator 
              step={1} 
              title="Form" 
              icon={<Target className="h-4 w-4" />}
              isActive={generationState.step === 'form'}
              isCompleted={['template-selection', 'content-generation', 'preview'].includes(generationState.step)}
            />
            <Separator className="w-8" />
            <StepIndicator 
              step={2} 
              title="Template" 
              icon={<Sparkles className="h-4 w-4" />}
              isActive={generationState.step === 'template-selection'}
              isCompleted={['content-generation', 'preview'].includes(generationState.step)}
              isLoading={templateLoading}
            />
            <Separator className="w-8" />
            <StepIndicator 
              step={3} 
              title="AI Generation" 
              icon={<Zap className="h-4 w-4" />}
              isActive={generationState.step === 'content-generation'}
              isCompleted={generationState.step === 'preview'}
              isLoading={contentLoading}
            />
            <Separator className="w-8" />
            <StepIndicator 
              step={4} 
              title="Preview" 
              icon={<Wand2 className="h-4 w-4" />}
              isActive={generationState.step === 'preview'}
              isCompleted={false}
            />
          </div>
        </div>

        {/* Error Display */}
        {(generationState.error || templateError || contentError) && (
          <div className="mb-6">
            <Alert variant="destructive">
              <AlertDescription>
                {generationState.error || templateError || contentError}
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Main Content */}
        <div className=" mx-auto">
          {generationState.step === 'form' && (
            <SafariSafeLandingPageForm 
              onSubmit={handleFormSubmit}
              isLoading={templateLoading || contentLoading}
            />
          )}

          {generationState.step === 'template-selection' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 animate-pulse text-primary" />
                  Selecting Perfect Template...
                </CardTitle>
                <CardDescription>
                  Analyzing your business requirements to choose the best template
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                </div>
              </CardContent>
            </Card>
          )}

          {generationState.step === 'content-generation' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 animate-pulse text-primary" />
                  Generating AI Content...
                </CardTitle>
                <CardDescription>
                  Creating personalized copy with Gemini AI for your selected template
                </CardDescription>
              </CardHeader>
              <CardContent>
                
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                </div>
              </CardContent>
            </Card>
          )}

          {generationState.step === 'preview' && selectedTemplate && (
            <div className="space-y-6">
              {/* Action Bar */}
              <div className="flex items-center justify-between">
                <Button 
                  variant="outline" 
                  onClick={handleRestart}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Start Over
                </Button>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Generated Successfully
                  </Badge>
                </div>
              </div>

              {/* Generated Landing Page */}
              <GeneratedLandingPage
                template={selectedTemplate}
                content={content || {}}
                isLoading={contentLoading}
                error={contentError}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Step Indicator Component
interface StepIndicatorProps {
  step: number;
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
  isCompleted: boolean;
  isLoading?: boolean;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  title,
  icon,
  isActive,
  isCompleted,
  isLoading = false
}) => {
  const getStepColor = () => {
    if (isCompleted) return 'bg-green-500 text-white';
    if (isActive) return 'bg-primary text-primary-foreground';
    return 'bg-muted text-muted-foreground';
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`
        rounded-full w-10 h-10 flex items-center justify-center transition-colors
        ${getStepColor()}
        ${isLoading ? 'animate-pulse' : ''}
      `}>
        {isLoading ? (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
        ) : (
          icon
        )}
      </div>
      <span className={`text-xs mt-1 font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
        {title}
      </span>
    </div>
  );
};

export default AIContentGeneratorDemo;
