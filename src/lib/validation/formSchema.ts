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
  
  brandKeywords: z
    .string()
    .max(200, 'Brand keywords must be less than 200 characters')
    .transform((val) => val?.trim() || '')
});

export type LandingPageFormSchema = z.infer<typeof landingPageFormSchema>;