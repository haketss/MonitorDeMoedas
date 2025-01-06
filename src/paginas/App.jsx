import { CurrencyColumn } from "../componentes/CurrencyColumn";
import { CurrencyColumnBTC } from "../componentes/CurrencyColumnBTC";
import React, { useState, useEffect } from 'react';

export function Principal() {
  
  function AtualizarComponente({ Componente }) {
    const [contador, setContador] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setContador((contadorAnterior) => contadorAnterior + 1);
      }, 3000); // Atualiza a cada segundo

      return () => clearTimeout(timer); // Limpa o timeout ao desmontar
    }, [contador]);

    return <Componente contador={contador} />;
  }

  function ComponenteExemplo({ contador }) {
    return <p className="text-center">atualização em tempo real: {contador}</p>;
  }

  return (
    <div className="container">
      <div className="min-vh-100 bg-light">
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-md-4">
             </div>
            <div className="col-md-4">
            <h2 className="text-xl font-semibold text-center">Moedas</h2>
              <AtualizarComponente Componente={CurrencyColumn} />
             <h2 className="text-xl font-semibold text-center">Criptomoedas</h2>
              <AtualizarComponente Componente={CurrencyColumnBTC} />
            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}









