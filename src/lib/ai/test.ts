/**
 * Test AI Integration
 * Simple test script to verify AI service functionality
 */

import { AIContentService } from '@/lib/ai/service';
import type { AIContentRequest } from '@/types/ai';

async function testAIIntegration() {
  console.log('🧪 Testing AI Integration...\n');

  const testRequest: AIContentRequest = {
    businessCategory: 'saas',
    stylePreference: 'modern',
    industry: 'tech',
    targetAudience: 'professionals',
    brandKeywords: 'efficient, innovative, reliable'
  };

  try {
    const aiService = new AIContentService();
    
    // Test service status
    console.log('📊 Service Status:');
    const status = aiService.getServiceStatus();
    console.log(JSON.stringify(status, null, 2));
    console.log();

    // Test connection if AI is available
    if (status.available) {
      console.log('🔗 Testing AI Connection...');
      const isConnected = await aiService.testConnection();
      console.log(`Connection Status: ${isConnected ? '✅ Connected' : '❌ Failed'}`);
      console.log();
    }

    // Test content generation
    console.log('🎯 Generating Content...');
    const startTime = Date.now();
    
    const result = await aiService.generateContent(testRequest, {
      includeTestimonials: true,
      featureCount: 4,
      tone: 'professional'
    });

    const endTime = Date.now();
    console.log(`⏱️  Generation Time: ${endTime - startTime}ms`);
    console.log(`🤖 AI Used: ${!result.fallbackUsed}`);
    console.log(`✅ Success: ${result.success}`);
    
    if (result.error) {
      console.log(`⚠️  Error: ${result.error}`);
    }

    if (result.data) {
      console.log('\n📄 Generated Content Preview:');
      console.log(`Hero Headline: "${result.data.hero.headline}"`);
      console.log(`Features Count: ${result.data.features.features.length}`);
      console.log(`CTA Button: "${result.data.cta.buttonText}"`);
      
      if (result.data.testimonials) {
        console.log(`Testimonials: ${result.data.testimonials.testimonials.length}`);
      }
    }

    console.log('\n✅ AI Integration Test Complete!');
    return result;

  } catch (error) {
    console.error('❌ Test Failed:', error);
    return null;
  }
}

// Run test if this file is executed directly
if (require.main === module) {
  testAIIntegration();
}

export { testAIIntegration };