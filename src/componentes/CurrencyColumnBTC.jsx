import { useEffect, useState } from "react";
import { getCripMoeda } from "../services/moeda-service";
import { CurrencyCard } from "./CurrencyCard";

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
		<div className="">
			<h2 className=""></h2>
			<div className="">
				{cotacaoBtc.map((currency) => (
					<CurrencyCard key={currency.code} currency={currency} />
				))}
			</div>
		</div>
	);
}
