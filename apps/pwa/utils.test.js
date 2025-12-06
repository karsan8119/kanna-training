import { expect, test, describe } from 'vitest';
import { calculateLeadFee, isValidPhone, calculateDiscount } from './utils.js';

describe('calculateLeadFee', () => {
  test('calculates fee for 5 leads at default rate', () => {
    expect(calculateLeadFee(5)).toBe(125);
  });
  test('calculates fee with custom rate', () => {
    expect(calculateLeadFee(5, 30)).toBe(150);
  });
  test('returns 0 for 0 leads', () => {
    expect(calculateLeadFee(0)).toBe(0);
  });
});

describe('isValidPhone', () => {
  test('accepts valid 10-digit Indian number', () => {
    expect(isValidPhone('9876543210')).toBe(true);
  });
  test('accepts number starting with 6', () => {
    expect(isValidPhone('6123456789')).toBe(true);
  });
  test('rejects number starting with 1', () => {
    expect(isValidPhone('1234567890')).toBe(false);
  });
  test('rejects number with wrong length', () => {
    expect(isValidPhone('987654321')).toBe(false);
  });
});

describe('calculateDiscount', () => {
  test('calculates 10% discount', () => {
    expect(calculateDiscount(100, 10)).toBe(90);
  });
  test('calculates 50% discount', () => {
    expect(calculateDiscount(200, 50)).toBe(100);
  });
  test('handles 0% discount', () => {
    expect(calculateDiscount(100, 0)).toBe(100);
  });
  test('handles 100% discount', () => {
    expect(calculateDiscount(100, 100)).toBe(0);
  });
  test('rounds to 2 decimal places', () => {
    expect(calculateDiscount(100, 33.333)).toBe(66.67);
  });
  test('throws error for negative discount', () => {
    expect(() => calculateDiscount(100, -5)).toThrow('Discount must be between 0 and 100');
  });
  test('throws error for discount above 100%', () => {
    expect(() => calculateDiscount(100, 150)).toThrow('Discount must be between 0 and 100');
  });
  test('throws error for negative price', () => {
    expect(() => calculateDiscount(-50, 10)).toThrow('Price cannot be negative');
  });
  test('throws error for invalid inputs', () => {
    expect(() => calculateDiscount('abc', 10)).toThrow('Price and discount must be valid numbers');
  });
});