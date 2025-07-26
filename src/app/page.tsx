'use client';

import { useEffect } from 'react';
import {
  calculateCompoundFutureValue,
  calculateCompoundPresentValue,
  calculateCompoundInterestRate,
  calculateCompoundPeriods,
  calculateSimpleFutureValue,
  calculateSimplePresentValue,
  calculateSimpleInterest,
  calculateSimpleInterestRate,
  calculateSimplePeriods
} from '@/calculations';
import { formatCurrency, formatPercentage, limitDecimals } from '@/utils';

export default function Page() {
  useEffect(() => {
    console.log('🧮 Teste: Juros Compostos');
    const principal = 1000;
    const rate = 0.05;
    const periods = 12;
    const futureValue = calculateCompoundFutureValue(principal, rate, periods);

    console.log(`Valor Futuro (F): ${formatCurrency(futureValue)}`);
    console.log(`Valor Presente (P): ${formatCurrency(calculateCompoundPresentValue(futureValue, rate, periods))}`);
    console.log(`Taxa de Juros (i): ${formatPercentage(calculateCompoundInterestRate(futureValue, principal, periods))}`);
    const n = calculateCompoundPeriods(futureValue, principal, rate);
    console.log(`Número de Períodos (n): ${limitDecimals(n, 2)} períodos`);

    console.log('\n🧮 Teste: Juros Simples');
    const fvSimple = calculateSimpleFutureValue(principal, rate, periods);
    console.log(`Valor Futuro (F): ${formatCurrency(fvSimple)}`);
    console.log(`Valor Presente (P): ${formatCurrency(calculateSimplePresentValue(fvSimple, rate, periods))}`);
    console.log(`Juros (J): ${formatCurrency(calculateSimpleInterest(principal, rate, periods))}`);
    console.log(`Taxa de Juros (i): ${formatPercentage(calculateSimpleInterestRate(fvSimple, principal, periods))}`);
    const nSimple = calculateSimplePeriods(fvSimple, principal, rate);
    console.log(`Número de Períodos (n): ${limitDecimals(nSimple, 2)} períodos`);

  }, []);

  return (
    <main style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Teste de Juros Compostos e Simples</h1>
      <p>Confira os resultados no console do navegador (F12).</p>
    </main>
  );
}
