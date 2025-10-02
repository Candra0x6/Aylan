# AI Integration Setup Guide

## Overview
This guide walks you through setting up Google's Gemini AI integration for the Landing Page Generator.

## Prerequisites

1. **Google AI API Key**: Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. **Node.js**: Ensure you have Node.js 18+ installed
3. **Environment Configuration**: Proper `.env.local` setup

## Setup Steps

### 1. Get Your Google AI API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your API key:
   ```env
   GOOGLE_AI_API_KEY=your_actual_api_key_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NODE_ENV=development
   ```

### 3. Test the Integration

Run the development server and test the AI endpoint:

```bash
npm run dev
```

Test endpoints:
- **Health Check**: `GET http://localhost:3000/api/generate-copy`
- **Generate Content**: `POST http://localhost:3000/api/generate-copy`

### 4. Verify Installation

Check if all dependencies are installed:
```bash
npm list @google/generative-ai
```

If missing, install it:
```bash
npm install @google/generative-ai
```

## API Usage

### Basic Content Generation

```typescript
const response = await fetch('/api/generate-copy', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    businessCategory: 'saas',
    stylePreference: 'modern',
    industry: 'tech',
    targetAudience: 'professionals',
    brandKeywords: 'efficient, innovative'
  })
});

const result = await response.json();
```

### Response Format

```json
{
  "success": true,
  "data": {
    "hero": {
      "headline": "Generated headline",
      "subheadline": "Generated subheadline",
      "ctaText": "Get Started"
    },
    "features": {
      "sectionTitle": "Key Features",
      "features": [...]
    },
    "cta": {...},
    "testimonials": {...},
    "metadata": {...}
  },
  "fallbackUsed": false,
  "processingTime": 2340
}
```

## Fallback System

The system includes a comprehensive fallback content generator that activates when:
- API key is not configured
- AI service is unavailable
- Generation fails after retries
- Rate limits are exceeded

This ensures your application continues to work even without AI.

## Configuration Options

### AI Service Configuration

Located in `src/lib/ai/config.ts`:

```typescript
export const AI_CONFIG: AIServiceConfig = {
  model: 'gemini-1.5-flash',
  temperature: 0.7,
  maxTokens: 8192,
  retryAttempts: 3,
  timeoutMs: 30000,
};
```

### Content Generation Options

```typescript
const options: ContentGenerationOptions = {
  includeTestimonials: true,
  featureCount: 4,
  tone: 'professional',
  includeEmojis: false
};
```

## Troubleshooting

### Common Issues

1. **"API key not configured"**
   - Verify `.env.local` exists and contains `GOOGLE_AI_API_KEY`
   - Restart the development server after adding env variables

2. **"Generation timeout"**
   - Check your internet connection
   - Verify API key is valid
   - Try again as it might be a temporary issue

3. **"Rate limit exceeded"**
   - Wait a few minutes before trying again
   - Consider implementing request queuing for high-volume usage

4. **"Invalid JSON response"**
   - This is handled automatically with fallback content
   - Check the AI service logs for debugging

### Testing Commands

```bash
# Test the AI service directly
npm run test:ai

# Check service health
curl http://localhost:3000/api/generate-copy

# Test content generation
curl -X POST http://localhost:3000/api/generate-copy \
  -H "Content-Type: application/json" \
  -d '{"businessCategory":"saas","stylePreference":"modern","industry":"tech","targetAudience":"professionals"}'
```

## Security Best Practices

1. **Never commit API keys** to version control
2. **Use environment variables** for all sensitive configuration
3. **Implement rate limiting** for production use
4. **Monitor API usage** to control costs
5. **Validate all inputs** before sending to AI

## Next Steps

After setting up the AI integration:

1. Test content generation with different input combinations
2. Customize prompts in `src/lib/ai/prompts.ts` for your specific needs
3. Implement content validation and quality checks
4. Set up monitoring for AI service health
5. Consider implementing content caching for better performance

## Support

If you encounter issues:
1. Check the console logs for detailed error messages
2. Verify your API key is correct and has proper permissions
3. Test with the fallback system to ensure basic functionality
4. Review the Google AI Studio documentation for API limits and usage

---

*This AI integration provides intelligent content generation while maintaining reliability through fallback systems.*