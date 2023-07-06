import { StyledFeatures } from './homeSlider.styles';

export const slides = [
  {
    title:
      'Enhance your streaming experience with interactive features with MoovyChat',
    content: (
      <StyledFeatures>
        <div className="feature-heading">Features</div>
        <ul className="feature-list">
          <li>
            Available for <strong>Netflix</strong> and <strong>Aha</strong>{' '}
            streaming platforms
          </li>
          <li>MoovyNest: Watch Together</li>
          <li>Video Filters and Custom borders</li>
          <li>Custom Video Filters</li>
          <li>Spoilers</li>
          <li>Skip the Intro and Outro</li>
          <li>Browse Netflix by Categories</li>
        </ul>
      </StyledFeatures>
    ),
  },
  {
    title: 'Watch Together with MoovyNest',
    content: (
      <StyledFeatures>
        <div className="feature-heading">Features:</div>
        <ul className="feature-list">
          <li>
            Private Nests: Watch together with your loved ones in a private and
            secure environment
          </li>
          <li>
            Public Nests: Join public nests to watch with random strangers who
            share similar interests
          </li>
          <li>
            GIFs: Express yourself with a wide range of GIFs during the watching
            experience
          </li>
          <li>
            3D Flying Explosive Emoji Reactions: React with fun and interactive
            emojis that explode upon hovering
          </li>
        </ul>
      </StyledFeatures>
    ),
  },
  {
    title: 'Foster Community Engagement',
    content: (
      <StyledFeatures>
        <div className="feature-heading">Features:</div>
        <ul className="feature-list">
          <li>
            Built-in Sign-up Feature: Encourage viewers to become members and
            engage with your content
          </li>
          <li>
            User Profiles: Every user has their own profile to track activity,
            show history, comments, and favorites
          </li>
          <li>
            Follow and Connect: Users can follow each other to build connections
            within the community
          </li>
        </ul>
      </StyledFeatures>
    ),
  },
  {
    title: 'Coming Soon: Mobile Apps for Android and iOS',
    content: (
      <StyledFeatures>
        <div className="feature-heading">Features:</div>
        <ul className="feature-list">
          <li>
            MoovyNest on the Go: Access MoovyNest on your Android and iOS
            devices
          </li>
          <li>
            Seamless Experience: Enjoy a consistent and intuitive user
            experience across platforms
          </li>
          <li>
            Enhanced Accessibility: Watch your favorite content anytime,
            anywhere
          </li>
          <li>
            Stay Connected: Stay connected with your friends and community while
            on the move
          </li>
        </ul>
        <div className="feature-note">
          Note: The Android and iOS apps are currently in development and will
          be available soon.
        </div>
      </StyledFeatures>
    ),
  },
  {
    title: 'Upcoming Integrations: Disney+, Hulu, Hotstar',
    content: (
      <StyledFeatures>
        <div className="feature-heading">Features:</div>
        <ul className="feature-list">
          <li>
            Expanded Content Library: Access a vast selection of shows and
            movies from Disney+
          </li>
          <li>
            Popular Streaming Platforms: Enjoy seamless integration with Hulu
            and Hotstar
          </li>
          <li>
            Enhanced User Experience: Explore a unified interface for all
            integrated streaming services
          </li>
        </ul>
        <div className="feature-note">
          Note: Upcoming integrations with Disney+, Hulu, and Hotstar will be
          available soon.
        </div>
      </StyledFeatures>
    ),
  },
];
