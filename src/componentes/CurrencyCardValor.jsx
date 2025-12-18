import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function CurrencyCardValor() {
  const [valorInput, setValorInput] = useState();
  const [selecaoDeMoeda, setSelecaoDeMoeda] = useState("USD-BRL");

  const { data: cotacao, isCarregando } = useQuery({
    queryKey: ["get-moedas", selecaoDeMoeda],
    queryFn: async () => {
      const response = await fetch(
        `https://economia.awesomeapi.com.br/json/last/${selecaoDeMoeda}`
      );

      if (!response.ok) {
        throw new Error("Falha na requisição");
      }
      const result = await response.json();
      const key = selecaoDeMoeda.replace("-", "");
      return parseFloat(result[key].bid);
    },
  });

  const formatarValorConvertido = () => {
    const numInput = parseFloat(valorInput);
    if (isNaN(numInput) || !cotacao) return "0,00";

    const total = numInput * cotacao;

    return new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(total);
  };

  return (
    <div className="bg-gray-500/50 flex justify-between text-gray-300 p-5 rounded-2xl">
      <div className="rounded-lg p-2">valor:</div>
      <select
        id="moedas"
        name="moedas"
        value={selecaoDeMoeda}
        onChange={(e) => {
          setSelecaoDeMoeda(e.target.value);
        }}
        className="bg-transparent rounded-xl  p-2 outline-none"
      >
        <option className="text-gray-800" value="USD-BRL">
          USD-BRL
        </option>
        <option className="text-gray-800" value="EUR-BRL">
          EUR-BRL
        </option>
        <option className="text-gray-800" value="BTC-BRL">
          BTC-BRL
        </option>
      </select>

      <input
        id="valorParaCalculo"
        onChange={(e) => {
          setValorInput(e.target.value);
        }}
        type="text"
        placeholder="Digite o valor em R$"
        className="bg-gray-500/50 border border-transparent rounded-lg p-2"
      />
      <div className="rounded-lg p-2">
        {isCarregando ? "Carregando..." : `R$: ${formatarValorConvertido()}`}
      </div>
    </div>
  );
}
