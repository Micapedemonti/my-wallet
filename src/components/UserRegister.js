import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import email from '../../src/img/email.png';
import password from '../../src/img/password.png';
import { useAuth } from '../context/authContext';
import '../styles/UserRegister.css';

const UserRegister = () => {
  const [user, setUser] = useState({
    nombre: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { signup } = useAuth();

  // Función para actualizar el estado
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    setError('');
  };

  // Función para enviar los datos
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
     <h1>USUARIO REGISTRADO CORRECTAMENTE</h1>
      navigate("/");
    } catch (error) {
      if (error.code ==="auth/email-already-in-use"){
        // setError(error.message);
        setError("Este correo ya se encuentra en uso, ingresa uno nuevo.");
      }
    }
  };

  return (
    <>
      <div className="title_register">
        <h1>Registrarse</h1>
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
              <p>{error}</p>
              <Link to="/login">  <h1>Iniciar sesión</h1></Link>

            </div>
          )}
          <button className="btn_register" type="submit" disabled={!!error}>
            Continuar
          </button>
        </div>
      </form>
    </>
  );
};

export default UserRegister;


