import React from 'react'
import './Footer.css'
import { FacebookLogo, LinkedinLogo, InstagramLogo, TwitterLogo} from 'phosphor-react';


function Footer() {
  return (
    <div>
        <div className="lastpage">
            {/* <div className="lastpage2">
                <div className="groupc1">
                    <a href="https://www.facebook.com/profile.php?id=100087274729762"><p><FacebookLogo size={30} className = 'bluei' /></p></a>
                    <a href="https://www.linkedin.com/in/codelaryTech"><p><LinkedinLogo size={30} className = 'linkd' /></p></a>
                    <a href="https://www.instagram.com"><p><InstagramLogo size={30} className = 'insta'  /></p></a>
                    <a href="https://www.twitter.com/codelaryTech"><p><TwitterLogo size={30} className = 'twit' /></p></a>
                </div>
            </div> */}
            <div className="lastpage1">
                <a href='/privacy-policy' target="_blank">
                    <span>Privacy Policy </span>
                </a>
                <p>|</p>
                <a href='/terms-of-use' target="_blank">
                    <span>Terms And Conditions</span>
                </a>
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