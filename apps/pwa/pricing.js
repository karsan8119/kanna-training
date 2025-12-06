// Seller subscription pricing tiers for Kanna

export const PRICING_TIERS = {
  FREE: { name: 'Free', price: 0 },
  BASIC: { name: 'Basic', price: 499 },
  PRO: { name: 'Pro', price: 999 }
};

export function getSubscriptionPrice(tier) {
  const tierKey = tier.toUpperCase();
  if (!PRICING_TIERS[tierKey]) {
    throw new Error(`Invalid tier: ${tier}`);
  }
  return PRICING_TIERS[tierKey].price;
}

export function getTierDetails(tier) {
  const tierKey = tier.toUpperCase();
  if (!PRICING_TIERS[tierKey]) {
    throw new Error(`Invalid tier: ${tier}`);
  }
  return PRICING_TIERS[tierKey];
}