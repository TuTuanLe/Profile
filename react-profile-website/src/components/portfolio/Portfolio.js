import React from 'react';
import IMG07 from '../../assets/image/app-chat-android.png';
import IMG02 from '../../assets/image/app_message.png';
import IMG04 from '../../assets/image/ecommerce.png';
import IMG05 from '../../assets/image/meta-up.png';
import IMG01 from '../../assets/image/pencusto.png';
import IMG06 from '../../assets/image/profile.png';
import IMG03 from '../../assets/image/social_media.png';

import './portfolio.css';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="portfolio__item-image">
            <img src={IMG01} alt=""></img>
            <div className="content">
              <div className="show__title">
                <marquee direction="left" alternate="alternate">
                  This is Landing page meta-up(KOREA)
                </marquee>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href="https://github.com/Enigma-Laboratory/money-keeper"
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>

                <a
                  href="https://pencusto-dev.netlify.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="portfolio__item-image">
            <img src={IMG02} alt=""></img>
            <div className="content">
              <div className="show__title">
                <marquee direction="left" alternate="alternate">
                  This is project with xamarin and .net
                </marquee>
              </div>
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
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="portfolio__item-image">
            <img src={IMG03} alt=""></img>
            <div className="content">
              <div className="show__title">
                <marquee direction="left" alternate="alternate">
                  This is Social media using python
                </marquee>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href="https://github.com/TuTuanLe/SOCIAL"
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>

                <a
                  href="https://www.youtube.com/watch?v=RIWS_4vD7i8"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="portfolio__item-image">
            <img src={IMG04} alt=""></img>
            <div className="content">
              <div className="show__title">
                <marquee direction="left" alternate="alternate">
                  This is project ecommerce with asp.net core api, react
                </marquee>
              </div>
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
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="portfolio__item-image">
            <img src={IMG06} alt=""></img>
            <div className="content">
              <div className="show__title">
                <marquee direction="left" alternate="alternate">
                  This is portfolio item title
                </marquee>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href="https://github.com/TuTuanLe/profile"
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>

                <a href="#" className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="portfolio__item-image">
            <img src={IMG05} alt=""></img>
            <div className="content">
              <div className="show__title">
                <marquee direction="left" alternate="alternate">
                  This is Landing page meta-up(KOREA)
                </marquee>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href="https://github.com/TuTuanLe/"
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>

                <a
                  href="https://meta-up.com/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="portfolio__item-image">
            <img src={IMG07} alt=""></img>
            <div className="content">
              <div className="show__title">
                <marquee direction="left" alternate="alternate">
                  This is Chat app android
                </marquee>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href="https://github.com/TuTuanLe/Chat-app"
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>

                <a href="#" className="btn btn-primary" target="_blank">
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
