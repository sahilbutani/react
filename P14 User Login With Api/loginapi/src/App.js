import { useState } from "react";
import "./App.css";
import Home from "./Component/Home";
import Login from "./Component/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";      
import { ToastContainer } from "react-toastify";

function App() {

  const token = useState(!!localStorage.getItem('token'));
  // !! means token hse to 'true' and nahi hoy to 'false' return krse.(Boolean)

  return (
    <BrowserRouter>
    <ToastContainer/>
    {/* AA Chaltu nthi etle k token mlya bad refresh krya pchi Home Page Dekhase */}
      <Routes>
        {token ?(
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
