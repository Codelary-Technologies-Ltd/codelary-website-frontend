import React from 'react';
import './TeamPage.css';
import gitlogo from '../../assets/gith.png';

function TeamCard({img, github, name, about}) {
  return (
    <div>
        <div className='cardpics'>
            <img className='pics' src={img} alt="image" />
            <div className="pix">
              <div className='text'>
                <h3>{name}</h3>
                <hr/>
                <p>{about}</p>
                <a href={github}><img src={gitlogo} alt="" style={{width:"30px"}}/></a> 
              </div>
            </div>
                <h3>{name}</h3>               
        </div>
    </div>
  )
}

export default TeamCard;
