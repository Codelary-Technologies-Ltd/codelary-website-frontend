import React, { useState } from 'react';
import logo from '../../assets/codelary4.png';
import Hamburger from '../../pages/Hamburger';
import { Link } from 'react-router-dom';
import './NavBar.css'
function NavBar() {

  const [color, setColor] = useState(false)
  const colorChange = ()=>{
    // if(window.scrollY > 520){
    //   setColor(true)
    // }
    // else{
    //   setColor(false)
    // }
    window.scrollY > 520 ? setColor(true) : setColor(false)
  }


  window.addEventListener('scroll', colorChange)


  return (
      <div className={color ? 'first-nav first-nav-bg ': 'first-nav'}>
        <div className='nav-flex'>
          <Link to="/">
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
              <a href="home#about-us">About Us</a>
            </li>
            <li>
              <a href="home#our-services-us">Our Services</a>
            </li>
            <li>
              <a href="home#our-team-us">Our Team</a>
            </li>
            <li>
              <a href="home#contact-us">Contact Us</a>
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