// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));

    // Function to store the token in localStorage and update the token state
    const storeToken = (serverToken) => {
        localStorage.setItem("token", serverToken);
        setToken(serverToken);
    };

    // Check if there's a token to determine if the user is logged in
    const isLoggedin = !!token;
console.log(isLoggedin);
console.log(isLoggedin);
  

    return (
        <AuthContext.Provider value={{ isLoggedin, storeToken, Logoutuser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
