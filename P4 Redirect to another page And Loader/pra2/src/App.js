import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NoPage from "./NoPage";
import SubPage from "./SubPage";
import Loader from "./Loader";

function App() {

  

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="SubPage/:id" element={<SubPage />} />
            {/* ahiya je /:id api 6 te Home.jsx mathi a.id lese and ahi url ma pass thse. */}
            <Route path="*" element={<NoPage />} />
            <Route path="/Loader" element={<Loader />} />
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;
