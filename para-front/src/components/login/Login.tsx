import React from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <form>

      <div className="container-login"> {/* Div extra, podría ser el form */}

        <div className="login-center"> {/* Div extra, se puede posicionar desde el form */}

          <div className="div-login"> {/* Div extra, los divs no deberían contener una sola etiqueta */}
            <p> Log In </p>
          </div>

          <div className="email-login">
            <label htmlFor='email'>Please introduce your email:</label> {/* htmlFor y id para relacionar label con input */}
            <input id='email' type="email" name="email-login" placeholder='janedoe@email.com' required/>
          </div>

          <div className="password-login">
            <label>Please introduce your password:</label>
            <input type="password" name="password-login" />
          </div>

          <div className="check-login">
            <input type="checkbox" name="stay-login" />
            <label>Stay logged in</label>
          </div>

          <div className="submit-login"> {/* Div extra, los divs no deberían contener una sola etiqueta */}
            <input type="submit" value="Login" />
          </div>

          <div className="login-divider"> {/* Div extra, los divs no deberían contener una sola etiqueta */}
            <div className="divider"></div>
          </div>

          <div className="register-option"> {/* Div extra, los divs no deberían contener una sola etiqueta */}
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