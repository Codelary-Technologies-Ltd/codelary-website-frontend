import React from 'react';
import './AboutPage.css';
import image1 from '../../assets/image1.jpg';

function AboutPage() {
  return (
    <div className='about-container'>
        <div className="about-image">
            <h1 className='image-h1'>About Us</h1>
            <img src={image1} alt="image1" width={600} height={600} />
        </div>
        <div className="about-text">
            <h1>About Us</h1>
            <div className="about-heading">
                <h2>#1 Our Mission</h2>
                <p>Our mission is to deliver the best possible reliable and secured software solutions to help our clients improve their business efficiency.</p>
            </div>
            <div className="about-heading">
                <h2>#2 Our Goals</h2>
                <p>Our main goal is to design, build and develop scalable software applications for organizations and businesses to thrive.</p>
            </div>
            <div className="about-heading">
                <h2>#3 Why Us?</h2>
                <p>We have highly skilled software engineers who posses technical knowledge and experience in using latest software standards, tools, platforms, frameworks, packages, libraries and technologies that make up our team. We’re confident that we are the only tech company that can provide the best possible IT & software solutions to your business.</p>
            </div>

        </div>
    </div>
  )
}

export default AboutPage;