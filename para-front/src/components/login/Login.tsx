import React, { FormEvent, useState } from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [emailLogged, setEmailLogged] = useState (false)
  const [passwordLogged, setPasswordLogged] = useState (false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValid = email === '' || emailRegex.test(email);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if( email == null || email.length == 0 || !emailRegex.test(email) ) {
      return("email inválido")}

    if(password == null || password.length == 0 || /^\s+$/.test(password)) {
      return ("password inválida")
    }
  }
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
             onBlur={() => setEmailLogged (true)}
             value={email}
             onChange={(e) => setEmail (e.target.value)}
             />
            </div>
            {emailLogged && !emailValid &&(
            <span className='email-validation'>
              Your email address must be in format: email@example.com
            </span>
           )}

           <div className="pass-login">
             <label className='post-text' htmlFor="pass-login">Password</label>
             <input 
             type="password" 
             id="pass-login" 
             name="password" 
             required
             onBlur={() => setPasswordLogged (true)}
             value={password}
             onChange={(e) => setPassword (e.target.value)}
             />
           </div>
           {passwordLogged && password.length <= 8 &&(
        <span className='password-validation'>
          Your password must have at least 8 characters
        </span>
      )}

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