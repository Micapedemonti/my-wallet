import React from 'react'
import '../styles/Home.css'
import { useState,useEffect } from 'react'
// import { useContext } from 'react'
import { useAuth } from '../context/authContext'
import Logout from '../img/Logout.png'
import GastoForm from './Transactions'
import ListaGastos from './ListTransactions'

export const Home = () => {


const {user,logout,loading} =useAuth()

const [gastos, setGastos] = useState([]);
const [saldo, setSaldo] = useState(0); // Declarar el estado de saldo y establecerlo en 0 inicialmente


const agregarGasto = (nuevoGasto) => {
  setGastos([...gastos, nuevoGasto]);
   // Guardar los gastos en LocalStorage
   localStorage.setItem('gastos', JSON.stringify([...gastos, nuevoGasto ]));
};


// Calcular el saldo total
const saldoTotal = gastos.reduce((total, gasto) => total + gasto.monto, 0);
localStorage.setItem('saldoTotal', saldoTotal);

useEffect(() => {
  const gastosGuardados = JSON.parse(localStorage.getItem('gastos'));
  if (gastosGuardados) {
    setGastos(gastosGuardados);
  }

  const saldoTotalGuardado = localStorage.getItem('saldoTotal');
  if (saldoTotalGuardado) {
    // Parsea el saldo total de nuevo como número si es necesario
    const saldo = parseFloat(saldoTotalGuardado);
    setSaldo(saldo);
  }
}, []); 


// const handleLogout = async () =>{
//    await logout()

// };
if (loading) return <h1 style={{color:"white"}}>Loading</h1>
  return (
    <>
    <div className='container_home_header'>
    <h1 className='title_welcome'>{user.email} </h1>

    {/* <button class="Btn" onClick={handleLogout}> */}
 <div class="sign">
   <button class="Btn">
     <img src= {Logout} alt='logout' width="20px" className='img_btn' />
 <div class="text">Logout</div>
   </button>
    </div>
    </div>

    <div className='body_container'>
    return(
  <div style={{color: "white"}}>
  <h1>Control de Gastos</h1>
  <h3>Balance Total: {saldoTotal}</h3>
      <GastoForm onGastoAgregado={agregarGasto} />
      <ListaGastos gastos={gastos} />
      

  </div>
);

    
    </div>
  </> 
  )
}
