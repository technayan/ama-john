import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
  // Declaring States 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setComfirmPassword] = useState('');
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

  const getConfirmPassword = e => {
    const confirmPassword = e.target.value;
    setComfirmPassword(confirmPassword);
  }

  const handleSignUp = e => {
    e.preventDefault();
  }




  return (
    <div className="signup-form-wrapper">
      <h4 className='form-title'>Sign Up</h4>
      <form onSubmit={handleSignUp} className='signup-form'>
        <label htmlFor="email">Email</label>
        <br />
        <input onBlur={getEmail} type="email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input onBlur={getPassword} type="password" name="password" />
        <br />
        <label htmlFor="confirm-password">Confirm Password</label>
        <br />
        <input onBlur={getConfirmPassword} type="password" name="comfirm-password" />
        <br />
        <input className='submit-btn' type="submit" value="Sign Up" />
      </form>
      <p style={{textAlign: 'center'}}>Already have an account? <Link className='login-link' to={'/login'}>Login</Link></p>
      <span className='divider'>or</span>    
      <button className="google-signup-btn">
      <i className="ri-google-fill"></i>
      Continue with Google
      </button>
    </div>
  )
}

export default SignUp
