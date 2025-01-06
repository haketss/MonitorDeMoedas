import React from 'react';

export function CurrencyCard({ currency }) {
  const isPositive = currency.pctChange >= 0;

  return (
    <div className={`card mb-3 ${isPositive ? 'bg-success' : 'bg-danger'}`}>
      <div className="card-body ">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className="card-title mb-1">{currency.name}</h5>
            <p className="text-muted small mb-2 ">{currency.code}</p>
          </div>
          {isPositive ? (
            <span className="" style={{ fontSize: '40px' }}>↑</span>
          ) : (
            <span className="" style={{ fontSize: '40px' }}>↓</span>
          )}
        </div>
        <div>
          <p className="h4 mb-1 text-center">{(currency.ask)}</p>
          <p className="small mb-0 text-center" style={{ fontSize: '20px' }}>
            {(currency.pctChange)}
          </p>
        </div>
      </div>
    </div>
  );
}
