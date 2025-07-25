/*
 -------------- -----dia------ ----semana---- -----mes------ ---bimestre--- --trimestre--- -quadrimestre- ---semestre--- -----ano------ 
| dia          |              |              |              |              |              |              |              |              |
| semana       |              |              |              |              |              |              |              |              |
| mes          |              |              |              |              |              |              |              |              |
| bimestre     |              |              |              |              |              |              |              |              |
| trimestre    |              |              |              |              |              |              |              |              |
| quadrimestre |              |              |              |              |              |              |              |              |
| semestre     |              |              |              |              |              |              |              |              |
| ano          |              |              |              |              |              |              |              |              |
 --------------------------------------------------------------------------------------------------------------------------------------
*/

 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| day        | POTÊNCIA(1+T;1)-1   | POTÊNCIA(1+T;1/7)-1   | POTÊNCIA(1+T;1/30)-1 | POTÊNCIA(1+T;1/60)-1 | POTÊNCIA(1+T;1/90)-1 | POTÊNCIA(1+T;1/120)-1 | POTÊNCIA(1+T;1/180)-1 | POTÊNCIA(1+T;1/360)-1 |
| week       | POTÊNCIA(1+T;7)-1   | POTÊNCIA(1+T;1)-1     | POTÊNCIA(1+T;7/30)-1 | POTÊNCIA(1+T;7/60)-1 | POTÊNCIA(1+T;7/90)-1 | POTÊNCIA(1+T;7/120)-1 | POTÊNCIA(1+T;1/26)-1  | POTÊNCIA(1+T;1/52)-1  |
| month      | POTÊNCIA(1+T;30)-1  | POTÊNCIA(1+T;30/7)-1  | POTÊNCIA(1+T;1)-1    | POTÊNCIA(1+T;1/2)-1  | POTÊNCIA(1+T;1/3)-1  | POTÊNCIA(1+T;1/4)-1   | POTÊNCIA(1+T;1/6)-1   | POTÊNCIA(1+T;1/12)-1  |
| two-month  | POTÊNCIA(1+T;60)-1  | POTÊNCIA(1+T;60/7)-1  | POTÊNCIA(1+T;2)-1    | POTÊNCIA(1+T;1)-1    | POTÊNCIA(1+T;2/3)-1  | POTÊNCIA(1+T;2/4)-1   | POTÊNCIA(1+T;1/3)-1   | POTÊNCIA(1+T;1/6)-1   |
| quarter    | POTÊNCIA(1+T;90)-1  | POTÊNCIA(1+T;90/7)-1  | POTÊNCIA(1+T;3)-1    | POTÊNCIA(1+T;3/2)-1  | POTÊNCIA(1+T;1)-1    | POTÊNCIA(1+T;3/4)-1   | POTÊNCIA(1+T;1/2)-1   | POTÊNCIA(1+T;1/4)-1   |
| four-month | POTÊNCIA(1+T;120)-1 | POTÊNCIA(1+T;120/7)-1 | POTÊNCIA(1+T;4)-1    | POTÊNCIA(1+T;2)-1    | POTÊNCIA(1+T;4/3)-1  | POTÊNCIA(1+T;1)-1     | POTÊNCIA(1+T;2/3)-1   | POTÊNCIA(1+T;1/3)-1   |
| half-year  | POTÊNCIA(1+T;180)-1 | POTÊNCIA(1+T;26)-1    | POTÊNCIA(1+T;6)-1    | POTÊNCIA(1+T;3)-1    | POTÊNCIA(1+T;2)-1    | POTÊNCIA(1+T;3/2)-1   | POTÊNCIA(1+T;1)-1     | POTÊNCIA(1+T;1/2)-1   |
| year       | POTÊNCIA(1+T;360)-1 | POTÊNCIA(1+T;52)-1    | POTÊNCIA(1+T;12)-1   | POTÊNCIA(1+T;6)-1    | POTÊNCIA(1+T;4)-1    | POTÊNCIA(1+T;3)-1     | POTÊNCIA(1+T;2)-1     | POTÊNCIA(1+T;1)-1     |
 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const conversoes {}

