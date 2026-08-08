// Utility to detect user's country and auto-select currency
// Uses free public IP geolocation API (ipapi.co)

const countryToCurrency: Record<string, keyof typeof import('./currency-rates').currencyRates> = {
  US: 'USD',
  IN: 'INR',
  GB: 'GBP',
  JP: 'JPY',
  DE: 'EUR',
  FR: 'EUR',
  IT: 'EUR',
  ES: 'EUR',
  // Add more mappings as needed
};

export async function detectCurrencyByIP(): Promise<string> {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    const countryCode = data.country;
    return countryToCurrency[countryCode] || 'USD';
  } catch {
    return 'USD';
  }
}
