import React, { useState, useEffect } from 'react';
import './TeamPage.css';
import TeamList from './TeamList';
import users from './users.json';

function TeamPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers] = useState(users.length);
  const [usersPerPage, setUsersPerPage] = useState(1);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  function prev(){
    setCurrentPage((currentPage) => {
      if( currentPage === 1) return 1;
      return currentPage - 1;
    }) 
  }
  function next(){
    setCurrentPage((currentPage) => {
      if( currentPage === Math.ceil(totalUsers/usersPerPage)) return 1;
      return currentPage + 1;
    })
  }

  function pageResized() {
    if (window.innerWidth > 1000) setUsersPerPage(4);
    if ((window.innerWidth <= 1000) && (window.innerWidth >= 840)) setUsersPerPage(3);
    if ((window.innerWidth <= 840) && (window.innerWidth >= 580)) setUsersPerPage(2);
    if (window.innerWidth < 580) setUsersPerPage(1);
  }
  window.addEventListener('resize', pageResized);

  useEffect(() => {
    pageResized();
  }, []);
  return (
    <div className='ab'>
        <div className='abouthead' id='our-team-us'>
          <h1 >Our Team</h1>
          <p>We are a team of dedicated software designers and developers. We live and breathe tech 7 days a week.</p>
        </div>
        <div className='teams-container'>
          <button className='arrow-btn' onClick={() => { prev() }}>{'<'}</button>
            <div className='top'>
              <TeamList userss={currentUsers}/> 
            </div>
          <button className='arrow-btn' onClick={() => { next() }}>{'>'}</button>
      </div>
    </div>
  )
}

export default TeamPage;