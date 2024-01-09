import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./contact.module.css"
import SocialLinks from "../SocialLinks"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2tli0do', 'template_zhekls7', form.current, 'xrdCTa4V9Kw0CjIEc')
    e.target.reset();
  };

  return (
    <section className={styles.contact__section} id="contact">
      <h1 className={styles.contact__heading}>Contact</h1>
      <p className={styles.contact__description}>Get in Touch</p>


      <div className={styles.contact_maindiv}>
        <div data-aos="zoom-in-up">
          <p>Talk to me</p>

          <div className={styles.contact__socialdivs}>
            <i className="bx bx-mail-send"></i>
            <h4>Email</h4>
            <p>niteshchandrakar2@gmail.com</p>
            <a href="mailto:niteshchandrakar2@gmail.com">Click here to mail{" "}<i className="bx bx-right-arrow-alt"></i></a>
          </div>

          <div className={styles.contact__socialdivs}>
            <i className="bx bxl-whatsapp"></i>
            <h4>Whatsapp</h4>
            <p>+91 9754601089</p>
            <a href="https://api.whatsapp.com/send?phone=+919754601089&text=Hello, more information!" className="contact__button">Click here to message {" "}<i className="bx bx-right-arrow-alt"></i></a>
          </div>

          <div className={styles.contact__socialdivs}>
            <h4>Social handles</h4>
            <SocialLinks />
          </div>
        </div>


        <div data-aos="zoom-in-up">
          <p>Write me Your Message</p>
          <form className={styles.contact__formdiv} ref={form} onSubmit={sendEmail}>
            <input name="name" type="text" placeholder='Insert your name' />
            <input name="email" type="email" placeholder='Insert your email' />
            <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder='Insert your message' ></textarea>
            <button type='submit'>Say Hello <i className="uil uil-message"></i></button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact;