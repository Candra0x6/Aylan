/**
 * Main Landing Page Form Component
 * Handles user input for AI landing page generation
 */

'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { landingPageFormSchema, type LandingPageFormSchema } from '@/lib/validation/formSchema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import {
  industryOptions,
  businessCategoryOptions,
  targetAudienceOptions,
  stylePreferenceOptions
} from '@/data/options/formOptions';
import type { FormSubmissionState } from '@/types/form';
import { useTemplateSelection } from '@/hooks/useTemplateSelection';

interface LandingPageFormProps {
  onSubmit: (data: LandingPageFormSchema) => Promise<void>;
}

export const LandingPageForm: React.FC<LandingPageFormProps> = ({ onSubmit }) => {
  const [submissionState, setSubmissionState] = useState<FormSubmissionState>({
    isLoading: false,
    error: null,
    success: false
  });

  const {
    selectedTemplate,
    alternatives,
    isLoading: templateLoading,
    selectTemplate,
    error: templateError
  } = useTemplateSelection();

  const form = useForm<LandingPageFormSchema>({
    resolver: zodResolver(landingPageFormSchema),
    mode: 'onChange',
    defaultValues: {
      brandKeywords: ''
    }
  });

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid }
  } = form;

  // Watch form values for controlled components
  const watchedValues = watch();

  const handleFormSubmit = async (data: LandingPageFormSchema) => {
    setSubmissionState({ isLoading: true, error: null, success: false });
    
    try {
      // First, select the appropriate template
      const template = await selectTemplate(data);
      console.log('Selected template:', template);
      
      // Then call the original onSubmit with the data
      await onSubmit(data);
      setSubmissionState({ isLoading: false, error: null, success: true });
    } catch (error) {
      setSubmissionState({
        isLoading: false,
        error: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
        success: false
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">AI Landing Page Generator</CardTitle>
          <CardDescription className="text-lg">
            Tell us about your business and we&apos;ll create a high-converting landing page for you
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            {/* Industry Selection */}
            <div className="space-y-2">
              <Label htmlFor="industry" className="text-sm font-medium">
                Industry <span className="text-red-500">*</span>
              </Label>
              <Select
                value={watchedValues.industry}
                onValueChange={(value) => setValue('industry', value as 'tech' | 'healthcare' | 'education' | 'retail', { shouldValidate: true })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry..." />
                </SelectTrigger>
                <SelectContent>
                  {industryOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.industry && (
                <p className="text-sm text-red-600">{errors.industry.message}</p>
              )}
              {watchedValues.industry && (
                <p className="text-sm text-muted-foreground">
                  {industryOptions.find(opt => opt.value === watchedValues.industry)?.description}
                </p>
              )}
            </div>

            {/* Business Category Selection */}
            <div className="space-y-2">
              <Label htmlFor="businessCategory" className="text-sm font-medium">
                Business Category <span className="text-red-500">*</span>
              </Label>
              <Select
                value={watchedValues.businessCategory}
                onValueChange={(value) => setValue('businessCategory', value as 'saas' | 'ecommerce' | 'agency' | 'corporate', { shouldValidate: true })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your business type..." />
                </SelectTrigger>
                <SelectContent>
                  {businessCategoryOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.businessCategory && (
                <p className="text-sm text-red-600">{errors.businessCategory.message}</p>
              )}
              {watchedValues.businessCategory && (
                <p className="text-sm text-muted-foreground">
                  {businessCategoryOptions.find(opt => opt.value === watchedValues.businessCategory)?.description}
                </p>
              )}
            </div>

            {/* Target Audience Selection */}
            <div className="space-y-2">
              <Label htmlFor="targetAudience" className="text-sm font-medium">
                Target Audience <span className="text-red-500">*</span>
              </Label>
              <Select
                value={watchedValues.targetAudience}
                onValueChange={(value) => setValue('targetAudience', value as 'professionals' | 'consumers' | 'entrepreneurs' | 'developers', { shouldValidate: true })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Who is your target audience?" />
                </SelectTrigger>
                <SelectContent>
                  {targetAudienceOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.targetAudience && (
                <p className="text-sm text-red-600">{errors.targetAudience.message}</p>
              )}
              {watchedValues.targetAudience && (
                <p className="text-sm text-muted-foreground">
                  {targetAudienceOptions.find(opt => opt.value === watchedValues.targetAudience)?.description}
                </p>
              )}
            </div>

            {/* Style Preference Selection */}
            <div className="space-y-2">
              <Label htmlFor="stylePreference" className="text-sm font-medium">
                Style Preference <span className="text-red-500">*</span>
              </Label>
              <Select
                value={watchedValues.stylePreference}
                onValueChange={(value) => setValue('stylePreference', value as 'minimalist' | 'modern' | 'bold' | 'elegant' | 'playful', { shouldValidate: true })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose your preferred style..." />
                </SelectTrigger>
                <SelectContent>
                  {stylePreferenceOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.stylePreference && (
                <p className="text-sm text-red-600">{errors.stylePreference.message}</p>
              )}
              {watchedValues.stylePreference && (
                <p className="text-sm text-muted-foreground">
                  {stylePreferenceOptions.find(opt => opt.value === watchedValues.stylePreference)?.description}
                </p>
              )}
            </div>

            {/* Brand Keywords (Optional) */}
            <div className="space-y-2">
              <Label htmlFor="brandKeywords" className="text-sm font-medium">
                Brand Keywords & Tone <span className="text-muted-foreground">(Optional)</span>
              </Label>
              <Textarea
                id="brandKeywords"
                value={watchedValues.brandKeywords || ''}
                onChange={(e) => setValue('brandKeywords', e.target.value, { shouldValidate: true })}
                placeholder="e.g., innovative, reliable, fast, professional, cutting-edge..."
                maxLength={200}
                rows={3}
                className="resize-none"
              />
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Help us understand your brand tone and key messaging
                </p>
                <span className="text-sm text-muted-foreground">
                  {(watchedValues.brandKeywords || '').length}/200
                </span>
              </div>
              {errors.brandKeywords && (
                <p className="text-sm text-red-600">{errors.brandKeywords.message}</p>
              )}
            </div>

            {/* Error Message */}
            {submissionState.error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{submissionState.error}</AlertDescription>
              </Alert>
            )}

            {/* Success Message */}
            {submissionState.success && (
              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>Your landing page is being generated...</AlertDescription>
              </Alert>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={!isValid || submissionState.isLoading}
                className="w-full"
                size="lg"
              >
                {submissionState.isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Your Landing Page...
                  </>
                ) : (
                  'Generate Landing Page'
                )}
              </Button>
            </div>

            {/* Form Validation Summary */}
            {Object.keys(errors).length > 0 && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Please complete all required fields before generating your landing page.
                </AlertDescription>
              </Alert>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};