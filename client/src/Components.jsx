import React from 'react'
import './index.css'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Feature from './components/Feature.jsx';
import Signup from './components/Signup.jsx';
import Footer from './components/Footer.jsx';
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