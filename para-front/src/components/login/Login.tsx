import React, { FormEvent, useState } from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if( email == null || email.length == 0 || /^\s+$/.test(email) ) {
      return("email inválido")}

    if(password == null || password.length == 0 || /^\s+$/.test(password)) {
      return ("password inválida")
    }

  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = e.target;
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    }

  


    return (
       <form action="#" className="login-form" onSubmit={handleSubmit}>
           <h1> Log In </h1>

           <fieldset className="email-login">
             <label htmlFor="email-login"> Email</label>
             <input 
             type="email" 
             id="email-login" 
             name="email" 
             required
             value={email}
             onChange={handleChange}
             />
            </fieldset>

           <fieldset className="pass-login">
             <label htmlFor="pass-login"> Password</label>
             <input 
             type="password" 
             id="pass-login" 
             name="password" 
             required
             value={password}
             onChange={handleChange}
             />
           </fieldset>

           <fieldset className="stay-login"> 
             <input type="checkbox" id="stay-login" name="stay-login"/>
             <label htmlFor="stay-login"> Stay logged in </label>              
           </fieldset>

           <button className="login-button" type="submit">Submit</button>

          <div className="register-option">
             <p>You want to create an account? </p>
             <NavLink to="/register">Register</NavLink>
          </div>
       </form>
    )
}
export default Login;