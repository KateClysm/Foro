import React, { FormEvent, useState } from 'react';
import './register.scss';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Register: React.FC = () => {

  //campos del formulario
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  //onblur
  const [usernameTouched, setUsernameTouched] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false);
  const [nameTouched, setNameTouched] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  
  //notificaciones
  const [err, setErr] = useState(null);
  const [notification, setNotification] = useState<string | null>(null);

  //valida estructura del email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValid = email === '' || emailRegex.test(email);
 
  //validaciones individuales para saber qué tipo de error notificar
  const isPasswordLenghtValid = password.length >= 8;
  const passwordMatch = password === confirmPassword;
  const passwordNotBlank = password !== '';
  const isPasswordValid = isPasswordLenghtValid && passwordMatch && passwordNotBlank;
  const isNameValid = name !== '' && name.length >= 3;
  const isUsernameValid = username !== '' && username.length >= 3;

  //maneja los cambios
  const handleChange = (e: FormEvent) => {
    e.preventDefault()
    setUsername('')
    setEmail('')
    setName('')
    setPassword('')
    setConfirmPassword('')
    setUsernameTouched(false)
    setEmailTouched (false)
    setNameTouched(false)
    setPasswordTouched (false)
    setConfirmPasswordTouched(false)
  }

  //maneja el submit
  const handleClick = async (e: FormEvent) => { 
    e.preventDefault(); 
    try {
      await axios.post("http://localhost:8800/apiForum/auth/register", {username, email, name, password});
      setNotification("User created");
      setErr(null);
    } catch (err: any) { 
      setErr(err.response?.data); 
      setNotification(null);
    }
  };

  console.log(err); 

  return (
    <form action="#" className="register-form" onSubmit={handleChange}>
      <h1>Register</h1>

      {/* username */}
      <div className="username-register">
        <label htmlFor="username-register">
          Introduce an username
        <span className='username-required'>*</span>
        </label>
        <input 
        type="username" 
        id="username-register" 
        name="username" 
        required
        onBlur={() => setUsernameTouched(true)} 
        value= {username}
        onChange={(e) => setUsername (e.target.value)}/>
      </div>
      {usernameTouched && !isUsernameValid &&(
        <span className='username-validation'>
           Your username can't be null or have less than 3 characters!
        </span>
      )}

      {/* email */}
      <div className="email-register">
        <label htmlFor="email-register">
          Introduce an email
        <span className='email-required'>*</span>
        </label>
        <input 
        type="email" 
        id="email-register" 
        name="email" 
        required
        onBlur={() => setEmailTouched(true)} 
        value= {email}
        onChange={(e) => setEmail (e.target.value)}/>
      </div>
      {emailTouched && !emailValid &&(
        <span className='email-validation'>
           Your email address must be in format: email@example.com
        </span>
      )}

      {/* name */}
      <div className="name-register">
        <label htmlFor="name-register">
          Introduce a name
        <span className='name-required'>*</span>
        </label>
        <input 
        type="name" 
        id="name-register" 
        name="name" 
        required
        onBlur={() => setNameTouched(true)} 
        value= {name}
        onChange={(e) => setName (e.target.value)}/>
      </div>
      {nameTouched && !isNameValid &&(
        <span className='name-validation'>
           Your name can't be null or have less than 3 characters!
        </span>
      )}


      {/* password */}
      <div className="password-register">
        <label htmlFor="password-register">Introduce a password</label>
        <input
         type="password"
         id="password-register"
         name="password"
         required
         onBlur={() =>setPasswordTouched (true)}
         value={password}
         onChange={(e) => setPassword (e.target.value)}
         />
      </div>
      {passwordTouched && !isPasswordLenghtValid &&(
        <span className='password-validation'>
          Your password must have at least 8 characters
        </span>
      )}
      {passwordTouched && !passwordNotBlank &&(
        <span className='password-validation'>
          Your must type a password
        </span>
      )}




      {/* confirm password */}
      <div className="confirm-password">
        <label htmlFor="confirm-password">Confirm password</label>
        <input 
        type="password" 
        id="confirm-password" 
        name="confirm-password" 
        required
        onBlur={() => setConfirmPasswordTouched (true)}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword (e.target.value)}
        />
      </div>
      {confirmPasswordTouched && !passwordMatch &&(
        <span className='password-validation'>
          Your passwords do not match
        </span>
      )}
      {passwordTouched && isPasswordValid &&(
        <span className='password-validation'>
          Your password has pass all the checks, congrats!
        </span>
      )}


      {/* submit */}
      <button className="register-button-btn" type="submit" onClick={handleClick} >Confirm</button>
      {err && <p>{err}</p>}
      {notification && <p>{notification}</p>}

      {/* login */}
      <div className="logIn-option">
       <p>You already have an account?</p>
        <NavLink to="/login" className="logIn-option-link">Login</NavLink>
      </div>
   </form>
  );
};
export default Register;
