import React, { useEffect, useState } from 'react';
import { StyledBox, StyledHomeSlider, StyledTrail } from './homeSlider.styles';
import { slides } from './sliderData';
import './styles.scss';
import { useTransition, animated } from '@react-spring/web';

interface BoxProps {
  title: string;
  content: any;
  isActive: boolean;
  index: number;
}

const Box: React.FC<BoxProps> = ({ title, content, isActive, index }) => (
  <StyledBox className={`box ${isActive ? 'active' : ''}`} index={index}>
    <div className="bg"></div>
    <div className="details">
      <h1>{title}</h1>
      {content}
    </div>
    <div className="illustration">
      <div className="inner"></div>
    </div>
  </StyledBox>
);

interface TrailProps {
  value: number;
  setValue: (value: number) => void;
}

const Trail: React.FC<TrailProps> = ({ value, setValue }) => {
  const trailItems = [1, 2, 3, 4, 5];

  return (
    <StyledTrail className="trail">
      {trailItems.map(item => (
        <div
          key={item}
          className={`box${item} ${item === value + 1 ? 'active' : ''}`}
          onClick={() => setValue(item - 1)}
        >
          {item}
        </div>
      ))}
    </StyledTrail>
  );
};

interface ArrowProps {
  slide: (direction: 'increase' | 'decrease') => void;
}

const PrevArrow: React.FC<ArrowProps> = ({ slide }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="prev"
      width="56.898"
      height="91"
      viewBox="0 0 56.898 91"
      onClick={() => slide('decrease')}
    >
      <path
        d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
        transform="translate(0 91) rotate(-90)"
        fill="#fff"
      />
    </svg>
  );
};

const NextArrow: React.FC<ArrowProps> = ({ slide }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="next"
      width="56.898"
      height="91"
      viewBox="0 0 56.898 91"
      onClick={() => slide('increase')}
    >
      <path
        d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
        transform="translate(56.898) rotate(90)"
        fill="#fff"
      />
    </svg>
  );
};

const HomeSlider = () => {
  const [value, setValue] = useState(0);

  const slide = (condition: 'increase' | 'decrease') => {
    if (condition === 'increase') {
      setValue(prevValue => (prevValue + 1) % 5);
    } else if (condition === 'decrease') {
      setValue(prevValue => (prevValue - 1 + 5) % 5);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slide('increase');
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const transitions = useTransition(value, {
    from: { transform: 'translate3d(100%,0,0)' },
    enter: { transform: 'translate3d(0%,0,0)' },
    leave: { transform: 'translate3d(-100%,0,0)' },
    exitBeforeEnter: true,
  });

  return (
    <StyledHomeSlider>
      <div className="container">
        {transitions((styles, index) => (
          <animated.div style={styles} key={index}>
            <Box
              title={slides[index].title}
              content={slides[index].content}
              isActive={index === value}
              index={index}
            />
          </animated.div>
        ))}
        <PrevArrow slide={slide} />
        <NextArrow slide={slide} />
        <Trail value={value} setValue={setValue} />
      </div>
    </StyledHomeSlider>
  );
};

export default HomeSlider;
