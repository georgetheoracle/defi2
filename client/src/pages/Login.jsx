import React from 'react'
import './Login.css'
import gIcon from '../assets/icons8-google.svg'

function Login() {
  return (
    <div className='login-box'>
         <h1>Sign In</h1>
         <button><img src={gIcon} alt='n'/>Sign in with Google</button>
         <hr/>
         <span>or</span>
         <form>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button>login</button>
         </form>
        <p>Don't have an account?<a href='n'>Sign up</a></p>
    </div>
  )
}

export default Login