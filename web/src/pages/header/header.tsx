import { HeaderButton, HeaderParent } from './header.styles';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import React from 'react';
import { sliceSetTheme } from '../../redux/slices/settingsSlice';
import { themes } from '../../constants';

const Header = () => {
  const theme = useAppSelector((state) => state.settings.theme);
  const dispatch = useAppDispatch();
  const themeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetTheme(e.target.checked));
  };
  return (
    <HeaderParent>
      <div className='header'></div>
      <div className='header-buttons'>
        <HeaderButton className='toggle-theme'>
          <input
            type='checkbox'
            id='theme-toggle'
            defaultChecked={true}
            onChange={themeHandler}
          />
          <label htmlFor='theme-toggle'>
            <MdLightMode className='sun' size={25} fill='white' />
            <MdNightlight className='moon' size={25} fill='black' />
          </label>
        </HeaderButton>
        <HeaderButton className='login-button hb'>Login</HeaderButton>
        <HeaderButton className='install-button hb'>
          Install Extension
        </HeaderButton>
      </div>
    </HeaderParent>
  );
};

export default Header;
