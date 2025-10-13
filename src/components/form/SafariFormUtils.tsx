/**
 * Safari-Safe Form Components
 * Prevents "Right side of assignment cannot be destructured" errors on Safari macOS
 */

// @eslint-disable react/display-name
'use client';

import React from 'react';
import { useForm, UseFormReturn, UseFormProps, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { safeEventHandler, isSafariOnMacOS } from '@/utils/macOSCompatibility';

// Type definitions for form data
type FormData = Record<string, unknown>;
type SafariFormOptions<T extends FormData> = UseFormProps<T>;

// Safari-safe form hook wrapper
export function useSafariForm<TFormData extends FormData>(options: SafariFormOptions<TFormData>): UseFormReturn<TFormData> {
  const form = useForm<TFormData>(options);
  
  if (isSafariOnMacOS()) {
    // Wrap form methods to handle Safari destructuring errors
    const originalHandleSubmit = form.handleSubmit;
    
    form.handleSubmit = ((onValid: SubmitHandler<TFormData>, onInvalid?: SubmitErrorHandler<TFormData>) => {
      return safeEventHandler((event: React.BaseSyntheticEvent) => {
        try {
          return originalHandleSubmit(onValid, onInvalid)(event);
        } catch (error: unknown) {
          const errorMessage = error instanceof Error ? error.message : String(error);
          if (errorMessage.includes('Right side of assignment cannot be destructured') ||
              errorMessage.includes('Cannot destructure property')) {
            console.warn('Safari form submit error caught:', errorMessage);
            
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
    }) as typeof form.handleSubmit;
  }
  
  return form;
}

// Safari-safe form state extractor
export function safariFormState<T extends FormData>(formState: UseFormReturn<T>['formState']) {
  if (!formState) {
    return {
      errors: {} as UseFormReturn<T>['formState']['errors'],
      isValid: false,
      isSubmitting: false,
      isDirty: false,
    };
  }

  if (isSafariOnMacOS()) {
    // Use safe property access for Safari
    return {
      errors: formState.errors,
      isValid: formState.isValid,
      isSubmitting: formState.isSubmitting,
      isDirty: formState.isDirty,
    };
  }

  // Standard destructuring for other browsers
  const { 
    errors, 
    isValid, 
    isSubmitting, 
    isDirty 
  } = formState;

  return { errors, isValid, isSubmitting, isDirty };
}

// Safari-safe event handler for form elements
export function createSafariFormHandler<T = unknown>(
  handler: (arg: T) => void | Promise<void>
) {
  return safeEventHandler(async (arg: T) => {
    try {
      await handler(arg);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      if (errorMessage.includes('Right side of assignment cannot be destructured')) {
        console.warn('Safari form handler error prevented:', errorMessage);
        return;
      }
      throw error;
    }
  });
}

// Safari-safe field registration
export function safariRegister<T extends FormData>(
  register: UseFormReturn<T>['register'], 
  name: string, 
  options?: Parameters<UseFormReturn<T>['register']>[1]
) {
  if (isSafariOnMacOS()) {
    const registration = register(name as never, options);
    
    // Wrap onChange handler
    if (registration?.onChange) {
      const originalOnChange = registration.onChange;
      registration.onChange = async (event: { target?: { value?: unknown }; value?: unknown; type?: string }) => {
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
          return await originalOnChange({
            target: { value: value ?? '' },
            type: 'change',
          });
        } catch (error: unknown) {
          const errorMessage = error instanceof Error ? error.message : String(error);
          console.warn('Safari form field onChange error:', errorMessage);
          return false;
        }
      };
    }
    
    return registration;
  }
  
  return register(name as never, options);
}

// Safari-safe Controller render prop wrapper
export function createSafariControllerRender(
  renderFn: (props: { field: { value: unknown; onChange: (value: unknown) => void }; fieldState?: unknown; formState?: unknown }) => React.ReactElement
) {
  return (props: { field: { value: unknown; onChange: (value: unknown) => void }; fieldState?: unknown; formState?: unknown }) => {
    if (isSafariOnMacOS()) {
      // Safely extract Controller render props
      const safeProps = {
        field: props.field || { value: '', onChange: () => {} },
        fieldState: props.fieldState || {},
        formState: props.formState || {},
      };
      
      // Wrap field onChange if it exists
      if (safeProps.field && typeof safeProps.field.onChange === 'function') {
        const originalOnChange = safeProps.field.onChange;
        safeProps.field.onChange = (value: unknown) => {
          try {
            return originalOnChange(value);
          } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            console.warn('Safari Controller onChange error:', errorMessage);
          }
        };
      }
      
      return renderFn(safeProps);
    }
    
    return renderFn(props);
  };
}

// Safari-safe form submission wrapper
export function createSafariSubmitHandler<T extends FormData>(
  handler: (data: T) => void | Promise<void>
) {
  return safeEventHandler(async (data: T) => {
    try {
      await handler(data);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      if (errorMessage.includes('Right side of assignment cannot be destructured')) {
        console.warn('Safari submit handler error prevented:', errorMessage);
        return;
      }
      throw error;
    }
  });
}