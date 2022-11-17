import React, { useState } from 'react';
import logo from '../../assets/codelary4.png';
import Hamburger from '../Hamburger';
import './NavBar.css'
function NavBar() {

  const [color, setColor] = useState(false)
  const colorChange = ()=>{

    window.scrollY > 520 ? setColor(true) : setColor(false)
  }

  window.addEventListener('scroll', colorChange)


  return (
      <div className={color ? 'first-Nav first-nav-bg ': 'first-Nav'}>
        <div className='nav-flex'>
          <a href="#homepage-us">
            <img src={logo} alt="codelary-logo" className='codelary-logo' />
            <p className='logo-txt'>odelary</p>
          </a>
        </div>            
        <nav className='second-nav'>
        <ul>
            <li>
              <a href="#homepage-us">Home</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#our-services-us">Our Services</a>
            </li>
            <li>
              <a href="#our-team-us">Our Team</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul> 
        </nav>
        <div className='my-ham'>
          <Hamburger/>
        </div>
      </div>
  )
}

export default NavBar;