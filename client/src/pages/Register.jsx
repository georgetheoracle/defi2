import React, {useState} from 'react'
import './Register.css'
import gIcon from '../assets/icons8-google.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'

function Register() {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) =>{
        setFormData({...formData, [event.target.id]: event.target.value})
    }
    

    const handleSubmit = async(event)=>{
        event.preventDefault();

        try {
            const response  = await axios.post('/api/user/signup', formData);
            const data = await response.data;
            if(data.success){
                toast.success(data.message)
                toast('redirecting to login')
                navigate('/login');
            }else{
                toast.error(data.message)
            }
        } catch (error) {
        toast.error('something went wrong')
        console.log(error)
        }
    }

  return (
    <div>
        <div className='login-box'>
         <h1>Sign Up for Free!</h1>
         <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Username' id='username' onChange={handleChange}/>
            <input type='email' placeholder='Email' id='email' onChange={handleChange}/>
            <input type='password' placeholder='Password' id='password' onChange={handleChange}/>
            <button>Register</button>
         </form>
         <hr/>
         <span>or</span>
         
         <button className='google'><img src={gIcon} alt='n'/>Sign in with Google</button>
        <p>Already Have an account?<a href='/login'>Sign In</a></p>
    </div>
    </div>
  )
}

export default Register