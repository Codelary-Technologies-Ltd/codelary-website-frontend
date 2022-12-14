import React from 'react';
import './TeamPage.css';
import gitlogo from '../../assets/gith.png';
import linkdlogo from '../../assets/linkd.png';
import twitterlogo from '../../assets/twitter.png';

function TeamCard({pic, github, linkd, twitter, name, about, portfolio, profile}) {
  return (
    <div className='top1'>
        <div className='cardpics'>
            <img className='pics' src={pic} alt="pimage" />
            <div className="pix">
              <div className='text'>
                <h3>{name}</h3>
                <hr/>
                <p>{about}</p>
                <div className='team-socials'>
                    <a href={github}><img src={gitlogo} alt="" style={{width:"25px", backgroundColor:"white"}}/></a> 
                    <a href={linkd}><img src={linkdlogo} alt="" style={{width:"25px", backgroundColor:"white", padding:"2px"}}/></a> 
                    <a href={twitter}><img src={twitterlogo} alt="" style={{width:"25px", backgroundColor:"white", padding:"2px"}}/></a>
                </div>
                <a href={portfolio} style={{textDecoration:"underline"}}>{profile} &rarr;</a>
              </div>
            </div>
                <h3>{name}</h3>               
        </div>
    </div>
  )
}

export default TeamCard;
