const { calculateLeadFee, isValidPhone } = require('./utils');

// Test 1: Lead fee calculation
console.log('Test 1: Lead fee calculation');
const fee = calculateLeadFee(5);
if (fee === 125) {
  console.log('✅ PASS: 5 leads × ₹25 = ₹125');
} else {
  console.log('❌ FAIL: Expected 125, got', fee);
  process.exit(1);
}

// Test 2: Valid phone number
console.log('Test 2: Valid phone number');
if (isValidPhone('9876543210')) {
  console.log('✅ PASS: 9876543210 is valid');
} else {
  console.log('❌ FAIL: Should be valid');
  process.exit(1);
}

// Test 3: Invalid phone number
console.log('Test 3: Invalid phone number');
if (!isValidPhone('1234567890')) {
  console.log('✅ PASS: 1234567890 is invalid (starts with 1)');
} else {
  console.log('❌ FAIL: Should be invalid');
  process.exit(1);
}

console.log('\n✅ All tests passed!');