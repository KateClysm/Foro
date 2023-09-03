import React, { FormEvent, useState } from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if( email == null || email.length == 0 || emailRegex.test(email) ) {
      return("email inválido")}

    if(password == null || password.length == 0 || /^\s+$/.test(password)) {
      return ("password inválida")
    }
  }/*
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = e.target;
       if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    }*/

    return (
       <form action="#" className="login-form" onSubmit={handleSubmit}>
           <h1>Log In</h1>

           <div className="email-login">
             <label className='post-text' htmlFor="email-login">Email</label>
             <input 
             type="email" 
             id="email-login" 
             name="email"
             placeholder='janedoe@email.com'
             required
             value={email}
             onChange={(e) => setEmail (e.target.value)}
             />
            </div>

           <div className="pass-login">
             <label className='post-text' htmlFor="pass-login">Password</label>
             <input 
             type="password" 
             id="pass-login" 
             name="password" 
             required
             value={password}
             onChange={(e) => setPassword (e.target.value)}
             />
           </div>

           <div className="stay-login"> 
             <input type="checkbox" id="stay-login" name="stay-login" />
             <label htmlFor="stay-login"> Stay logged in </label>              
           </div>

           <button className="login-button button-text" type="submit">Submit</button>

          <div className="register-option">
             <p>You want to create an account? </p>
             <NavLink to="/register" className="register-option-link">Register</NavLink>
          </div>
       </form>
    )
}
export default Login;