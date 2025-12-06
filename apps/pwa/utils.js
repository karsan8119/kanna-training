// Simple utility functions for Kanna

function calculateLeadFee(leads, ratePerLead = 25) {
  return leads * ratePerLead;
}

function isValidPhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

module.exports = { calculateLeadFee, isValidPhone };