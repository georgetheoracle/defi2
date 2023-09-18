import React from 'react'
import { Navigate } from 'react-router-dom'

function PublicRoute(props) {
  const token = localStorage.getItem('token')
    if(token){
        return <Navigate to='/dashboard'/>
    }else{
        return props.children
    }
}

export default PublicRoute