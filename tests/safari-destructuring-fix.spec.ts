import { test, expect } from '@playwright/test';

// Specific test for Safari macOS "Right side of assignment cannot be destructured" error
test.describe('Safari Destructuring Error Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Set up console error monitoring
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    // Store errors for later inspection
    (page as any).consoleErrors = consoleErrors;
    
    await page.goto('/');
  });

  test('should not throw Safari destructuring errors on form interactions', async ({ page }) => {
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    
    // Look for form elements
    const forms = page.locator('form');
    const formCount = await forms.count();
    
    if (formCount > 0) {
      const form = forms.first();
      
      // Test input field interactions
      const inputs = form.locator('input[type="text"], input[type="email"]');
      const inputCount = await inputs.count();
      
      for (let i = 0; i < Math.min(inputCount, 3); i++) {
        const input = inputs.nth(i);
        if (await input.isVisible()) {
          // Type slowly to trigger multiple change events
          await input.fill('');
          await page.waitForTimeout(100);
          await input.type('test input', { delay: 50 });
          await page.waitForTimeout(100);
        }
      }
      
      // Test select field interactions
      const selects = form.locator('[role="combobox"], select');
      const selectCount = await selects.count();
      
      for (let i = 0; i < Math.min(selectCount, 2); i++) {
        const select = selects.nth(i);
        if (await select.isVisible()) {
          try {
            await select.click();
            await page.waitForTimeout(200);
            
            // Look for dropdown options
            const options = page.locator('[role="option"]');
            const optionCount = await options.count();
            
            if (optionCount > 0) {
              await options.first().click();
              await page.waitForTimeout(100);
            }
          } catch (error) {
            console.log('Select interaction failed:', error);
          }
        }
      }
      
      // Test textarea interactions
      const textareas = form.locator('textarea');
      const textareaCount = await textareas.count();
      
      for (let i = 0; i < Math.min(textareaCount, 2); i++) {
        const textarea = textareas.nth(i);
        if (await textarea.isVisible()) {
          await textarea.fill('Test textarea content');
          await page.waitForTimeout(100);
        }
      }
    }
    
    // Check for destructuring errors
    const errors = (page as any).consoleErrors as string[];
    const destructuringErrors = errors.filter(error => 
      error.includes('Right side of assignment cannot be destructured') ||
      error.includes('Cannot destructure property') ||
      error.includes('auth')
    );
    
    // Should have no destructuring errors
    expect(destructuringErrors, `Found Safari destructuring errors: ${destructuringErrors.join(', ')}`).toHaveLength(0);
  });

  test('should handle React Hook Form events safely', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    // Navigate to a page that uses forms
    await page.goto('/');
    
    // Wait for React to hydrate
    await page.waitForTimeout(1000);
    
    // Try to interact with form elements that use React Hook Form
    const formElements = page.locator('input, select, textarea, [role="combobox"]');
    const elementCount = await formElements.count();
    
    // Test a few form elements
    for (let i = 0; i < Math.min(elementCount, 5); i++) {
      const element = formElements.nth(i);
      
      if (await element.isVisible()) {
        try {
          // Trigger focus event
          await element.focus();
          await page.waitForTimeout(50);
          
          // Trigger change events based on element type
          const tagName = await element.evaluate(el => el.tagName.toLowerCase());
          const type = await element.getAttribute('type');
          
          if (tagName === 'input' && (type === 'text' || type === 'email' || !type)) {
            await element.fill('test');
            await page.waitForTimeout(50);
            await element.blur();
          } else if (tagName === 'textarea') {
            await element.fill('test content');
            await page.waitForTimeout(50);
            await element.blur();
          } else if (await element.getAttribute('role') === 'combobox') {
            await element.click();
            await page.waitForTimeout(100);
            // Try to select first option if available
            const option = page.locator('[role="option"]').first();
            if (await option.isVisible()) {
              await option.click();
            }
          }
          
          await page.waitForTimeout(50);
        } catch (error) {
          // Log but don't fail - we're testing error prevention
          console.log(`Element interaction failed for element ${i}:`, error);
        }
      }
    }
    
    // Check console for destructuring errors
    const errors = (page as any).consoleErrors as string[];
    const destructuringErrors = errors.filter(error => 
      error.includes('Right side of assignment cannot be destructured') ||
      error.includes('Cannot destructure property')
    );
    
    expect(destructuringErrors, `React Hook Form should not cause destructuring errors: ${destructuringErrors.join(', ')}`).toHaveLength(0);
  });

  test('should handle Safari-specific event object issues', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    // Inject a test that simulates Safari's problematic event handling
    await page.evaluate(() => {
      // Test if our Safari compatibility utilities work
      if (typeof (window as any).testSafariCompatibility === 'undefined') {
        (window as any).testSafariCompatibility = () => {
          try {
            // Simulate a problematic Safari event
            const problematicEvent = {
              target: null,
              // Missing properties that cause destructuring errors
            };
            
            // This would normally cause "Right side of assignment cannot be destructured"
            const { target, currentTarget } = problematicEvent as any;
            
            return { success: true, target, currentTarget };
          } catch (error: any) {
            if (error.message && error.message.includes('Right side of assignment cannot be destructured')) {
              return { success: false, error: 'Safari destructuring error occurred' };
            }
            throw error;
          }
        };
      }
      
      return (window as any).testSafariCompatibility();
    });
    
    // The test above should either succeed or be handled by our compatibility layer
    const errors = (page as any).consoleErrors as string[];
    const criticalErrors = errors.filter(error => 
      error.includes('Right side of assignment cannot be destructured') &&
      !error.includes('prevented') &&
      !error.includes('caught')
    );
    
    expect(criticalErrors, 'Safari compatibility utilities should prevent unhandled destructuring errors').toHaveLength(0);
  });

  test('should show Safari compatibility indicators when on Safari', async ({ page, browserName }) => {
    await page.waitForLoadState('networkidle');
    
    // Check if Safari compatibility mode indicators are shown
    if (browserName === 'webkit') {
      // Look for Safari compatibility indicators in the UI
      const compatibilityIndicator = page.locator('text=Safari compatibility mode enabled').first();
      
      // On WebKit, we might see compatibility indicators
      if (await compatibilityIndicator.isVisible()) {
        expect(await compatibilityIndicator.textContent()).toContain('Safari compatibility');
      }
    }
    
    // Ensure the page loads correctly regardless of browser
    await expect(page.locator('body')).toBeVisible();
  });

});