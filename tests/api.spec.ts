import { test, expect } from '@playwright/test';

test('API: Should create a Razorpay order record in database', async ({ request }) => {
  const response = await request.post('/api/razorpay', {
    data: {
      amount: 500,
      donorName: "Automation API Test",
      phone: "9999999999",
      email: "api@test.com",
      cause: "Testing Backend Connection"
    }
  });

  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  
  // Verify the response structure
  expect(body.success).toBe(true);
  expect(body.order).toHaveProperty('id');
  expect(body.order.amount).toBe(50000); // 500 * 100 paisa
});