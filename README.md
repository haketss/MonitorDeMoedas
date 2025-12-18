# MonitorDeMoedas

Descrição
- Projeto front-end em Vite/React para monitoramento rápido de valores de moedas (dólar, real, BTC).

Pré-requisitos
- Node.js (recomendado v16+)
- npm ou yarn

Instalação
```bash
cd MonitorDeMoedas
npm install
```

Executar em desenvolvimento
```bash
npm run dev
```

Build para produção
```bash
npm run build
```

Estrutura principal
- `src/` : código-fonte React
  - `paginas/App.jsx` : componente `Principal` que monta as colunas e atualiza periodicamente
  - `componentes/` : componentes de cartão e colunas (`CurrencyCardValor`, `CurrencyColumnDolar`, `CurrencyColumnReal`, `CurrencyColumnBTC`)
  - `services/` : chamadas à API

Observações e verificações
- No arquivo [src/paginas/App.jsx](MonitorDeMoedas/src/paginas/App.jsx) a função `AtualizarComponente` usa `setTimeout(..., 50000)` e o texto exibido indica "Atualiza a cada 5(cinco) segundos". 50000 ms = 50 segundos — há uma discrepância entre comentário/label e o tempo definido.
  - Se a intenção é atualizar a cada 5 segundos, altere `50000` para `5000`.
  - O `useEffect` depende de `contador`, o que faz o timer ser reconfigurado a cada incremento — comportamento aceitável para re-renders programados.

Sugestões rápidas
- Ajuste o intervalo para o valor desejado (5000 para 5s).
 

Licença
- (Adicione a licença desejada ou remova esta seção)

