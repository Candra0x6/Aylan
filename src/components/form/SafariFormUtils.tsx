/**
 * Safari-Safe Form Components
 * Prevents "Right side of assignment cannot be destructured" errors on Safari macOS
 */

'use client';

import React from 'react';
import { useForm, UseFormReturn, FieldError } from 'react-hook-form';
import { safeEventHandler, safeExtract, isSafariOnMacOS } from '@/utils/macOSCompatibility';

// Safari-safe form hook wrapper
export function useSafariForm<TFormData extends Record<string, any>>(options: any): UseFormReturn<TFormData> {
  const form = useForm<TFormData>(options);
  
  if (isSafariOnMacOS()) {
    // Wrap form methods to handle Safari destructuring errors
    const originalHandleSubmit = form.handleSubmit;
    
    form.handleSubmit = ((onValid: any, onInvalid?: any) => {
      return safeEventHandler((event: any) => {
        try {
          return originalHandleSubmit(onValid, onInvalid)(event);
        } catch (error: any) {
          if (error?.message?.includes('Right side of assignment cannot be destructured') ||
              error?.message?.includes('Cannot destructure property')) {
            console.warn('Safari form submit error caught:', error.message);
            
            // Try to submit without the problematic event object
            try {
              onValid(form.getValues());
            } catch (fallbackError) {
              console.error('Form submission failed even with fallback:', fallbackError);
              if (onInvalid) onInvalid(form.formState.errors);
            }
            return;
          }
          throw error;
        }
      });
    }) as any;
  }
  
  return form;
}

// Safari-safe form state extractor
export function safariFormState<T>(formState: any): {
  errors: Record<string, FieldError>;
  isValid: boolean;
  isSubmitting: boolean;
  isDirty: boolean;
} {
  if (!formState) {
    return {
      errors: {},
      isValid: false,
      isSubmitting: false,
      isDirty: false,
    };
  }

  if (isSafariOnMacOS()) {
    // Use safe extraction for Safari
    return safeExtract(formState, [
      'errors', 'isValid', 'isSubmitting', 'isDirty'
    ], {
      errors: {},
      isValid: false,
      isSubmitting: false,
      isDirty: false,
    });
  }

  // Standard destructuring for other browsers
  const { 
    errors = {}, 
    isValid = false, 
    isSubmitting = false, 
    isDirty = false 
  } = formState;

  return { errors, isValid, isSubmitting, isDirty };
}

// Safari-safe event handler for form elements
export function createSafariFormHandler<T = any>(
  handler: (arg: T) => void | Promise<void>
) {
  return safeEventHandler(async (arg: T) => {
    try {
      await handler(arg);
    } catch (error: any) {
      if (error?.message?.includes('Right side of assignment cannot be destructured')) {
        console.warn('Safari form handler error prevented:', error.message);
        return;
      }
      throw error;
    }
  });
}

// Safari-safe field registration
export function safariRegister(register: any, name: string, options?: any) {
  if (isSafariOnMacOS()) {
    const registration = register(name, options);
    
    // Wrap onChange handler
    if (registration?.onChange) {
      const originalOnChange = registration.onChange;
      registration.onChange = safeEventHandler((event: any) => {
        try {
          // Try to get value safely
          let value;
          if (event && typeof event === 'object') {
            if (event.target && 'value' in event.target) {
              value = event.target.value;
            } else if ('value' in event) {
              value = event.value;
            }
          }
          
          // Call original handler with safe event
          return originalOnChange({
            target: { value: value ?? '' },
            type: 'change',
          });
        } catch (error: any) {
          console.warn('Safari form field onChange error:', error.message);
        }
      });
    }
    
    return registration;
  }
  
  return register(name, options);
}

// Safari-safe Controller render prop wrapper
export function createSafariControllerRender(
  renderFn: (props: { field: any; fieldState?: any; formState?: any }) => React.ReactElement
) {
  return (props: any) => {
    if (isSafariOnMacOS()) {
      // Safely extract Controller render props
      const safeProps = safeExtract(props, ['field', 'fieldState', 'formState'], {
        field: { value: '', onChange: () => {} },
        fieldState: {},
        formState: {},
      });
      
      // Wrap field onChange if it exists
      if (safeProps.field && typeof safeProps.field.onChange === 'function') {
        const originalOnChange = safeProps.field.onChange;
        safeProps.field.onChange = safeEventHandler((value: any) => {
          try {
            return originalOnChange(value);
          } catch (error: any) {
            console.warn('Safari Controller onChange error:', error.message);
          }
        });
      }
      
      return renderFn(safeProps);
    }
    
    return renderFn(props);
  };
}

// Safari-safe form submission wrapper
export function createSafariSubmitHandler<T extends Record<string, any>>(
  handler: (data: T) => void | Promise<void>
) {
  return safeEventHandler(async (data: T) => {
    try {
      await handler(data);
    } catch (error: any) {
      if (error?.message?.includes('Right side of assignment cannot be destructured')) {
        console.warn('Safari submit handler error prevented:', error.message);
        return;
      }
      throw error;
    }
  });
}