/**
 * Zod validation schema for the landing page form
 */

import { z } from 'zod';

export const landingPageFormSchema = z.object({
  industry: z.enum(['tech', 'healthcare', 'education', 'retail'], {
    message: 'Please select an industry'
  }),
  
  businessCategory: z.enum(['saas', 'ecommerce', 'agency', 'corporate'], {
    message: 'Please select a business category'
  }),
  
  targetAudience: z.enum(['professionals', 'consumers', 'entrepreneurs', 'developers'], {
    message: 'Please select your target audience'
  }),
  
  stylePreference: z.enum(['minimalist', 'modern', 'bold', 'elegant', 'playful'], {
    message: 'Please select a style preference'
  }),
  
  businessName: z
    .string()
    .min(1, 'Business name is required')
    .max(100, 'Business name must be less than 100 characters')
    .transform((val) => val?.trim()),
  
  mainProductService: z
    .string()
    .min(1, 'Main product/service is required')
    .max(200, 'Product/service description must be less than 200 characters')
    .transform((val) => val?.trim()),
  
  uniqueSellingProposition: z
    .string()
    .min(1, 'Unique selling proposition is required')
    .max(300, 'Unique selling proposition must be less than 300 characters')
    .transform((val) => val?.trim()),
  
  callToAction: z
    .string()
    .min(1, 'Call to action is required')
    .max(50, 'Call to action must be less than 50 characters')
    .transform((val) => val?.trim()),
  
  toneVoice: z.enum(['professional', 'friendly', 'authoritative', 'conversational', 'inspiring'], {
    message: 'Please select a tone of voice'
  }),
  
  brandKeywords: z
    .string()
    .max(200, 'Brand keywords must be less than 200 characters')
    .transform((val) => val?.trim() || '')
});

export type LandingPageFormSchema = z.infer<typeof landingPageFormSchema>;