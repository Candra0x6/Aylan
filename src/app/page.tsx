/**
 * AI Landing Page Generator Demo Page
 * Showcases the complete AI-powered landing page generation workflow
 */

import React from 'react';
import { Metadata } from 'next';
import { AIContentGeneratorDemo } from '@/components/examples/AIContentGeneratorDemo';

export const metadata: Metadata = {
  title: 'AI Landing Page Generator Demo',
  description: 'Create professional landing pages instantly with AI-powered content generation',
  keywords: 'AI, landing page, generator, content creation, business, marketing',
};

export default function AILandingPageDemo() {
  return <AIContentGeneratorDemo />;
}