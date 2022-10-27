import React from 'react';
import logo from '../../assets/codelary-logo.png';

function NavBar() {
  return (
    <div>
        <div>
            <img src={logo} alt="codelary"/>
            <nav>
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Our Services</li>
                <li>Our Team</li>
                <li>Contact US</li>
                </ul> 
            </nav>
        </div>
        
        
    </div>
  )
}

export default NavBar;