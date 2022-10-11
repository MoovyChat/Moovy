import { HeaderBlock, LogoBlock, Perimeter } from './header.styles';

import React from 'react';
import constants from '../../../constants';

const Header = () => {
  return (
    <Perimeter>
      <LogoBlock>
        <img src='qc.png' alt='logo' />
      </LogoBlock>
      <HeaderBlock className='heading'>{constants.title}</HeaderBlock>
    </Perimeter>
  );
};

export default Header;
