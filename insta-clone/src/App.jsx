import SignUpForm from "./components/Authentication/signUp/signUp";
import SignInForm from "./components/Authentication/signin/signIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Emailverify from "./components/Authentication/verification/Emailverify";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/SignUp" element={<SignUpForm />} />
        <Route path="/Verify" element={<Emailverify />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
