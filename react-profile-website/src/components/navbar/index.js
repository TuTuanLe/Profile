import React from 'react';
import './styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <div className="navbar__logo">
          {/* <img src={Logo} className="logo" alt="logo" /> */}
        </div>
      </a>
      <div className="navbar__list">
        {window.innerWidth > 600 && (
          <a
            href="/"
            className={`${'navbar__item'}  ${'navbar__item--active'}  `}
          >
            Profile
          </a>
        )}
        <a href="/profile" className={`${'navbar__item'}   `}>
          Contact
        </a>
        <a href="/contact" className={`${'navbar__item'}   `}>
          Home
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
