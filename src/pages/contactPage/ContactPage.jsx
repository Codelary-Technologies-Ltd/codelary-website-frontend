import React from "react";
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import { MapPin, Phone, EnvelopeSimple, FacebookLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';
import './ContactPage.css';

function ContactPage(){
    return(
        <div className="contact-container">
                <div className="smallContc">
                <form className='formc'>
                    <div className="colc">          
                    <h2>Send Us A Message</h2>
                    <CustomInput placeholder='Your full name*' name="name" style = {{width: '100%', marginTop: '-2.2%'}} />
                    <CustomInput placeholder='Email*' name="email" style = {{width: '100%', marginTop: '-2.2%'}} />
                    <CustomInput placeholder='Phone number*' name="phone" style = {{width: '100%', marginTop: '-2.2%'}} />
                    <textarea placeholder="Write us a message" cols="20" rows="4" id="textc" name="message" ></textarea>
                    <CustomButton title = 'SUBMIT' style = {{width: '100%', margin: '8px 0% 0'}} />
                    </div>
                </form>
                <div className="col-2c">
                <div className="absc">
                    <h1 style={{textAlign: 'left', marginTop: '12%'}}>Contact Us</h1>
                    <div className="groupc" style={{margin: '80px 0 0'}}>
                        <MapPin size={32} />  
                        <span>Address</span>
                    </div>
                    <span className="movec">No6 Ademola Adetokubo Cresent Maitama</span><br /><br />
                    <div className="groupc">
                        <Phone size={32} /> 
                        <span> Let Talk</span>
                    </div>
                    <span className="movec">08917529499</span><br /><br />
                    <div className="groupc">
                        <EnvelopeSimple size={32} />
                        <span>General Support</span>
                    </div>
                    <span className="movec">contact@example.com</span>
                    <div className="groupc2">
                    <a href="www.facebook.com"><p><FacebookLogo size={37} className = 'bluei' /></p></a>
                    <a href="www.linkedin.com"><p><LinkedinLogo size={37} className = 'bluei' /></p></a>
                    <a href="www.instagram.com"><p><InstagramLogo size={37} className = 'pinki'  /></p></a>
                    </div>
                </div>
                </div>
            </div>  
        </div>
    )
}

export default ContactPage;