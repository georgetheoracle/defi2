import React from 'react'
import './index.css'
import Navbar from './home/Navbar.jsx';
import Hero from './home/Hero.jsx';
import Feature from './home/Feature.jsx';
import Signup from './home/Signup.jsx';
import Footer from './home/Footer.jsx';
import { Link } from 'react-router-dom';

function Components() {
  return (
    <div>
    
    <Navbar/>
    <Hero/>
    <Feature/>
    <Signup/>
    <Footer/>
    
    </div>
  )
}

export default Components