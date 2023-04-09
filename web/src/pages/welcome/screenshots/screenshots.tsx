import React, { useEffect, useRef, useState } from 'react';

import ImageSlider from '../image-slider/imageSlider';
import { StyledScreenShots } from './screenshots.styles';
import { useSpring } from '@react-spring/web';

type props = {
  id: string;
};
const Screenshots: React.FC<props> = ({ id }) => {
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
  return (
    <StyledScreenShots id={id} ref={ref} style={animProps}>
      <div className="heading">Screenshots</div>
      <ImageSlider />
    </StyledScreenShots>
  );
};

export default Screenshots;
