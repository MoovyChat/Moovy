import { FormEventHandler, useEffect, useState } from 'react';
import {
  PrivacyPolicyContent,
  PrivacyPolicyWrapper,
} from '../privacy-policy/privacyPolicy.styles';

import { Form } from './contactUs.styled';
import { urqlClient } from '../../utils/urlClient';
import { useCreateMessageMutation } from '../../generated/graphql';
import { withUrqlClient } from 'next-urql';

const ContactUs = () => {
  useEffect(() => {
    document.title = 'Contact us';
  }, []);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [{ fetching, error }, createMessage] = useCreateMessageMutation();

  const postMessage: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createMessage({ name, email, message })
      .then((res) => {
        const { error, data } = res;
        if (error) {
          alert('Failed to send message');
        }
        if (data) {
          alert('Message sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
        }
      })
      .catch(() => {
        alert('Failed to send message');
      });
  };
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

        <Form onSubmit={postMessage}>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            value={message}
            required
            onChange={(event) => setMessage(event.target.value)}></textarea>

          <button type='submit' disabled={fetching}>
            {fetching ? 'Sending message...' : 'Send'}
          </button>
          {error && <p>Error sending message</p>}
        </Form>
      </PrivacyPolicyContent>
    </PrivacyPolicyWrapper>
  );
};

export default withUrqlClient(urqlClient)(ContactUs);
