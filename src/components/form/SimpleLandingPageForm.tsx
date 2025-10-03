/**
 * Simple Landing Page Form Component for AI Demo
 * Handles user input without template selection (that's done by the parent component)
 */

'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
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

interface SimpleFormProps {
  onSubmit: (data: LandingPageFormSchema) => Promise<void>;
  isLoading?: boolean;
}

export const SimpleLandingPageForm: React.FC<SimpleFormProps> = ({ 
  onSubmit, 
  isLoading = false 
}) => {
  const [error, setError] = useState<string | null>(null);

  const form = useForm<LandingPageFormSchema>({
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

  const {
    handleSubmit,
    register,
    formState: { errors, isValid }
  } = form;

  const handleFormSubmit = async (data: LandingPageFormSchema) => {
    setError(null);
    try {
      console.log('Simple form submitting:', data);
      await onSubmit(data);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setError(errorMessage);
    }
  };

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
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            {/* Industry Selection */}
            <div className="space-y-2">
              <Label htmlFor="industry" className="text-sm font-medium">
                What industry are you in? <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="industry"
                control={form.control}
                render={({ field }) => (
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
                )}
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
                render={({ field }) => (
                  <Select value={field.value || ''} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business category" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessCategoryOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div>
                            <div className="font-medium">{option.label}</div>
                            <div className="text-sm text-muted-foreground">{option.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
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
                render={({ field }) => (
                  <Select value={field.value || ''} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select target audience" />
                    </SelectTrigger>
                    <SelectContent>
                      {targetAudienceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div>
                            <div className="font-medium">{option.label}</div>
                            <div className="text-sm text-muted-foreground">{option.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.targetAudience && (
                <p className="text-sm text-red-600">{errors.targetAudience.message}</p>
              )}
            </div>

            {/* Style Preference Selection */}
            <div className="space-y-2">
              <Label htmlFor="stylePreference" className="text-sm font-medium">
                What design style do you prefer? <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="stylePreference"
                control={form.control}
                render={({ field }) => (
                  <Select value={field.value || ''} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select design style" />
                    </SelectTrigger>
                    <SelectContent>
                      {stylePreferenceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div>
                            <div className="font-medium">{option.label}</div>
                            <div className="text-sm text-muted-foreground">{option.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.stylePreference && (
                <p className="text-sm text-red-600">{errors.stylePreference.message}</p>
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
                {...register('businessName')}
              />
              {errors.businessName && (
                <p className="text-sm text-red-600">{errors.businessName.message}</p>
              )}
            </div>

            {/* Main Product/Service */}
            <div className="space-y-2">
              <Label htmlFor="mainProductService" className="text-sm font-medium">
                Main Product/Service <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="mainProductService"
                placeholder="Describe your main product or service (e.g., Project management software for teams)"
                {...register('mainProductService')}
                className="min-h-[80px]"
              />
              {errors.mainProductService && (
                <p className="text-sm text-red-600">{errors.mainProductService.message}</p>
              )}
            </div>

            {/* Unique Selling Proposition */}
            <div className="space-y-2">
              <Label htmlFor="uniqueSellingProposition" className="text-sm font-medium">
                Unique Selling Proposition <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="uniqueSellingProposition"
                placeholder="What makes you different from competitors? (e.g., 10x faster setup, AI-powered insights, 24/7 support)"
                {...register('uniqueSellingProposition')}
                className="min-h-[100px]"
              />
              {errors.uniqueSellingProposition && (
                <p className="text-sm text-red-600">{errors.uniqueSellingProposition.message}</p>
              )}
            </div>

            {/* Call to Action */}
            <div className="space-y-2">
              <Label htmlFor="callToAction" className="text-sm font-medium">
                Primary Call to Action <span className="text-red-500">*</span>
              </Label>
              <Input
                id="callToAction"
                placeholder="Enter your main CTA (e.g., Start Free Trial, Get Quote, Shop Now)"
                {...register('callToAction')}
              />
              {errors.callToAction && (
                <p className="text-sm text-red-600">{errors.callToAction.message}</p>
              )}
            </div>

            {/* Tone of Voice */}
            <div className="space-y-2">
              <Label htmlFor="toneVoice" className="text-sm font-medium">
                Tone of Voice <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="toneVoice"
                control={form.control}
                render={({ field }) => (
                  <Select value={field.value || ''} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tone of voice" />
                    </SelectTrigger>
                    <SelectContent>
                      {toneVoiceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div>
                            <div className="font-medium">{option.label}</div>
                            <div className="text-sm text-muted-foreground">{option.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.toneVoice && (
                <p className="text-sm text-red-600">{errors.toneVoice.message}</p>
              )}
            </div>

            {/* Brand Keywords */}
            <div className="space-y-2">
              <Label htmlFor="brandKeywords" className="text-sm font-medium">
                Brand Keywords (Optional)
              </Label>
              <Textarea
                placeholder="Enter keywords that describe your brand, products, or services (e.g., innovative, reliable, affordable)"
                {...register('brandKeywords')}
                className="min-h-[100px]"
              />
              <p className="text-xs text-muted-foreground">
                These keywords will be used to personalize your content
              </p>
              {errors.brandKeywords && (
                <p className="text-sm text-red-600">{errors.brandKeywords.message}</p>
              )}
            </div>

            {/* Error Display */}
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full text-lg py-6"
              disabled={!isValid || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating Your Landing Page...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate My Landing Page
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};