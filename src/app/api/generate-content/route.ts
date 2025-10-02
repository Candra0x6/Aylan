/**
 * API Route: Content Generation
 * POST /api/generate-content
 * Generates landing page content using Gemini AI based on form data and selected template
 */

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { landingPageFormSchema, type LandingPageFormSchema } from '@/lib/validation/formSchema';
import type { TemplateSelectionResult } from '@/types/template';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received body:', JSON.stringify(body, null, 2));
    
    const { formData, template } = body;

    // Check if formData exists and is valid
    if (!formData) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing form data in request body',
          message: 'Request should include both formData and template properties'
        },
        { status: 400 }
      );
    }

    // Validate the incoming form data
    const validationResult = landingPageFormSchema.safeParse(formData);
    if (!validationResult.success) {
      console.log('Validation failed:', validationResult.error.issues);
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data',
          details: validationResult.error.issues,
          receivedData: formData
        },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;
    const selectedTemplate = template as TemplateSelectionResult;

    // Generate content based on template type
    const content = await generateTemplateContent(validatedData, selectedTemplate);

    return NextResponse.json({
      success: true,
      data: content,
      message: 'Content generated successfully'
    });

  } catch (error) {
    console.error('Content generation error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate content',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}

async function generateTemplateContent(formData: LandingPageFormSchema, template: TemplateSelectionResult) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

  // Create template-specific prompts based on the selected template
  const prompt = createPromptForTemplate(formData, template);
  
  let rawText = '';
  
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    rawText = response.text();
    
    console.log('Raw Gemini response:', rawText);
    
    // Clean the response text to extract JSON
    let cleanedText = rawText.trim();
    
    // Remove markdown code blocks if present
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }
    
    // Remove any additional markdown or explanatory text before/after JSON
    // Find the first { and last } to extract just the JSON object
    const firstBrace = cleanedText.indexOf('{');
    const lastBrace = cleanedText.lastIndexOf('}');
    
    if (firstBrace !== -1 && lastBrace !== -1 && firstBrace < lastBrace) {
      cleanedText = cleanedText.substring(firstBrace, lastBrace + 1);
    }
    
    // Remove any leading/trailing whitespace
    cleanedText = cleanedText.trim();
    
    console.log('Cleaned text for parsing:', cleanedText);
    
    // Parse the JSON response from Gemini
    const content = JSON.parse(cleanedText);
    return content;
    
  } catch (error) {
    console.error('Gemini AI error:', error);
    console.error('Failed to parse text:', rawText);
    throw new Error('Failed to generate content with AI: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}

function createPromptForTemplate(formData: LandingPageFormSchema, template: TemplateSelectionResult): string {
  const baseInfo = `
    Industry: ${formData.industry}
    Business Category: ${formData.businessCategory}
    Target Audience: ${formData.targetAudience}
    Brand Keywords: ${formData.brandKeywords || 'N/A'}
    Style Preference: ${formData.stylePreference}
    Template: ${template.template.name} (${template.template.category}/${template.template.style})
  `;

  // Template-specific prompts
  switch (template.template.category) {
    case 'saas':
      return createSaasPrompt(baseInfo, template.template.style);
    case 'agency':
      return createAgencyPrompt(baseInfo, template.template.style);
    case 'ecommerce':
      return createEcommercePrompt(baseInfo, template.template.style);
    case 'corporate':
      return createCorporatePrompt(baseInfo, template.template.style);
    default:
      return createGenericPrompt(baseInfo);
  }
}

function createSaasPrompt(baseInfo: string, style: string): string {
  return `
    ${baseInfo}
    
    Generate a complete SaaS landing page content in JSON format for a ${style} design.
    
    Create content that follows this exact JSON structure:
    {
      "header": {
        "logo": "company name",
        "navigation": [
          {"label": "Features", "href": "#features"},
          {"label": "Pricing", "href": "#pricing"},
          {"label": "About", "href": "#about"}
        ],
        "contactCta": {"label": "Get Started", "href": "#signup"}
      },
      "hero": {
        "headline": "compelling headline with target keywords",
        "targetKeyword": "main keyword from brand keywords",
        "subheadline": "supporting description",
        "primaryCta": {"label": "Start Free Trial", "href": "#signup"},
        "secondaryCta": {"label": "Learn More", "href": "#features"}
      },
      "credibility": {
        "metric": "impressive number or statistic", 
        "clientLogos": [
          {"src": "/logo1.png", "alt": "Client 1"},
          {"src": "/logo2.png", "alt": "Client 2"}
        ]
      },
      "services": {
        "title": "Features & Benefits",
        "subtitle": "description of what you offer",
        "services": [
          {
            "title": "Feature 1",
            "outcome": "benefit description",
            "icon": "IconComponent",
            "link": "#feature1"
          }
        ]
      },
      "caseStudy": {
        "metric": "success metric",
        "metricDescription": "context for the metric",
        "quote": "customer testimonial",
        "clientName": "Client Name",
        "clientRole": "Job Title",
        "clientCompany": "Company Name",
        "fullCaseStudyLink": "#case-study"
      },
      "howWeWork": {
        "title": "How It Works",
        "subtitle": "simple process explanation",
        "steps": [
          {
            "number": 1,
            "title": "Step 1",
            "description": "step description"
          }
        ]
      },
      "testimonials": {
        "title": "What Our Users Say",
        "subtitle": "social proof description",
        "testimonials": [
          {
            "quote": "testimonial text",
            "clientName": "Customer Name",
            "clientRole": "Job Title", 
            "clientCompany": "Company",
            "rating": 5
          }
        ]
      },
      "pricing": {
        "title": "Simple, Transparent Pricing",
        "subtitle": "pricing description",
        "plans": [
          {
            "name": "Starter",
            "priceRange": "$19/month",
            "description": "plan description",
            "features": ["feature 1", "feature 2"],
            "cta": {"label": "Get Started", "href": "#signup"}
          }
        ],
        "customOption": {
          "title": "Enterprise",
          "description": "custom solution description",
          "cta": {"label": "Contact Sales", "href": "#contact"}
        }
      },
      "leadCapture": {
        "title": "Ready to Get Started?",
        "subtitle": "call to action description",
        "form": {
          "fields": [
            {"name": "email", "label": "Email", "type": "email", "required": true},
            {"name": "company", "label": "Company", "type": "text"}
          ],
          "submitLabel": "Start Free Trial",
          "submitHref": "#signup"
        },
        "contact": {
          "email": "contact@company.com",
          "phone": "+1 (555) 123-4567"
        }
      },
      "footer": {
        "logo": "company name",
        "description": "brief company description",
        "contact": {
          "email": "contact@company.com",
          "phone": "+1 (555) 123-4567"
        },
        "links": {
          "Product": [
            {"label": "Features", "href": "#features"},
            {"label": "Pricing", "href": "#pricing"}
          ],
          "Company": [
            {"label": "About", "href": "#about"},
            {"label": "Contact", "href": "#contact"}
          ]
        },
        "copyright": "© 2024 Company Name. All rights reserved."
      }
    }
    
    Make sure all content is relevant to the business category, industry, and target audience provided.
    Use the brand keywords naturally throughout the content.
    
    IMPORTANT: Return ONLY the JSON object, no markdown formatting, no code blocks, no additional text or explanations. Start directly with { and end with }.
  `;
}

function createAgencyPrompt(baseInfo: string, style: string): string {
  return `
    ${baseInfo}
    
    Generate a complete Agency landing page content in JSON format for a ${style} design.
    
    Create content that follows this EXACT JSON structure for agency template:
    {
      "header": {
        "logo": "Company Name",
        "contactCta": "Get Quote",
        "contactLink": "#contact",
        "breadcrumbs": [
          {"label": "Home", "href": "/"},
          {"label": "Services", "href": "#services"}
        ]
      },
      "hero": {
        "tagline": "Professional Services",
        "targetKeyword": "main service keyword",
        "headline": "compelling agency headline",
        "subheading": "supporting description of services",
        "primaryCtaText": "Get Started",
        "primaryCtaLink": "#contact",
        "secondaryCtaText": "View Portfolio",
        "secondaryCtaLink": "#portfolio"
      },
      "credibility": {
        "clientLogos": ["/client1.png", "/client2.png", "/client3.png"],
        "metric": {
          "value": "500+",
          "description": "Successful Projects Delivered"
        }
      },
      "services": {
        "title": "Our Services",
        "subtitle": "What we offer to help your business grow",
        "items": [
          {
            "title": "Service 1",
            "outcomeDescription": "Benefit and outcome description",
            "workLink": "#service1"
          },
          {
            "title": "Service 2", 
            "outcomeDescription": "Benefit and outcome description",
            "workLink": "#service2"
          }
        ]
      },
      "caseStudy": {
        "metric": "150%",
        "metricDescription": "Increase in client results",
        "clientQuote": "Outstanding service and results",
        "clientName": "John Smith",
        "clientTitle": "CEO",
        "caseStudyLink": "#case-study"
      },
      "howWeWork": {
        "title": "How We Work",
        "subtitle": "Our proven process for success",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Discovery",
            "description": "We understand your needs"
          },
          {
            "stepNumber": 2,
            "title": "Strategy",
            "description": "We create a custom plan"
          },
          {
            "stepNumber": 3,
            "title": "Execution",
            "description": "We deliver results"
          }
        ]
      },
      "testimonials": {
        "title": "Client Success Stories",
        "subtitle": "What our clients say about us",
        "items": [
          {
            "quote": "Excellent service and results",
            "clientName": "Jane Doe",
            "clientTitle": "Marketing Director",
            "clientCompany": "ABC Corp",
            "rating": 5
          }
        ]
      },
      "pricing": {
        "title": "Service Packages",
        "subtitle": "Choose the right package for your needs",
        "showTransparentPricing": true,
        "packages": [
          {
            "name": "Starter",
            "priceRange": "$2,000 - $5,000",
            "description": "Perfect for small businesses",
            "features": ["Feature 1", "Feature 2", "Feature 3"],
            "ctaText": "Get Started",
            "ctaLink": "#contact"
          }
        ],
        "customOption": {
          "title": "Custom Solution",
          "description": "Tailored to your specific needs",
          "ctaText": "Contact Us",
          "ctaLink": "#contact"
        }
      },
      "leadCapture": {
        "title": "Ready to Get Started?",
        "subtitle": "Let's discuss your project",
        "formType": "form",
        "formFields": [
          {"name": "name", "label": "Full Name", "type": "text", "required": true},
          {"name": "email", "label": "Email", "type": "email", "required": true},
          {"name": "project", "label": "Project Details", "type": "textarea", "required": false}
        ],
        "submitText": "Send Message"
      },
      "footer": {
        "companyName": "Company Name",
        "tagline": "Your trusted partner",
        "contactInfo": {
          "address": "123 Business St, City, State 12345",
          "phone": "+1 (555) 123-4567",
          "email": "contact@company.com"
        },
        "sitemapLinks": [
          {"label": "Services", "href": "#services"},
          {"label": "Portfolio", "href": "#portfolio"},
          {"label": "Contact", "href": "#contact"}
        ],
        "socialLinks": [
          {"platform": "LinkedIn", "url": "https://linkedin.com/company/yourname"},
          {"platform": "Twitter", "url": "https://twitter.com/yourname"}
        ]
      }
    }
    
    Make sure all content is relevant to the agency business category, industry, and target audience provided.
    Use the brand keywords naturally throughout the content.
    
    IMPORTANT: Return ONLY the JSON object, no markdown formatting, no code blocks, no additional text or explanations.
  `;
}

function createEcommercePrompt(baseInfo: string, style: string): string {
  return `
    ${baseInfo}
    
    Generate a complete E-commerce landing page content in JSON format for a ${style} design.
    
    Create content that follows this EXACT JSON structure for e-commerce template:
    {
      "header": {
        "logo": "Brand Name",
        "navigation": [
          {"label": "Shop", "href": "#shop"},
          {"label": "About", "href": "#about"},
          {"label": "Contact", "href": "#contact"}
        ],
        "contactCta": {
          "label": "Shop Now",
          "href": "#shop"
        },
        "breadcrumbs": [
          {"label": "Home", "href": "/"},
          {"label": "Products", "href": "#products"}
        ]
      },
      "hero": {
        "badge": "New Collection",
        "targetKeyword": "main product keyword",
        "headline": "Compelling product headline",
        "subheading": "Premium quality products description",
        "primaryCta": {
          "label": "Shop Now", 
          "href": "#shop"
        },
        "secondaryCta": {
          "label": "View Collection",
          "href": "#products"
        }
      },
      "credibility": {
        "clientLogos": [
          {"src": "/customer1.png", "alt": "Customer 1"},
          {"src": "/customer2.png", "alt": "Customer 2"}
        ],
        "metric": "50,000+ Happy Customers Worldwide"
      },
      "services": {
        "title": "Featured Products",
        "subtitle": "Our best-selling items",
        "services": [
          {
            "title": "Product 1",
            "outcome": "Premium quality and satisfaction guarantee",
            "icon": "ShoppingBag",
            "link": "#product1"
          },
          {
            "title": "Product 2",
            "outcome": "Award-winning design and functionality",
            "icon": "Star",
            "link": "#product2"
          }
        ]
      },
      "caseStudy": {
        "title": "Customer Success Story",
        "metric": "98%",
        "metricDescription": "Customer Satisfaction Rate",
        "clientQuote": "Outstanding product quality and service",
        "clientName": "Sarah Customer", 
        "clientTitle": "Verified Buyer",
        "caseStudyLink": "#reviews",
        "image": "/customer-photo.jpg",
        "imageAlt": "Happy customer Sarah"
      },
      "howWeWork": {
        "title": "How to Shop",
        "subtitle": "Simple and secure shopping process",
        "steps": [
          {
            "title": "Browse",
            "description": "Explore our curated collection"
          },
          {
            "title": "Choose",
            "description": "Select your perfect items"
          },
          {
            "title": "Enjoy",
            "description": "Fast shipping and excellent support"
          }
        ]
      },
      "testimonials": {
        "title": "Customer Reviews",
        "subtitle": "What our customers are saying",
        "testimonials": [
          {
            "quote": "Amazing quality and fast shipping!",
            "name": "Mike Buyer",
            "title": "Verified Purchase",
            "company": "Satisfied Customer",
            "photo": "/reviewer1.jpg",
            "rating": 5
          }
        ]
      },
      "pricing": {
        "title": "Product Packages",
        "subtitle": "Choose the perfect option for you",
        "packages": [
          {
            "name": "Starter Pack",
            "description": "Perfect for trying our products",
            "price": "$49.99",
            "period": "one-time",
            "features": ["Product 1", "Free Shipping", "30-day Return"],
            "ctaText": "Add to Cart",
            "ctaLink": "#cart",
            "featured": false
          },
          {
            "name": "Premium Bundle",
            "description": "Best value for money",
            "price": "$129.99",
            "period": "one-time",
            "features": ["Product 1 & 2", "Free Premium Shipping", "60-day Return", "Priority Support"],
            "ctaText": "Add to Cart",
            "ctaLink": "#cart",
            "featured": true
          }
        ],
        "customOption": {
          "title": "Custom Order",
          "description": "Need something specific? We can help",
          "ctaText": "Contact Us",
          "ctaLink": "#contact"
        }
      },
      "leadCapture": {
        "title": "Stay Updated",
        "subtitle": "Get exclusive offers and new product updates",
        "formTitle": "Subscribe to Newsletter",
        "formCta": "Subscribe",
        "nextAvailability": "Updates sent weekly",
        "calendarLink": "#newsletter",
        "email": "support@brand.com",
        "phone": "+1 (555) 123-SHOP",
        "address": "123 Shopping St, Commerce City, State 12345"
      },
      "footer": {
        "logo": "Brand Name",
        "description": "Quality products, exceptional service",
        "email": "support@brand.com",
        "phone": "+1 (555) 123-SHOP",
        "address": "123 Shopping St, Commerce City, State 12345",
        "links": [
          {
            "title": "Products",
            "items": [
              {"label": "Shop All", "href": "#products"},
              {"label": "New Arrivals", "href": "#new"}
            ]
          },
          {
            "title": "Support",
            "items": [
              {"label": "Contact", "href": "#contact"},
              {"label": "Returns", "href": "#returns"}
            ]
          }
        ],
        "privacy": {"label": "Privacy Policy", "href": "#privacy"},
        "terms": {"label": "Terms of Service", "href": "#terms"},
        "copyright": "© 2024 Brand Name. All rights reserved."
      }
    }
    
    Make sure all content is relevant to the e-commerce business category, industry, and target audience provided.
    Use the brand keywords naturally throughout the content.
    Focus on product benefits, customer satisfaction, and conversion optimization.
    
    IMPORTANT: Return ONLY the JSON object, no markdown formatting, no code blocks, no additional text or explanations.
  `;
}

function createCorporatePrompt(baseInfo: string, style: string): string {
  return `
    ${baseInfo}
    
    Generate a complete Corporate landing page content in JSON format for a ${style} design.
    
    Create content that follows this EXACT JSON structure for corporate template:
    {
      "header": {
        "logo": "Company Name",
        "contactCta": "Contact Us",
        "contactLink": "#contact",
        "breadcrumbs": [
          {"label": "Home", "href": "/"},
          {"label": "About", "href": "#about"}
        ]
      },
      "hero": {
        "badge": "Industry Leader",
        "targetKeyword": "main business keyword",
        "headline": "Professional corporate headline",
        "subheading": "Supporting corporate message",
        "primaryCtaText": "Get Started",
        "primaryCtaLink": "#contact",
        "secondaryCtaText": "Learn More",
        "secondaryCtaLink": "#about"
      },
      "credibility": {
        "clientLogos": ["/client1.png", "/client2.png", "/client3.png"],
        "metric": {
          "value": "25+ Years",
          "description": "Of Industry Excellence"
        },
        "communityCount": "500+ Corporate Clients"
      },
      "services": {
        "title": "Our Services",
        "subtitle": "Comprehensive business solutions",
        "items": [
          {
            "title": "Service 1",
            "outcomeDescription": "Business outcome description",
            "workLink": "#service1",
            "color": "primary"
          },
          {
            "title": "Service 2",
            "outcomeDescription": "Business outcome description", 
            "workLink": "#service2",
            "color": "accent"
          }
        ]
      },
      "caseStudy": {
        "metric": "300%",
        "metricDescription": "ROI Improvement",
        "clientQuote": "Outstanding corporate partnership",
        "clientName": "John Executive",
        "clientTitle": "CEO",
        "clientCompany": "Fortune 500 Corp",
        "caseStudyLink": "#case-study",
        "backgroundColor": "primary"
      },
      "howWeWork": {
        "title": "Our Process",
        "subtitle": "How we deliver results",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Analysis",
            "description": "We analyze your business needs",
            "color": "primary"
          },
          {
            "stepNumber": 2,
            "title": "Strategy",
            "description": "We develop a custom strategy",
            "color": "accent"
          },
          {
            "stepNumber": 3,
            "title": "Implementation",
            "description": "We execute with precision",
            "color": "secondary"
          }
        ]
      },
      "testimonials": {
        "title": "Client Success Stories",
        "subtitle": "What industry leaders say",
        "items": [
          {
            "quote": "Exceptional corporate service",
            "clientName": "Jane Executive",
            "clientTitle": "COO",
            "clientCompany": "Global Enterprise",
            "rating": 5,
            "emoji": "🎯"
          }
        ]
      },
      "pricing": {
        "title": "Service Packages",
        "subtitle": "Tailored to your business needs",
        "showTransparentPricing": true,
        "packages": [
          {
            "name": "Enterprise",
            "priceRange": "$10,000 - $25,000",
            "description": "For large organizations",
            "features": ["Feature 1", "Feature 2", "Feature 3"],
            "ctaText": "Contact Sales",
            "ctaLink": "#contact",
            "popular": true,
            "color": "primary"
          }
        ],
        "customOption": {
          "title": "Custom Enterprise Solution",
          "description": "Tailored for your specific needs",
          "ctaText": "Schedule Consultation",
          "ctaLink": "#contact"
        }
      },
      "leadCapture": {
        "title": "Ready to Transform Your Business?",
        "subtitle": "Let's discuss your corporate needs",
        "formType": "form",
        "formFields": [
          {"name": "name", "label": "Full Name", "type": "text", "required": true},
          {"name": "email", "label": "Business Email", "type": "email", "required": true},
          {"name": "company", "label": "Company Name", "type": "text", "required": true},
          {"name": "requirements", "label": "Business Requirements", "type": "textarea", "required": false}
        ],
        "submitText": "Schedule Consultation",
        "backgroundColor": "accent"
      },
      "footer": {
        "companyName": "Company Name",
        "tagline": "Your trusted corporate partner",
        "contactInfo": {
          "address": "123 Corporate Blvd, Business City, State 12345",
          "phone": "+1 (555) 123-4567",
          "email": "info@company.com"
        },
        "sitemapLinks": [
          {"label": "Services", "href": "#services"},
          {"label": "About", "href": "#about"},
          {"label": "Contact", "href": "#contact"}
        ],
        "socialLinks": [
          {"platform": "LinkedIn", "url": "https://linkedin.com/company/yourname"},
          {"platform": "Twitter", "url": "https://twitter.com/yourname"}
        ]
      }
    }
    
    Make sure all content is relevant to the corporate business category, industry, and target audience provided.
    Use the brand keywords naturally throughout the content.
    Focus on professional authority, business results, and corporate trust.
    
    IMPORTANT: Return ONLY the JSON object, no markdown formatting, no code blocks, no additional text or explanations.
  `;
}

function createGenericPrompt(baseInfo: string): string {
  return `
    ${baseInfo}
    
    Generate a complete landing page content in JSON format.
    
    Create comprehensive content with all necessary sections for a professional landing page.
    Ensure all content is relevant to the business and target audience.
    
    IMPORTANT: Return ONLY the JSON object, no markdown formatting, no code blocks, no additional text or explanations.
  `;
}