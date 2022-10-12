import { HeaderButton, HeaderParent } from './header.styles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import React from 'react';
import { sliceSetTheme } from '../../redux/slices/settingsSlice';
import { themes } from '../../constants';

const Header = () => {
  const theme = useAppSelector((state) => state.settings.theme);
  const dispatch = useAppDispatch();
  const themeHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetTheme());
  };
  return (
    <HeaderParent>
      <div className='header'></div>
      <div className='header-buttons'>
        <HeaderButton onClick={themeHandler}>
          {theme.toLowerCase()}
        </HeaderButton>
        <HeaderButton className='login-button'>Login</HeaderButton>
        <HeaderButton className='install-button'>
          Install Extension
        </HeaderButton>
      </div>
    </HeaderParent>
  );
};

export default Header;
