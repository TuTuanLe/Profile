import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };

  return (
    <div
      className={
        'flex text-2xl justify-between text-gray-200 items-center px-6 w-[100%] mx-auto h-24'
      }
    >
      <a href="">Tu Tuan Le</a>
      <ul className={'hidden md:flex z-10 gap-12 cursor-pointer'}>
        <li className={'relative group'}>
          <a href={'#about'} className="text-xl text-white">
            About
          </a>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>

        <li className={'relative group'}>
          <a href={'#portfolio'} className="text-xl text-white">
            Portfolio
          </a>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>

        <li className={'relative group'}>
          <a href="#contact" className="text-xl text-white">
            Contact
          </a>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>
      </ul>

      <div onClick={toggleNav} className="md:hidden z-30">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? 'text-center z-20 fixed h-full w-full left-0 top-0 bg-[#232323]'
            : 'fixed left-[-100%]'
        }
      >
        <ul className="font-semibold text-4xl space-y-8 mt-24">
          <li>
            <Link onClick={closeNav} to={'/about'}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeNav} to={'/portfolio'}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link onClick={closeNav} to={'/contact'}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
