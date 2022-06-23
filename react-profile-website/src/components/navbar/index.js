import React from 'react';
import './styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <div className="navbar__logo"></div>
      </a>
      <div className="navbar__list">
        {window.innerWidth > 600 && (
          <a
            href="#"
            className={`${'navbar__item'}  ${'navbar__item--active'}  `}
          >
            Profile
          </a>
        )}
        <a href="#contact" className={`${'navbar__item'}   `}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
