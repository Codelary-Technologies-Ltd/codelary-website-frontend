import React from 'react';
import './HomePage.css';
import CustomButton from '../../components/customButton/CustomButton';


function HomePage() {
  return (
    <div className='bod1' id='homepage-us'>
      <div className='bod'>
        <div className='home-div'>
          <h1 >
            Reliable, Secured and Customer Satisfaction for Every Client
          </h1>
          <p>
            We take our time to design, build and develop scalable software applications for people all over the world to solve their problems
          </p>
        </div>
        <div className='custom-data'>
          <a href="#contact-us">
            <CustomButton title = 'Free Consultation' 
            style = {{
              margin: '3px 0 0', 
              border: '1px solid #AB7E5F', 
              backgroundColor: 'transparent', 
              borderRadius:"8px",
              padding:"5px 20px"
            }} />
          </a>
          <a href="#our-services-us">
            <CustomButton title = 'Learn More' 
            style = {{ 
              margin: '3px 0 0', 
              border: '1px solid #AB7E5F', 
              backgroundColor: 'transparent', 
              paddingLeft: '1.8rem', 
              paddingRight: '1.8rem', 
              borderRadius:"8px",
              padding:"5px 35px"
            }}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage;