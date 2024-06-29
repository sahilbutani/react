
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Video from "./Components/Video";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoid" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
