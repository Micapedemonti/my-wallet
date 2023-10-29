import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import email from '../../src/img/email.png';
import password from '../../src/img/password.png';
import { useAuth } from '../context/authContext';
import '../styles/Login.css';

const Login = () => {
  const [user, setUser] = useState({
    nombre: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login ,resetPassword} = useAuth();

  // Función para actualizar el estado
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    setError('');
  };

  // Función para enviar los datos
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(user.email, user.password);
      console.log('Inicio de sesión exitoso');
      navigate('/');
    } catch (error) {
      if (error.code ==="auth/invalid-login-credentials"){
      // setError(error.message);
      setError("contraseña o usuario incorrecto, intenta nuevamente o registrate.");
    }
  }
  };

  //funcion restablecer contraseña 


  const handleResetPassword = async () => {
    if (!user.email) {
      setError("Por favor ingresa tu correo electrónico.");
      return;
    }
  
    try {
      await resetPassword(user.email); // Pasa el correo electrónico como argumento
      setError("Te hemos enviado un correo electrónico con un enlace para restablecer la contraseña.");
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <>
      <div className='title_login'>
        <h1>Iniciar sesión</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container">
          <div className="input_email">
            <img src={email} width="25px" alt="Email icon" />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input_email"
              onChange={handleChange}
            />
          </div>

          <div className="input_contraseña">
            <img src={password} width="25px" alt="Password icon" />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
            />
          </div>

          {error && (  // Condición para mostrar el mensaje de error
            <div className="error-message">
             <p> {error}</p>
             <Link to="/registro">  <h1>Registrarme</h1></Link>
             
            </div>
          )}

          <button className="btn_register" type="submit" disabled={!!error}>
            Continuar
          </button>
         <div className='password-reset'>
         <a href='#!' onClick={handleResetPassword}>olvidaste tu contraseña?</a>

         </div>
        </div>
      </form>
    </>
  );
};

export default Login;
