import { expect, test, describe } from 'vitest';
import { formatIndianPhone, validateIndianPhone, validateEmail } from './contact.js';

describe('formatIndianPhone', () => {
  test('prefixes 91 to 10 digit number', () => {
    expect(formatIndianPhone('9876543210')).toBe('919876543210');
  });

  test('keeps existing 91 prefix', () => {
    expect(formatIndianPhone('919876543210')).toBe('919876543210');
  });

  test('removes spaces and prefixes 91', () => {
    expect(formatIndianPhone('987 654 3210')).toBe('919876543210');
  });

  test('removes spaces with existing 91', () => {
    expect(formatIndianPhone('91 9876543210')).toBe('919876543210');
  });
});

describe('validateIndianPhone', () => {
  test('accepts valid 10 digit Indian number', () => {
    expect(validateIndianPhone('9876543210')).toBe(true);
  });

  test('accepts valid 12 digit with 91 prefix', () => {
    expect(validateIndianPhone('919876543210')).toBe(true);
  });

  test('accepts number with spaces', () => {
    expect(validateIndianPhone('987 654 3210')).toBe(true);
  });

  test('rejects number starting with 1', () => {
    expect(validateIndianPhone('1234567890')).toBe(false);
  });

  test('accepts number starting with 8', () => {
    expect(validateIndianPhone('8123456789')).toBe(true);
  });

  test('rejects 9 digit number', () => {
    expect(validateIndianPhone('987654321')).toBe(false);
  });
});

describe('validateEmail', () => {
  test('accepts valid email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('accepts email with subdomain', () => {
    expect(validateEmail('user@mail.example.com')).toBe(true);
  });

  test('rejects email without @', () => {
    expect(validateEmail('testexample.com')).toBe(false);
  });

  test('rejects email without local part', () => {
    expect(validateEmail('@example.com')).toBe(false);
  });

  test('rejects email without domain', () => {
    expect(validateEmail('test@')).toBe(false);
  });
});