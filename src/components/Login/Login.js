import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  // Declaring States 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Event Handlers
  const getEmail = e => {
    const email = e.target.value;
    setEmail(email);
  }

  const getPassword = e => {
    const password = e.target.value;
    setPassword(password);
  }

  const handleLogin = e => {
    e.preventDefault();
  }


    return (
        <div className="signup-form-wrapper">
      <h4 className='form-title'>Login</h4>
      <form onSubmit={handleLogin} className='signup-form'>
        <label htmlFor="email">Email</label>
        <br />
        <input onBlur={getEmail} type="email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input onBlur={getPassword} type="password" name="password" />
        <br />
        <input className='submit-btn' type="submit" value="Login" />
      </form>
      <p style={{textAlign: 'center'}}>New to Ema-John? <Link className='login-link' to={'/signup'}>Create an account</Link></p>
      <span className='divider'>or</span>    
      <button className="google-signup-btn">
      <i className="ri-google-fill"></i>
      Continue with Google
      </button>
    </div>
    );
};

export default Login;