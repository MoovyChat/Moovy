import React from 'react';
import { OptionsParent } from './header.styles';

const OptionsHeader = () => {
  return (
    <OptionsParent>
      <div className='logo'>
        <img src='./ncWhite.png' alt='logo' />
      </div>
    </OptionsParent>
  );
};

export default OptionsHeader;
