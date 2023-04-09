import {
  PrivacyPolicyContent,
  PrivacyPolicyWrapper,
} from '../privacy-policy/privacyPolicy.styles';
import React, { useEffect } from 'react';

import { CURRENT_DOMAIN } from '../../constants';
import { Helmet } from 'react-helmet';

const CookiePolicy: React.FC = () => {
  return (
    <PrivacyPolicyWrapper>
      <Helmet>
        <title>Cookie Policy</title>
        <meta name="description" content="Cookie Policy" />
        <link rel="canonical" href={`${CURRENT_DOMAIN}/privacy`} />
      </Helmet>
      <PrivacyPolicyContent>
        <h1>Cookie Policy</h1>
        <div>
          <p>
            This website uses cookies to improve your experience while you
            navigate through the website. Out of these cookies, the cookies that
            are categorized as necessary are stored on your browser as they are
            essential for the working of basic functionalities of the website.
            We also use third-party cookies that help us analyze and understand
            how you use this website.
          </p>

          <h3>What are cookies?</h3>
          <p>
            Cookies are small text files that are stored on your device when you
            visit a website. Cookies are used to make websites work more
            efficiently, as well as to provide information to the owners of the
            site.
          </p>

          <h3>How do we use cookies?</h3>
          <p>
            We use cookies to improve your experience on our website. The
            cookies we use allow us to recognize you when you return to our
            website and to remember your preferences (such as language and
            region) so that you don’t have to set them every time you visit.
          </p>

          <h3>What types of cookies do we use?</h3>
          <p>We use the following types of cookies:</p>
          <ul>
            <li>
              Strictly necessary cookies – these are required for the website to
              function correctly.
            </li>
            <li>
              Performance cookies – these help us understand how visitors use
              our website so that we can improve it.
            </li>
            <li>
              Functionality cookies – these are used to remember your
              preferences and to personalize your experience.
            </li>
            <li>
              Targeting cookies – these are used to deliver advertisements that
              are relevant to you and your interests.
            </li>
          </ul>

          <h3>Third-party cookies</h3>
          <p>
            We also use third-party cookies to help us analyze and understand
            how you use this website. These cookies are placed by Google
            Analytics and Facebook Pixel. The information generated by these
            cookies about your use of the website (including your IP address)
            will be transmitted to and stored by Google and Facebook on servers
            in the United States.
          </p>

          <h3>How to control cookies</h3>
          <p>
            You can control the use of cookies on this website through your
            browser settings. However, please note that disabling cookies may
            affect the functionality of the website.
          </p>

          <h3>Changes to this Cookie Policy</h3>
          <p>
            We may update this Cookie Policy from time to time in order to
            reflect changes to the cookies we use or for other operational,
            legal or regulatory reasons. Please therefore re-visit this Cookie
            Policy regularly to stay informed about our use of cookies and
            related technologies.
          </p>

          <h3>Contact Information</h3>
          <p>
            If you have any questions about this Cookie Policy, please contact
            us at{' '}
            <a href="mailto:contact@moovychat.com">contact@moovychat.com</a>.
          </p>
        </div>
      </PrivacyPolicyContent>
    </PrivacyPolicyWrapper>
  );
};

export default CookiePolicy;
