import { CURRENT_DOMAIN, isServer, themes } from '../../constants';
import { HomeParent, PanelsParent } from './home.styles';
import { Profile, useGetUserProfileQuery } from '../../generated/graphql';
import { darkThemeForHome, lightThemeForHome } from '../../utils/themes/theme';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useMemo, useState } from 'react';

import CenterPanel from '../panels/center-panel/centerPanel';
import { GlobalStyles } from '../../utils/themes/globalStyles';
import { Helmet } from 'react-helmet';
import HomeHeader from '../home-header/homeHeader';
import LeftPanel from '../panels/left-panel/leftPanel';
import LogoLoading from '../logo-loading/logoLoading';
import Popup from '../../components/popup/popup';
import RightPanel from '../panels/right-panel/rightPanel';
import SetProfile from '../set-profile/setProfile';
import { ThemeProvider } from 'styled-components';
import { batch } from 'react-redux';
import { sliceSetIsProfileExists } from '../../redux/slices/miscSlice';
import { urqlClient } from '../../utils/urlClient';
import { useNavigate } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

const Home = () => {
  const navigate = useNavigate();
  const theme = useAppSelector((state) => state.settings.theme);
  const isPopupOpen = useAppSelector((state) => state.popup.isPopupOpened);
  const isNavBarOpen = useAppSelector((state) => state.misc.isNavBarOpen);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [prof, setProfile] = useState<Profile | null>(null);
  const [customLoading, setCustomLoading] = useState<boolean>(true);
  const isProfileExists = useAppSelector((state) => state.misc.isProfileExists);
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

  const [profile] = useGetUserProfileQuery({
    variables: { uid: user?.id },
    pause: isServer(),
  });

  useEffect(() => {
    let timeout = setTimeout(() => {
      setCustomLoading(false);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const { data, fetching } = profile;
    if (!fetching && data) {
      const _data = data.getUserProfile;
      setProfile(_data as Profile);
      if (!_data) dispatch(sliceSetIsProfileExists(false));
      else if (
        _data.userId !== '' &&
        _data.fullname !== '' &&
        _data.userId !== null &&
        _data.fullname != null
      ) {
        dispatch(sliceSetIsProfileExists(true));
      } else dispatch(sliceSetIsProfileExists(false));
    }
  }, [profile]);

  useMemo(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  if (profile.fetching || customLoading) return <LogoLoading />;

  return (
    <ThemeProvider
      theme={theme === themes.DARK ? darkThemeForHome : lightThemeForHome}>
      <GlobalStyles />
      <Helmet>
        <title>Moovy</title>
        <meta name='description' content='Home' />
        <link rel='canonical' href={`${CURRENT_DOMAIN}`} />
      </Helmet>

      {isProfileExists ? (
        <HomeParent>
          <HomeHeader className='home-header' />
          <PanelsParent className='panels' isNavBarOpen={isNavBarOpen}>
            <LeftPanel className='left'></LeftPanel>
            <CenterPanel className='center' id='center'></CenterPanel>
            <RightPanel className='right'></RightPanel>
          </PanelsParent>
          <Popup />
        </HomeParent>
      ) : (
        <SetProfile profile={prof} />
      )}
    </ThemeProvider>
  );
};

export default withUrqlClient(urqlClient)(Home);
