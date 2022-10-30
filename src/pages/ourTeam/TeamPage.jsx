import React from 'react';
import './TeamPage.css';
import TeamList from './TeamList';
import users from './users.json';



function TeamPage() {
  return (
    <div className='ab'>

        <div className='abouthead'>
        <h2>Our Team</h2>
        </div>
        <TeamList userss={users}/> 
        
    </div>
    
    
    
  )
}

export default TeamPage;