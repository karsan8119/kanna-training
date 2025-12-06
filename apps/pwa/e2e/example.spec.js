import { test, expect } from '@playwright/test';

// This is an example test against a public website
// Replace with your actual Kanna tests later

test.describe('Example Playwright Tests', () => {
  
  test('can visit a website and check title', async ({ page }) => {
    // Go to a website
    await page.goto('https://playwright.dev');
    
    // Check the page title contains expected text
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('can click a link', async ({ page }) => {
    // Go to Playwright's website
    await page.goto('https://playwright.dev');
    
    // Click the "Get Started" link
    await page.getByRole('link', { name: 'Get started' }).click();
    
    // Verify we navigated to docs
    await expect(page).toHaveURL(/.*intro/);
  });

});