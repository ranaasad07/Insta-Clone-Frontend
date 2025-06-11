import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import AuthenticationContext from './AuthenticationContext';

const AuthenticationProvider = ({ children }) => {
  const [emailContext, setEmailContext] = useState({ emailForOtp: '' });

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      const decode = jwtDecode(token);
      const { email } = decode;
      setEmailContext({emailForOtp:email})
    } catch (err) {
      console.error('cannot get token', err);
    }
  }, []);


  return (
    <AuthenticationContext.Provider value={{ emailContext, setEmailContext }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
