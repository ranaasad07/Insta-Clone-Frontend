import React, { useState, useEffect } from 'react';
import AuthenticationContext from './AuthenticationContext';

const AuthenticationProvider = ({ children }) => {
  const [emailContext, setEmailContext] = useState({ emailForOtp: '' });


  return (
    <AuthenticationContext.Provider value={{ emailContext, setEmailContext }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
