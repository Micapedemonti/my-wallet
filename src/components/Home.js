import React from 'react'
import '../styles/Home.css'
import { useState,useEffect } from 'react'
import { useAuth } from '../context/authContext'
import Logout from '../img/Logout.png'
import usuario from '../img/usuario.png'
import gastosimg from '../img/gastos.png'
import balanceimg from '../img/balance.png'
import ingresosimg from '../img/ingresos.png'
import GastoForm from './Transactions'
import ListaGastos from './ListTransactions'


const Home = () => {
  const { user, logout, loading } = useAuth();
  const [gastos, setGastos] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const agregarGasto = (nuevoGasto) => {
    setGastos([...gastos, nuevoGasto]);
    const saldoNuevo = nuevoGasto.monto > 0 ? saldo + nuevoGasto.monto : saldo - Math.abs(nuevoGasto.monto);
    setSaldo(saldoNuevo);

    // Guardar los gastos y el saldo en el almacenamiento local
    localStorage.setItem('gastos', JSON.stringify([...gastos, nuevoGasto]));
    localStorage.setItem('saldoTotal', saldoNuevo);
  };

  const eliminarGasto = (index) => {
    const transaccionEliminada = gastos[index];
    const nuevaListaDeGastos = [...gastos];
    nuevaListaDeGastos.splice(index, 1);

    // Actualizar el estado de gastos
    setGastos(nuevaListaDeGastos);

    // Restaurar el saldo
    if (transaccionEliminada.monto > 0) {
      setSaldo(saldo - transaccionEliminada.monto);
    } else {
      setSaldo(saldo + Math.abs(transaccionEliminada.monto));
    }

    // Actualizar el almacenamiento local
    localStorage.setItem('gastos', JSON.stringify(nuevaListaDeGastos));
    localStorage.setItem('saldoTotal', saldo);
  };



  // Función para filtrar gastos
const getGastos = () => {
  return gastos.filter((gasto) => gasto.monto < 0);
};

// Función para calcular ingresos
const getIngresos = () => {
  return gastos.filter((gasto) => gasto.monto > 0);
};
const gastosList = getGastos();
const ingresosList = getIngresos();


const handleLogout = async () =>{
  await logout()

};

  useEffect(() => {
    const gastosGuardados = JSON.parse(localStorage.getItem('gastos'));
    if (gastosGuardados) {
      setGastos(gastosGuardados);
    }

    const saldoTotalGuardado = localStorage.getItem('saldoTotal');
    if (saldoTotalGuardado) {
      const saldo = parseFloat(saldoTotalGuardado);
      setSaldo(saldo);
    }
  }, []);

  if (loading) return <h1 style={{ color: "white" }}>Loading</h1>

  return (
    <div className='container_home'>
      <div className='container_home_header'>
        <div class="user">
          <button class="Btn_user">
            <img src={usuario} alt='user' width="20px" className='img_btn' />
            <div class="text">{user.email}</div>
          </button>
        </div>
        <div class="sign">
          <button class="Btn" onClick={handleLogout}>
            <img src={Logout} alt='logout' width="20px" className='img_btn' />
            <div class="text">Logout</div>
          </button>
        </div>
      </div>

      <div className='body_container'>
        <div className='seccion_1'>
          <div className='seccion_1_b'>
            <div className='balance'>
              <img src={balanceimg} alt='balance' width="70px" />
              <div className='balance_saldo'>
              <h1> SALDO:</h1>
                <p>${saldo}</p> 
              </div>
            </div>
            <div className='ingresos'>
              <img src={ingresosimg} alt='ingresos' width="70px" />
              <div className='ingresos_saldo'>
              <h1>INGRESOS</h1>
              <p>+{ingresosList.reduce((total, ingreso) => total + ingreso.monto, 0)}</p>
              </div>
            </div>
            <div className='gastos'>
              <img src={gastosimg} alt='gastos' width="70px" />
              <div className='gastos_saldo'>
              <h1>GASTOS</h1>
              <p>-{gastosList.reduce((total, gastos) => total - gastos.monto, 0)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='seccion_2'>
          <GastoForm onGastoAgregado={agregarGasto} />
          <ListaGastos gastos={gastos} eliminarGasto={eliminarGasto} />
        </div>
      </div>
    </div>
  );
};

export default Home