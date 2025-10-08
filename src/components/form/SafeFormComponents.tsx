'use client';

import React from 'react';
import { safeEventHandler, isMacOS, isSafariOnMacOS } from '@/utils/macOSCompatibility';

interface SafeFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * A form wrapper that safely handles form submissions on macOS
 * Prevents "Cannot destructure property 'auth' of 'e' as it is undefined" errors
 */
export function SafeForm({ onSubmit, children, ...props }: SafeFormProps) {
  const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    if (isSafariOnMacOS() || isMacOS()) {
      // Use safe event handler on Safari/macOS
      const safeHandler = safeEventHandler(onSubmit || (() => {}));
      safeHandler(event);
    } else {
      // Use normal handler on other platforms
      onSubmit?.(event);
    }
  }, [onSubmit]);

  return (
    <form {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

interface SafeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * A button wrapper that safely handles click events on macOS
 */
export function SafeButton({ onClick, children, ...props }: SafeButtonProps) {
  const handleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    if (isSafariOnMacOS() || isMacOS()) {
      // Use safe event handler on Safari/macOS
      const safeHandler = safeEventHandler(onClick || (() => {}));
      safeHandler(event);
    } else {
      // Use normal handler on other platforms
      onClick?.(event);
    }
  }, [onClick]);

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
}

interface SafeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * An input wrapper that safely handles change events on macOS
 */
export function SafeInput({ onChange, ...props }: SafeInputProps) {
  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (isSafariOnMacOS() || isMacOS()) {
      // Use safe event handler on Safari/macOS
      const safeHandler = safeEventHandler(onChange || (() => {}));
      safeHandler(event);
    } else {
      // Use normal handler on other platforms
      onChange?.(event);
    }
  }, [onChange]);

  return <input {...props} onChange={handleChange} />;
}
