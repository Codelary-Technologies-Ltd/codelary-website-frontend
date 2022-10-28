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
                <li>Home</li>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Our Team</li>
                <li>Contact Us</li>
                </ul> 
            </nav>
        </div>
        <div className='my-ham'>
        <Hamburger/>
        </div>
        
        
    </div>
  )
}

export default NavBar;