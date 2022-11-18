import React from 'react'
import './Footer.css'
import { FacebookLogo, LinkedinLogo, InstagramLogo, TwitterLogo} from 'phosphor-react';
import { Link } from 'react-router-dom';

function Footer({privacy,terms}) {
    if(privacy){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth', 
        });
    }else if(terms){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth', 
        });
    }


    
  return (
    <div>
        <div className="lastpage">
            <div className="lastpage1">
            <Link to='/privacy-policy' >
                    <span>Privacy Policy </span>
                </Link>
                <p>|</p>
                <Link to='/terms-of-use' >
                    <span>Terms And Conditions</span>
                </Link>
            </div>
            <div className="lastpage2">
                    <div className="groupc2">
                        <a href="https://www.facebook.com/profile.php?id=100087274729762"><p><FacebookLogo size={30} className = 'bluei' /></p></a>
                        <a href="https://www.linkedin.com/in/codelaryTech"><p><LinkedinLogo size={30} className = 'linkd' /></p></a>
                        <a href="https://www.instagram.com"><p><InstagramLogo size={30} className = 'insta'  /></p></a>
                        <a href="https://www.twitter.com/codelaryTech"><p><TwitterLogo size={30} className = 'twit' /></p></a>
                    </div>
            </div>
            <div className="lastpage3">
                <span>&copy; 2022 Codelary Technologies Ltd. All Rights Reserved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer