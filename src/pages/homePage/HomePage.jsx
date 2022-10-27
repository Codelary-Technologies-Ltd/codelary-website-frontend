import React from 'react'
import NavBar from './NavBar'
import image4 from '../../assets/image4.jpg';



function HomePage() {
  return (
    <div>
      <NavBar />
      <div>
        <div>
            <img src={image4} alt="image4"/>
        </div>
      </div>
    </div>
  )
}

export default HomePage