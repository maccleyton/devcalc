/**
 * Limita um número a N casas decimais (sem converter para string).
 * @param value - número a ser arredondado
 * @param decimals - número de casas decimais (padrão: 2)
 * @returns número com casas decimais limitadas
 */
export function limitDecimals(value: number, decimals: number = 2): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

/**
 * Converte um valor percentual de número inteiro para decimal.
 * Ex: 7 vira 0.07, 1.5 vira 0.015
 * @param value - número representando percentual (string ou number)
 * @returns valor decimal
 */
export function convertPercentage(value: number | string): number {
  return Number(value) / 100;
}

/**
 * Formata número como percentual no formato brasileiro.
 * Ex: 0.075 vira "7,50%"
 * @param value - número em decimal
 * @returns string formatada
 */
export function formatPercentage(value: number | null | undefined): string {
  if (value == null || isNaN(value)) value = 0;

  const percent = value * 100;

  return percent.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + '%';
}

/**
 * Formata número como moeda brasileira (BRL).
 * Ex: 1234.56 vira "R$ 1.234,56"
 * @param value - número
 * @returns string formatada como moeda BRL
 */
export function formatCurrency(value: number | null | undefined): string {
  if (value == null || isNaN(value)) {
    value = 0;
  }

  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

/**
 * Formata uma data para o padrão brasileiro dd/mm/yyyy.
 * @param date - objeto Date ou string no formato ISO
 * @returns string formatada dd/mm/yyyy
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Converte string no formato "1.234,56" (padrão brasileiro) para número 1234.56.
 * @param value - string formatada como moeda BRL
 * @returns número convertido
 */
export function parseCurrency(value: string): number {
  if (!value) return 0;
  // Remove os pontos (milhares) e troca a vírgula decimal por ponto
  const cleaned = value.replace(/\./g, '').replace(',', '.');
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}

/**
 * Gera um ID único simples (baseado em timestamp e número aleatório).
 * Útil para chaves de listas e histórico.
 * @returns string única
 */
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
