// import React, { FormEvent, useContext, useState } from 'react';
// import './login.scss';
// import { NavLink } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from "../../context/authContext";


// const Login: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   const { login } = useContext(AuthContext);

//   const hangleLogin = async (e) =>{
//     e.preventDefault()
//     try{
//         await login(inputs);
//     } catch (err){
//         setErr.response.data;
//     }
//   };

//   const [err, setErr] = useState(null);
  
//   const handleChange = (e: FormEvent) => {
//     e.preventDefault()
//     setEmail('')
//     setPassword('')
//   }

//   const handleClick = async (e: FormEvent) => { 
//     e.preventDefault(); 
//     try {
//       await axios.post("http://localhost:8800/apiForum/auth/login", {email, password});
//       setErr(null);
//     } catch (err: any) { 
//       setErr(err.response?.data);
//     }
//   };

//   console.log(err); 

//   return (
//     <form action="#" className="login-form" onSubmit={handleChange}>
//       <h1>Register</h1>

//       <div className="email-login">
//         <label htmlFor="email-login">
//           Introduce an email
//         <span className='email-required'>*</span>
//         </label>
//         <input 
//         type="email" 
//         id="email-login" 
//         name="email" 
//         required
//         value= {email}
//         onChange={(e) => setEmail (e.target.value)}/>
//       </div>

//       <div className="password-login">
//         <label htmlFor="password-login">Introduce a password</label>
//         <span className='password-required'>*</span>
//         <input
//          type="password"
//          id="password-login"
//          name="password"
//          required
//          value={password}
//          onChange={(e) => setPassword (e.target.value)}
//          />
//       </div>

//       <button className="login-button" type="submit" onClick={handleClick} >Login</button>
//       {err && <p>{err}</p>}

//       <div className="register-option">
//        <p>You don't have an account?</p>
//         <NavLink to="/register" className="logIn-option-link">Register</NavLink>
//       </div>
//    </form>
//   );
// };
// export default Login;
