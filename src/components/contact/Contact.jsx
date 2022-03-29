import React, { useRef } from 'react';
import './contact.css';
import { SiGmail } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rftg4z3', 'template_1ay0vah', form.current, 'd6YqxWRwTyJmfdNGN')

    e.target.reset();    
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>habelldol@gmail.com</h5>
            <a href="mailto:habelldol@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>0821-1489-8489</h5>
            <a href="https://api.whatsapp.com/send?phone=6282114898489" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact