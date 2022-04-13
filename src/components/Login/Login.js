import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="signup-form-wrapper">
      <h4 className='form-title'>Login</h4>
      <form className='signup-form'>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" />
        <br />
        <input className='submit-btn' type="submit" value="Login" />
      </form>
      <p style={{textAlign: 'center'}}>New to Ema-John? <Link className='login-link' to={'/signup'}>Create an account</Link></p>
      <span className='divider'>or</span>    
      <button className="google-signup-btn">
      <i class="ri-google-fill"></i>
      Continue with Google
      </button>
    </div>
    );
};

export default Login;