/*
Parece que houve uma falha técnica ao tentar gerar as funções automaticamente, mas posso te mostrar como essas fórmulas podem ser implementadas manualmente em JavaScript (ideal para sua aplicação web com React + Vite). A fórmula base é:

```math
(1 + T)^n - 1
```

Onde:
- `T` é a taxa de juros no período de origem (por exemplo, ao mês).
- `n` é a razão entre os períodos (por exemplo, 1/30 para converter de mês para dia).

---

### 🧠 Função Genérica em JavaScript

```javascript
function converterTaxa(taxa, expoente) {
  return Math.pow(1 + taxa, expoente) - 1;
}
```

---

### 🧮 Exemplo de Conversões

```javascript
// De taxa mensal para diária
const taxaMensal = 0.04; // 4% ao mês
const taxaDiaria = converterTaxa(taxaMensal, 1 / 30);

// De taxa anual para mensal
const taxaAnual = 0.6; // 60% ao ano
const taxaMensalConvertida = converterTaxa(taxaAnual, 1 / 12);

// De taxa semanal para anual
const taxaSemanal = 0.01; // 1% por semana
const taxaAnualConvertida = converterTaxa(taxaSemanal, 52);
```

---

### 🧩 Sugestão de Estrutura para Tabela Dinâmica

Você pode criar uma matriz de períodos e usar a função `converterTaxa` para preencher dinamicamente uma tabela como a do Excel:

```javascript
const periodos = {
  dia: 1,
  semana: 7,
  mes: 30,
  bimestre: 60,
  trimestre: 90,
  quadrimestre: 120,
  semestre: 180,
  ano: 360
};

function gerarTabelaConversao(taxaBase) {
  const resultado = {};
  for (const [de, diasDe] of Object.entries(periodos)) {
    resultado[de] = {};
    for (const [para, diasPara] of Object.entries(periodos)) {
      const expoente = diasPara / diasDe;
      resultado[de][para] = converterTaxa(taxaBase, expoente);
    }
  }
  return resultado;
}
```

---

Se quiser, posso gerar essa tabela completa com valores reais em um arquivo `.json`, `.csv` ou `.xlsx`. Deseja que eu faça isso?
*/

