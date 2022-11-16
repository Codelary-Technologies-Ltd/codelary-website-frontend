import './App.css';
import AllPages from './pages/allPages/AllPages';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Privacy from './pages/privacyPage/Privacy';
import Terms from './pages/termsPage/Terms'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllPages />}/>
          <Route path='home' element={<AllPages />}/>
          <Route path='/privacy-policy' element={<Privacy />}/>
          <Route exact path='/terms-of-use' element={<Terms />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
