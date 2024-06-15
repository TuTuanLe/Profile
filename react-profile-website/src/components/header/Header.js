import React from 'react';
import ME from '../../assets/image/avatar.png';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

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
