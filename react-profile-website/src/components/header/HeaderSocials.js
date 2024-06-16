import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
const HeaderSocials = () => {
  return (
    <div className="fixed bottom-20 h-[250px] w-[30px] ml-2  flex-col items-center gap-2  hidden sm:flex">
      <p style={{ writingMode: 'vertical-rl', color: 'white' }}>
        Follow me -----
      </p>
      <a
        href="https://www.linkedin.com/in/tutuan-le-285453213/"
        target="_blank"
      >
        <BsLinkedin className="icon__social" size={25} />
      </a>
      <a href="https://github.com/TuTuanLe" target="_blank">
        <FaGithub className="icon__social" size={25} />
      </a>
      <a href="https://dribbble.com" target="_blank">
        <FiDribbble className="icon__social" size={25} />
      </a>
    </div>
  );
};

export default HeaderSocials;
