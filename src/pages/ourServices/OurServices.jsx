import React from 'react';
import './OurServices.css';
import {DeviceMobile, Globe, Laptop} from "phosphor-react";

function OurServices() {
  return (
    <div className='service-container'id='our-services-us'>

        <h1 >Our Services</h1>
        <div className="service-contain">
            <div className="service-box">
                <div className='service-logo'>
                    <Globe size={32} color="#ab7e5f" weight="bold" />
                </div>
                <div className='service-text'>
                    <h2>Web Design and Development</h2>
                    <p>We design and develop websites that are secure, scalable, and responsive which can fit in any screen display, whether PC, tablet or mobile phone.</p>
                </div>
            </div>
            <div className="service-box">
                <div className='service-logo'>
                    <DeviceMobile size={32} color="#ab7e5f" weight="bold" />
                </div>
                <div className='service-text'>
                    <h2>Mobile Development</h2>
                    <p>We also design and build mobile applications that is futuristic and has the potential to grow your business.</p>
                </div>
            </div>
            <div className="service-box">
                <div className='service-logo'>
                    <Laptop size={32} color="#ab7e5f" weight="bold" />
                </div>
                <div className='service-text'>
                    <h2>Web Maintenance</h2>
                    <p>We offer top-notch web maintenance services for businesses to ensure their websites remain up-to-date, secure, and healthy.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices;