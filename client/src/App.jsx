import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Components from './Components.jsx';

function App() {
  return (
 <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Components/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Register/>}/>
    </Routes>  
    </BrowserRouter>
 </div>
  );
}

export default App;
