import React from 'react'
import {Navigate} from 'react-router-dom'

function ProtectedRoute(props) {
    const token = localStorage.getItem('token')
    if(token){
        return props.children
    }else{
        return <Navigate to='/login'/>
    }
}

export default ProtectedRoute