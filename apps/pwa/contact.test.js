const { formatIndianPhone, validateIndianPhone, validateEmail } = require('./contact');

console.log('Running Contact Validation Tests...\n');

let failed = false;

function assert(condition, message) {
    if (condition) {
        console.log(`✅ PASS: ${message}`);
    } else {
        console.log(`❌ FAIL: ${message}`);
        failed = true;
    }
}

// Test formatIndianPhone
console.log('--- Testing formatIndianPhone ---');
assert(formatIndianPhone('9876543210') === '919876543210', 'Should prefix 91 to 10 digit number');
assert(formatIndianPhone('919876543210') === '919876543210', 'Should keep existing 91 prefix');
assert(formatIndianPhone('987 654 3210') === '919876543210', 'Should remove spaces and prefix 91');
assert(formatIndianPhone('91 987 654 3210') === '919876543210', 'Should remove spaces with existing 91');

// Test validateIndianPhone
console.log('\n--- Testing validateIndianPhone ---');
assert(validateIndianPhone('9876543210') === true, 'Valid 10 digit Indian number');
assert(validateIndianPhone('919876543210') === true, 'Valid 12 digit Indian number');
assert(validateIndianPhone('987 654 3210') === true, 'Valid number with spaces');
assert(validateIndianPhone('1234567890') === false, 'Invalid number (starts with 1)');
assert(validateIndianPhone('8876543210') === true, 'Valid number (starts with 8)');
assert(validateIndianPhone('987654321') === false, 'Invalid length (9 digits)');

// Test validateEmail
console.log('\n--- Testing validateEmail ---');
assert(validateEmail('test@example.com') === true, 'Valid email');
assert(validateEmail('user.name@domain.co.in') === true, 'Valid email with subdomains');
assert(validateEmail('invalid-email') === false, 'Invalid email (no @)');
assert(validateEmail('@domain.com') === false, 'Invalid email (no local part)');
assert(validateEmail('user@') === false, 'Invalid email (no domain)');

if (failed) {
    console.log('\n❌ Some tests failed!');
    process.exit(1);
} else {
    console.log('\n✅ All tests passed!');
}
