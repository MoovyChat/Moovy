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

const FaDiscord = lazyIconFa('FaDiscord');
const FaTwitter = lazyIconFa('FaTwitter');
const FaTiktok = lazyIconFa('FaTiktok');
const FaInstagram = lazyIconFa('FaInstagram');

type props = {
  id: string;
};
const Footer: React.FC<props> = ({ id }) => {
  const ICON_SIZE = 25;
  return (
    <StyledFooter id={id}>
      <LogoImage className="footer-logo">
        <div className="logo-image">
          <img
            className="image"
            src={LOGO_128}
            alt="QuietChat"
            id="blur-escape"
            loading="lazy"
            width="150"
            height="150"
          />
          <div className="beta">MoovyChat</div>
        </div>
      </LogoImage>
      <div className="sub-title">
        <p>
          <span>Watch Together and Live Comments for Movies/Shows</span>
        </p>
      </div>
      <div className="sub-title line"></div>
      <div className="links-block">
        <div className="block">
          <div className="title">Contact</div>
          <div className="links">
            <FooterLink
              className="special"
              href="mailto:support@moovychat.com"
              target="_blank"
            >
              support@moovychat.com
            </FooterLink>
          </div>
        </div>
        <div className="block">
          <div className="title">Menu</div>
          <div className="links">
            <FooterLink onClick={() => scrollIntoView('home')}>Home</FooterLink>
            <FooterLink href="/about-us" target="_blank">
              About
            </FooterLink>
            <FooterLink onClick={() => scrollIntoView('contact')}>
              Contact
            </FooterLink>
            <FooterLink href="/cookie-policy" target="_blank">
              Cookie Policy
            </FooterLink>
            <FooterLink href="/privacy" target="_blank">
              Privacy Policy
            </FooterLink>
            <FooterLink href="/terms-and-conditions" target="_blank">
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
              >
                <FaDiscord
                  color="cornflowerblue"
                  size={ICON_SIZE}
                  style={{ pointerEvents: 'none' }}
                />
                <FooterLink>Discord</FooterLink>
              </SocialButton>
              <SocialButton
                onClick={e => {
                  e.stopPropagation();
                  window.open(TWITTER_LINK, '_blank');
                }}
              >
                <FaTwitter
                  color="deepskyblue"
                  size={ICON_SIZE}
                  style={{ pointerEvents: 'none' }}
                />
                <FooterLink>Twitter</FooterLink>
              </SocialButton>
              <SocialButton
                onClick={e => {
                  e.stopPropagation();
                  window.open(TIKTOK_LINK, '_blank');
                }}
              >
                <FaTiktok
                  className="icon"
                  size={ICON_SIZE}
                  style={{ pointerEvents: 'none' }}
                />
                <FooterLink>Tiktok</FooterLink>
              </SocialButton>
              <SocialButton
                onClick={e => {
                  e.stopPropagation();
                  window.open(INSTAGRAM_LINK, '_blank');
                }}
              >
                <FaInstagram
                  color="hotpink"
                  size={ICON_SIZE}
                  style={{ pointerEvents: 'none' }}
                />
                <FooterLink>Instagram</FooterLink>
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
            >
              <div className="logo" id="text-focus">
                <img
                  src={PatreonWord}
                  alt="patreon"
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
            >
              <div className="logo" id="text-focus">
                <img
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  alt="bmc"
                  id="text-focus"
                  width={120}
                />
              </div>
            </SocialButton>
          </div>
        </div>
      </div>
      <div className="moovy-chat-copyright">
        © {new Date().getFullYear()} MoovyChat
      </div>
    </StyledFooter>
  );
};

export default Footer;
