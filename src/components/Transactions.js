import React, { useState } from 'react';

const GastoForm = ({ onGastoAgregado }) => {
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoGasto = {
      descripcion,
      monto: parseFloat(monto),
    };

    onGastoAgregado(nuevoGasto);

    // Limpiar los campos después de agregar un gasto
    setDescripcion('');
    setMonto('');
  };

  return (
    <div>
      <h2>Agregar Gasto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="number"
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default GastoForm;
