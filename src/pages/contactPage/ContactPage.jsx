import React,{useRef} from "react";
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, EnvelopeSimple, WhatsappLogo } from 'phosphor-react';
import './ContactPage.css';
import Footer from '../../pages/footer/Footer';


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
                        <span className="movec"><a href="tel:07031839826">+234-70-31839826</a></span><br /><br />
                        <div className="groupc">
                            <WhatsappLogo size={32} className='
                            contact-icon' /> 
                            <span> Let's Chat</span>
                        </div>
                        <span className="movec"><a href="https://wa.me/08085702341">+234-80-85702341</a></span><br /><br />
                        <div className="groupc">
                            <EnvelopeSimple size={32} className='
                            contact-icon' />
                            <span>E-mail Address</span>
                        </div>
                        <span className="movec"><a href="mailto:codelarytechnologiesltd@gmail.com">codelarytechnologiesltd@gmail.com</a></span>
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
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default ContactPage;