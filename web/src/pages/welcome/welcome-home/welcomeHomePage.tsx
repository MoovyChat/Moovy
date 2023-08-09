import React, { useEffect, useRef } from 'react';
import { Heading1, Heading2, HomeSection, StyledSpan } from '../welcome.styles';
import FadeInWhenVisible from '../../../components/fade-in-when-visible/FadeInWhenVisible';
import { CURRENT_DOMAIN, HOMEPAGE_ICONS } from '../../../constants';
import MiniInfoCard from '../mini-info-card/miniInfoCard';
import { streamingServices } from '../welcome';
import ParallaxImage from '../../../components/parallax-image/parallaxImage';
import ServiceInfoCard from '../service-info-card/serviceInfoCardContainer';
import ContactForm from '../contact-form/contactForm';
import { Helmet } from 'react-helmet';

const WelcomeHomePage = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && sectionRef.current) {
        const offsetTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Calculate the proportion of the section that is visible
        const visibleProportion = Math.max(
          0,
          Math.min(1, (scrollY + windowHeight - offsetTop) / sectionHeight),
        );

        // Apply the transform based on the visible proportion
        const offset = -visibleProportion * sectionHeight * 0.1;
        imageRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <React.Fragment>
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
      <HomeSection className="second-section" id="features">
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
      <HomeSection className="third-section" ref={sectionRef}>
        <img
          ref={imageRef}
          src="https://static.wixstatic.com/media/c837a6_46abf0a8171f47748472c8ecf2b19363~mv2.jpg/v1/fill/w_980,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_46abf0a8171f47748472c8ecf2b19363~mv2.jpg"
        ></img>
        <div className="image-overlay"></div>
        <div className="third-sec-container">
          <h2 className="title">About MoovyChat</h2>
          <p className="subTitle">Transforming OTT Viewing for the Future</p>
          <button>Learn More</button>
        </div>
      </HomeSection>
      <HomeSection className="fourth-section" id="contact">
        <div className="image">
          <img src={HOMEPAGE_ICONS.robot} />
        </div>
        <div className="form">
          <ContactForm />
        </div>
      </HomeSection>
    </React.Fragment>
  );
};

export default WelcomeHomePage;
