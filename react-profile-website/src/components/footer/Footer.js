import React from 'react';
import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        TANH0309
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experiance">Experience</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebook className="footer__socials-icon" />
        </a>
        <a href="https://intagram.com">
          <FiInstagram className="footer__socials-icon" />
        </a>
        <a href="https://twitter.com">
          <FaTwitter className="footer__socials-icon" />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; KTX A. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
