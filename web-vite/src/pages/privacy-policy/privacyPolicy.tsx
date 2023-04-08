import {
  LastUpdated,
  PrivacyPolicyContent,
  PrivacyPolicyParagraph,
  PrivacyPolicySectionTitle,
  PrivacyPolicyTitle,
  PrivacyPolicyWrapper,
} from './privacyPolicy.styles';

import { CURRENT_DOMAIN } from '../../constants';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  const lastUpdated = 'February 19, 2023';
  useEffect(() => {
    document.title = 'Privacy Policy';
  }, []);
  return (
    <PrivacyPolicyWrapper>
      <Helmet>
        <title>{`Privacy Policy`}</title>
        <meta name='description' content={`Privacy Policy`} />
        <link rel='canonical' href={`${CURRENT_DOMAIN}/privacy}`} />
      </Helmet>
      <PrivacyPolicyContent>
        <PrivacyPolicyTitle>Privacy Policy</PrivacyPolicyTitle>
        <LastUpdated>Last updated: {lastUpdated}</LastUpdated>
        <PrivacyPolicyParagraph>
          This Privacy Policy sets out how MoovyChat Ltd. (“MoovyChat”) uses and
          protects any information that you give MoovyChat when you use our
          website, tool, and Chrome extension (collectively, the “Service”).
        </PrivacyPolicyParagraph>
        <PrivacyPolicyParagraph>
          MoovyChat is committed to ensuring that your privacy is protected.
          Should we ask you to provide certain information by which you can be
          identified when using the Service, then you can be assured that it
          will only be used in accordance with this Privacy Policy.
        </PrivacyPolicyParagraph>
        <PrivacyPolicySectionTitle>
          Information We Collect
        </PrivacyPolicySectionTitle>
        <PrivacyPolicyParagraph>
          We may collect the following information:
          <ul>
            <li>
              Information you provide when you sign up for the Service, such as
              your name and email address
            </li>
            <li>
              Information related to your use of the Service, such as your
              comments and feedback, your activity on the Service (such as views
              and visits), and technical information (such as device type and
              browser type)
            </li>
            <li>
              Information from third party platforms that you use to sign in to
              the Service, such as Google Login
            </li>
          </ul>
        </PrivacyPolicyParagraph>
        <PrivacyPolicySectionTitle>
          Relationship to OTT Platforms
        </PrivacyPolicySectionTitle>
        <PrivacyPolicyParagraph>
          We are not affiliated with any OTT platforms, such as Netflix, and we
          are an independent developer offering a tool and chrome extension to
          enhance users' OTT watching experience. We do not collect any personal
          information about users' activity on any OTT platforms other than our
          own Service, and we do not share any user data with OTT platforms or
          their partners.
        </PrivacyPolicyParagraph>
        <PrivacyPolicySectionTitle>
          How We Use Your Information
        </PrivacyPolicySectionTitle>
        <PrivacyPolicyParagraph>
          We may use the information we collect from you for the following
          purposes:
          <ul>
            <li>To provide and improve the Service</li>
            <li>To personalize your experience on the Service</li>
            <li>
              To communicate with you about the Service and related products and
              services
            </li>
            <li>To monitor and analyze usage of the Service</li>
            <li>To comply with legal obligations</li>
          </ul>
        </PrivacyPolicyParagraph>
        <PrivacyPolicySectionTitle>
          Sharing Your Information
        </PrivacyPolicySectionTitle>
        <PrivacyPolicyParagraph>
          We may share your information with third parties in the following
          circumstances:
          <ul>
            <li>
              With service providers who help us to provide the Service, such as
              hosting providers and analytics providers
            </li>
            <li>
              To comply with legal obligations, such as in response to a
              subpoena or court order
            </li>
            <li>
              If we believe that disclosure is necessary to protect our rights
              or property, or the rights or property of others
            </li>
            <li>
              In connection with a sale, merger, acquisition, or other corporate
              transaction
            </li>
          </ul>
        </PrivacyPolicyParagraph>
        <PrivacyPolicySectionTitle>Security</PrivacyPolicySectionTitle>
        <PrivacyPolicyParagraph>
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorized access or disclosure, we have put in place
          suitable physical, electronic, and managerial procedures to safeguard
          and secure the information we collect online.
        </PrivacyPolicyParagraph>
        <PrivacyPolicySectionTitle>
          Google Analytics and Firebase
        </PrivacyPolicySectionTitle>
        <PrivacyPolicyParagraph>
          We use Google Analytics and Firebase to help us understand how our
          users engage with the Service. Google Analytics and Firebase use
          cookies to collect information about your use of the Service. This
          information is used to compile reports and to help us improve the
          Service. The information collected by Google Analytics and Firebase is
          anonymous and does not identify you as an individual.
        </PrivacyPolicyParagraph>
        <PrivacyPolicyParagraph>
          We also use Firebase to authenticate users who sign in to the Service
          using Google Login. When you sign in using Google Login, we collect
          your name and email address from Google to create a user profile on
          the Service.
        </PrivacyPolicyParagraph>
        <PrivacyPolicySectionTitle>Third-Party Links</PrivacyPolicySectionTitle>
        <PrivacyPolicyParagraph>
          The Service may contain links to third-party websites or services. We
          are not responsible for the privacy practices or the content of such
          websites or services. We encourage you to read the privacy policies of
          any third-party websites or services that you visit.
        </PrivacyPolicyParagraph>
        <PrivacyPolicySectionTitle>Data Security</PrivacyPolicySectionTitle>
        <PrivacyPolicyParagraph>
          We take reasonable measures to protect your information from
          unauthorized access, disclosure, and alteration. However, no method of
          transmission over the internet or electronic storage is completely
          secure.
        </PrivacyPolicyParagraph>
        <PrivacyPolicySectionTitle>
          Children's Privacy
        </PrivacyPolicySectionTitle>
        <PrivacyPolicyParagraph>
          The Service is not intended for use by children under the age of 13.
          We do not knowingly collect personal information from children under
          13.
        </PrivacyPolicyParagraph>
        <PrivacyPolicySectionTitle>Your Choices</PrivacyPolicySectionTitle>
        <PrivacyPolicyParagraph>
          You may access and update your information by contacting us at{' '}
          <a href='mailto:support@moovychat.com'>support@moovychat.com</a> or{' '}
          <a href='mailto:chatmoovy@gmail.com'>chatmoovy@gmail.com</a>. You may
          also opt-out of receiving promotional messages from us by following
          the instructions in those messages.
        </PrivacyPolicyParagraph>
        <PrivacyPolicySectionTitle>
          Changes to this Privacy Policy
        </PrivacyPolicySectionTitle>
        <PrivacyPolicyParagraph>
          MoovyChat may change this Privacy Policy from time to time. We will
          post the updated Privacy Policy on the Service and will indicate the
          date of the latest revision. We encourage you to review the Privacy
          Policy regularly for any updates or changes.
        </PrivacyPolicyParagraph>
        <PrivacyPolicySectionTitle>Contact Us</PrivacyPolicySectionTitle>
        <PrivacyPolicyParagraph>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{' '}
          <a href='mailto:support@moovychat.com'>support@moovychat.com</a> or{' '}
          <a href='mailto:chatmoovy@gmail.com'>chatmoovy@gmail.com</a> .
        </PrivacyPolicyParagraph>
      </PrivacyPolicyContent>
    </PrivacyPolicyWrapper>
  );
};

export default PrivacyPolicy;
