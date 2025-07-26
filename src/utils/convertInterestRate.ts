import { RatePeriod } from '@/types';
import { limitDecimals } from './format';

/**
 * Mapeamento de quantos dias cada período representa
 */
export const periodInDays: Record<RatePeriod, number> = {
  day: 1,
  week: 7,
  month: 30,
  bimester: 60,
  quarter: 90,
  semester: 180,
  year: 360,
};

/**
 * Converte uma taxa de juros entre dois períodos diferentes.
 * @param rate - taxa original (em decimal, ex: 0.05 para 5%)
 * @param from - período de origem
 * @param to - período de destino
 * @returns nova taxa equivalente ao novo período
 */
export function convertInterestRate(rate: number, from: RatePeriod, to: RatePeriod): number {
  const exponent = periodInDays[to] / periodInDays[from];
  const converted = Math.pow(1 + rate, exponent) - 1;
  return limitDecimals(converted);
}

/**
 * Converte uma taxa informada a partir de um período de origem
 * e preenche todas as linhas da coluna correspondente.
 * Ex: usuário preencheu a linha "mês", então alimentamos a coluna "mês"
 * @param rate - taxa digitada (em decimal)
 * @param columnPeriod - período da coluna a ser preenchida (ex: 'month')
 * @returns objeto com os valores de cada linha da coluna preenchida
 */
export function convertColumnFromPeriod(rate: number, columnPeriod: RatePeriod): Record<RatePeriod, number> {
  const result: Record<RatePeriod, number> = {} as Record<RatePeriod, number>;

  (Object.keys(periodInDays) as RatePeriod[]).forEach((rowPeriod) => {
    result[rowPeriod] = convertInterestRate(rate, rowPeriod, columnPeriod);
  });

  return result;
}