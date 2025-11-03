import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

export const Logout = () => {

  const {Logoutuser}=useAuth();
  
  useEffect(()=>{
    Logoutuser();

  },[Logoutuser])

  return (
    <>
       <Navigate to="/login"/>
    </>
  )
}
