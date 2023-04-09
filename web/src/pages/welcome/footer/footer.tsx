import './footer.css';

import {
  FooterContainer,
  FooterLink,
  FooterText,
  StyledFooter,
} from './footer.styles';

import React from 'react';

type props = {
  id: string;
};
const Footer: React.FC<props> = ({ id }) => {
  return (
    <StyledFooter id={id}>
      <FooterContainer>
        <FooterText>
          <FooterLink href="/privacy" target="_blank">
            Privacy Policy
          </FooterLink>{' '}
          |{' '}
          <FooterLink href="/cookie-policy" target="_blank">
            Cookie Policy
          </FooterLink>{' '}
          |{' '}
          <FooterLink href="/terms-and-conditions" target="_blank">
            Terms and Conditions
          </FooterLink>{' '}
          |{' '}
          <FooterLink href="/about-us" target="_blank">
            About us
          </FooterLink>{' '}
          |{' '}
          <FooterLink href="/contact" target="_blank">
            Contact Us
          </FooterLink>
        </FooterText>
        <FooterText>MoovyChat <span className='year'>{new Date().getFullYear()}</span></FooterText>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
