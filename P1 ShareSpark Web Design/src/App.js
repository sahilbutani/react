import './App.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import Main from './Components/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar >
          {/* Layout tarike ahi Navbar lidhel 6 jo website ma badha elements mate common rehse. */}
          <Routes>
          <Route index element={<Main />}/>
          <Route path='*' element={Error}/>
          </Routes>
         </Navbar >
      </BrowserRouter>
    </>
  );
}

export default App;
