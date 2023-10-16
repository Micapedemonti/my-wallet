import React from 'react'
import { useState } from 'react'
// import { useForm } from "react-hook-form";
import usuario from '../../src/img/usuario.png'
import email from '../../src/img/email.png'
import password from '../../src/img/password.png'
import passwordConfirm from '../../src/img/password-conf.png'

import '../styles/UserRegister.css'
  
    const UserRegister = () => {
    //   const { register, handleSubmit, formState: { errors } } = useForm();
    //  console.log(errors)
    
    //   const onSubmit = 
    //     handleSubmit ((data) =>{
    //    console.log(data)
    //     })
    
    const [user, setUser] = useState({
      nombre: "",
      email:"",
      password:"",

    });
    
    //funcion para actualizar el estado
    const handleChange = ({target:{name,value}}) => {
        setUser({...user,[name]: value})
    }

    //funcion para ver los datos
    const handleSubmit = (e)=>{
   e.preventDefault()
   console.log(user)
    }

      return (
        <form className="form"  onSubmit={handleSubmit}>
          <div className="container">
          <div className="input_nombre">        
          <img src={usuario} width="25px"/>
              <input
                type="text"
                placeholder='Nombre'
                name="Nombre"
                className="input_nombre"
                onChange={handleChange}
              />
               </div>

    
            <div className="input_email">
            <img src={email} width="25px"/>
              <input
                type="text"
                name="Email"
                placeholder='Email'
                className="input_email"   
                onChange={handleChange}        
              />
            </div>
                 
            <div className="input_contraseña">
            <img src={password} width="25px"/>
              <input
                type="password"
                name="Contraseña"
                placeholder='Contraseña'
                onChange={handleChange}
              />
            </div>            

            <div className="input_confirmar_contraseña">
            <img src={passwordConfirm} width="25px"/>
              <input
                type="password"
                placeholder='Confirmar contraseña'
              />
               </div>s
           
    
            <button className="btn_login" type="submit">Continuar</button>
    
          </div>
        </form>
      );
    }
    
    export default UserRegister;
