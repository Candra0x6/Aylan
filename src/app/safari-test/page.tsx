'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { SafeForm, SafeButton, SafeInput } from '@/components/form/SafeFormComponents';
import { 
  safeEventHandler, 
  safeExtract, 
  isMacOS, 
  isSafari, 
  isSafariOnMacOS 
} from '@/utils/macOSCompatibility';

interface TestFormData {
  name: string;
  email: string;
  auth?: string;
}

export default function SafariCompatibilityTestPage() {
  const [testResults, setTestResults] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState<TestFormData>({ name: '', email: '' });
  const [errors, setErrors] = useState<string[]>([]);

  // Test destructuring operations that commonly fail in Safari
  const runDestructuringTests = () => {
    const results: Record<string, boolean> = {};
    const currentErrors: string[] = [];

    // Test 1: Basic object destructuring
    try {
      const testObj = { a: 1, b: 2 };
      const { a, b } = testObj;
      results.basicDestructuring = a === 1 && b === 2;
    } catch (error) {
      results.basicDestructuring = false;
      currentErrors.push(`Basic destructuring failed: ${error}`);
    }

    // Test 2: Event object destructuring (common Safari issue)
    try {
      const mockEvent = { target: { value: 'test' }, currentTarget: null };
      const safeHandler = safeEventHandler((e: typeof mockEvent) => {
        const { target } = e;
        return target?.value === 'test';
      });
      results.eventDestructuring = true;
      safeHandler(mockEvent);
    } catch (error) {
      results.eventDestructuring = false;
      currentErrors.push(`Event destructuring failed: ${error}`);
    }

    // Test 3: Safe extraction
    try {
      const testData: TestFormData = { name: 'John', email: 'john@example.com' };
      const extracted = safeExtract(testData, ['name', 'email', 'auth'], { auth: 'default' });
      results.safeExtraction = extracted.name === 'John' && extracted.auth === 'default';
    } catch (error) {
      results.safeExtraction = false;
      currentErrors.push(`Safe extraction failed: ${error}`);
    }

    // Test 4: Undefined destructuring (Safari's main issue)
    try {
      const undefinedObj = undefined;
      const { auth = 'fallback' } = undefinedObj || {};
      results.undefinedDestructuring = auth === 'fallback';
    } catch (error) {
      results.undefinedDestructuring = false;
      currentErrors.push(`Undefined destructuring failed: ${error}`);
    }

    // Test 5: Array destructuring
    try {
      const testArray = [1, 2, 3];
      const [first, , third] = testArray;
      results.arrayDestructuring = first === 1 && third === 3;
    } catch (error) {
      results.arrayDestructuring = false;
      currentErrors.push(`Array destructuring failed: ${error}`);
    }

    setTestResults(results);
    setErrors(currentErrors);
  };

  const handleSafeFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // This would normally cause issues in Safari with destructuring
      const { name, email } = formData;
      console.log('Form submitted safely:', { name, email });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Form submission error:', error);
      alert(`Form submission failed: ${error}`);
    }
  };

  const handleUnsafeFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Intentionally unsafe destructuring that might fail in Safari
      const { name, email, auth } = formData as TestFormData & { auth: string };
      console.log('Unsafe form submitted:', { name, email, auth });
      alert('Unsafe form submitted successfully!');
    } catch (error) {
      console.error('Unsafe form submission error:', error);
      alert(`Unsafe form submission failed: ${error}`);
    }
  };

  // Platform detection info
  const platformInfo = {
    isMacOS: isMacOS(),
    isSafari: isSafari(),
    isSafariOnMacOS: isSafariOnMacOS(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
    platform: typeof navigator !== 'undefined' ? navigator.platform : 'Unknown',
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">Safari Compatibility Test Page</h1>

      {/* Platform Detection */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Detection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex gap-2 flex-wrap">
            <Badge variant={platformInfo.isMacOS ? "default" : "secondary"}>
              macOS: {platformInfo.isMacOS ? 'Yes' : 'No'}
            </Badge>
            <Badge variant={platformInfo.isSafari ? "default" : "secondary"}>
              Safari: {platformInfo.isSafari ? 'Yes' : 'No'}
            </Badge>
            <Badge variant={platformInfo.isSafariOnMacOS ? "destructive" : "secondary"}>
              Safari on macOS: {platformInfo.isSafariOnMacOS ? 'Yes' : 'No'}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            User Agent: {platformInfo.userAgent}
          </p>
          <p className="text-sm text-muted-foreground">
            Platform: {platformInfo.platform}
          </p>
        </CardContent>
      </Card>

      {/* Destructuring Tests */}
      <Card>
        <CardHeader>
          <CardTitle>Destructuring Compatibility Tests</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={runDestructuringTests}>Run Tests</Button>
          
          {Object.keys(testResults).length > 0 && (
            <div className="space-y-2">
              {Object.entries(testResults).map(([test, passed]) => (
                <div key={test} className="flex items-center gap-2">
                  <Badge variant={passed ? "default" : "destructive"}>
                    {passed ? '✓' : '✗'}
                  </Badge>
                  <span>{test.replace(/([A-Z])/g, ' $1').toLowerCase()}</span>
                </div>
              ))}
            </div>
          )}

          {errors.length > 0 && (
            <Alert variant="destructive">
              <AlertDescription>
                <div className="space-y-1">
                  <p className="font-semibold">Errors detected:</p>
                  {errors.map((error, index) => (
                    <p key={index} className="text-sm">{error}</p>
                  ))}
                </div>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Safe Form Test */}
      <Card>
        <CardHeader>
          <CardTitle>Safe Form Components Test</CardTitle>
        </CardHeader>
        <CardContent>
          <SafeForm onSubmit={handleSafeFormSubmit} className="space-y-4">
            <SafeInput
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
            <SafeInput
              placeholder="Enter your email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
            <SafeButton type="submit" className="w-full">
              Submit Safe Form
            </SafeButton>
          </SafeForm>
        </CardContent>
      </Card>

      {/* Unsafe Form Test */}
      <Card>
        <CardHeader>
          <CardTitle>Unsafe Form Test (May Fail in Safari)</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUnsafeFormSubmit} className="space-y-4">
            <Input
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
            <Input
              placeholder="Enter your email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
            <Button type="submit" className="w-full">
              Submit Unsafe Form
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Browser Compatibility Status */}
      <Card>
        <CardHeader>
          <CardTitle>Safari Compatibility Status</CardTitle>
        </CardHeader>
        <CardContent>
          {typeof window !== 'undefined' && (window as unknown as { __SAFARI_COMPAT_MODE__?: boolean }).__SAFARI_COMPAT_MODE__ ? (
            <Alert>
              <AlertDescription>
                ✅ Safari compatibility mode is active! Enhanced error handling is enabled.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert>
              <AlertDescription>
                ℹ️ Safari compatibility mode is not active. This is normal on non-Safari browsers.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
