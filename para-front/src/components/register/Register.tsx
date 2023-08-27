import React from 'react';
import './register.css';
import { NavLink } from 'react-router-dom';

const Register: React.FC = () => {
    return (
        <form>
        <div className="container-register">

            <div className="register-center">

              <div className="div-register">
                 <p> Register </p>
               </div>

               <div className="email-register">
                 <label>Please introduce an email:</label>
                 <input type="email" name="email-register"/>
                </div>

               <div className="password-register">
                 <label>Please introduce a password:</label>
                 <input type="password" name="password-register"/>
                </div>

               <div className="confirmPassword-register">
                 <label htmlFor="password">Please confirm the password:</label>
                 <input type="password" name="confirmPassword-register"/>
               </div>

               <div className="confirm-register">
                  <input type="submit" value="Confirm"/>
               </div>

               <div className="register-divider">
                 <div className="divider"></div>
               </div>

                <div className="logIn-option">
                   <p>You already have an account? 
                      <NavLink to="/login">Login</NavLink>
                  </p>
               </div>

            </div>

        </div>
   </form>
    );
};
export default Register;