import './footer.css';

import {
  BUY_ME_A_COFFEE,
  DISCORD_INVITE_LINK,
  INSTAGRAM_LINK,
  PATREON,
  TIKTOK_LINK,
  TWITTER_LINK,
} from '../../../constants';
import { FooterLink, SocialButton, StyledFooter } from './footer.styles';
import React, { Suspense } from 'react';

import Moovy from '../../../svgs/moovy-text-logo-white.png';
import PatreonWord from '../../../static/images/patreon-word.webp';
import { lazyIconFa } from '../../../lazyLoad';

const FaDiscord = lazyIconFa('FaDiscord');
const FaTwitter = lazyIconFa('FaTwitter');
const FaTiktok = lazyIconFa('FaTiktok');
const FaInstagram = lazyIconFa('FaInstagram');

type props = {
  id: string;
};
const Footer: React.FC<props> = ({ id }) => {
  return (
    <StyledFooter id={id}>
      <div className="image-container">
        <img src={Moovy} alt="moovy" width="200px" />
      </div>
      <div className="links-block">
        <div className="block">
          <div className="title">Legal</div>
          <div className="links">
            <FooterLink href="/terms-and-conditions" target="_blank">
              Terms & Conditions
            </FooterLink>
            <FooterLink href="/privacy" target="_blank">
              Privacy Policy
            </FooterLink>
            <FooterLink href="/cookie-policy" target="_blank">
              Cookie Policy
            </FooterLink>
          </div>
        </div>

        <div className="block">
          <div className="title">Contact</div>
          <div className="links">
            <FooterLink className="special" href="mailto:support@moovychat.com" target="_blank">
              support@moovychat.com
            </FooterLink>
            <FooterLink href="/about-us" target="_blank">
              About us
            </FooterLink>
            <FooterLink href="/contact" target="_blank">
              Contact us
            </FooterLink>
            <div>© {new Date().getFullYear()} MoovyChat</div>
          </div>
        </div>

        <div className="block">
          <div className="title">Socials</div>
          <div className="links">
            <Suspense>
              <SocialButton
                onClick={e => {
                  e.stopPropagation();
                  window.open(DISCORD_INVITE_LINK, '_blank');
                }}
              >
                <FaDiscord
                  color="cornflowerblue"
                  size={20}
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
                  size={20}
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
                  size={20}
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
                  size={20}
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
            <div
              className="patreon"
              tabIndex={0}
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
            </div>
            <div
              className="bmc"
              tabIndex={0}
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
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
