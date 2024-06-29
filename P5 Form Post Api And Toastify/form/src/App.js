import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NoPage from './NoPage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      {/*<ToastConatiner/> is require for toast position so when we use toast it is specify here in App.js */}
        <Routes>
            <Route index element={<Home />} />
            {/* <Route path="/form" element={<Form />} /> */}
            <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
