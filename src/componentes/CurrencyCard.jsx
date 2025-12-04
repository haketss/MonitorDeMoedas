/* eslint-disable react/prop-types */
export function CurrencyCard({ currency }) {
	const isPositive = currency.pctChange > 0;
	const isBTC = currency.code != "BTC";

	let corrente = Number(currency.ask)
    let formatadoCoreente = "R$ " + corrente.toFixed(2).replace('.', ',')
  
	let poercentagem = Number(currency.pctChange)
	let formatadoPorcentagem = poercentagem.toFixed(2).replace('.', ',') + '%'

	return (
		<div
			className={`rounded-xl flex justify-around gap-4 text-2xl p-8 ${isPositive ? "text-green-500/70 bg-gray-400/10" : "text-red-500/70 bg-gray-400/10"} m-2 `}>
			<div>
				<p className="truncate w-60">{currency.name}</p>
			</div>
			<div>
				<p className="truncate w-50">
					{currency.code}: { isBTC ? formatadoCoreente : currency.ask  }
				</p>
			</div>
			<div>
				<p className="truncate w-30">
					{formatadoPorcentagem}
					
				</p>
			</div>
			<div>
				{isPositive ? (
						<p className="animate-ping" style={{ fontSize: "30px" }}>
							↑
						</p>
					) : (
						<p className="animate-ping" style={{ fontSize: "30px" }}>
							↓
						</p>
					)}
			</div>
		</div>
	);
}
