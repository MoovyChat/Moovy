import { EventHandler, KeyboardEventHandler, useEffect, useMemo } from 'react';
import { HomeParent, PanelsParent } from './home.styles';
import { darkThemeForHome, lightThemeForHome } from '../../utils/themes/theme';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import CenterPanel from '../panels/center-panel/centerPanel';
import { GlobalStyles } from '../../utils/themes/globalStyles';
import HomeHeader from '../home-header/homeHeader';
import LeftPanel from '../panels/left-panel/leftPanel';
import Popup from '../../components/popup/popup';
import RightPanel from '../panels/right-panel/rightPanel';
import { ThemeProvider } from 'styled-components';
import { batch } from 'react-redux';
import { themes } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import useIsAuth from '../../utils/isAuthUser';
import { useNavigate } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

const Home = () => {
  useEffect(() => {
    if (screen.orientation) {
      // The screen.orientation API is available, so you can use it
      screen.orientation.lock('portrait');
    } else {
      // The screen.orientation API is not available, so you may want to fall back to another solution
    }
  }, []);
  useEffect(() => {
    document.title = 'Moovy';
  }, []);
  const navigate = useNavigate();
  const theme = useAppSelector((state) => state.settings.theme);
  const isPopupOpen = useAppSelector((state) => state.popup.isPopupOpened);
  const isNavBarOpen = useAppSelector((state) => state.misc.isNavBarOpen);

  const dispatch = useAppDispatch();
  const handleEscapeKey: (this: Document, ev: KeyboardEvent) => any = (
    event
  ) => {
    if (event.key.toLowerCase() === 'escape') {
      // code to close modal or perform other action
      if (isPopupOpen) {
        batch(() => {
          dispatch(sliceSetPopupData(null));
          dispatch(sliceSetIsPopupOpened(false));
          dispatch(sliceSetSelectedElement(''));
        });
      } else {
        if (history.state !== null) navigate(-1);
      }
    }
  };

  useMemo(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

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
