import { createContext } from 'react';

const AuthenticationContext = createContext({
  emailContext: { emailForOtp: '' },
  setEmailContext: () => {}
});

export default AuthenticationContext;

