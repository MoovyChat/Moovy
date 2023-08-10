import React from 'react';
import { useInView } from 'react-intersection-observer';
import './styles.css';

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  animationDuration?: string;
  animationDelay?: string;
  direction?: 'right' | 'left' | 'top' | 'bottom' | 'inPlace';
  distance?: string;
  style?: React.CSSProperties;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  animationDuration = '1s',
  animationDelay = '0s',
  direction = 'inPlace',
  distance = '10cm',
  style,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const directions = {
    right: `translateX(${distance})`,
    left: `translateX(-${distance})`,
    top: `translateY(-${distance})`,
    bottom: `translateY(${distance})`,
    inPlace: 'translate(0, 0)',
  };

  const initialTransform = inView ? 'translate(0, 0)' : directions[direction];

  return (
    <div
      ref={ref}
      className={`fade-in ${inView ? 'visible' : ''}`}
      style={
        {
          ...style,
          '--animation-duration': animationDuration,
          '--animation-delay': animationDelay,
          transition: `opacity var(--animation-duration) var(--animation-delay), transform var(--animation-duration) var(--animation-delay)`,
          transform: initialTransform,
          opacity: inView ? 1 : 0,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default FadeInWhenVisible;
