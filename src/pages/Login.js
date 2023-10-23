import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import email from '../../src/img/email.png';
import password from '../../src/img/password.png';
import { useAuth } from '../context/authContext';
import AnimatedIcon from '../components/AnimatedIcon'

import '../styles/UserRegister.css';

const Login = () => {
  const [user, setUser] = useState({
    nombre: '',
    email: '',
    password: '',
  });


  const [error,setError] = useState ('')

  const navigate = useNavigate()
  const { login } = useAuth();

  // Función para actualizar el estado
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  // Función para enviar los datos
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar la dirección de correo electrónico antes de registrarse
    if (!isValidEmail(user.email)) {
      setError('Dirección de correo electrónico no válida');
            return;
    }

   login(user.email, user.password);
    console.log('Correo electrónico:', user.email);
    navigate('/')
  };

  // Función para validar la dirección de correo electrónico
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  return (
    <>
    <div className='container_icon'>
    <AnimatedIcon/>
    </div>
    <form className="form" onSubmit={handleSubmit}>
      <div className="container">
        <div className="input_email">
          <img src={email} width="25px" alt="Email icon" />
          <input
            type="text"
            name="email" // Coincide con la clave en el estado
            placeholder="Email"
            className="input_email"
            onChange={handleChange}
          />
           {/* Mostrar el mensaje de error */}
           <span style={{color:'white'}}>{error}</span>
        </div>

        <div className="input_contraseña">
          <img src={password} width="25px" alt="Password icon" />
          <input
            type="password"
            name="password" // Coincide con la clave en el estado
            placeholder="Contraseña"
            onChange={handleChange}
          />
        </div>

        <button className="btn_login" type="submit">
          Login
        </button>
      </div>
    </form>
    </>
  );
};

export default Login;
