/* eslint-disable react/prop-types */

export function CurrencyCard({ currency }) {
  const isPositive = currency.pctChange >= 0;
  return (
    <div className={`rounded-xl text-2xl p-8 ${isPositive ? 'bg-green-600 text-gray-800' : 'bg-red-800 text-gray-300'} m-2 `}>
      <div>
        <h5 className="">{currency.name}</h5>
        <p className="">{currency.code}: {(currency.ask)}</p>
      </div>
      <div>
        <p className="">{(currency.pctChange)}: {isPositive ? (
          <span className="animate-ping" style={{ fontSize: '30px' }}>↑</span>
        ) : (
          <span className="animate-ping" style={{ fontSize: '30px' }}>↓</span>
        )}
        </p>
        
      </div>
      <div>
      </div>
    </div>
  );
}
