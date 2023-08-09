import React, { useEffect, useRef } from 'react';
import { StyledAbout } from './about.styles';
import { Helmet } from 'react-helmet';
import { CURRENT_DOMAIN } from '../../../constants';

const About = () => {
  const backgroundRef = useRef(null);

  return (
    <StyledAbout>
      <Helmet>
        <title>{`About | MoovyChat`}</title>
        <meta name="description" content={`Home page of MoovyChat.`} />
        <link rel="canonical" href={`${CURRENT_DOMAIN}/about`} />
      </Helmet>
      <div className="about-background">
        <img
          ref={backgroundRef}
          src="https://static.wixstatic.com/media/c837a6_a5005ceb39124d8c8e3e72aafc6e7918~mv2.jpg/v1/fill/w_980,h_969,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_a5005ceb39124d8c8e3e72aafc6e7918~mv2.jpg"
          alt="Background image representing MoovyChat's experience"
        />
      </div>
      <div className="overlay" aria-hidden="true"></div>
      <section className="about-container" aria-label="About MoovyChat">
        <h1>About MoovyChat</h1>
        <p className="sub-title">Transforming OTT Viewing</p>
        <p className="desc">
          MoovyChat is a technology company that is revolutionizing the way we
          watch movies and shows online. Our platform allows you to sync streams
          on popular services like Netflix, DisneyPlus, Hulu, and Aha, and share
          real-time comments and reactions with your friends and family, all in
          your own 'MoovyNest'. Experience interactive entertainment like never
          before!
        </p>
        <p className="footer-desc">
          At MoovyChat, we are passionate about changing the way we engage with
          our favorite movies and shows. Our team of experts has years of
          experience in the tech industry and is dedicated to providing a
          seamless and innovative user experience. We believe that technology
          should enhance our viewing experience, not detract from it.
        </p>
      </section>
    </StyledAbout>
  );
};

export default About;
