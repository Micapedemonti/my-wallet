import React from 'react';

const ListaGastos = ({ gastos }) => {
  return (
    <div>
      <h2>Lista de Gastos</h2>
      <ul>
        {gastos.map((gasto, index) => (
          <li key={index}>
            {gasto.descripcion}: {gasto.monto > 0 ? `+${gasto.monto}` : gasto.monto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaGastos;
