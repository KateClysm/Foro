import React from 'react'
import './register.css'

const Register: React.FC = () => {
    return (
        <form>
        <div class="container-register">

            <div class="register-center">

              <div class="div-register">
                 <p> Register </p>
               </div>

               <div class="email-register">
                 <label>Please introduce an email:</label>
                 <input type="email" name="email-register"/>
                </div>

               <div class="password-register">
                 <label>Please introduce a password:</label>
                 <input type="password" name="password-register"/>
                </div>

               <div class="confirmPassword-register">
                 <label for="password">Please confirm the password:</label>
                 <input type="password" name="confirmPassword-register"/>
               </div>

               <div class="confirm-register">
                  <input type="submit" value="Confirm"/>
               </div>

               <div class="register-divider">
                 <div class="divider"></div>
               </div>

                <div class="logIn-option">
                   <p>You already have an account? 
                       <a class="LogIn" href= "./login.html">
                          LogIn
                       </a>
                  </p>
               </div>

            </div>

        </div>
   </form>
    )
};
export default Register