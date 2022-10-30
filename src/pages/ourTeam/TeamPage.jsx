import React from 'react';
import './TeamPage.css';
import TeamList from './TeamList';
import users from './users.json';



function TeamPage() {
  return (
    <div className='ab'>

        <div className='abouthead'>
        <h1>Our Team</h1>
        <p>We are a team of dedicated software designers and developers. We live and breathe tech 7 days a week.</p>
        </div>
        <TeamList userss={users}/> 
        
    </div>
    
    
    
  )
}

export default TeamPage;