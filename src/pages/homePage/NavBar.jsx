import React from 'react';
import logo from '../../assets/codelary-logo.png';
import './NavBar.css'

function NavBar() {
  return (
    <div>
        <div className='first-nav'>
            <div className='nav-flex'>
                <img src={logo} alt="codelary" width={70} height={70}/> <span className='spann'>CODELARY</span>
            </div>            
            <nav className='second-nav'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Our Team</li>
                <li>Contact Us</li>
                </ul> 
            </nav>
        </div>
        
        
    </div>
  )
}

export default NavBar;