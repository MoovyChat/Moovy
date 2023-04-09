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
      <div className='custom-shape-divider-top-143'>
        <svg
          data-name='Layer 2'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'>
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            className='shape-fill'></path>
        </svg>
      </div>
      <FooterContainer>
        <FooterText>
          <FooterLink
            onClick={(e) => {
              e.stopPropagation();
              window.open('/privacy', '_blank');
            }}>
            Privacy Policy
          </FooterLink>{' '}
          |{' '}
          <FooterLink
            onClick={(e) => {
              e.stopPropagation();
              window.open('/cookie-policy', '_blank');
            }}>
            Cookie Policy
          </FooterLink>{' '}
          |{' '}
          <FooterLink
            onClick={(e) => {
              e.stopPropagation();
              window.open('/terms-and-conditions', '_blank');
            }}>
            Terms and Conditions
          </FooterLink>{' '}
          |{' '}
          <FooterLink
            onClick={(e) => {
              e.stopPropagation();
              window.open('/about-us', '_blank');
            }}>
            About us
          </FooterLink>{' '}
          |{' '}
          <FooterLink
            onClick={(e) => {
              e.stopPropagation();
              window.open('/contact', '_blank');
            }}>
            Contact Us
          </FooterLink>
        </FooterText>
        <FooterText>MoovyChat Ltd. 2023</FooterText>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
