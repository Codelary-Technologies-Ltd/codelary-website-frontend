import React from 'react'
import HomePage from '../../pages/homePage/HomePage';
import AboutPage from '../../pages/aboutUs/AboutPage';
import OurServices from '../../pages/ourServices/OurServices';
import TeamPage from '../../pages/ourTeam/TeamPage';
import ContactPage from '../../pages/contactPage/ContactPage';
import NavBar from '../../pages/homePage/NavBar';

function AllPages() {
  return (
    <div>
      <NavBar />
      <HomePage/>
      <AboutPage/>
      <OurServices/>
      {/* <TeamPage/> */}
      <ContactPage/>
    </div>
  )
}

export default AllPages