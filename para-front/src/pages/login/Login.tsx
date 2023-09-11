import { FormEvent, useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  //campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //notificaciones
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const { login } = useContext(AuthContext);
  const handleChange = (e: FormEvent) => {
    e.preventDefault()
    setEmail('')
    setPassword('')
  };

  const handleLogin = async (e:FormEvent) => {
    e.preventDefault();
    try {
      await login({email, password});
      navigate("/")
    } catch (err:any) {
      setErr(err.response.data);
    }
  };

  console.log(err);

  return (
    <form action="#" className="login-form" onSubmit={handleChange}>
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
           

           <button className="login-button button-text" type="submit" onClick={handleLogin}>Login</button>
           {err && <p>{err}</p>}

          <div className="register-option">
             <p>You want to create an account? </p>
             <NavLink to="/register" className="register-option-link">Register</NavLink>
          </div>
       </form>
    );
};

export default Login;