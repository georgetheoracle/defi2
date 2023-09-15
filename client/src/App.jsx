import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Components from './Components.jsx';
import {Toaster} from 'react-hot-toast'
import Dashboard from './pages/Dashboard.jsx';

function App() {
  return (
 <div>
    <BrowserRouter>
    <Toaster
  position="top-center"
  reverseOrder={false}
    />

    <Routes>
    <Route path='/' element={<Components/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Register/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>  
    </BrowserRouter>
 </div>
  );
}

export default App;
