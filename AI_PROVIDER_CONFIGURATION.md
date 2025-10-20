# AI Provider Configuration Guide

## Overview

The AI Landing Page Generator now supports multiple AI providers, giving you the flexibility to use your preferred AI service or API key.

## Supported AI Providers

### 1. **Google Gemini** (Default)
- **Model**: `gemini-2.5-flash`
- **Best for**: Fast, efficient content generation
- **API Key**: Set `GEMINI_API_KEY` environment variable

### 2. **Anthropic Claude**
- **Model**: `claude-3-5-sonnet-20241022`
- **Best for**: Advanced reasoning and nuanced content
- **API Key**: Set `ANTHROPIC_API_KEY` environment variable

### 3. **OpenAI ChatGPT**
- **Model**: `gpt-4o`
- **Best for**: Creative and powerful content generation
- **API Key**: Set `OPENAI_API_KEY` environment variable

## Configuration Options

### Using System Default (Recommended)

The system uses Google Gemini as the default provider. To use it:

1. Set the environment variable in your `.env.local` file:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

2. Leave the "Custom API Key" field empty in the form
3. The system will automatically use the configured default

### Using Custom API Keys

For each request, you can:

1. Select your preferred AI provider from the dropdown
2. Enter your API key in the "Custom API Key" field
3. Your key is used only for that specific request and is never stored

## Environment Variables

Create or update your `.env.local` file:

```env
# Google Gemini (Default)
GEMINI_API_KEY=your_gemini_api_key_here

# Anthropic Claude (Optional)
ANTHROPIC_API_KEY=your_claude_api_key_here

# OpenAI ChatGPT (Optional)
OPENAI_API_KEY=your_openai_api_key_here
```

## Security Features

✅ **Never Stored**: Custom API keys are never saved to database or logs
✅ **Request-Only**: Keys are used only for the current generation request
✅ **Fallback**: System defaults are used if custom keys are not provided
✅ **Validation**: API keys are validated before making requests

## How It Works

### Form Submission

```typescript
{
  // ... other form fields
  aiProvider: 'gemini' | 'claude' | 'chatgpt',  // Default: 'gemini'
  customApiKey: 'optional_api_key'               // Optional
}
```

### API Route Processing

1. **Provider Selection**: Reads `aiProvider` field (defaults to 'gemini')
2. **API Key Resolution**:
   - Uses `customApiKey` if provided
   - Falls back to environment variable if not provided
   - Throws error if no key available

3. **Content Generation**: Routes request to appropriate AI service

## Getting API Keys

### Google Gemini
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy and add to `.env.local`

### Anthropic Claude
1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Generate an API key
3. Copy and add to `.env.local`

### OpenAI ChatGPT
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create a new API key
3. Copy and add to `.env.local`

## Usage Examples

### Example 1: Using Default Provider
```typescript
// Form data - aiProvider defaults to 'gemini'
{
  businessName: "TechCorp",
  // ... other fields
  // aiProvider not specified - uses 'gemini'
  // customApiKey not provided - uses GEMINI_API_KEY from env
}
```

### Example 2: Using Custom Provider with System Key
```typescript
{
  businessName: "TechCorp",
  // ... other fields
  aiProvider: 'claude',
  // customApiKey not provided - uses ANTHROPIC_API_KEY from env
}
```

### Example 3: Using Custom API Key
```typescript
{
  businessName: "TechCorp",
  // ... other fields
  aiProvider: 'chatgpt',
  customApiKey: 'sk-...' // Your OpenAI API key
}
```

## API Response Format

All AI providers return consistent JSON structure:

```json
{
  "success": true,
  "data": {
    "header": { ... },
    "hero": { ... },
    "services": { ... },
    // ... other sections
  },
  "message": "Content generated successfully"
}
```

## Error Handling

### Missing API Key
```json
{
  "success": false,
  "error": "Gemini API key is required. Please provide a custom key or set GEMINI_API_KEY environment variable.",
  "message": "Failed to generate content"
}
```

### API Error
```json
{
  "success": false,
  "error": "Claude API error: 401 - Invalid API key",
  "message": "Failed to generate content"
}
```

## Best Practices

1. **Use Environment Variables**: Store default keys in `.env.local` for production
2. **Test Providers**: Try different providers to see which works best for your use case
3. **Monitor Usage**: Each provider has different pricing - monitor your API usage
4. **Fallback Strategy**: Configure Gemini as default since it's fast and cost-effective
5. **Security**: Never commit API keys to version control

## Cost Comparison

| Provider | Model | Cost (per 1M tokens) | Speed |
|----------|-------|---------------------|-------|
| Gemini | 2.5 Flash | $0.075 input / $0.30 output | Fast |
| Claude | 3.5 Sonnet | $3.00 input / $15.00 output | Medium |
| ChatGPT | GPT-4o | $2.50 input / $10.00 output | Medium |

*Prices subject to change - check provider websites for current pricing*

## Troubleshooting

### Issue: "API key is required" error
**Solution**: Add the API key to `.env.local` or provide a custom key in the form

### Issue: Provider returns invalid JSON
**Solution**: The system automatically cleans markdown and extracts JSON. Check logs for raw response.

### Issue: Slow generation
**Solution**: Try switching to Gemini (fastest) or check your network connection

### Issue: Rate limit errors
**Solution**: Wait and retry, or switch to a different provider temporarily

## Support

For issues or questions:
- Check the [main README](./README.md)
- Review error messages in browser console
- Ensure API keys are valid and have sufficient credits