/*
Parece que ainda estamos com instabilidades técnicas na geração de arquivos. Mas não vamos parar por aqui!

Vou te mostrar como seria a estrutura da **tabela de conversão de taxas** em Markdown, e se quiser, posso te entregar isso como código para gerar o `.xlsx` localmente ou tentar novamente mais tarde.

---

### 📊 Tabela de Conversão de Taxas (Fórmula: \((1 + T)^n - 1\))

| De \ Para     | Dia              | Semana             | Mês                | Bimestre           | Trimestre          | Quadrimestre        | Semestre            | Ano                 |
|---------------|------------------|--------------------|--------------------|--------------------|--------------------|---------------------|---------------------|---------------------|
| **Dia**       | \((1+T)^1 -1\)   | \((1+T)^{1/7}-1\)  | \((1+T)^{1/30}-1\) | \((1+T)^{1/60}-1\) | \((1+T)^{1/90}-1\) | \((1+T)^{1/120}-1\) | \((1+T)^{1/180}-1\) | \((1+T)^{1/360}-1\) |
| **Semana**    | \((1+T)^7 -1\)   | \((1+T)^1 -1\)     | \((1+T)^{7/30}-1\) | \((1+T)^{7/60}-1\) | \((1+T)^{7/90}-1\) | \((1+T)^{7/120}-1\) | \((1+T)^{1/26}-1\)  | \((1+T)^{1/52}-1\)  |
| **Mês**       | \((1+T)^{30}-1\) | \((1+T)^{30/7}-1\) | \((1+T)^1 -1\)     | \((1+T)^{1/2}-1\)  | \((1+T)^{1/3}-1\)  | \((1+T)^{1/4}-1\)   | \((1+T)^{1/6}-1\)   | \((1+T)^{1/12}-1\)  |
| **Bimestre**  | \((1+T)^{60}-1\) | \((1+T)^{60/7}-1\) | \((1+T)^2 -1\)     | \((1+T)^1 -1\)     | \((1+T)^{2/3}-1\)  | \((1+T)^{2/4}-1\)   | \((1+T)^{1/3}-1\)   | \((1+T)^{1/6}-1\)   |
| **Trimestre** | \((1+T)^{90}-1\) | \((1+T)^{90/7}-1\) | \((1+T)^3 -1\)     | \((1+T)^{3/2}-1\)  | \((1+T)^1 -1\)     | \((1+T)^{3/4}-1\)   | \((1+T)^{1/2}-1\)   | \((1+T)^{1/4}-1\)   |
| **Quadrim.**  | \((1+T)^{120}-1\)| \((1+T)^{120/7}-1\)| \((1+T)^4 -1\)     | \((1+T)^2 -1\)     | \((1+T)^{4/3}-1\)  | \((1+T)^1 -1\)      | \((1+T)^{2/3}-1\)   | \((1+T)^{1/3}-1\)   |
| **Semestre**  | \((1+T)^{180}-1\)| \((1+T)^{26}-1\)   | \((1+T)^6 -1\)     | \((1+T)^3 -1\)     | \((1+T)^2 -1\)     | \((1+T)^{3/2}-1\)   | \((1+T)^1 -1\)      | \((1+T)^{1/2}-1\)   |
| **Ano**       | \((1+T)^{360}-1\)| \((1+T)^{52}-1\)   | \((1+T)^{12}-1\)   | \((1+T)^6 -1\)     | \((1+T)^4 -1\)     | \((1+T)^3 -1\)      | \((1+T)^2 -1\)      | \((1+T)^1 -1\)      |

---

Se quiser, posso te entregar esse conteúdo como:

- Arquivo `.md` (Markdown)
- Arquivo `.xlsx` (Excel)
- Arquivo `.json` (para uso em frontend)

Qual formato você prefere que eu tente gerar primeiro?
*/

/*
Mesmo com a falha técnica na execução automática, posso te mostrar como implementar essa **função genérica** em JavaScript, ideal para sua aplicação web com React + Vite.

---

### ✅ Função Genérica de Conversão de Taxas

```javascript
const periodosEmDias = {
  dia: 1,
  semana: 7,
  mes: 30,
  bimestre: 60,
  trimestre: 90,
  quadrimestre: 120,
  semestre: 180,
  ano: 360
};

/**
 * Converte uma taxa de juros entre períodos diferentes
 * @param {number} taxa - Taxa de juros no período de origem (ex: 0.04 para 4%)
 * @param {string} de - Período de origem (ex: 'mes')
 * @param {string} para - Período de destino (ex: 'ano')
 * @returns {number} - Taxa equivalente no período de destino
 */
function converterTaxa(taxa, de, para) {
  const diasDe = periodosEmDias[de.toLowerCase()];
  const diasPara = periodosEmDias[para.toLowerCase()];
  if (!diasDe || !diasPara) {
    throw new Error("Período inválido. Use: dia, semana, mes, bimestre, trimestre, quadrimestre, semestre, ano.");
  }
  const expoente = diasPara / diasDe;
  return Math.pow(1 + taxa, expoente) - 1;
}
```

---

### 🧪 Exemplos de Uso

```javascript
// Converter taxa mensal de 4% para anual
const taxaAnual = converterTaxa(0.04, 'mes', 'ano');

// Converter taxa anual de 60% para mensal
const taxaMensal = converterTaxa(0.6, 'ano', 'mes');

// Converter taxa semanal de 1% para diária
const taxaDiaria = converterTaxa(0.01, 'semana', 'dia');
```

---

Se quiser, posso gerar essa função em outros formatos também (Python, TypeScript, etc.) ou empacotar como módulo para uso direto no seu projeto. Quer que eu faça isso?
*/