import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessageLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tutuanletkpt@gmail.com</h5>
            <a href="mailto:tutuanletkpt@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessageLine className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Tu Tuan Le</h5>
            <a href="https://m.me/t.anh.2201/">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>039 669 4769</h5>
            <a href="https://api.whatsapp.com/send?phone+84396694769">
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
