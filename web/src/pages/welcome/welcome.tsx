import './welcome.css';

import { useEffect } from 'react';
import { CURRENT_DOMAIN, HOMEPAGE_ICONS } from '../../constants';
import {
  Heading1,
  Heading2,
  HomeSection,
  StyledSpan,
  WelcomeParent,
} from './welcome.styles';

import { withUrqlClient } from 'next-urql';
import { Helmet } from 'react-helmet';
import usePageView from '../../hooks/usePageView';
import { urqlClient } from '../../utils/urlClient';
import Footer from './footer/footer';
import MiniInfoCard from './mini-info-card/miniInfoCard';
import FadeInWhenVisible from '../../components/fade-in-when-visible/FadeInWhenVisible';
import ParallaxImage from '../../components/parallax-image/parallaxImage';
import ServiceInfoCard from './service-info-card/serviceInfoCardContainer';

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
      <HomeSection className="first-section">
        <div className="mesh-container">
          <section className="mesh-icons">
            <div className="columns">
              <FadeInWhenVisible
                animationDuration="3s"
                animationDelay="0.6s"
                direction="top"
                distance="50px"
              >
                <div className="image-container">
                  <img src={HOMEPAGE_ICONS.like} width={330} height={300} />
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible
                animationDuration="3s"
                animationDelay="0.6s"
                direction="left"
                distance="40px"
              >
                <div className="mini-card-container">
                  <MiniInfoCard
                    title="MoovyChat"
                    subTitle="Transforming OTT Viewing"
                    src={HOMEPAGE_ICONS.oswald}
                  />
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible
                animationDuration="3s"
                animationDelay="0.6s"
                direction="bottom"
                distance="50px"
              >
                <div className="image-container">
                  <img src={HOMEPAGE_ICONS.video} width={300} height={300} />
                </div>
              </FadeInWhenVisible>
            </div>
          </section>
          <section className="mesh-icons">
            <FadeInWhenVisible
              animationDuration="3s"
              animationDelay="0.6s"
              direction="inPlace"
            >
              <div className="columns head-section">
                <Heading1 className="head-title">
                  <span>
                    Join the Watch Party & <StyledSpan>Netflix</StyledSpan>{' '}
                    Comments
                  </span>
                </Heading1>
                <p className="">
                  Experience Interactive Entertainment Like Never Before
                </p>
              </div>
            </FadeInWhenVisible>
          </section>
          <section className="mesh-sub-content">
            <div className="mesh-container">
              <section className="mesh-icons">
                <div className="columns">
                  <FadeInWhenVisible
                    animationDuration="3s"
                    animationDelay="0.6s"
                    direction="left"
                    distance="40px"
                  >
                    <div className="mini-card-container">
                      <MiniInfoCard
                        title="OTT Viewing Made Easy"
                        subTitle="Casual"
                        src={HOMEPAGE_ICONS.toothless}
                      />
                    </div>
                  </FadeInWhenVisible>
                  <FadeInWhenVisible
                    animationDuration="3s"
                    animationDelay="0.6s"
                    direction="inPlace"
                  >
                    <div className="mini-card-container">
                      {streamingServices.map(s => (
                        <div className="mini-image-container">
                          <img src={s.imgUrl} />
                        </div>
                      ))}
                    </div>
                  </FadeInWhenVisible>

                  <FadeInWhenVisible
                    animationDuration="3s"
                    animationDelay="0.6s"
                    direction="left"
                    distance="40px"
                  >
                    <div className="mini-card-container">
                      <MiniInfoCard
                        title="React in Real-Time"
                        subTitle="Join the MoovyNest"
                        src={HOMEPAGE_ICONS.spongebob}
                      />
                    </div>
                  </FadeInWhenVisible>
                </div>
                <ParallaxImage src={HOMEPAGE_ICONS.hands} />
              </section>
            </div>
          </section>
        </div>
      </HomeSection>
      <HomeSection className="second-section">
        <div className="mesh-container">
          <Heading2>
            <StyledSpan>Our Services</StyledSpan>
          </Heading2>
          <p>
            At MoovyChat, we specialize in transforming the way you watch your
            favorite shows. Our platform allows you to sync your streams on
            Netflix, DisneyPlus, Hulu, and Aha, and share real-time comments and
            reactions with your friends in your own MoovyNest. Experience
            interactive entertainment like never before!
          </p>
        </div>
        <FadeInWhenVisible
          animationDuration="1s"
          animationDelay="0.2s"
          direction="right"
          distance="50px"
        >
          <ServiceInfoCard
            src={HOMEPAGE_ICONS.oswald}
            mockup={HOMEPAGE_ICONS.mockup2}
            title="Experience Interactive Entertainment"
            subTitle="Live Comments for Netflix and Aha"
            desc="With MoovyChat, bring the theater chatter to your living room. Comment on your favorite Netflix shows and movies in real-time. Share your reactions and engage in lively discussions with friends and family, no matter where they are. Enjoy Netflix together, even when apart."
          />
        </FadeInWhenVisible>
        <FadeInWhenVisible
          animationDuration="3s"
          animationDelay="0.2s"
          direction="left"
          distance="50px"
        >
          <ServiceInfoCard
            otherWay={true}
            src={HOMEPAGE_ICONS.toothless}
            mockup={HOMEPAGE_ICONS.mockup2}
            title="Join the MoovyNest, Watch Party"
            subTitle="Share and React"
            desc="Join the MoovyNest and share your thoughts and reactions to your favorite shows in real-time. Interact with friends and family like never before."
          />
        </FadeInWhenVisible>
        <FadeInWhenVisible
          animationDuration="3s"
          animationDelay="0.2s"
          direction="right"
          distance="50px"
        >
          <ServiceInfoCard
            src={HOMEPAGE_ICONS.spongebob}
            mockup={HOMEPAGE_ICONS.filtersVideo5MB}
            alternateMockUp={HOMEPAGE_ICONS.filtersVideo2MB}
            isVideo={true}
            title="Video Filters & Skip Feature"
            subTitle="Customize Your Viewing, Streamline Your Experience"
            desc="With MoovyChat, make every show your own. Use our Video Filters feature to enhance your viewing experience. Want to dive right into the story? Use the auto-skip feature to bypass intros and outros. Personalize your streaming, only with MoovyChat."
          />
        </FadeInWhenVisible>
      </HomeSection>
      <HomeSection className="third-section"></HomeSection>
      <HomeSection className="fourth-section">
        <div></div>
      </HomeSection>
      {/* <Footer id="footer" /> */}
    </WelcomeParent>
  );
};

export default withUrqlClient(urqlClient)(Welcome);
