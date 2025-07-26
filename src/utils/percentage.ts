// utils/percentage.ts
/**
 * Calcula a porcentagem de um valor
 * @param value - valor base
 * @param percent - porcentagem a ser calculada (ex: 10 para 10%)
 * @returns valor correspondente à porcentagem
 */
export function calculatePercentage(value: number, percent: number): number {
  return value * (percent / 100);
}