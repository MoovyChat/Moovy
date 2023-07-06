import './welcome.css';

import { useEffect } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { CURRENT_DOMAIN } from '../../constants';
import {
  SocialEmbed,
  StyledFAQ,
  StyledFlaps,
  WelcomeParent,
} from './welcome.styles';

import { withUrqlClient } from 'next-urql';
import { Helmet } from 'react-helmet';
import usePageView from '../../hooks/usePageView';

import { urqlClient } from '../../utils/urlClient';
import Footer from './footer/footer';
import HomeSlider from './home-slider/homeSlider';

import { InstagramEmbed } from 'react-social-media-embed';
import { Card } from './faq/card';
import FirstPage from './first-page/firstPage';
import Heading from './heading/heading';

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

const cards = [
  {
    title: 'What platforms does MoovyChat support?',
    content:
      'MoovyChat currently supports Netflix and Aha, an Indian OTT platform. More platforms will be added in the future.',
  },
  {
    title: 'How does MoovyNest work?',
    content:
      'MoovyNest allows you to watch movies and TV shows together with friends and family at the exact same time. It also offers 3D Smileys and the ability to send gifs in real-time.',
  },
  {
    title: 'Is MoovyChat available on mobile devices?',
    content:
      'Currently, MoovyChat is available as a chrome extension. However, iOS and Android apps are in development and will be released soon.',
  },
  {
    title: 'Is MoovyChat free to use?',
    content: 'Yes, both MoovyChat and MoovyNest are completely free to use.',
  },
  {
    title: 'Will MoovyChat support more OTT platforms in the future?',
    content:
      'Yes, MoovyChat plans to expand its support to more OTT platforms in the future.',
  },
];

const Welcome = () => {
  const handleReloadMessage: any = () => {
    window.location.reload();
  };

  usePageView();
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
      <StyledFlaps></StyledFlaps>
      <Helmet>
        <title>{`MoovyChat: Welcome`}</title>
        <meta name="description" content={`Home page of MoovyChat.`} />
        <link rel="canonical" href={`${CURRENT_DOMAIN}`} />
      </Helmet>
      <FirstPage />
      <Heading
        title="Key Features"
        content="MoovyChat and MoovyNest - Enhancing your Streaming Experience"
        id="features"
      />
      <HomeSlider />
      {/* <InstallExtension /> */}
      <Heading title="Hit Follow for more updates" id="socials" />
      <SocialEmbed>
        <div className="twitter-timeline-container">
          <TwitterTimelineEmbed
            theme="dark"
            sourceType="profile"
            screenName="MoovyChat"
            noBorders={true}
            options={{ height: 480, width: 400 }}
            noFooter
          />
        </div>
        <div className="instagram-feed">
          <InstagramEmbed
            url="https://www.instagram.com/p/CrSv_aHuL6X/"
            width={328}
            height={500}
          />
        </div>
      </SocialEmbed>
      <StyledFAQ>
        <Heading title="Frequently Asked Questions" id="faq" />
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </StyledFAQ>
      <Footer id="footer" />
    </WelcomeParent>
  );
};

export default withUrqlClient(urqlClient)(Welcome);
