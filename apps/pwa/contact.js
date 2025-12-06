// Kanna PWA Contact Validation Functions

export function formatIndianPhone(phone) {
  if (!phone) return phone;
  // Normalise numbers (remove spaces)
  const cleaned = phone.toString().replace(/\s+/g, '');
  // If 10 digits, prefix with 91
  if (/^\d{10}$/.test(cleaned)) {
    return '91' + cleaned;
  }
  // If it's 12 digits and starts with 91, return as is (already normalized)
  if (/^91\d{10}$/.test(cleaned)) {
    return cleaned;
  }
  // Return the cleaned version even if not strictly valid,
  // so validation function can handle the rejection
  return cleaned;
}

export function validateIndianPhone(phone) {
  if (!phone) return false;
  const formatted = formatIndianPhone(phone);
  // Must be 12 digits, starting with 91, and the 10 digit part starts with 6-9
  return /^91[6-9]\d{9}$/.test(formatted);
}

export function validateEmail(email) {
  if (!email) return false;
  // Standard email validation regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}