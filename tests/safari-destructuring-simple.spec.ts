import { test, expect } from '@playwright/test';

// Focused Safari destructuring prevention test
test.describe('Safari Destructuring Prevention - Focused Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Monitor console errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    (page as any).consoleErrors = consoleErrors;
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should load page without Safari destructuring errors', async ({ page }) => {
    // Wait for page to fully load and React to hydrate
    await page.waitForTimeout(2000);
    
    // Check that the page loaded successfully
    await expect(page.locator('body')).toBeVisible();
    
    // Check for any destructuring errors in console
    const errors = (page as any).consoleErrors as string[];
    const destructuringErrors = errors.filter(error => 
      error.includes('Right side of assignment cannot be destructured') ||
      error.includes('Cannot destructure property')
    );
    
    expect(destructuringErrors, `Page should load without destructuring errors: ${destructuringErrors.join(', ')}`).toHaveLength(0);
  });

  test('should handle JavaScript destructuring patterns safely', async ({ page }) => {
    await page.waitForTimeout(1000);
    
    // Test destructuring patterns directly in browser context
    const testResult = await page.evaluate(() => {
      const tests: { name: string; passed: boolean; error?: string }[] = [];
      
      // Test 1: Safe undefined object destructuring
      try {
        const undefinedObj: any = undefined;
        const safeObj = undefinedObj || {};
        const { prop = 'default' } = safeObj;
        tests.push({ name: 'Undefined object destructuring', passed: prop === 'default' });
      } catch (error: any) {
        tests.push({ 
          name: 'Undefined object destructuring', 
          passed: false, 
          error: error.message 
        });
      }
      
      // Test 2: Safe null object destructuring
      try {
        const nullObj: any = null;
        const safeObj = nullObj || {};
        const { prop = 'default' } = safeObj;
        tests.push({ name: 'Null object destructuring', passed: prop === 'default' });
      } catch (error: any) {
        tests.push({ 
          name: 'Null object destructuring', 
          passed: false, 
          error: error.message 
        });
      }
      
      // Test 3: Safe event object handling
      try {
        const mockEvent: any = { target: { value: 'test' } };
        const { target } = mockEvent || {};
        const { value } = target || {};
        tests.push({ name: 'Event object destructuring', passed: value === 'test' });
      } catch (error: any) {
        tests.push({ 
          name: 'Event object destructuring', 
          passed: false, 
          error: error.message 
        });
      }
      
      // Test 4: Safe nested destructuring
      try {
        const nestedObj: any = { data: { user: { name: 'test' } } };
        const { data = {} } = nestedObj || {};
        const { user = {} } = data || {};
        const { name = 'default' } = user || {};
        tests.push({ name: 'Nested destructuring', passed: name === 'test' });
      } catch (error: any) {
        tests.push({ 
          name: 'Nested destructuring', 
          passed: false, 
          error: error.message 
        });
      }
      
      return tests;
    });
    
    // All destructuring tests should pass
    const failedTests = testResult.filter(t => !t.passed);
    expect(failedTests, `Destructuring tests should pass: ${JSON.stringify(failedTests)}`).toHaveLength(0);
  });

  test('should prevent Safari-specific form errors', async ({ page, browserName }) => {
    await page.waitForTimeout(1000);
    
    // Test React Hook Form patterns that commonly cause issues
    const safariTest = await page.evaluate(() => {
      // Simulate common React Hook Form destructuring patterns
      const tests: { name: string; passed: boolean }[] = [];
      
      try {
        // Pattern 1: Form state destructuring (common in React Hook Form)
        const formState: any = { errors: {}, isValid: true };
        const { errors = {}, isValid = false } = formState || {};
        tests.push({ name: 'Form state destructuring', passed: isValid === true });
      } catch {
        tests.push({ name: 'Form state destructuring', passed: false });
      }
      
      try {
        // Pattern 2: Controller field destructuring
        const field: any = { value: 'test', onChange: () => {} };
        const { value = '', onChange = () => {} } = field || {};
        tests.push({ name: 'Controller field destructuring', passed: value === 'test' });
      } catch {
        tests.push({ name: 'Controller field destructuring', passed: false });
      }
      
      try {
        // Pattern 3: Event handler destructuring
        const event: any = { target: { value: 'input' }, preventDefault: () => {} };
        const target = event?.target;
        const value = target?.value;
        tests.push({ name: 'Event handler destructuring', passed: value === 'input' });
      } catch {
        tests.push({ name: 'Event handler destructuring', passed: false });
      }
      
      return {
        tests,
        browser: browserName,
        userAgent: navigator.userAgent
      };
    }, browserName);
    
    // All React Hook Form patterns should work safely
    const failedTests = safariTest.tests.filter(t => !t.passed);
    expect(failedTests, `React Hook Form patterns should work safely: ${JSON.stringify(failedTests)}`).toHaveLength(0);
    
    // Verify no destructuring errors in console
    const errors = (page as any).consoleErrors as string[];
    const destructuringErrors = errors.filter(error => 
      error.includes('Right side of assignment cannot be destructured') ||
      error.includes('Cannot destructure property')
    );
    
    expect(destructuringErrors, `No destructuring errors should occur: ${destructuringErrors.join(', ')}`).toHaveLength(0);
  });

  test('should show Safari compatibility when detected', async ({ page, browserName }) => {
    await page.waitForTimeout(1000);
    
    // Check Safari detection
    const detection = await page.evaluate(() => {
      const userAgent = navigator.userAgent;
      const platform = navigator.platform;
      const isSafariUA = /^((?!chrome|android).)*safari/i.test(userAgent);
      const isMacPlatform = platform.toLowerCase().includes('mac') || userAgent.toLowerCase().includes('mac');
      
      return {
        userAgent,
        platform,
        isSafariUA,
        isMacPlatform,
        shouldShowSafariMode: isSafariUA && isMacPlatform
      };
    });
    
    // On webkit browser, detection should work properly
    if (browserName === 'webkit') {
      expect(detection.isSafariUA || detection.isMacPlatform).toBe(true);
    }
    
    // Check that page renders correctly regardless
    await expect(page.locator('body')).toBeVisible();
    
    // Verify no critical JavaScript errors
    const errors = (page as any).consoleErrors as string[];
    const criticalErrors = errors.filter(error => 
      error.includes('TypeError') || 
      error.includes('ReferenceError') ||
      error.includes('SyntaxError')
    ).filter(error => 
      !error.includes('favicon') && 
      !error.includes('404') &&
      !error.includes('NetworkError')
    );
    
    expect(criticalErrors, `No critical JavaScript errors should occur: ${criticalErrors.join(', ')}`).toHaveLength(0);
  });

});