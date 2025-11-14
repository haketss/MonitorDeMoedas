import { CurrencyColumnDolar } from "../componentes/CurrencyColumnDolar";
import { CurrencyColumnReal } from "../componentes/CurrencyColumnReal";
import { CurrencyColumnBTC } from "../componentes/CurrencyColumnBTC";
import { useState, useEffect } from 'react';

export function Principal() {

  // eslint-disable-next-line react/prop-types
  function AtualizarComponente({ Componente }) {
    const [contador, setContador] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setContador((contadorAnterior) => contadorAnterior + 1);
      }, 3000); // Atualiza a cada segundo

      return () => clearTimeout(timer); // Limpa o timeout ao desmontar
    }, [contador]);

    return <Componente contador={contador} />;
  }



  return (
    <div>
      <div className="container mx-auto  mt-6 text-center flex justify-around">


        <AtualizarComponente Componente={CurrencyColumnDolar} />
        <AtualizarComponente Componente={CurrencyColumnReal} />
        <AtualizarComponente Componente={CurrencyColumnBTC} />

      </div>
    </div>
  );
}