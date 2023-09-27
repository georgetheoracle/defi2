import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Components from './Components.jsx';
import {Toaster} from 'react-hot-toast'
import Dashboard from './pages/Dashboard.jsx';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import PublicRoute from './components/PublicRoute.jsx';

function App() {
    const {loading} = useSelector(state => state.alerts);
  return (

    <BrowserRouter>
    {loading && (<div className='spinner-parent'>
        <div class="spinner-border" role="status">
    </div>
    </div>)}
    <Toaster
    position="top-center"
    reverseOrder={false}
    />

    <Routes>
    <Route path='/' element={<Components/>}/>
    <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
    <Route path='/signup' element={<PublicRoute><Register/></PublicRoute>}/>
    <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    </Routes>  
    </BrowserRouter>

  );
}

export default App;
