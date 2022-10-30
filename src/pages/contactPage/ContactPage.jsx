import React from "react";
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import { MapPin, Phone, EnvelopeSimple, FacebookLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';
import './ContactPage.css';

function ContactPage(){
    return(
        <div className="contact-container">
            <div className="smallContc">
                <div className="col-2c">
                    <div className="absc">
                        <h1>Contact Us</h1>
                        <div className="groupc" style={{margin: '80px 0 0'}}>
                            <MapPin size={32} />  
                            <span> Physical Address</span>
                        </div>
                        <span className="movec">Suite 5 Mangal Plaza, Wuse Zone 1, Abuja.</span><br /><br />
                        <div className="groupc">
                            <Phone size={32} /> 
                            <span> Let's Talk</span>
                        </div>
                        <span className="movec">+234-80-85702341</span><br /><br />
                        <div className="groupc">
                            <EnvelopeSimple size={32} />
                            <span>E-mail Address</span>
                        </div>
                        <span className="movec">codelarytechnologiesltd@gmail.com</span>
                        <div className="follow-us">
                            <span>Follow Us</span>
                            <div className="groupc2">
                                <a href="www.facebook.com"><p><FacebookLogo size={37} className = 'bluei' /></p></a>
                                <a href="www.linkedin.com"><p><LinkedinLogo size={37} className = 'bluei' /></p></a>
                                <a href="www.instagram.com"><p><InstagramLogo size={37} className = 'bluei'  /></p></a>
                            </div>
                        </div>
                    </div>
                </div>
                <form className='formc'>
                    <div className="colc">          
                    <h2>Send Us A Message</h2>
                    <CustomInput placeholder='Your full name*' name="name" style = {{width: '100%', marginBottom: '.5rem', padding: '.8rem', backgroundColor: 'transparent', border: '1px solid white'}} />
                    <CustomInput placeholder='Email*' name="email" style = {{width: '100%', marginBottom: '.5rem', padding: '.8rem', backgroundColor: 'transparent', border: '1px solid white'}} />
                    <CustomInput placeholder='Phone number*' name="phone" style = {{width: '100%', marginBottom: '.5rem', padding: '.8rem', backgroundColor: 'transparent', border: '1px solid white'}} />
                    <textarea placeholder="Write us a message" cols="20" rows="4" id="textc" name="message"></textarea>
                    <CustomButton title = 'SUBMIT' style = {{width: '100%', margin: '8px 0% 0', padding: '.8rem', backgroundColor: '#AB7E5F'}} />
                    </div>
                </form>
            </div>  
        </div>
    )
}

export default ContactPage;