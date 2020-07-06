import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            name='name'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            className='input'
            type='text'
            name='email'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            className='input'
            type='password'
            name='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button' type='submit'>Registrarme</button>
        </form>
        <Link to='Login'>
          Iniciar sesión
        </Link>
      </section>
    </section>
  );
};

const mapDistpachToProps = {
  registerRequest,
};

export default connect(null, mapDistpachToProps)(Register);
