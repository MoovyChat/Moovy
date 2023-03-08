import { MiniCardParent } from './miniCard.styles';
import React from 'react';

type props = {
  body: JSX.Element;
  options: JSX.Element;
};
const MiniCard: React.FC<props> = ({ body, options }) => {
  return (
    <MiniCardParent>
      <div className='body'>{body}</div>
      <div className='options'>{options}</div>
    </MiniCardParent>
  );
};

export default MiniCard;
