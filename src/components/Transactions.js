import React, { useState } from 'react';
import '../styles/FormTransaction.css'

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
    <div className='form_transaction'>
      <h2>Agregar una transaccion</h2>
      <form onSubmit={handleSubmit} className='form_container'>
        <input className='input_form'
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input  className='input_form'
          type="number"
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
        <button type="submit" className='btn_add_transaction'>Agregar</button>
      </form>
    </div>
  );
};

export default GastoForm;
