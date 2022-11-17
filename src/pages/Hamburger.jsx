import React from 'react'
import './Hamburger.css' 
import { Link } from 'react-router-dom'

function Hamburger() {
  return (
    <div>
        <div className='ham-div'>
        <input type="checkbox" className='res-inp'/>
          <span className='ham-span'></span>
          <span className='ham-span'></span>
          <span className='ham-span'></span>
          {/* <List size={50} /> */}
          <ul className='hamburger'>
            <li>
              <Link to="/">Home</Link>
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
        </div>
    </div>
  )
}

export default Hamburger