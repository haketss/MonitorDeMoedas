import { CurrencyCard } from "./CurrencyCard";
import { useEffect, useState } from "react";
import { getMoedaReal } from "../services/moeda-service";

export function CurrencyColumnReal() {
	const [cotacao, setContacao] = useState([]);

	useEffect(() => {
		buscarCotacao();
	}, []);

	async function buscarCotacao() {
		try {
			const result = await getMoedaReal();
			// Verifique se os dados estão corretos aqui
			// Ajuste esta linha para garantir que você está definindo o estado corretamente
			setContacao(Object.values(result.data));
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="">
			<div className="">
				{cotacao.map((currency) => (
					<CurrencyCard key={currency.code} currency={currency} />
				))}
			</div>
		</div>
	);
}
