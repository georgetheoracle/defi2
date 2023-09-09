import React from 'react'
import './Login.css'
import gIcon from '../assets/icons8-google.svg'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='contain'>
    <div className='login-box'>
         <h1>Sign In</h1>
         <form>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button>login</button>
         </form>
         <hr/>
         <span>or</span>
         
         <button><img src={gIcon} alt='n'/>Sign in with Google</button>
        <p>Don't have an account?<a href='/signup'>Sign up</a></p>
    </div>
    </div>
    
  )
}

export default Login