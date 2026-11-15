// Formato de preço usado em todo o site. Para trocar para reais, use 'pt-BR' e 'BRL'.
export const formatPrice = (value: number) =>
  value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
  });
