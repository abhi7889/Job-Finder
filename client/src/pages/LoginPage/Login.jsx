import React from 'react'
import './login.css'
import images from '../../assets/images';
import {useNavigate} from "react-router-dom"

export default function Login() {
  let navigate = useNavigate();
  return (
    <div className='main--screen'>
      <div className='right--side'>
        <h2 className='right--text'>Already have an account?</h2>
        <p className='right--text--below'>Your personal job finder is here</p>
        <form className='fields'>
          <input className='email' placeholder='Email' />
          <input className='password' placeholder='Password' />
          <button className='login--button'>Sign in</button>
          <div className="login-login">
          <p className="login-caption">
          Don’t have an account?{" "}
            <span onClick={() => {
              navigate('/register');
            }} className="register-url">
              Sign Up
            </span>
          </p>
        </div>
        </form>
      </div>
      <div className='side--image'>
        <img className='login--image' src={images.loginImage} alt='side--logo' 
         />
        <h2 className='image-text'>Your Personal Job Finder</h2>

      </div>
    </div>
  )
}
