import React from 'react';
import logo from '../../assets/codelaryy.png';
import Hamburger from '../Hamburger';
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
              <li> <a href="#homepage-us"> Home</a></li>
              <li><a href="#about-us"> About Us</a></li>
              <li><a href="#our-services-us"> Our Services</a></li>
              <li><a href="#our-team-us"> Our Team</a></li>
              <li><a href="#contact-us"> Contact Us</a></li>
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