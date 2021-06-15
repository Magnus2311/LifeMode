export const formatDecimalNumber = (number, fractionDigits = 2) =>
  number.toLocaleString(undefined, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
