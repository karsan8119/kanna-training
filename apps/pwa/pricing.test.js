const { PRICING_TIERS, getSubscriptionPrice, getTierDetails } = require('./pricing');

// Test 1: Free tier price
console.log('Test 1: Free tier price');
const freePrice = getSubscriptionPrice('free');
if (freePrice === 0) {
  console.log('✅ PASS: Free tier = ₹0/month');
} else {
  console.log('❌ FAIL: Expected 0, got', freePrice);
  process.exit(1);
}

// Test 2: Basic tier price
console.log('Test 2: Basic tier price');
const basicPrice = getSubscriptionPrice('basic');
if (basicPrice === 499) {
  console.log('✅ PASS: Basic tier = ₹499/month');
} else {
  console.log('❌ FAIL: Expected 499, got', basicPrice);
  process.exit(1);
}

// Test 3: Pro tier price
console.log('Test 3: Pro tier price');
const proPrice = getSubscriptionPrice('pro');
if (proPrice === 999) {
  console.log('✅ PASS: Pro tier = ₹999/month');
} else {
  console.log('❌ FAIL: Expected 999, got', proPrice);
  process.exit(1);
}

// Test 4: Tier details
console.log('Test 4: Tier details');
const proDetails = getTierDetails('PRO');
if (proDetails.name === 'Pro' && proDetails.price === 999) {
  console.log('✅ PASS: Pro tier details correct');
} else {
  console.log('❌ FAIL: Unexpected tier details', proDetails);
  process.exit(1);
}

// Test 5: Invalid tier throws error
console.log('Test 5: Invalid tier throws error');
try {
  getSubscriptionPrice('invalid');
  console.log('❌ FAIL: Should have thrown error');
  process.exit(1);
} catch (e) {
  console.log('✅ PASS: Invalid tier throws error');
}

console.log('\n✅ All pricing tests passed!');
