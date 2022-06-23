import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './service.css';
const Services = () => {
  return (
    <section id="services">
      <h5>What I Dffer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Photoshop.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adobe XD.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Marvel.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Devoloper</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Html, CSS, Javascript</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>TypeScript.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React JS, Redux.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>.....</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Get Api Link Youtube Chat App</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Share Positive Statistics.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create content youtube.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write attractive and neat captions.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
