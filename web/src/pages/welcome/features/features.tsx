import React, { useEffect, useRef, useState } from 'react';

import HomeCard from '../../../components/home-card/homeCard';
import Screenshot8 from '../../../static/images/screenshot8.png';
import { StyledFeatures } from './features.styles';
import accent from '../../../static/images/accent.png';
import ambience from '../../../static/images/ambience.png';
import autoSkip from '../../../static/images/skipIntro.png';
import filter from '../../../static/images/filters.png';
import spoiler from '../../../static/images/spoiler.png';
import { useSpring } from '@react-spring/web';

type props = {
  id: string;
};
const Features: React.FC<props> = ({ id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        setIsVisible(top <= window.innerHeight * 0.8);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const animProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  const content = {
    filters: {
      title: 'Filters',
      src: filter,
      content:
        'Enhance your videos with our powerful filters that allow you to adjust brightness, contrast, saturation, color balance, and more with just a few clicks.',
    },
    accent: {
      title: 'Accent Color',
      src: accent,
      content:
        'Customize your video player with our accent color feature, allowing you to change the timeline color and adjust it across various UI elements for a cohesive and personalized viewing experience.',
    },
    ambience: {
      title: 'Ambience',
      src: ambience,
      content:
        'Elevate the ambiance of your videos with our border feature, adding a stylish frame around your video element to enhance its visual appeal and draw attention to your content.',
    },
    spoiler: {
      title: 'Spoiler',
      src: spoiler,
      content:
        'Keep your audience on the edge of their seats with our spoiler feature, allowing you to hide specific parts of your video and keep viewers engaged until the big reveal.',
    },
    community: {
      title: 'Community',
      src: Screenshot8,
      content:
        'Foster a sense of community around your videos with our built-in sign-up feature, encouraging your viewers to become members and engage with your content on a deeper level.',
    },
    autoSkip: {
      title: 'Skip Intro',
      src: autoSkip,
      content:
        '"Skip Intro" feature allows viewers to automatically skip the opening credits of a TV show, saving time and allowing for uninterrupted binge-watching.',
    },
  };
  return (
    <StyledFeatures id={id} ref={ref} style={animProps}>
      <div className='heading'>Features</div>
      <div className='features'>
        <HomeCard info={content.filters} />
        <HomeCard info={content.accent} />
        <HomeCard info={content.ambience} />
        <HomeCard info={content.spoiler} />
        <HomeCard info={content.community} />
        <HomeCard info={content.autoSkip} />
      </div>
    </StyledFeatures>
  );
};

export default Features;
