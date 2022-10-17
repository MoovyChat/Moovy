import { HeaderButton, HeaderParent } from './header.styles';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { DIRECTION } from '../../utils/enums';
import { LOGIN } from '../../components/tooltip/constants';
import React from 'react';
import Tooltip from '../../components/tooltip/tooltip';
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
        <div className='login-button'>
          <Tooltip
            dir={DIRECTION.BOTTOM}
            message={LOGIN}
            width='150px'
            height='60px'>
            <HeaderButton className='hb'>Login</HeaderButton>
          </Tooltip>
        </div>
        <HeaderButton className='install-button hb'>
          Install Extension
        </HeaderButton>
      </div>
    </HeaderParent>
  );
};

export default Header;
