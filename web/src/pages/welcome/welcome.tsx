import './welcome.css';

import {
  CURRENT_DOMAIN,
  DISCORD_INVITE_LINK,
  EXTENSION_URL,
  INSTAGRAM_LINK,
  TIKTOK_LINK,
  TWITTER_LINK,
  home,
} from '../../constants';
import { FaDiscord, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { StyledFlaps, WelcomeParent } from './welcome.styles';

import Dark from '../../static/images/dark-chat.webp';
import Dark300 from '../../static/images/dark-chat-300x.webp';
import Dark600 from '../../static/images/dark-chat-600x.webp';
import Features from './features/features';
import Footer from './footer/footer';
import { Helmet } from 'react-helmet';
import { Image } from '../../components/Image/image';
import InstallationGuide from './installation-guide/installationGuide';
import Light from '../../static/images/light-chat.webp';
import Light300 from '../../static/images/light-chat-300x.webp';
import Light600 from '../../static/images/light-chat-600x.webp';
import { LogoSet } from '../../components/logoset/logoset';
import { RiArrowRightCircleFill } from 'react-icons/ri';
import Screenshots from './screenshots/screenshots';
import { useEffect } from 'react';

const iconSize = 25;
export const streamingServices = [
  {
    title: 'Netflix',
    imgUrl:
      'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
    color: '#E50915',
    home: 'https://www.netflix.com/',
    status: 'Available',
  },
  {
    title: 'Disney+',
    imgUrl:
      'https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=w240-h480-rw',
    color: '#022B78',
    home: 'https://www.disneyplus.com/home',
    status: 'Available soon',
  },
  {
    title: 'Hulu',
    imgUrl:
      'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bk8cux6dapq8qjzylfaj',
    color: '#21E684',
    home: 'https://www.hulu.com/',
    status: 'Available soon',
  },
  {
    title: 'HBO Max',
    imgUrl:
      'https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8',
    color: '#370766',
    home: 'https://www.hbomax.com/',
    status: 'Available soon',
  },
  {
    title: 'Amazon Prime Video',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41mpv9rBhmL.webp',
    color: '#2b9ec1',
    home: 'https://www.amazon.com/gp/video/storefront/',
    status: 'Available soon',
  },
];
const Welcome = () => {
  const handleReloadMessage = () => {
    // reload the page
    window.location.reload();
  };

  useEffect(() => {
    // listen for a message to reload the page
    const reloadTabsChannel = new BroadcastChannel('reloadTabsChannel');
    reloadTabsChannel.addEventListener('message', handleReloadMessage);

    return () => {
      // cleanup: remove the event listener
      reloadTabsChannel.removeEventListener('message', handleReloadMessage);
    };
  }, []);
  return (
    <WelcomeParent>
      <StyledFlaps>
        <div className='social-container'>
          <div
            id='text-focus'
            className='discord social'
            onClick={(e) => {
              e.stopPropagation();
              window.open(DISCORD_INVITE_LINK, '_blank');
            }}>
            <FaDiscord
              color='cornflowerblue'
              size={iconSize}
              style={{ pointerEvents: 'none' }}
            />
          </div>
          <div
            className='twitter social'
            id='text-focus'
            onClick={(e) => {
              e.stopPropagation();
              window.open(TWITTER_LINK, '_blank');
            }}>
            <FaTwitter
              color='deepskyblue'
              size={iconSize}
              style={{ pointerEvents: 'none' }}
            />
          </div>
          <div
            className='tiktok social'
            id='text-focus'
            onClick={(e) => {
              e.stopPropagation();
              window.open(TIKTOK_LINK, '_blank');
            }}>
            <FaTiktok
              className='icon'
              size={iconSize}
              style={{ pointerEvents: 'none' }}
            />
          </div>
          <div
            className='instagram social'
            id='text-focus'
            onClick={(e) => {
              e.stopPropagation();
              window.open(INSTAGRAM_LINK, '_blank');
            }}>
            <FaInstagram
              color='hotpink'
              size={iconSize}
              style={{ pointerEvents: 'none' }}
            />
          </div>
        </div>
      </StyledFlaps>
      <Helmet>
        <title>{`MoovyChat: Welcome`}</title>
        <meta name='description' content={`Home page of MoovyChat.`} />
        <link rel='canonical' href={`${CURRENT_DOMAIN}}`} />
      </Helmet>
      <div className='custom-shape-divider-top-1672047931'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'>
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            className='shape-fill'></path>
        </svg>
      </div>
      <div className='home'>
        <div className='pics'>
          <div className='first pic'>
            <picture>
              <Image
                className='image'
                srcSet={`${Light300} 300w, ${Light600} 600w`}
                alt='light'
              />
            </picture>
          </div>
          <div className='second pic'>
            <picture>
              <Image
                className='image'
                srcSet={`${Dark300} 300w, ${Dark600} 600w`}
                alt='dark'
              />
            </picture>
          </div>
        </div>
        <div className='heading'>
          <div className='company'>
            <p>Supported Platforms</p>
            <span className='supported-platforms'>
              {streamingServices.map(
                (platform) =>
                  platform.title === 'Netflix' && (
                    <LogoSet platform={platform} key={platform.title} />
                  )
              )}
            </span>
          </div>
          <div className='text'>{home.heading}</div>
          <div className='sub'>{home.sub}</div>
          <div className='sub2'>{home.sub2}</div>
          <div
            className='get-started'
            onClick={(e) => {
              e.stopPropagation();
              window.open(EXTENSION_URL, '_blank');
            }}>
            <div className='fill'></div>
            <label>Install Extension</label>
            <RiArrowRightCircleFill size={25} />
          </div>
        </div>
        <div className='embed'>MOOVY</div>
      </div>
      <Screenshots id='screenshots' />
      <Features id='features' />
      <InstallationGuide id='install-guide' />
      <Footer id='footer' />
    </WelcomeParent>
  );
};

export default Welcome;
