import './App.css';
import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutUs/AboutPage';
import OurServices from './pages/ourServices/OurServices';
import TeamPage from './pages/ourTeam/TeamPage';
import ContactPage from './pages/contactPage/ContactPage';
import NavBar from './pages/homePage/NavBar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Privacy from './pages/privacyPage/Privacy';

function App() {
  return (
    <div className='App'>
      {/* <Router>
        <Routes>
          <Route exact path='/privacy-policy' element={<Privacy />}/>
          <Route exact path='/about-us' element={<AboutPage />}/>
          <Route exact path='/services' element={<OurServices />}/>
          <Route exact path='/team' element={<TeamPage />}/>
          <Route exact path='/contact' element={<ContactPage />}/>
        </Routes>
      </Router> */}
      <NavBar />
      <HomePage/>
      <AboutPage/>
      <OurServices/>
      <TeamPage/>
      <ContactPage/>
      
    </div>
  );
}

export default App;
