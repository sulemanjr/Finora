const currencyMeta = {
  USD: { symbol: '$', subunit: 'cents', fraction: 2, locale: 'en-US' },
  INR: { symbol: '₹', subunit: 'paise', fraction: 2, locale: 'en-IN' },
  EUR: { symbol: '€', subunit: 'cents', fraction: 2, locale: 'de-DE' },
  GBP: { symbol: '£', subunit: 'pence', fraction: 2, locale: 'en-GB' },
  JPY: { symbol: '¥', subunit: 'sen', fraction: 0, locale: 'ja-JP' },
};

export const formatCurrency = (
  value: number,
  options: {
    currency?: keyof typeof currencyMeta;
    decimalPlaces?: number;
    compact?: boolean;
    showSign?: boolean;
    isExpense?: boolean;
    subunit?: boolean;
  } = {}
): string => {
  const {
    currency = 'USD',
    decimalPlaces,
    compact = false,
    showSign = false,
    isExpense = false,
    subunit = false,
  } = options;

  const meta = currencyMeta[currency] || currencyMeta['USD'];
  const fraction = decimalPlaces ?? meta.fraction;

  // Apply negative sign if expense
  const displayValue = isExpense ? -Math.abs(value) : value;

  // Handle subunit formatting (cents, paise, pence, sen)
  if (subunit) {
    const factor = meta.fraction === 0 ? 1 : Math.pow(10, meta.fraction);
    const subunitValue = Math.round(displayValue * factor);
    return `${subunitValue} ${meta.subunit}`;
  }

  // Normal currency formatting
  return new Intl.NumberFormat(meta.locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: fraction,
    maximumFractionDigits: fraction,
    notation: compact ? 'compact' : 'standard',
    signDisplay: showSign ? 'always' : 'auto',
  }).format(displayValue);
};
