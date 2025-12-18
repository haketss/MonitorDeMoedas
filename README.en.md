# MonitorDeMoedas

Description
- Front-end Vite/React project for quick monitoring of currency values (USD, BRL, BTC).

Prerequisites
- Node.js (recommended v16+)
- npm or yarn

Installation
```bash
cd MonitorDeMoedas
npm install
```

Run in development
```bash
npm run dev
```

Production build
```bash
npm run build
```

Main structure
- `src/` : React source code
  - `paginas/App.jsx` : `Principal` component that mounts columns and updates periodically
  - `componentes/` : card and column components (`CurrencyCardValor`, `CurrencyColumnDolar`, `CurrencyColumnReal`, `CurrencyColumnBTC`)
  - `services/` : API calls

Notes and checks
- In [src/paginas/App.jsx](MonitorDeMoedas/src/paginas/App.jsx) the `AtualizarComponente` function uses `setTimeout(..., 50000)` while a label says "Atualiza a cada 5(cinco) segundos". 50000 ms = 50 seconds — mismatch between label/comment and code.
  - If you intend 5 seconds, change `50000` to `5000`.
  - The `useEffect` depends on `contador`, which causes the timeout to be reset on each increment — acceptable for scheduled re-renders.

Quick suggestions
- Adjust the interval to the desired value (5000 for 5s).
 

License
- (Add desired license or remove this section)
