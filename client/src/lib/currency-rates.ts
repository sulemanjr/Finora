// Manual currency conversion rates (as of Sep 2025)
// Base: USD
export const currencyRates = {
  USD: 1,
  INR: 83.2, // 1 USD = 83.2 INR
  EUR: 0.94, // 1 USD = 0.94 EUR
  GBP: 0.81, // 1 USD = 0.81 GBP
  JPY: 149.5, // 1 USD = 149.5 JPY
};

export function convertCurrency(amount: number, from: keyof typeof currencyRates, to: keyof typeof currencyRates): number {
  if (from === to) return amount;
  // Convert to USD first, then to target
  const usdAmount = amount / currencyRates[from];
  return usdAmount * currencyRates[to];
}
