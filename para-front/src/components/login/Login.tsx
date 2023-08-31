import React from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <form action="#" className="login-form">
      <h1>Log In</h1>

      <div className="email-login">
        <label className='post-text' htmlFor="email-login">Email</label>
        <input type="email" id="email-login" name="email" placeholder='janedoe@email.com' required />
      </div>

      <div className="pass-login">
        <label className='post-text' htmlFor="pass-login">Password</label>
        <input type="password" id="pass-login" name="pass" required />
      </div>

      <div className="stay-login">
        <input type="checkbox" id="stay-login" name="stay-login" />
        <label htmlFor="stay-login">Stay logged in</label>
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