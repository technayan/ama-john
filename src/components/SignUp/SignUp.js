import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className="signup-form-wrapper">
      <h4 className='form-title'>Sign Up</h4>
      <form className='signup-form'>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" />
        <br />
        <label htmlFor="confirm-password">Confirm Password</label>
        <br />
        <input type="password" name="comfirm-password" />
        <br />
        <input className='submit-btn' type="submit" value="Sign Up" />
      </form>
      <p style={{textAlign: 'center'}}>Already have an account? <Link className='login-link' to={'/login'}>Login</Link></p>
      <span className='divider'>or</span>    
      <button className="google-signup-btn">
      <i class="ri-google-fill"></i>
      Continue with Google
      </button>
    </div>
  )
}

export default SignUp
