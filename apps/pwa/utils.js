// Kanna PWA Utility Functions - Updated Dec 2025
// Simple utility functions for Kanna

export function calculateLeadFee(leads, ratePerLead = 25) {
  return leads * ratePerLead;
}

export function isValidPhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

export function calculateDiscount(price, discountPercent) {
  if (!Number.isFinite(price) || !Number.isFinite(discountPercent)) {
    throw new Error('Price and discount must be valid numbers');
  }
  if (price < 0) {
    throw new Error('Price cannot be negative');
  }
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error('Discount must be between 0 and 100');
  }
  const discounted = price - (price * discountPercent / 100);
  return Math.round(discounted * 100) / 100;
}