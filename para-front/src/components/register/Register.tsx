import React, { FormEvent, useState } from 'react';
import './register.css';
import { NavLink } from 'react-router-dom';

const Register: React.FC = () => {

  const [email, setEmailRegister] = useState('')
  const [password, setPasswordRegister] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailRegistered, setEmailRegistered] = useState (false)
  const [passwordRegistered, setPasswordRegistered] = useState (false)
  const [confirmPasswordRegistered, setConfirmPasswordRegistered] = useState (false)
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValid = email === '' || emailRegex.test(email);
  const passwordMatch = password === '' || password.length <= 4 || /^\s+$/.test(password) || confirmPassword === password
 
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setEmailRegistered(false)
    setPasswordRegistered(false)
    setConfirmPasswordRegistered (false)

    if( email == null || email.length == 0 || !emailRegex.test(email) ) {
      return("email invalid")}

    if(password == null || password.length == 0 || /^\s+$/.test(password)) {
      return ("password invalid")
    }
    if (confirmPassword == null || confirmPassword.length == 0 || /^\s+$/.test(password) || confirmPassword != password)
    return ("password do not match")
  }
  return (
    <form action="#" className="register-form" onSubmit={handleSubmit}>
      <h1>Register</h1>

      <div className="email-register">
        <label htmlFor="email-register">
          Introduce an email
        <span className='email-required'>*</span>
        </label>
        <input 
        type="email" 
        id="email-register" 
        name="email-register" 
        required
        onBlur={() => setEmailRegistered (true)}
        value= {email}
        onChange={(e) => setEmailRegister (e.target.value)}/>
      </div>
      {emailRegistered && !emailValid &&(
        <span className='email-validation'>
           Your email address must be in format: email@example.com
        </span>
      )}

      <div className="password-register">
        <label htmlFor="password-register">Introduce a password</label>
        <input
         type="password"
         id="password-register"
         name="password-register"
         required
         onBlur={() =>setPasswordRegistered (true)}
         value={password}
         onChange={(e) => setPasswordRegister (e.target.value)}
         />
      </div>
      {passwordRegistered && password.length <= 8 &&(
        <span className='password-validation'>
          Your password must have at least 8 characters
        </span>
      )}

      <div className="confirm-password">
        <label htmlFor="confirm-password">Confirm password</label>
        <input 
        type="password" 
        id="confirm-password" 
        name="confirm-password" 
        required
        onBlur={() => setConfirmPasswordRegistered (true)}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword (e.target.value)}
        />
      </div>
      {confirmPasswordRegistered && !passwordMatch && (
        <span> Password do not match </span>
      )}

      <button className="register-button-btn" type="submit">Confirm</button>

     <div className="logIn-option">
       <p>You already have an account?</p>
        <NavLink to="/login" className="logIn-option-link">Login</NavLink>
      </div>
   </form>
  );
};
export default Register;
