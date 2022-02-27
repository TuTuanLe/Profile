import React from 'react';
import IMG01 from '../../assets/image/portfolio.jpg';
import IMG02 from '../../assets/image/app_message.png';
import IMG03 from '../../assets/image/social_media.png';
import IMG04 from '../../assets/image/ecommerce.png';
import './portfolio.css';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG02} alt=""></img>
          </div>
          <h3>This is project with xamarin and .net</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/TuTuanLe/Project_xamarin_message"
              className="btn"
              target="_blank"
            >
              Github
            </a>

            <a
              href="https://www.youtube.com/watch?v=NLgLuTEqc-s&t=7s"
              className="btn btn-primary"
              target="_blank"
            >
              Youtube
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG03} alt=""></img>
          </div>
          <h3>This is Social media using python</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/TuTuanLe/SOCIAL"
              className="btn"
              target="_blank"
            >
              Github
            </a>

            <a
              href="https://www.youtube.com/watch?v=RIWS_4vD7i8&t=309s"
              className="btn btn-primary"
              target="_blank"
            >
              Youtube
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG04} alt=""></img>
          </div>
          <h3>This is project ecommerce with asp.net core api, react</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/TuTuanLe/fitness"
              className="btn"
              target="_blank"
            >
              Github
            </a>

            <a
              href="https://www.youtube.com/watch?v=Xvn8d6zmZSM"
              className="btn btn-primary"
              target="_blank"
            >
              Youtube
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG01} alt=""></img>
          </div>
          <h3>This is Signal Clone React Native</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/TuTuanLe/Signal-clone-react-native"
              className="btn"
              target="_blank"
            >
              Github
            </a>

            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG01} alt=""></img>
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>

            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG01} alt=""></img>
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>

            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
