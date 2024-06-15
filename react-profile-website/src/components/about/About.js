import React from 'react';
import {
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiSass,
} from 'react-icons/di';
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/image/avatar.png';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="relative group">
              <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                <article className="about__card flex items-center flex-col min-h-[180px]">
                  <FaAward className="about__icon" />
                  <h5 className="text-white">Experience</h5>
                  <div className="text-white text-[10px]">
                    3+ Years Working
                  </div>
                </article>
              </div>
            </div>

            <div className="relative group">
              <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                <article className="about__card flex items-center flex-col min-h-[180px]">
                  <FiUser className="about__icon" />
                  <h5 className="text-white">Graduate</h5>
                  <div className="text-white text-[10px]">
                    UIT University Of Information Technology
                  </div>
                </article>
              </div>
            </div>

            <div className="relative group">
              <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                <article className="about__card flex items-center flex-col min-h-[180px]">
                  <VscFolderLibrary className="about__icon" />
                  <h5 className="text-white">Project</h5>
                  <div className="text-white text-[10px]">
                    16+ Completed
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center mt-[20px]">
            <DiHtml5 className=" text-orange-600" />
            <DiCss3 className="text-blue-600" />
            <DiSass className=" text-pink-600" />
            <DiBootstrap className=" text-purple-600" />
            <DiJavascript1 className=" text-yellow-500" />
            <DiReact className=" text-blue-500" />
            <DiNodejsSmall className=" text-green-500" />
          </div>

          <div
            className="about__content"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            <p className="text-red">
              My goal is to be associated with a company where I can use my
              skills and gain more experience, new skills while improving
              the company'sproductivity and reputation. To become a great
              front-end developer to presenting the end-user with a
              beautiful, easy- to-use interface.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
