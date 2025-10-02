/**
 * API Route: Template Selection
 * POST /api/select-template
 * Selects the best template based on user form data
 */

import { NextRequest, NextResponse } from 'next/server';
import { selectTemplate, validateSelectionCriteria, getTemplateAlternatives } from '@/lib/templates/templateSelector';
import { landingPageFormSchema } from '@/lib/validation/formSchema';
import type { TemplateSelectionCriteria } from '@/types/template';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the incoming form data
    const validationResult = landingPageFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Invalid form data',
          details: validationResult.error.issues
        },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // Create template selection criteria from form data
    const criteria: TemplateSelectionCriteria = {
      businessCategory: formData.businessCategory,
      stylePreference: formData.stylePreference,
      industry: formData.industry,
      targetAudience: formData.targetAudience
    };

    // Validate selection criteria
    const criteriaErrors = validateSelectionCriteria(criteria);
    if (criteriaErrors.length > 0) {
      return NextResponse.json(
        {
          error: 'Invalid selection criteria',
          details: criteriaErrors
        },
        { status: 400 }
      );
    }

    // Select the best template
    const selectedTemplate = selectTemplate(criteria, {
      fallbackEnabled: true,
      requireExactMatch: false,
      includeAlternatives: true,
      maxAlternatives: 2
    });

    // Get additional alternatives for user choice
    const alternatives = getTemplateAlternatives(criteria, 3);

    // Return successful response
    return NextResponse.json({
      success: true,
      data: {
        selectedTemplate,
        alternatives: alternatives.slice(1, 3), // Exclude the selected one
        criteria,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Template selection error:', error);
    
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return available templates info for debugging/admin purposes
  try {
    const { templateRegistry } = await import('@/data/templates/templateRegistry');
    const { getTemplateStats } = await import('@/lib/templates/templateSelector');
    
    return NextResponse.json({
      success: true,
      data: {
        availableTemplates: templateRegistry,
        statistics: getTemplateStats(),
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error fetching templates:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to fetch templates',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}