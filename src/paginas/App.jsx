import { useEffect, useState } from "react";
import CurrencyCardValor from "../componentes/CurrencyCardValor";
import { CurrencyColumnBTC } from "../componentes/CurrencyColumnBTC";
import { CurrencyColumnDolar } from "../componentes/CurrencyColumnDolar";
import { CurrencyColumnReal } from "../componentes/CurrencyColumnReal";

export function Principal() {
	// eslint-disable-next-line react/prop-types
	function AtualizarComponente({ Componente }) {
		const [contador, setContador] = useState(0);
		console.log("Renderizando Principal");
		useEffect(() => {
			const interval = setInterval(() => {
				setContador((contadorAnterior) => contadorAnterior + 1);
			}, 50000); // Atualiza a cada 50 segundos

			return () => clearInterval(interval); // Limpa o intervalo ao desmontar
		}, []);

		return <Componente contador={contador} />;
	}

	return (
		<div>
			<div className="container mx-auto  mt-10 ">
				<div>
					<CurrencyCardValor />
					<h1 className="text-1xl font-bold text-end mt-2 text-gray-500/50">
						Atualiza a cada 5(cinco) segundos
					</h1>
				</div>
				<AtualizarComponente Componente={CurrencyColumnDolar} />
				<AtualizarComponente Componente={CurrencyColumnReal} />
				<AtualizarComponente Componente={CurrencyColumnBTC} />
			</div>
		</div>
	);
}
