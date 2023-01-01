import { OptionsParent } from './header.styles';
import React from 'react';

type props = {
  className: string;
};
const OptionsHeader: React.FC<props> = ({ className }) => {
  return (
    <OptionsParent className={className} backColor='#39d7ec5f'>
      <div className='logo'>
        <img src='qc.png' alt='logo' />
      </div>
      <div className='title'>Quiet Chat</div>
    </OptionsParent>
  );
};

export default OptionsHeader;
