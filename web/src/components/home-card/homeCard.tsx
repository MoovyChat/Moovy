import React from 'react';
import { StyledHomeCard } from './homeCard.styles';

type props = {
  info: {
    title: string;
    content: string;
    src: string;
  };
};
const HomeCard: React.FC<props> = ({ info }) => {
  const { title, content, src } = info;
  return (
    <StyledHomeCard>
      <div className='container'>
        <div className='title'>{title}</div>
        <img src={src} className='shc-img' alt='image' />
        <div className='content'>{content}</div>
      </div>
    </StyledHomeCard>
  );
};

export default HomeCard;
