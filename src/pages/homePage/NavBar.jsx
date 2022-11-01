import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/codelaryy.png';
import AboutPage from '../aboutUs/AboutPage';
import ContactPage from '../contactPage/ContactPage';
import Hamburger from '../Hamburger';
import OurServices from '../ourServices/OurServices';
import TeamPage from '../ourTeam/TeamPage';
import HomePage from './HomePage';
import './NavBar.css'

function NavBar() {
  return (
    <div>
      <div className='first-nav'>
          <div className='nav-flex'>
              <img src={logo} alt="codelary" width={150} height={150}/>
          </div>            
          <nav className='second-nav'>
          <ul>
              <a href='/'><li>Home</li></a>
              <a href='/about-us'><li>About Us</li></a>
              <a href='/services'><li>Our Services</li></a>
              <a href='/team'><li>Our Team</li></a>
              <a href='/contact'><li>Contact Us</li></a>
              </ul> 
          </nav>
          <div className='my-ham'>
            <Hamburger/>
          </div>
      </div>
    </div>
  )
}

export default NavBar;