import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const LoginDemo = () => {

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const user = result.user;
        alert('Login Successfully');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  }

  return (
    <div className='m-5 p-5'>
      <button className='bg-primary px-4 text-white' onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginDemo;
