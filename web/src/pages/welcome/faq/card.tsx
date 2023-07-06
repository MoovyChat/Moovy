import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

interface ListItemProps {
  title: string;
  content: string;
}

const ListItemContainer = styled(animated.div)`
  background: rgb(255 255 255 / 14%);
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
`;

const ListItemTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: Poppins;
  @media (min-width: 640px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const ListItemContent = styled.p`
  line-height: 1.625;
  margin-top: 0.5rem;
  font-size: 1.125rem;
  font-family: Poppins;
  @media (min-width: 640px) {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

export const Card: React.FC<ListItemProps> = ({ title, content }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0, 0px, 0)' : 'translate3d(0, 40px, 0)',
    config: config.slow,
  });

  return (
    <ListItemContainer ref={ref} style={animation}>
      <ListItemTitle>{title}</ListItemTitle>
      <ListItemContent>{content}</ListItemContent>
    </ListItemContainer>
  );
};
