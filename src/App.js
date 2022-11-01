import './App.css';
import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutUs/AboutPage';
import OurServices from './pages/ourServices/OurServices';
import TeamPage from './pages/ourTeam/TeamPage';
import ContactPage from './pages/contactPage/ContactPage';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about-us' element={<AboutPage />}/>
          <Route path='/servies' element={<OurServices />}/>
          <Route path='/team' element={<TeamPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
