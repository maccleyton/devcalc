/**
 * Calcula o valor futuro (montante) com juros compostos.
 * Fórmula: F = P * (1 + i)^n
 * @param principal - valor presente (P)
 * @param rate - taxa de juros (i), em decimal (ex: 0.05 para 5%)
 * @param periods - número de períodos (n)
 * @returns valor futuro (F)
 */
export function calculateCompoundFutureValue(principal: number, rate: number, periods: number): number {
  return principal * Math.pow(1 + rate, periods);
}

/**
 * Calcula o valor presente (principal) com juros compostos.
 * Fórmula: P = F / (1 + i)^n
 * @param futureValue - valor futuro (F)
 * @param rate - taxa de juros (i), em decimal
 * @param periods - número de períodos (n)
 * @returns valor presente (P)
 */
export function calculateCompoundPresentValue(futureValue: number, rate: number, periods: number): number {
  return futureValue / Math.pow(1 + rate, periods);
}

/**
 * Calcula a taxa de juros dos juros compostos.
 * Fórmula: i = (F / P)^(1/n) - 1
 * @param futureValue - valor futuro (F)
 * @param principal - valor presente (P)
 * @param periods - número de períodos (n)
 * @returns taxa de juros (i), em decimal
 */
export function calculateCompoundInterestRate(futureValue: number, principal: number, periods: number): number {
  return Math.pow(futureValue / principal, 1 / periods) - 1;
}

/**
 * Calcula o número de períodos nos juros compostos.
 * Fórmula: n = log(F / P) / log(1 + i)
 * @param futureValue - valor futuro (F)
 * @param principal - valor presente (P)
 * @param rate - taxa de juros (i), em decimal
 * @returns número de períodos (n)
 */
export function calculateCompoundPeriods(futureValue: number, principal: number, rate: number): number {
  return Math.log(futureValue / principal) / Math.log(1 + rate);
}