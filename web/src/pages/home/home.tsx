import {
  darkTheme,
  darkThemeForHome,
  lightTheme,
  lightThemeForHome,
} from '../../utils/themes/theme';

import CenterPanel from '../panels/center-panel/centerPanel';
import { GlobalStyles } from '../../utils/themes/globalStyles';
import HomeHeader from '../home-header/homeHeader';
import { HomeParent } from './home.styles';
import LeftPanel from '../panels/left-panel/leftPanel';
import { Outlet } from 'react-router-dom';
import React from 'react';
import RightPanel from '../panels/right-panel/rightPanel';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useIsAuth } from '../../utils/isAuthUser';
import { withUrqlClient } from 'next-urql';

const Home = () => {
  useIsAuth();
  const theme = useAppSelector((state) => state.settings.theme);
  return (
    <ThemeProvider
      theme={theme === themes.DARK ? darkThemeForHome : lightThemeForHome}>
      <GlobalStyles />
      <HomeParent>
        <HomeHeader className='home-header' />
        <div className='panels'>
          <LeftPanel className='left'></LeftPanel>
          <CenterPanel className='center'></CenterPanel>
          <RightPanel className='right'></RightPanel>
        </div>
      </HomeParent>
    </ThemeProvider>
  );
};
export default withUrqlClient(urqlClient)(Home);
