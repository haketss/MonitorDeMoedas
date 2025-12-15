import { useEffect, useState } from "react";
import { getMoedaDolar } from "../services/moeda-service";
import { CurrencyCard } from "./CurrencyCard";

export function CurrencyColumnDolar() {
	const [cotacao, setContacao] = useState([]);

	useEffect(() => {
		buscarCotacao();
	}, []);

	async function buscarCotacao() {
		try {
			const result = await getMoedaDolar();
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
