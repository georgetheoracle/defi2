import React, {useState} from 'react'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import Hero from './Hero.jsx'
import Feature from './Feature.jsx'
import Signup from './Signup.jsx'
import Footer from './Footer.jsx'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = ()=> setClick(!click)

  return (
    <>
    <div className='header'>
        <div className='container'>
            <h1>De<span className='primary'>FI</span></h1>
            <ul className={click? 'nav-menu active': 'nav-menu'}>
                <li>
                    <a href='/'> Home</a>
                </li>
                <li>
                    <a href='/'> Feature</a>
                </li>
                <li>
                    <a href='/'> Earn</a>
                </li>
                <li>
                    <a href='/'> Contact</a>
                </li>
            </ul>
            <div className='btn-group'>
            <Link to='/login'>
                <div className='btn'>
                    LOGIN
                </div>
                </Link>
            </div>
            <div className='hamburger' onClick={handleClick}>
            {click? (<FaTimes size={20}/>) : (<FaBars size={20}/>)}
                
            </div>
        </div>
    </div>
    <Hero/>
    <Feature/>
    <Signup/>
    <Footer/>
    </>
  )
}

export default Navbar