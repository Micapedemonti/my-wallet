import React from 'react';
import '../styles/ListTransaction.css'


const ListaGastos = ({ gastos }) => {
  return (
    <div className='container_transactions'>
      <h2>Ultimas transacciones</h2>
      <ul className='transactions_list'>
        {gastos.map((gasto, index) => (
          <li className="transaction" key={index}>
            <h1>{gasto.descripcion}:</h1>  <p>{gasto.monto > 0 ? `+${gasto.monto}` : gasto.monto}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaGastos;
