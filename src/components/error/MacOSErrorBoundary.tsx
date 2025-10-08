'use client';

import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface MacOSErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; retry: () => void }>;
}

class MacOSErrorBoundary extends React.Component<
  MacOSErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: MacOSErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Check if this is a macOS/Safari-specific error
    const isMacOSSafariError = 
      error.message.includes('Cannot destructure property') ||
      error.message.includes('Right side of assignment cannot be destructured') ||
      error.message.includes('auth') ||
      error.message.includes('undefined') ||
      error.stack?.includes('_next/static');

    if (isMacOSSafariError) {
      return {
        hasError: true,
        error,
      };
    }

    return {};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error for debugging
    console.error('MacOS Error Boundary caught an error:', error);
    console.error('Error Info:', errorInfo);

    // Check if it's a destructuring error on macOS or Safari
    const isMacOSSafariDestructuringError = 
      (error.message.includes('Cannot destructure property') ||
       error.message.includes('Right side of assignment cannot be destructured')) &&
      (navigator.platform.includes('Mac') || 
       navigator.userAgent.includes('Mac') ||
       navigator.userAgent.includes('Safari'));

    if (isMacOSSafariDestructuringError) {
      this.setState({
        hasError: true,
        error,
        errorInfo,
      });
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      const { fallback: Fallback } = this.props;

      if (Fallback && this.state.error) {
        return <Fallback error={this.state.error} retry={this.handleRetry} />;
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="max-w-lg w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertCircle className="h-5 w-5" />
                macOS/Safari Compatibility Issue
              </CardTitle>
              <CardDescription>
                We detected a compatibility issue that commonly occurs on macOS devices, especially in Safari.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error Details</AlertTitle>
                <AlertDescription className="mt-2">
                  {this.state.error?.message || 'Unknown error occurred'}
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <h4 className="font-semibold">Suggested Solutions:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Try refreshing the page</li>
                  <li>• Clear your browser cache and cookies</li>
                  <li>• If using Safari, try Chrome or Firefox</li>
                  <li>• If using Chrome/Firefox, try Safari</li>
                  <li>• Disable browser extensions temporarily</li>
                  <li>• Update your macOS and browser to the latest version</li>
                  <li>• Try using Private/Incognito mode</li>
                </ul>
              </div>

              <div className="flex gap-2">
                <Button 
                  onClick={this.handleRetry} 
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Retry
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.reload()}
                >
                  Reload Page
                </Button>
              </div>

              {process.env.NODE_ENV === 'development' && (
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-medium">
                    Developer Information
                  </summary>
                  <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-auto">
                    {this.state.error?.stack}
                  </pre>
                </details>
              )}
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default MacOSErrorBoundary;
