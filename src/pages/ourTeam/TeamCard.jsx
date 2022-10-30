import React from 'react';
import './TeamPage.css';
import gitlogo from '../../assets/gith.png';
import linkdlogo from '../../assets/linkd.png';

function TeamCard({img, github, linkd, name, about}) {
  return (
    <div>
        <div className='cardpics'>
            <img className='pics' src={img} alt="image" />
            <div className="pix">
              <div className='text'>
                <h3>{name}</h3>
                <hr/>
                <p>{about}</p>
                <div className='team-socials'>
                    <a href={github}><img src={gitlogo} alt="" style={{width:"25px", backgroundColor:"white"}}/></a> 
                    <a href={linkd}><img src={linkdlogo} alt="" style={{width:"25px", backgroundColor:"white", padding:"2px"}}/></a> 
                </div>
              </div>
            </div>
                <h3>{name}</h3>               
        </div>
    </div>
  )
}

export default TeamCard;
