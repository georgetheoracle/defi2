import React, {useState} from 'react'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = ()=> setClick(!click)

  return (
    <>
    <div className='vheader'>
        <div className='container'>
            <h1>De<span className='primary'>FI</span></h1>
            <ul className={click? 'nav-menu active': 'nav-menu'}>
                <Link to='/'><li>
                Home
                </li></Link>
                <Link to='/'><li>
                Feature
                </li></Link>
                <Link to='/'><li>
                Earn
                </li></Link>
                <Link to='/'><li>
                Contact
                </li></Link>
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
    </>
  )
}

export default Navbar