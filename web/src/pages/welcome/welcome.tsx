import './welcome.css';

import { useEffect, useRef } from 'react';
import { CURRENT_DOMAIN } from '../../constants';
import { WelcomeParent } from './welcome.styles';

import { withUrqlClient } from 'next-urql';
import { Helmet } from 'react-helmet';
import usePageView from '../../hooks/usePageView';
import { urqlClient } from '../../utils/urlClient';
import Footer from './footer/footer';
import WelcomeHomePage from './welcome-home/welcomeHomePage';
import { Outlet } from 'react-router-dom';

export const streamingServices = [
  {
    title: 'Netflix',
    imgUrl:
      'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/netflix.webp',
    color: '#E50915',
    home: 'https://www.netflix.com/',
    status: 'Available',
  },
  {
    title: 'Disney+',
    imgUrl:
      'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/disney.webp',
    color: '#022B78',
    home: 'https://www.disneyplus.com/home',
    status: 'Available',
  },
  {
    title: 'Hulu',
    imgUrl:
      'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/hulu.webp',
    color: '#21E684',
    home: 'https://www.hulu.com/',
    status: 'Available',
  },
  {
    title: 'HBO Max',
    imgUrl:
      'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/hbomax.webp',
    color: '#370766',
    home: 'https://www.hbomax.com/',
    status: 'Available',
  },
  {
    title: 'Aha',
    imgUrl:
      'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/aha.webp',
    color: '#ed6002',
    home: 'https://www.aha.video',
    status: 'Available',
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
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
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
      <Helmet>
        <title>{`Home | MoovyChat`}</title>
        <meta name="description" content={`Home page of MoovyChat.`} />
        <link rel="canonical" href={`${CURRENT_DOMAIN}`} />
      </Helmet>
      <Outlet />
      <Footer id="footer" />
    </WelcomeParent>
  );
};

export default withUrqlClient(urqlClient)(Welcome);
