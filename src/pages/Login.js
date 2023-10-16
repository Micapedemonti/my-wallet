import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'; 
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import usuario from '../../src/img/usuario.png'
import password from '../../src/img/password.png'

import '../styles/Login.css'

  
    const Login = () => {
      const { register, handleSubmit, formState: { errors } } = useForm();
     console.log(errors)

     console.log(getAuth)

     const onSubmit = handleSubmit(async (data) => {
      const { email, password } = data;
      try {
        await createUserWithEmailAndPassword(getAuth,email,password);
        console.log("Inicio de sesión exitoso");
        // Redirigir al usuario a la página de inicio o a donde sea necesario
      } catch (error) {
        console.error("Error al iniciar sesión:", error.message);
        // Manejar errores de inicio de sesión
      }
    });
    
      // const onSubmit = 
      //   handleSubmit ((data) =>{
      //  console.log(data)
      //   })
    
      return (
        <form className="form" onSubmit={onSubmit}>
           <h2>Inicia sesión</h2>
          <div className="container">
            <div className="input_email">
            <img src={usuario} width="25px"/>
              <input
                type="text"
                placeholder='Email'
                // className={styles.input_form}
                {...register('Email', {
                  required:true,
                  pattern: /\S+@\S+\.\S+/ })}
              />
              </div>
              {errors.Email?.type === 'required' && (
                <p className="error_msg">Ingresa un email válido.</p>
              )}
            
    
            <div className="input_contraseña">
            <img src={password} width="25px"/>
              <input
                type="password"
                placeholder='Contraseña'
                {...register('password', { 
                  required: true, maxLength: 10 })}
              />
              </div>
              {errors.password?.type === 'maxLength' && (
                <p className="error_msg">La contraseña no debe tener más de 10 caracteres.</p>
              )}
  
    
            <button className="btn_login" type="submit">Iniciar sesión</button>
    
            <div className="registrer">
              <p className='text_p'>¿No tienes cuenta?</p>
            
              <Link to = "/registro" className='link_register'>Regístrate</Link>

            </div>
          </div>
        </form>
      );
    }
    
    export default Login;
