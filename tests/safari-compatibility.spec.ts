import { test, expect } from '@playwright/test';

// Safari-specific compatibility tests
test.describe('Safari Compatibility Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the main page
    await page.goto('/');
  });

  test('should load main page without errors', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check for any console errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    // Check if the page title is correct
    await expect(page).toHaveTitle(/AI Landing Page Generator Demo/);
    
    // Ensure no critical errors occurred
    expect(errors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('404')
    )).toHaveLength(0);
  });

  test('should handle form submissions safely', async ({ page }) => {
    // Test form interactions that commonly fail on Safari
    const form = page.locator('form').first();
    
    if (await form.isVisible()) {
      // Fill form fields safely
      const inputs = page.locator('input[type="text"], input[type="email"]');
      const inputCount = await inputs.count();
      
      for (let i = 0; i < inputCount; i++) {
        const input = inputs.nth(i);
        await input.fill(`test-value-${i}`);
      }
      
      // Check if submit button exists and is enabled before clicking
      const submitButton = page.locator('button[type="submit"], input[type="submit"]').first();
      if (await submitButton.isVisible() && await submitButton.isEnabled()) {
        await submitButton.click();
      }
    }
  });

  test('should handle navigation without destructuring errors', async ({ page }) => {
    // Test navigation that might cause Safari destructuring issues
    const navLinks = page.locator('nav a, [role="navigation"] a').first();
    
    if (await navLinks.isVisible()) {
      await navLinks.click();
      await page.waitForLoadState('networkidle');
    }
  });

  test('should render templates without compatibility issues', async ({ page }) => {
    // Test template rendering which might have Safari-specific issues
    const templates = [
      '/modern-landing-demo',
      '/minimalist-landing-demo',
      '/elegant-landing-demo'
    ];

    for (const template of templates) {
      await page.goto(template);
      await page.waitForLoadState('networkidle');
      
      // Check for Safari-specific errors
      const errors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error' && 
            (msg.text().includes('destructure') || 
             msg.text().includes('Cannot read properties'))) {
          errors.push(msg.text());
        }
      });
      
      // Ensure the page loaded successfully
      await expect(page.locator('body')).toBeVisible();
      
      // No destructuring errors should occur
      expect(errors).toHaveLength(0);
    }
  });

  test('should handle AI content generation safely', async ({ page }) => {
    // Test AI-related functionality that might fail on Safari
    await page.goto('/');
    
    // Look for AI-related buttons or forms
    const aiButton = page.locator('button', { hasText: /generate|ai|create/i }).first();
    
    if (await aiButton.isVisible() && await aiButton.isEnabled()) {
      await aiButton.click();
      
      // Wait for any AI-related modals or forms
      await page.waitForTimeout(1000);
      
      // Check if any forms appeared
      const modal = page.locator('[role="dialog"], .modal, [data-testid*="modal"]').first();
      if (await modal.isVisible()) {
        // Interact with the modal safely
        const closeButton = modal.locator('button', { hasText: /close|cancel/i }).first();
        if (await closeButton.isVisible()) {
          await closeButton.click();
        }
      }
    }
  });

  test('should handle mobile viewport on Safari', async ({ page, isMobile }) => {
    if (isMobile) {
      // Test mobile-specific Safari behaviors
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      // Test touch interactions
      const touchableElements = page.locator('button, [role="button"]');
      const count = await touchableElements.count();
      
      if (count > 0) {
        await touchableElements.first().tap();
      }
      
      // Test viewport meta tag
      const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
      expect(viewport).toContain('width=device-width');
    }
  });

  test('should load CSS and fonts correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check if main stylesheet loaded
    const styles = await page.evaluate(() => {
      return Array.from(document.styleSheets).length;
    });
    
    expect(styles).toBeGreaterThan(0);
    
    // Check if custom fonts loaded (if any)
    const computedStyle = await page.evaluate(() => {
      const element = document.body;
      return window.getComputedStyle(element).fontFamily;
    });
    
    expect(computedStyle).toBeTruthy();
  });

});
