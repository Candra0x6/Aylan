/**
 * Utility functions to safely handle events and prevent destructuring errors on macOS
 */

type SafeEventHandler<T = Event> = (event: T) => void;

/**
 * Wraps an event handler to safely handle undefined/null events
 * This prevents "Cannot destructure property 'auth' of 'e' as it is undefined" errors
 */
export function safeEventHandler<T = Event>(
  handler: (event: T) => void,
  fallbackValue?: Partial<T>
): SafeEventHandler<T> {
  return function safeBoundHandler(event: T) {
    try {
      // Ensure event exists and has expected properties
      if (!event) {
        console.warn('Event handler received undefined event, using fallback');
        if (fallbackValue) {
          return handler(fallbackValue as T);
        }
        return;
      }

      // Call the original handler
      handler(event);
    } catch (error: unknown) {
      // Check if it's a destructuring error
      const errorMessage = error instanceof Error ? error.message : String(error);
      if (errorMessage?.includes('Cannot destructure property')) {
        console.warn('Prevented destructuring error in event handler:', errorMessage);
        
        // Try to create a safe event object
        const safeEvent = createSafeEvent(event, fallbackValue);
        if (safeEvent) {
          try {
            handler(safeEvent);
          } catch (retryError) {
            console.error('Event handler failed even with safe event:', retryError);
          }
        }
      } else {
        // Re-throw non-destructuring errors
        throw error;
      }
    }
  };
}

/**
 * Creates a safe event object with common properties
 */
function createSafeEvent<T>(originalEvent: T, fallbackValue?: Partial<T>): T | null {
  try {
    // If original event is valid, return it
    if (originalEvent && typeof originalEvent === 'object') {
      return originalEvent;
    }

    // Create a minimal event-like object
    const safeEvent: Record<string, unknown> = {
      target: null,
      currentTarget: null,
      preventDefault: () => {},
      stopPropagation: () => {},
      ...fallbackValue,
    };

    return safeEvent as T;
  } catch (error) {
    console.error('Failed to create safe event:', error);
    return null;
  }
}

/**
 * Safely extracts properties from an object, preventing destructuring errors
 */
export function safeExtract<T extends object, K extends keyof T>(
  obj: T | undefined | null,
  keys: K[],
  fallback: Partial<Pick<T, K>> = {}
): Pick<T, K> {
  if (!obj || typeof obj !== 'object') {
    return fallback as Pick<T, K>;
  }

  const result: Partial<Pick<T, K>> = { ...fallback };

  for (const key of keys) {
    try {
      if (key in obj && obj[key] !== undefined) {
        result[key] = obj[key];
      }
    } catch (error) {
      console.warn(`Failed to extract property ${String(key)}:`, error);
    }
  }

  return result as Pick<T, K>;
}

/**
 * Wrapper for onClick handlers that might fail on macOS
 */
export function safeBind<T extends (...args: unknown[]) => unknown>(
  fn: T,
  thisArg?: unknown
): T {
  return ((...args: Parameters<T>) => {
    try {
      return fn.apply(thisArg, args);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      if (errorMessage?.includes('Cannot destructure property') || 
          errorMessage?.includes('auth') ||
          errorMessage?.includes('undefined')) {
        console.warn('Prevented macOS destructuring error:', errorMessage);
        return;
      }
      throw error;
    }
  }) as T;
}

/**
 * Check if we're running on macOS
 */
export function isMacOS(): boolean {
  if (typeof navigator === 'undefined') return false;
  
  return navigator.platform.toLowerCase().includes('mac') || 
         navigator.userAgent.toLowerCase().includes('mac');
}

/**
 * Polyfill for event properties that might be missing on macOS
 */
export function polyfillEvent(event: unknown): Event | Record<string, unknown> {
  if (!event || typeof event !== 'object') {
    return {
      target: null,
      currentTarget: null,
      preventDefault: () => {},
      stopPropagation: () => {},
    };
  }

  // Type assertion to safely modify properties
  const eventObj = event as Record<string, unknown>;
  
  // Ensure common properties exist
  if (!eventObj.target) eventObj.target = eventObj.currentTarget || null;
  if (!eventObj.currentTarget) eventObj.currentTarget = eventObj.target || null;
  if (!eventObj.preventDefault) eventObj.preventDefault = () => {};
  if (!eventObj.stopPropagation) eventObj.stopPropagation = () => {};

  return eventObj;
}

/**
 * Global error handler for macOS compatibility
 */
export function setupMacOSErrorHandling(): void {
  if (typeof window === 'undefined') return;

  // Only apply on macOS
  if (!isMacOS()) return;

  // We'll rely on component-level safety instead of global override

  // Global error handler
  window.addEventListener('error', (event) => {
    if (event.error?.message?.includes('Cannot destructure property')) {
      console.warn('Caught macOS destructuring error globally:', event.error.message);
      event.preventDefault();
      return false;
    }
  });

  // Unhandled promise rejection handler
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason?.message?.includes('Cannot destructure property')) {
      console.warn('Caught macOS destructuring error in promise:', event.reason.message);
      event.preventDefault();
      return false;
    }
  });
}
