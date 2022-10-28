import React from 'react'
import './Hamburger.css' 

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
                    <li>Home</li>
                    <li>Services</li>
                    <li>Testimonials</li>
                    <li>Contact Us</li>
                </ul>
        </div>
    </div>
  )
}

export default Hamburger