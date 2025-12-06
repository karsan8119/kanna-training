import { expect, test, describe } from 'vitest';
import { PRICING_TIERS, getSubscriptionPrice, getTierDetails } from './pricing.js';

describe('PRICING_TIERS', () => {
  test('Free tier is ₹0', () => {
    expect(PRICING_TIERS.FREE.price).toBe(0);
  });

  test('Basic tier is ₹499', () => {
    expect(PRICING_TIERS.BASIC.price).toBe(499);
  });

  test('Pro tier is ₹999', () => {
    expect(PRICING_TIERS.PRO.price).toBe(999);
  });
});

describe('getSubscriptionPrice', () => {
  test('returns price for free tier', () => {
    expect(getSubscriptionPrice('free')).toBe(0);
  });

  test('returns price for basic tier', () => {
    expect(getSubscriptionPrice('basic')).toBe(499);
  });

  test('returns price for pro tier', () => {
    expect(getSubscriptionPrice('pro')).toBe(999);
  });

  test('handles uppercase input', () => {
    expect(getSubscriptionPrice('PRO')).toBe(999);
  });

  test('throws error for invalid tier', () => {
    expect(() => getSubscriptionPrice('invalid')).toThrow('Invalid tier');
  });
});

describe('getTierDetails', () => {
  test('returns full details for basic tier', () => {
    const details = getTierDetails('basic');
    expect(details.name).toBe('Basic');
    expect(details.price).toBe(499);
  });
});