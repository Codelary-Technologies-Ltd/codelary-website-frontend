import React from 'react';
import './Footer.css';
import codelarylogo from '../../assets/codelary.png';

function footer() {
  return (
    <div className='footer'>
        <div className="lastpage">
            <div className="lastpage1">
                <img src={codelarylogo} alt="logo" width={100} height={100} />
            </div>
            <div className="lastpage2">
                <span>&copy; Codelary Technologies Ltd.</span>
            </div>
            <div className="lastpage3">
            <span>All Rights Reserved.</span>

            </div>
        </div>
    </div>
  )
}

export default footer;