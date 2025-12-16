import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function CurrencyCardValor() {
  const [valorInput, setValorInput] = useState();

  function useGetValor() {
    return useQuery({
      queryKey: ["get-moedas"],
      queryFn: async () => {
        const response = await fetch(
          "https://economia.awesomeapi.com.br/json/last/USD-BRL"
        );

        if (!response.ok) {
          throw new Error("Falha na requisição da API de moedas");
        }
        const result = await response.json();
        return result.USDBRL.bid;
      },
    });
  }

  function FarmatoDeNumero() {
    let valorMoeda = useGetValor();
    let ValorConvertido = valorMoeda.data * valorInput;

    const valorFormatato = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    if (!ValorConvertido) {
      return 0;
    }
    
    return valorFormatato.format(ValorConvertido);
  }

  return (
    <div className="bg-gray-500/50 flex justify-between text-gray-400 p-5 rounded-2xl">
      <div className="rounded-lg p-2">valor:</div>
      <input
        onChange={(e) => {
          setValorInput(e.target.value);
        }}
        type="text"
        placeholder="Digite o valor em R$"
        className="bg-transparent border border-gray-400 rounded-lg p-2"
      />
      <div className="rounded-lg p-2"> R$: {FarmatoDeNumero()}</div>
    </div>
  );
}
