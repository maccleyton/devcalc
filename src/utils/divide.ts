// utils/divide.ts
/**
 * Divide dois números, trata divisão por zero
 * @param a - dividendo
 * @param b - divisor
 * @returns resultado da divisão ou string com mensagem de erro
 */
export function divide(a: number, b: number): number | string {
  if (b === 0) return "Erro: divisão por zero";
  return a / b;
}