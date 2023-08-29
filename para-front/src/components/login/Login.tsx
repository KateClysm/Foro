import React from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';

const Login: React.FC = () => {
    return (
    <form>
    
        <div className="container-login">

            <div className="login-center">

               <div className="div-login">
                 <p> Log In </p>
               </div>

                <div className="email-login">
                  <label>Please introduce your email:</label>
                   <input type="email" name="email-login"/>
                </div>

               <div className="password-login">
                  <label>Please introduce your password:</label>
                  <input type="password" name="password-login"/>
               </div>

               <div className="check-login">
                 <input type="checkbox" name="stay-login"/>
                 <label> Stay logged in</label>
                 
               </div>

               <div className="submit-login">
                 <input type="submit" value="Login"/>
                </div>

              <div className="login-divider">
                  <div className="divider"></div>
               </div>

               <div className="register-option">
                   <p>You want to create an account? 
                        <NavLink to="/register">Register</NavLink>
                    </p>
                </div>
            </div>

        </div>
   </form>
);
};
export default Login;