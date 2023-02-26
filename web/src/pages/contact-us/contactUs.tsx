import {
  PrivacyPolicyContent,
  PrivacyPolicyWrapper,
} from '../privacy-policy/privacyPolicy.styles';

import { Form } from './contactUs.styled';
import { useEffect } from 'react';

const ContactUs = () => {
  useEffect(() => {
    document.title = 'Contact us';
  }, []);
  return (
    <PrivacyPolicyWrapper>
      <PrivacyPolicyContent>
        <h1>Contact Us</h1>
        <p>
          Thank you for using MoovyChat Ltd. If you have any questions,
          comments, or concerns, please do not hesitate to contact us.
        </p>
        <p>
          You can reach us by email at{' '}
          <a href='mailto:support@moovychat.com'>support@moovychat.com</a> or{' '}
          <a href='mailto:chatmoovy@gmail.com'>chatmoovy@gmail.com</a> or by
          filling out the contact form below:
        </p>

        <Form>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' />

          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' />

          <label htmlFor='message'>Message:</label>
          <textarea id='message' name='message'></textarea>

          <button type='submit'>Send</button>
        </Form>
      </PrivacyPolicyContent>
    </PrivacyPolicyWrapper>
  );
};

export default ContactUs;
