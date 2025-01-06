import React from 'react';
import { CurrencyCard } from './CurrencyCard';
import { useEffect, useState } from "react";
import { getCripMoeda } from "../services/moeda-service";

export function CurrencyColumnBTC() {
  const [cotacaoBtc, setContacaoBtc] = useState([]);

  useEffect(() => {
    buscarCotacaoBtc();
  }, []);


  async function buscarCotacaoBtc() {
    try {
      const result = await getCripMoeda();
       // Verifique se os dados estão corretos aqui
      // Ajuste esta linha para garantir que você está definindo o estado corretamente
      setContacaoBtc(Object.values(result.data));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900"></h2>
      <div className="space-y-4">
        {cotacaoBtc.map((currency) => (
          <CurrencyCard key={currency.code} currency={currency} />
        ))}
      </div>

    </div>
  );
}