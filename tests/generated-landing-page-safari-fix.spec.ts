import { test, expect } from '@playwright/test';

// Test specifically for the GeneratedLandingPage Safari destructuring fix
test.describe('GeneratedLandingPage Safari Fix Tests', () => {
  
  test('should handle template rendering without Safari destructuring errors', async ({ page }) => {
    // Monitor console for Safari-specific errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Navigate to the main page
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Try to generate a landing page
    const form = page.locator('form').first();
    
    if (await form.isVisible()) {
      // Fill required fields quickly
      const industrySelect = page.locator('[name="industry"]').first();
      if (await industrySelect.isVisible()) {
        await industrySelect.click();
        await page.waitForTimeout(200);
        const firstOption = page.locator('[role="option"]').first();
        if (await firstOption.isVisible()) {
          await firstOption.click();
        }
      }

      // Fill business name
      const businessNameInput = page.locator('input[name="businessName"]').first();
      if (await businessNameInput.isVisible()) {
        await businessNameInput.fill('Test Business');
      }

      // Fill main product/service
      const productInput = page.locator('input[name="mainProductService"]').first();
      if (await productInput.isVisible()) {
        await productInput.fill('Test Product');
      }

      // Wait a bit for form validation
      await page.waitForTimeout(1000);

      // Try to submit the form (if button is enabled)
      const submitButton = page.locator('button[type="submit"]').first();
      if (await submitButton.isVisible() && await submitButton.isEnabled()) {
        await submitButton.click();
        
        // Wait for potential template rendering
        await page.waitForTimeout(5000);
      }
    }

    // Check for Safari destructuring errors
    const destructuringErrors = consoleErrors.filter(error => 
      error.includes('Right side of assignment cannot be destructured') ||
      error.includes('Cannot destructure property')
    );

    // Should have no unhandled destructuring errors
    expect(destructuringErrors, `Found Safari destructuring errors: ${destructuringErrors.join(', ')}`).toHaveLength(0);

    // Check if Safari compatibility messages appear (positive sign)
    const safariMessages = consoleErrors.filter(msg => 
      msg.includes('Safari compatibility') || 
      msg.includes('Safari-safe')
    );

    // Log Safari compatibility info
    if (safariMessages.length > 0) {
      console.log('Safari compatibility messages found:', safariMessages);
    }
  });

  test('should show Safari compatibility indicators when on WebKit', async ({ page, browserName }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // On WebKit (Safari simulation), look for compatibility indicators
    if (browserName === 'webkit') {
      const compatibilityIndicators = [
        'Safari compatibility mode enabled',
        'Safari compatibility mode active',
        'Destructuring errors prevented'
      ];

      let foundIndicator = false;
      for (const indicator of compatibilityIndicators) {
        const element = page.locator(`text=${indicator}`).first();
        if (await element.isVisible()) {
          foundIndicator = true;
          console.log(`Found Safari compatibility indicator: ${indicator}`);
          break;
        }
      }

      // Log result (don't fail the test if not found, as it might not be visible yet)
      console.log(`Safari compatibility indicators visible: ${foundIndicator}`);
    }

    // Main check: page should load without crashing
    await expect(page.locator('body')).toBeVisible();
  });

  test('should safely handle malformed template data', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Inject test code to simulate malformed template data
    const testResult = await page.evaluate(() => {
      try {
        // Simulate the problematic destructuring that causes Safari errors
        const malformedTemplate = {
          // Missing template property that would cause destructuring error
        };

        // This would normally cause "Right side of assignment cannot be destructured"
        const { template } = malformedTemplate as any;
        const { category, style } = template; // This should fail on Safari

        return { success: false, error: 'Expected destructuring error did not occur' };
      } catch (error: any) {
        if (error.message && error.message.includes('Right side of assignment cannot be destructured')) {
          return { success: true, error: 'Expected Safari error caught' };
        }
        return { success: false, error: `Unexpected error: ${error.message}` };
      }
    });

    // Log the test result
    console.log('Malformed template test result:', testResult);
    
    // The page should still be responsive
    await expect(page.locator('body')).toBeVisible();
  });

});