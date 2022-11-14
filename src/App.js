import './App.css';
import AllPages from './pages/allPages/AllPages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Privacy from './pages/privacyPage/Privacy';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<AllPages />}/>
          <Route path='/privacy-policy' element={<Privacy />}/>
          {/* <Route exact path='/services' element={<OurServices />}/> */}
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
