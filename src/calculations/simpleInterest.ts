/**
 * Calcula o valor futuro (montante) com juros simples.
 * Fórmula: F = P * (1 + i * n)
 * @param principal - valor presente (P)
 * @param rate - taxa de juros (i), decimal (ex: 0.05 para 5%)
 * @param periods - número de períodos (n)
 * @returns valor futuro (F)
 */
export function calculateSimpleFutureValue(principal: number, rate: number, periods: number): number {
  return principal * (1 + rate * periods);
}

/**
 * Calcula o valor presente (principal) com juros simples.
 * Fórmula: P = F / (1 + i * n)
 * @param futureValue - valor futuro (F)
 * @param rate - taxa de juros (i), decimal
 * @param periods - número de períodos (n)
 * @returns valor presente (P)
 */
export function calculateSimplePresentValue(futureValue: number, rate: number, periods: number): number {
  return futureValue / (1 + rate * periods);
}

/**
 * Calcula o juros simples (J).
 * Fórmula: J = P * i * n
 * @param principal - valor presente (P)
 * @param rate - taxa de juros (i), decimal
 * @param periods - número de períodos (n)
 * @returns juros (J)
 */
export function calculateSimpleInterest(principal: number, rate: number, periods: number): number {
  return principal * rate * periods;
}

/**
 * Calcula a taxa de juros simples (i).
 * Fórmula: i = (F - P) / (P * n)
 * @param futureValue - valor futuro (F)
 * @param principal - valor presente (P)
 * @param periods - número de períodos (n)
 * @returns taxa de juros (i), decimal
 */
export function calculateSimpleInterestRate(futureValue: number, principal: number, periods: number): number {
  return (futureValue - principal) / (principal * periods);
}

/**
 * Calcula o número de períodos (n) em juros simples.
 * Fórmula: n = (F - P) / (P * i)
 * @param futureValue - valor futuro (F)
 * @param principal - valor presente (P)
 * @param rate - taxa de juros (i), decimal
 * @returns número de períodos (n)
 */
export function calculateSimplePeriods(futureValue: number, principal: number, rate: number): number {
  return (futureValue - principal) / (principal * rate);
}