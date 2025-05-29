import SignUpForm from "./components/Authentication/signUp/signUp";
import SignInForm from "./components/Authentication/signin/signIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Emailverify from "./components/Authentication/verification/Emailverify";
import AuthenticationContext from "./components/Contexts/AuthenticationContext/AuthenticationContext";
function App() {
  return (
    <BrowserRouter>
      <AuthenticationContext.Provider value={{}}>
        <Routes>

          <Route path="/" element={<SignInForm />} />
          <Route path="/SignUp" element={<SignUpForm />} />
          <Route path="/Verify" element={<Emailverify />} />

        </Routes>
      </AuthenticationContext.Provider>


    </BrowserRouter>
  );
}

export default App;
