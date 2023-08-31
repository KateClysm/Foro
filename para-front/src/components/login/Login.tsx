import React from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';

const Login: React.FC = () => {
    return (
       <form action="#" className="login-form">
           <h1> Log In </h1>

           <fieldset className="email-login">
             <label htmlFor="email-login"> Email</label>
             <input type="email" id="email-login" name="email" required/>
            </fieldset>

           <fieldset className="pass-login">
             <label htmlFor="pass-login"> Password</label>
             <input type="password" id="pass-login" name="pass" required/>
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