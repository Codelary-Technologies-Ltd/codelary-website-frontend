import './App.css';
import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutUs/AboutPage';
import OurServices from './pages/ourServices/OurServices';
import TeamPage from './pages/ourTeam/TeamPage';

function App() {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <OurServices />
      <TeamPage />
    </div>
  );
}

export default App;
