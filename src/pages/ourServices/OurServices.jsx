import React from 'react';
import './OurServices.css';
import {DeviceMobile, Globe, Laptop} from "phosphor-react";

function OurServices() {
  return (
    <div className='service-container'>
        <h1>Our Services</h1>
        <div className="service-contain">
            <div className="service-box">
                <div className='service-logo'>
                    <Globe size={32} color="#ab7e5f" weight="thin" />
                </div>
                <div className='service-text'>
                    <h2>Web Design and Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut totam autem repudiandae, repellat neque molestiae.</p>
                </div>
            </div>
            <div className="service-box">
                <div className='service-logo'>
                    <DeviceMobile size={32} color="#ab7e5f" weight="thin" />
                </div>
                <div className='service-text'>
                    <h2>Mobile Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut totam autem repudiandae, repellat neque molestiae.</p>
                </div>
            </div>
            <div className="service-box">
                <div className='service-logo'>
                    <Laptop size={32} color="#ab7e5f" weight="thin" />
                </div>
                <div className='service-text'>
                    <h2>Web Maintenance</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut totam autem repudiandae, repellat neque molestiae.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices;