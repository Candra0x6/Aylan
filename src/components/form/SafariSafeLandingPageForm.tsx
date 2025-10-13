/**
 * Safari-Safe Simple Landing Page Form Component
 * Prevents "Right side of assignment cannot be destructured" errors on Safari macOS
 */

'use client';

import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { landingPageFormSchema, type LandingPageFormSchema } from '@/lib/validation/formSchema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Loader2, Sparkles } from 'lucide-react';
import {
  industryOptions,
  businessCategoryOptions,
  targetAudienceOptions,
  stylePreferenceOptions,
  toneVoiceOptions
} from '@/data/options/formOptions';
import {
  useSafariForm,
  safariFormState,
  createSafariControllerRender,
  createSafariSubmitHandler,
  safariRegister
} from '@/components/form/SafariFormUtils';
import { isSafariOnMacOS } from '@/utils/macOSCompatibility';

interface SafariSafeFormProps {
  onSubmit: (data: LandingPageFormSchema) => Promise<void>;
  isLoading?: boolean;
}

export const SafariSafeLandingPageForm: React.FC<SafariSafeFormProps> = ({ 
  onSubmit, 
  isLoading = false 
}) => {
  const [error, setError] = useState<string | null>(null);

  // Use Safari-safe form hook
  const form = useSafariForm<LandingPageFormSchema>({
    resolver: zodResolver(landingPageFormSchema),
    mode: 'onChange',
    defaultValues: {
      industry: undefined,
      businessCategory: undefined,
      targetAudience: undefined,
      stylePreference: undefined,
      businessName: '',
      mainProductService: '',
      uniqueSellingProposition: '',
      callToAction: '',
      toneVoice: undefined,
      brandKeywords: ''
    }
  });

  // Safari-safe form state extraction
  const formStateData = isSafariOnMacOS() 
    ? safariFormState(form.formState)
    : form.formState;

  const { errors, isValid } = formStateData;

  // Safari-safe form submission handler
  const handleFormSubmit = createSafariSubmitHandler(async (data: LandingPageFormSchema) => {
    setError(null);
    try {
      console.log('Safari-safe form submitting:', data);
      await onSubmit(data);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setError(errorMessage);
    }
  });

  // Safari-safe register function
  const register = isSafariOnMacOS() 
    ? (name: keyof LandingPageFormSchema, options?: any) => safariRegister(form.register, name as string, options)
    : form.register;

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold flex items-center gap-2 justify-center">
            <Sparkles className="h-8 w-8 text-primary" />
            Tell Us About Your Business
          </CardTitle>
          <CardDescription className="text-lg">
            Our AI will select the perfect template and generate compelling content for your landing page
          </CardDescription>
          {isSafariOnMacOS() && (
            <div className="text-xs text-green-600 mt-2">
              ✓ Safari compatibility mode enabled
            </div>
          )}
        </CardHeader>
        
        <CardContent>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
            {/* Industry Selection */}
            <div className="space-y-2">
              <Label htmlFor="industry" className="text-sm font-medium">
                What industry are you in? <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="industry"
                control={form.control}
                render={createSafariControllerRender(({ field }) => (
                  <Select value={field.value || ''} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industryOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ))}
              />
              {errors.industry && (
                <p className="text-sm text-red-600">{errors.industry.message}</p>
              )}
            </div>

            {/* Business Category Selection */}
            <div className="space-y-2">
              <Label htmlFor="businessCategory" className="text-sm font-medium">
                What type of business is this? <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="businessCategory"
                control={form.control}
                render={createSafariControllerRender(({ field }) => (
                  <Select value={field.value || ''} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessCategoryOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ))}
              />
              {errors.businessCategory && (
                <p className="text-sm text-red-600">{errors.businessCategory.message}</p>
              )}
            </div>

            {/* Target Audience Selection */}
            <div className="space-y-2">
              <Label htmlFor="targetAudience" className="text-sm font-medium">
                Who is your target audience? <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="targetAudience"
                control={form.control}
                render={createSafariControllerRender(({ field }) => (
                  <Select value={field.value || ''} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select target audience" />
                    </SelectTrigger>
                    <SelectContent>
                      {targetAudienceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ))}
              />
              {errors.targetAudience && (
                <p className="text-sm text-red-600">{errors.targetAudience.message}</p>
              )}
            </div>

            {/* Business Name */}
            <div className="space-y-2">
              <Label htmlFor="businessName" className="text-sm font-medium">
                Business Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="businessName"
                placeholder="Enter your business name"
                {...register('businessName', { required: 'Business name is required' })}
              />
              {errors.businessName && (
                <p className="text-sm text-red-600">{errors.businessName.message}</p>
              )}
            </div>

            {/* Main Product/Service */}
            <div className="space-y-2">
              <Label htmlFor="mainProductService" className="text-sm font-medium">
                Main Product or Service <span className="text-red-500">*</span>
              </Label>
              <Input
                id="mainProductService"
                placeholder="What do you offer?"
                {...register('mainProductService', { required: 'Main product/service is required' })}
              />
              {errors.mainProductService && (
                <p className="text-sm text-red-600">{errors.mainProductService.message}</p>
              )}
            </div>

            {/* Unique Selling Proposition */}
            <div className="space-y-2">
              <Label htmlFor="uniqueSellingProposition" className="text-sm font-medium">
                What makes you unique? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="uniqueSellingProposition"
                placeholder="What sets your business apart from competitors?"
                {...register('uniqueSellingProposition', { required: 'Unique selling proposition is required' })}
              />
              {errors.uniqueSellingProposition && (
                <p className="text-sm text-red-600">{errors.uniqueSellingProposition.message}</p>
              )}
            </div>

            {/* Call to Action */}
            <div className="space-y-2">
              <Label htmlFor="callToAction" className="text-sm font-medium">
                Desired Call to Action <span className="text-red-500">*</span>
              </Label>
              <Input
                id="callToAction"
                placeholder="e.g., 'Get Started', 'Book a Demo', 'Shop Now'"
                {...register('callToAction', { required: 'Call to action is required' })}
              />
              {errors.callToAction && (
                <p className="text-sm text-red-600">{errors.callToAction.message}</p>
              )}
            </div>

            {/* Style Preference */}
            <div className="space-y-2">
              <Label htmlFor="stylePreference" className="text-sm font-medium">
                Style Preference
              </Label>
              <Controller
                name="stylePreference"
                control={form.control}
                render={createSafariControllerRender(({ field }) => (
                  <Select value={field.value || ''} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select style preference (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {stylePreferenceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ))}
              />
            </div>

            {/* Tone of Voice */}
            <div className="space-y-2">
              <Label htmlFor="toneVoice" className="text-sm font-medium">
                Tone of Voice
              </Label>
              <Controller
                name="toneVoice"
                control={form.control}
                render={createSafariControllerRender(({ field }) => (
                  <Select value={field.value || ''} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tone of voice (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {toneVoiceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ))}
              />
            </div>

            {/* Brand Keywords */}
            <div className="space-y-2">
              <Label htmlFor="brandKeywords" className="text-sm font-medium">
                Brand Keywords
              </Label>
              <Textarea
                id="brandKeywords"
                placeholder="Keywords that represent your brand (optional)"
                {...register('brandKeywords')}
              />
            </div>

            {/* Error Alert */}
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !isValid}
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Your Landing Page...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate AI Landing Page
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};