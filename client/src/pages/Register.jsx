import React from 'react'
import './Register.css'
import gIcon from '../assets/icons8-google.svg'

function Register() {
  return (
    <div>
        <div className='login-box'>
         <h1>Sign Up for Free!</h1>
         <form>
            <input type='text' placeholder='Username' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button>Register</button>
         </form>
         <hr/>
         <span>or</span>
         
         <button><img src={gIcon} alt='n'/>Sign in with Google</button>
        <p>Already Have an account?<a href='/login'>Sign In</a></p>
    </div>
    </div>
  )
}

export default Register