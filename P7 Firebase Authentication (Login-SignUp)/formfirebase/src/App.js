import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Components/SignUp";
import LoginWithOTP from "./Components/LoginWithOTP";
import SignIn from "./Components/SignIn";
import { ToastContainer } from 'react-toastify';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/withOTP" element={<LoginWithOTP />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
