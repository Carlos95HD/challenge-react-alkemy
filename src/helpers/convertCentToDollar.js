export const convertCentToDollar = ( n ) => {
  const result = n / 100
  return Math.round((result + Number.EPSILON) * 100) / 100;
}