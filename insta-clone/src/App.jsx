import SignUpForm from "./components/Authentication/signUp/signUp";
import SignInForm from "./components/Authentication/signin/signIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Emailverify from "./components/Authentication/verification/Emailverify";
import AuthenticationContext from "./components/Contexts/AuthenticationContext/AuthenticationContext";
import Feed from "./components/landing/Feed";
function App() {
  return (
    <BrowserRouter>
      <AuthenticationContext.Provider value={{}}>
        <Routes>

          <Route path="/" element={<SignInForm />} />
          <Route path="/SignUp" element={<SignUpForm />} />
          <Route path="/Verify" element={<Emailverify />} />
          <Route path="/Feed" element={<Feed />} />

        </Routes>
      </AuthenticationContext.Provider>


    </BrowserRouter>
  );
}

export default App;
