// @ts-check
import { expect, test } from '@playwright/test';

// Example: Testing a currency helper
function convertToPaisa(amount: number) {
  return Math.round(amount * 100);
}

test('Currency conversion logic', () => {
  expect(convertToPaisa(500)).toBe(50000);
  expect(convertToPaisa(1.55)).toBe(155);
});