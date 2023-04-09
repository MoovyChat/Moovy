import './aboutUs.css';
import {
  PrivacyPolicyContent,
  PrivacyPolicyWrapper,
} from '../privacy-policy/privacyPolicy.styles';

import { CURRENT_DOMAIN } from '../../constants';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const AboutUs = () => {
  return (
    <PrivacyPolicyWrapper>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="About us" />
        <link rel="canonical" href={`${CURRENT_DOMAIN}/about-us`} />
      </Helmet>
      <PrivacyPolicyContent>
        <h1>About Us</h1>
        <p>
          MoovyChat Ltd. is a startup company that provides a service for
          enhancing the user's experience on over-the-top (OTT) platforms, such
          as Netflix, Hulu, and Amazon Prime Video.
        </p>
        <p>
          Our mission is to help users discover new content, share their
          opinions with others, and connect with like-minded viewers around the
          world.
        </p>
        <p>
          We are a small team of developers, designers, and content enthusiasts
          who are passionate about movies and TV shows. We believe that
          technology can make the entertainment experience more social,
          interactive, and personalized.
        </p>
        <p>
          For any questions or feedback, please contact us at
          <a href="mailto:support@moovychat.com">
            support@moovychat.com
          </a> and <a href="mailto:chatmoovy@gmail.com">chatmoovy@gmail.com</a>.
        </p>
      </PrivacyPolicyContent>
    </PrivacyPolicyWrapper>
  );
};

export default AboutUs;
