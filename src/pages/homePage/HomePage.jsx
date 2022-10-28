import React from 'react';
import NavBar from './NavBar';
import './HomePage.css';
import CustomButton from '../../components/customButton/CustomButton';

function HomePage() {
  return (
    <div className='bod1'>
        <NavBar />
        <div className='bod'>
        <div>
            <div className='home-div'>
                <h1>Reliable, Secured and Customer Satisfaction for Every Client</h1>
                <p>We take our time to design, build and develop scalable software applications for people all over the world to solve their problems</p>
            </div>
            <div className='custom-data'>
            <CustomButton title = 'Free Consultation' style = {{margin: '3px 0 0', border: '1px solid #AB7E5F', backgroundColor: 'transparent'}} />
            <CustomButton title = 'Learn More' style = {{ margin: '3px 0 0', border: '1px solid #AB7E5F', backgroundColor: 'transparent', paddingLeft: '1.8rem', paddingRight: '1.8rem'}}/>
            </div>
      </div>
      </div>
    </div>
  )
}

export default HomePage;