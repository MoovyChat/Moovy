import './footer.css';

import React, { Suspense } from 'react';
import {
  BUY_ME_A_COFFEE,
  DISCORD_INVITE_LINK,
  INSTAGRAM_LINK,
  LOGO_128,
  PATREON,
  TIKTOK_LINK,
  TWITTER_LINK,
} from '../../../constants';
import { FooterLink, SocialButton, StyledFooter } from './footer.styles';

import { lazyIconFa } from '../../../lazyLoad';
import PatreonWord from '../../../static/images/patreon-word.webp';
import MoovyBlack from '../../../svgs/moovy-text-logo-black.png';
import LogoLoading from '../../logo-loading/logoLoading';
import { LogoImage } from '../../header/header.styles';
import { scrollIntoView } from '../../../utils/helpers';
import { useNavigate } from 'react-router-dom';

const FaDiscord = lazyIconFa('FaDiscord');
const FaTwitter = lazyIconFa('FaTwitter');
const FaTiktok = lazyIconFa('FaTiktok');
const FaInstagram = lazyIconFa('FaInstagram');

type props = {
  id: string;
};
const Footer: React.FC<props> = ({ id }) => {
  const navigate = useNavigate();
  const promiseNavigate = (path: string): Promise<void> => {
    return new Promise(resolve => {
      navigate(path);
      setTimeout(resolve, 100); // Adjust this duration if needed
    });
  };
  const ICON_SIZE = 25;
  return (
    <StyledFooter id={id} role="contentinfo">
      <LogoImage
        className="footer-logo"
        onClick={async e => {
          e.stopPropagation();
          await promiseNavigate('/');
          scrollIntoView('home');
        }}
      >
        <div className="logo-image">
          <img
            className="image"
            src={LOGO_128}
            alt="MoovyChat Logo"
            id="blur-escape"
            loading="lazy"
            width="150"
            height="150"
          />
          <div className="beta">MoovyChat</div>
        </div>
      </LogoImage>
      <section className="sub-title" aria-labelledby="app-description">
        <p id="app-description">
          <span>Watch Together and Live Comments for Movies/Shows</span>
        </p>
      </section>
      <div className="sub-title line"></div>
      <nav className="links-block" aria-label="Footer Navigation">
        <div className="block">
          <address className="title">Contact</address>
          <div className="links">
            <FooterLink
              className="special"
              href="mailto:support@moovychat.com"
              target="_blank"
              aria-label="support@moovychat.com"
            >
              support@moovychat.com
            </FooterLink>
          </div>
        </div>
        <div className="block">
          <div className="title">Menu</div>
          <div className="links">
            <FooterLink
              onClick={async () => {
                await promiseNavigate('/');
                scrollIntoView('home');
              }}
              tabIndex={0}
              role="button"
              aria-label="Home"
            >
              Home
            </FooterLink>
            <FooterLink
              onClick={async () => {
                await promiseNavigate('/about');
                scrollIntoView('home');
              }}
              tabIndex={0}
              role="button"
              aria-label="About"
            >
              About
            </FooterLink>
            <FooterLink
              onClick={async () => {
                await promiseNavigate('/');
                scrollIntoView('contact');
              }}
              tabIndex={0}
              role="button"
              aria-label="Contact"
            >
              Contact
            </FooterLink>
            <FooterLink
              href="/cookie-policy"
              target="_blank"
              aria-label="Cookie Policy"
            >
              Cookie Policy
            </FooterLink>
            <FooterLink
              href="/privacy"
              target="_blank"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </FooterLink>
            <FooterLink
              href="/terms-and-conditions"
              target="_blank"
              aria-label="Terms and Conditions"
            >
              Terms & Conditions
            </FooterLink>
          </div>
        </div>

        <div className="block">
          <div className="title">Socials</div>
          <div className="links">
            <Suspense fallback={<LogoLoading />}>
              <SocialButton
                onClick={e => {
                  e.stopPropagation();
                  window.open(DISCORD_INVITE_LINK, '_blank');
                }}
                aria-label="Visit our Discord"
              >
                <FaDiscord
                  color="cornflowerblue"
                  size={ICON_SIZE}
                  style={{ pointerEvents: 'none' }}
                  aria-hidden="true"
                />
                <span>Discord</span>
              </SocialButton>
              <SocialButton
                onClick={e => {
                  e.stopPropagation();
                  window.open(TWITTER_LINK, '_blank');
                }}
                aria-label="Visit our Twitter"
              >
                <FaTwitter
                  color="deepskyblue"
                  size={ICON_SIZE}
                  style={{ pointerEvents: 'none' }}
                  aria-hidden="true"
                />
                <span>Twitter</span>
              </SocialButton>
              <SocialButton
                onClick={e => {
                  e.stopPropagation();
                  window.open(TIKTOK_LINK, '_blank');
                }}
                aria-label="Visit our Tiktok"
              >
                <FaTiktok
                  className="icon"
                  size={ICON_SIZE}
                  style={{ pointerEvents: 'none' }}
                  aria-hidden="true"
                />
                <span>Tiktok</span>
              </SocialButton>
              <SocialButton
                onClick={e => {
                  e.stopPropagation();
                  window.open(INSTAGRAM_LINK, '_blank');
                }}
                aria-label="Visit our Instagram"
              >
                <FaInstagram
                  color="hotpink"
                  size={ICON_SIZE}
                  style={{ pointerEvents: 'none' }}
                  aria-hidden="true"
                />
                <span>Instagram</span>
              </SocialButton>
            </Suspense>
          </div>
        </div>

        <div className="block">
          <div className="title">Donate & Support</div>
          <div className="links">
            <SocialButton
              className="patreon"
              onClick={e => {
                e.stopPropagation();
                window.open(PATREON, '_blank');
              }}
              aria-label="Support us on Patreon"
            >
              <div className="logo" id="text-focus">
                <img
                  src={PatreonWord}
                  alt="Support us on Patreon"
                  id="text-focus"
                  width={120}
                />
              </div>
            </SocialButton>
            <SocialButton
              className="bmc"
              onClick={e => {
                e.stopPropagation();
                window.open(BUY_ME_A_COFFEE, '_blank');
              }}
              aria-label="Buy us a coffee"
            >
              <div className="logo" id="text-focus">
                <img
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  alt="Buy us a coffee"
                  id="text-focus"
                  width={120}
                />
              </div>
            </SocialButton>
          </div>
        </div>
      </nav>
      <div className="moovy-chat-copyright">
        © {new Date().getFullYear()} MoovyChat
      </div>
    </StyledFooter>
  );
};

export default Footer;
