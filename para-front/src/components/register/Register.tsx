import React, { FormEvent, useState } from 'react';import './register.css';
import { NavLink } from 'react-router-dom';

const Register: React.FC = () => {

  const [email, setEmailRegister] = useState('')
  const [password, setPasswordRegister] = useState('')
  /*const [confirmPassword, setConfirmPassword] = useState('')*/
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if( email == null || email.length == 0 || emailRegex.test(email) ) {
      return("email invalid")}

    if(password == null || password.length == 0 || /^\s+$/.test(password)) {
      return ("password invalid")
    }
    /*if (confirmPassword == null || confirmPassword.length == 0 || /^\s+$/.test(password) || confirmPassword != password)
    return ("las contraseñas no coinciden")*/
  }
  return (
    <form action="#" className="register-form" onSubmit={handleSubmit}>
      <h1>Register</h1>

      <fieldset className="email-register">
        <label htmlFor="email-register">
          Introduce an email:
        <span className='email-required'>*</span>
        </label>
        <input 
        type="email" 
        id="email-register" 
        name="email-register" 
        required
        value= {email}
        onChange={(e) => setEmailRegister (e.target.value)}/>
      </fieldset>

      <fieldset className="password-register">
        <label htmlFor="password-register">Introduce a password:</label>
        <input
         type="password"
         id="password-register"
         name="password-register"
         required
         value={password}
         onChange={(e) => setPasswordRegister (e.target.value)}
         />
      </fieldset>

      {/*  <fieldset className="confirm-password">
        <label htmlFor="confirm-password">Confirm password:</label>
        <input 
        type="password" 
        id="confirm-password" 
        name="confirm-password" 
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword (e.target.value)}
        />
      </fieldset>*/}

      <button className="register-button" type="submit"> Confirm </button>

     <div className="logIn-option">
       <p>You already have an account?</p>
        <NavLink to="/login">Login</NavLink>
      </div>
   </form>
  );
};
export default Register;
