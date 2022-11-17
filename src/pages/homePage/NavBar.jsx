import React, { useState } from 'react';
import logo from '../../assets/codelary4.png';
import Hamburger from '../Hamburger';
import { Link } from 'react-router-dom';
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
          <Link to="#homepage-us">
            <img src={logo} alt="codelary-logo" className='codelary-logo' />
            <p className='logo-txt'>odelary</p>
          </Link>
        </div>            
        <nav className='second-nav'>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#about-us">About Us</Link>
            </li>
            <li>
              <Link to="/#our-services-us">Our Services</Link>
            </li>
            <li>
              <Link to="/#our-team-us">Our Team</Link>
            </li>
            <li>
              <Link to="/#contact-us">Contact Us</Link>
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