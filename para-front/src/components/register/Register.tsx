import React from 'react';
import './register.css';
import { NavLink } from 'react-router-dom';

const Register: React.FC = () => {
  return (
    <form action="#" className="register-form">
      <h1>Register</h1>

      <fieldset className="email-register">
        <label htmlFor="email-register">Introduce an email:</label>
        <input type="email" id="email-register" name="email-register" required/>
      </fieldset>

      <fieldset className="password-register">
        <label htmlFor="password-register">Introduce a password:</label>
        <input type="password" id="password-register" name="password-register" required/>
      </fieldset>

      <button className="register-button" type="submit"> Confirm </button>

     <div className="logIn-option">
       <p>You already have an account?</p>
        <NavLink to="/login">Login</NavLink>
      </div>
   </form>
  );
};
export default Register;
