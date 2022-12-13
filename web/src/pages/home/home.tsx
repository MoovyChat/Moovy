import { HomeParent, PanelsParent } from './home.styles';
import { darkThemeForHome, lightThemeForHome } from '../../utils/themes/theme';

import CenterPanel from '../panels/center-panel/centerPanel';
import { GlobalStyles } from '../../utils/themes/globalStyles';
import HomeHeader from '../home-header/homeHeader';
import LeftPanel from '../panels/left-panel/leftPanel';
import Popup from '../../components/popup/popup';
import RightPanel from '../panels/right-panel/rightPanel';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import useIsAuth from '../../utils/isAuthUser';
import { withUrqlClient } from 'next-urql';

const Home = () => {
  useIsAuth();
  const theme = useAppSelector((state) => state.settings.theme);
  const isPopupOpen = useAppSelector((state) => state.popup.isPopupOpened);
  const isNavBarOpen = useAppSelector((state) => state.misc.isNavBarOpen);
  useEffect(() => {
    console.log(isNavBarOpen);
  }, [isNavBarOpen]);
  return (
    <ThemeProvider
      theme={theme === themes.DARK ? darkThemeForHome : lightThemeForHome}>
      <GlobalStyles />
      <HomeParent>
        <HomeHeader className='home-header' />
        <PanelsParent className='panels' isNavBarOpen={isNavBarOpen}>
          <LeftPanel className='left'></LeftPanel>
          <CenterPanel className='center'></CenterPanel>
          <RightPanel className='right'></RightPanel>
        </PanelsParent>
        <Popup />
      </HomeParent>
    </ThemeProvider>
  );
};
export default withUrqlClient(urqlClient)(Home);
