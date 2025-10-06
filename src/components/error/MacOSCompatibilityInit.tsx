'use client';

import { useEffect } from 'react';
import { setupMacOSErrorHandling } from '@/utils/macOSCompatibility';

export default function MacOSCompatibilityInit() {
  useEffect(() => {
    // Initialize macOS compatibility fixes
    setupMacOSErrorHandling();
  }, []);

  // This component doesn't render anything
  return null;
}
