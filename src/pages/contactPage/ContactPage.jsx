import React,{useRef} from "react";
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, EnvelopeSimple, FacebookLogo, LinkedinLogo, InstagramLogo, TwitterLogo, WhatsappLogo } from 'phosphor-react';
import './ContactPage.css';
// import { Link } from 'react-router-dom'


function ContactPage(){
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4vipr4q', 'template_ug28678', form.current, 'KDtoeIXgOmYG09dsr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    return(
        <div className="contact-container">
            <div className="smallContc">
                <div className="col-2c">
                    <div className="absc" id="contact-us">
                        <h1 >Contact Us</h1>
                        <div className="groupc" style={{margin: '80px 0 0'}}>
                            <MapPin size={32} className='
                            contact-icon' />  
                            <span> Physical Address</span>
                        </div>
                        <span className="movec">Suite 5 Mangal Plaza, Wuse Zone 1, Abuja.</span><br /><br />
                        <div className="groupc">
                            <Phone size={32} className='
                            contact-icon' /> 
                            <span> Let's Talk</span>
                        </div>
                        <span className="movec">+234-70-31839826</span><br /><br />
                        <div className="groupc">
                            <WhatsappLogo size={32} className='
                            contact-icon' /> 
                            <span> Let's Chat</span>
                        </div>
                        <span className="movec">+234-80-85702341</span><br /><br />
                        <div className="groupc">
                            <EnvelopeSimple size={32} className='
                            contact-icon' />
                            <span>E-mail Address</span>
                        </div>
                        <span className="movec">codelarytechnologiesltd@gmail.com</span>
                    </div>
                </div>
                <form className='formc' onSubmit={sendEmail} ref={form}>
                    <div className="colc">          
                    <h2>Send Us A Message</h2>
                    <div className="custom-input">
                    <CustomInput  placeholder='Your full name*' name="user_name" style = {{width: '100%', marginBottom: '.5rem', padding: '.8rem', backgroundColor: 'transparent', border: '1px solid white'}} />
                    <CustomInput  placeholder='Email*' name="user_email" style = {{width: '100%', marginBottom: '.5rem', padding: '.8rem', backgroundColor: 'transparent', border: '1px solid white'}} />
                    <CustomInput  placeholder='Phone number*' name="user_phone" style = {{width: '100%', marginBottom: '.5rem', padding: '.8rem', backgroundColor: 'transparent', border: '1px solid white'}} />
                    <textarea placeholder="Write us a message" cols="20" rows="4" id="textc" name="message"></textarea>
                    <CustomButton title = 'SUBMIT' type = 'submit' style = {{width: '100%', margin: '8px 0% 0', padding: '.8rem', backgroundColor: '#AB7E5F'}} />
                    </div>
                    
                    </div>
                </form>
            </div>  
                <div className="lastpage">
                    <div className="lastpage1">
                    <span>Privacy Policy </span> 
                    <p>|</p>
                    <span>Terms And Conditions</span>
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

export default ContactPage;