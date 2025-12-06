// Kanna PWA Utility Functions - Updated Dec 2025
// Simple utility functions for Kanna

// Kanna PWA Utility Functions

export function calculateLeadFee(leads, ratePerLead = 25) {
  return leads * ratePerLead;
}

export function isValidPhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}