import React from 'react';
import { CurrencyCard } from './CurrencyCard';
import { useEffect, useState } from "react";
import { getMoeda} from "../services/moeda-service";

export function CurrencyColumn() {
  const [cotacao, setContacao] = useState([]);
  
  useEffect(() => {
    buscarCotacao();
   
  }, []);

  async function buscarCotacao() {
    try {
      const result = await getMoeda();
       // Verifique se os dados estão corretos aqui
      // Ajuste esta linha para garantir que você está definindo o estado corretamente
      setContacao(Object.values(result.data));
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900"></h2>
      <div className="space-y-4">
        {cotacao.map((currency) => (
          <CurrencyCard key={currency.code} currency={currency} />
        ))}
      </div>
     
    </div>
  );
}