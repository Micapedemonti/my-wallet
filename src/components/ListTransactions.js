import React from 'react';
import '../styles/ListTransaction.css'
import Delete from '../img/borrar.png'



const ListaGastos = ({ gastos, eliminarGasto }) => {

  
  return (
    <div className='container_transactions'>
      <h2>Ultimas transacciones</h2>
      <ul className='transactions_list'>
        {gastos.map((gasto, index) => (
          <li className="transaction" key={index}>
            <h1>{gasto.descripcion}:</h1>  <p>{gasto.monto > 0 ? `+${gasto.monto}` : gasto.monto}</p>
            <button onClick={() => eliminarGasto(index)} className='btn_delete'>
            <img src={Delete} alt='delete' width="20px" />
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaGastos;
