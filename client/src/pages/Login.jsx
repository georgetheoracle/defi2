import React from 'react'
import { useState } from 'react'
import './Login.css'
import gIcon from '../assets/icons8-google.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../redux/alertSlice'


function Login() {
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (event) =>{
        setFormData({...formData, [event.target.id]: event.target.value})
    }
    

    const handleSubmit = async(event)=>{
        event.preventDefault();

        try {
            dispatch(showLoading())
            const response  = await axios.post('/api/user/login', formData);
            const data = await response.data;
            dispatch(hideLoading())
            if(data.success){
                toast.success(data.message)
                toast('redirecting to Home Page');
                localStorage.setItem('token', data.token)
                navigate('/dashboard');
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            dispatch(hideLoading());
        toast.error('something went wrong')
        console.log(error)
        }
    }

  return (
    <div>
        <div className='login-box'>
         <h1>Sign In</h1>
         <form onSubmit={handleSubmit}>
            <input type='email' placeholder='Email' id='email' onChange={handleChange}/>
            <input type='password' placeholder='Password' id='password' onChange={handleChange}/>
            <button>login</button>
         </form>
         <hr/>
         <span>or</span>
         
         <button className='google'><img src={gIcon} alt='n'/>Sign in with Google</button>
        <p>Dont't Have an account?<a href='/signup'>Sign Up</a></p>
    </div>
    </div>
  )
}

export default Login