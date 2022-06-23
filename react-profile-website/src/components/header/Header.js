/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/image/avatar.png';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="overlay">
          <h5 className="hello">Hello I'm </h5>
          <h1>Le Tu Tuan</h1>
          <h5 className="text-alight"> Frontend Developer</h5>
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <CTA />
          <a href="#a" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
