import React, { useState } from 'react';
import logo from '../../assets/codelary4.png';
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';
import './NavBar.css'
function NavBar() {

  const [color, setColor] = useState(false)
  const colorChange = ()=>{

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
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Our Services</Link>
            </li>
            <li>
              <Link to="/">Our Team</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
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