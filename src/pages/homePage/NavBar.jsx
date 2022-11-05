import React, { useState } from 'react';
import logo from '../../assets/codelaryy.png';
import Hamburger from '../Hamburger';
import './NavBar.css'
function NavBar() {

  const [color, setColor] = useState(false)
  const colorChange = ()=>{
    if(window.scrollY > 520){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }

  window.addEventListener('scroll', colorChange)


  return (
    <div>
      <div className={color ? 'first-nav first-nav-bg ': 'first-nav'}>
          <div className='nav-flex'>
              <a href="#homepage-us"><img src={logo} alt="codelary" width={150} height={150}/></a>
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