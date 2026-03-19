import { test, expect } from '@playwright/test';

test.describe('Donation Page Tests', () => {
  
  test('should load the donation page correctly', async ({ page }) => {
    await page.goto('/donate');
    // Check if the Hindi heading is visible
    await expect(page.locator('h1')).toContainText('दान करें');
  });

  test('should allow selecting a predefined amount', async ({ page }) => {
    await page.goto('/donate');
    const button1100 = page.locator('button:has-text("₹ 1100")');
    await button1100.click();
    
    // Verify the button becomes active (red background)
    await expect(button1100).toHaveClass(/bg-red-900/);
  });

  test('should fill out the form and attempt payment', async ({ page }) => {
    await page.goto('/donate');

    // 1. Fill details
    await page.fill('input[placeholder*="Name"]', 'Test Donor');
    await page.fill('input[type="tel"]', '9876543210');
    await page.fill('input[type="email"]', 'test@example.com');
    
    // 2. Select Amount
    await page.click('text=₹ 500');

    // 3. Mock the API (Fakes the Razorpay Order creation)
    await page.route('**/api/razorpay', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, order: { id: 'order_test_123', amount: 50000 } }),
      });
    });

    // 4. Click Submit
    await page.click('button[type="submit"]');

    // 5. Check if Razorpay script is triggered
    const razorpayScript = page.locator('script[src*="checkout.js"]');
    await expect(razorpayScript).toBeAttached();
  });
});