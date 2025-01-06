// Currency formatting utilities
export const formatCurrency = (value, locale = 'pt-BR', currency = 'BRL') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
};

export const formatPercentage = (value) => {
  const isPositive = value >= 0;
  return `${isPositive ? '+' : ''}${value.toFixed(2)}%`;
};

export const formatNumber = (value, locale = 'en-US', options = {}) => {
  return value.toLocaleString(locale, options);
};