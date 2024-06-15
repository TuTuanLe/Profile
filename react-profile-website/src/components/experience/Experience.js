import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="relative group">
          <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
            <div className="experience__frontend">
              <h3>Frontend Developer</h3>
              <div className="experience__content">
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>HTML</h4>
                    <small className="text-light">Experience</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>CSS</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>BootStrap</h4>
                    <small className="text-light">Experience</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>Tailwind</h4>
                    <small className="text-light">Experience</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>React</h4>
                    <small className="text-light">Experience</small>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
            <div className="experience__backend">
              <h3>Backend Developer</h3>
              <div className="experience__content">
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <div>
                      <h4>.NET</h4>
                      <small className="text-light">Experience</small>
                    </div>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>JAVA</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>PHP</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>MONGODB</h4>
                    <small className="text-light">Experience</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>SQL SERVER</h4>
                    <small className="text-light">Experience</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>PYTHON</h4>
                    <small className="text-light">Experience</small>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
