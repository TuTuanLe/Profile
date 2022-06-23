import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <p style={{ writingMode: 'vertical-rl', color: 'blue' }}>
        Follow me -----
      </p>
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin className="icon__social" />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub className="icon__social" />
      </a>
      <a href="https://dribbble.com" target="_blank">
        <FiDribbble className="icon__social" />
      </a>
    </div>
  );
};

export default HeaderSocials;
