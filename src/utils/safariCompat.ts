/**
 * Safari-specific compatibility fixes
 * This script should be loaded as early as possible to prevent destructuring errors
 */

// Declare global window extension
declare global {
  interface Window {
    __SAFARI_COMPAT_MODE__?: boolean;
  }
}

// Check if we're in Safari
function isSafariBrowser(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

// Apply Safari-specific fixes immediately
if (typeof window !== 'undefined' && isSafariBrowser()) {
  // Store original Object methods
  const originalAssign = Object.assign;
  
  // Simple Object.assign override for Safari
  (Object.assign as unknown) = function safariSafeAssign(
    target: Record<string, unknown>, 
    ...sources: Record<string, unknown>[]
  ): Record<string, unknown> {
    if (!target || typeof target !== 'object') {
      return target;
    }
    
    try {
      return originalAssign(target, ...sources);
    } catch {
      // Manual property copying as fallback
      sources.forEach(source => {
        if (source && typeof source === 'object') {
          try {
            Object.keys(source).forEach(key => {
              try {
                target[key] = source[key];
              } catch {
                console.warn(`Safari: Failed to copy property ${key}`);
              }
            });
          } catch {
            console.warn('Safari: Failed to get object keys');
          }
        }
      });
      return target;
    }
  };
  
  // Add a global flag to indicate Safari compatibility mode is active
  window.__SAFARI_COMPAT_MODE__ = true;
  
  console.log('Safari compatibility mode activated');
}

export {};
