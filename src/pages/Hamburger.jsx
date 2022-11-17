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
        </div>
    </div>
  )
}

export default Hamburger