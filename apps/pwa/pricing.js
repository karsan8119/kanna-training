// Seller subscription pricing tiers for Kanna

const PRICING_TIERS = {
  FREE: { name: 'Free', price: 0 },
  BASIC: { name: 'Basic', price: 499 },
  PRO: { name: 'Pro', price: 999 }
};

function getSubscriptionPrice(tier) {
  const tierKey = tier.toUpperCase();
  if (!PRICING_TIERS[tierKey]) {
    throw new Error(`Invalid tier: ${tier}`);
  }
  return PRICING_TIERS[tierKey].price;
}

function getTierDetails(tier) {
  const tierKey = tier.toUpperCase();
  if (!PRICING_TIERS[tierKey]) {
    throw new Error(`Invalid tier: ${tier}`);
  }
  return PRICING_TIERS[tierKey];
}

module.exports = { PRICING_TIERS, getSubscriptionPrice, getTierDetails };
