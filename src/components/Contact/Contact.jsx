import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'









const Contact = () => {

  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ya7zjto', 'template_sckt7x9', form.current, 'Mzv4F8ce-3aMkpXiT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abdelrhmanabdelbadea05@gmail.com</h5>
            <a href="mailto:abdelrhmanabdelbadea05@gmail.com" target={'_blank'}>Send a message</a>
          </article>

          
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Massenger</h4>
            <h5>Abd Elrhman</h5>
            <a href="#" target={'_blank'}>Send a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+201028260637</h5>
            <a href="#" target={'_blank'}>Send a message</a>
          </article>
        </div>

       
      </div>
    </section>
  )
}

export default Contact