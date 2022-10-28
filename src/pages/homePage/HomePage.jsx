import React from 'react';
import NavBar from './NavBar';
// import image4 from '../../assets/image4.jpg';
import './HomePage.css';
import CustomButton from '../../components/customButton/CustomButton';




function HomePage() {
  return (
    <div className='bod'>
      <NavBar />
      <div>
        {/* <div className='bg-image'>
            <img src={image4} alt="image4"/>
        </div> */}
        <div className='home-div'>
            <h1>Reliable, Secured and Customer Satisfaction for Every Client</h1>
            <p>We take our time to design, build and develop scalable software applications for people all over the world to solve their problems</p>
        </div>
        <div className='custom-data'>
        <CustomButton title = 'Free Consultation' style = {{margin: '3px 0 0'}} />
        <CustomButton title = 'Learn More' style = {{margin: '3px 0 0'}} />
        </div>
      </div>
    </div>
  )
}

export default HomePage;