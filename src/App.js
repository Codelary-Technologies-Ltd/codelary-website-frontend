import './App.css';
import AllPages from './pages/allPages/AllPages';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Privacy from './pages/privacyPage/Privacy';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllPages />}/>
          <Route path='/privacy-policy' element={<Privacy />}/>
          {/* <Route exact path='/services' element={<OurServices />}/> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
