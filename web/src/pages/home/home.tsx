import { useEffect, useMemo, useState } from 'react';
import { isServer, themes } from '../../constants';
import { Profile, useGetUserProfileQuery } from '../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { HomeParent, PanelsParent } from './home.styles';

import { withUrqlClient } from 'next-urql';
import { batch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Popup from '../../components/popup/popup';
import usePageView from '../../hooks/usePageView';
import { sliceSetIsProfileExists } from '../../redux/slices/miscSlice';
import { GlobalStyles } from '../../utils/themes/globalStyles';
import { THEME_PALETTE } from '../../utils/themes/theme';
import { urqlClient } from '../../utils/urlClient';
import HomeHeader from '../home-header/homeHeader';
import LogoLoading from '../logo-loading/logoLoading';
import CenterPanel from '../panels/center-panel/centerPanel';
import LeftPanel from '../panels/left-panel/leftPanel';
import RightPanel from '../panels/right-panel/rightPanel';
import SetProfile from '../set-profile/setProfile';

export const getThemeForHome = (themeName: string) => {
  switch (themeName) {
    case themes.RED_SATIN:
      return THEME_PALETTE.RED_SATIN;
    case themes.DARK_GOLD:
      return THEME_PALETTE.DARK_GOLD;
    case themes.FIRE_BLUE:
      return THEME_PALETTE.FIRE_BLUE;
    case themes.AQUA_GREEN:
      return THEME_PALETTE.AQUA_GREEN;
    case themes.ROYAL_NAVY:
      return THEME_PALETTE.ROYAL_NAVY;
    case themes.FRESH_WATER:
      return THEME_PALETTE.FRESH_WATER;
    case themes.SWEET_PINK:
      return THEME_PALETTE.SWEET_PINK;
    case themes.DARK_PURPLE:
      return THEME_PALETTE.DARK_PURPLE;
    case themes.GOLDEN_SAND:
      return THEME_PALETTE.GOLDEN_SAND;
    case themes.LEMON_YELLOW:
      return THEME_PALETTE.LEMON_YELLOW;
    case themes.GREEN_PARROT:
      return THEME_PALETTE.GREEN_PARROT;
    case themes.ICE_BLUE:
      return THEME_PALETTE.ICE_BLUE;
    case themes.FOREST_GREEN:
      return THEME_PALETTE.FOREST_GREEN;
    case themes.MIDNIGHT_PURPLE:
      return THEME_PALETTE.MIDNIGHT_PURPLE;
    case themes.SEDONA_SUNSET:
      return THEME_PALETTE.SEDONA_SUNSET;
    case themes.STORMY_SEA:
      return THEME_PALETTE.STORMY_SEA;
    case themes.DARK_RAINBOW:
      return THEME_PALETTE.DARK_RAINBOW;
    case themes.ROYAL_PURPLE:
      return THEME_PALETTE.ROYAL_PURPLE;
    case themes.MIDNIGHT_BLUE:
      return THEME_PALETTE.MIDNIGHT_BLUE;
    case themes.LIME_TURQUOISE:
      return THEME_PALETTE.LIME_TURQUOISE;
    case themes.TWILIGHT_VIOLET:
      return THEME_PALETTE.TWILIGHT_VIOLET;
    case themes.SLATE_GREY:
      return THEME_PALETTE.SLATE_GREY;
    case themes.WINTER_PINE:
      return THEME_PALETTE.WINTER_PINE;
    case themes.NEON_BLUE_AND_MAGENTA:
      return THEME_PALETTE.NEON_BLUE_AND_MAGENTA;
    case themes.AQUA_AND_CORAL:
      return THEME_PALETTE.AQUA_AND_CORAL;
    case themes.CYAN_AND_PINK:
      return THEME_PALETTE.CYAN_AND_PINK;
    case themes.JADE_AND_FUCHSIA:
      return THEME_PALETTE.JADE_AND_FUCHSIA;
    case themes.AMETHYST_AND_EMERALD:
      return THEME_PALETTE.AMETHYST_AND_EMERALD;
    case themes.RUBY_AND_TOPAZ:
      return THEME_PALETTE.RUBY_AND_TOPAZ;
    case themes.SAPPHIRE_AND_RUBY:
      return THEME_PALETTE.SAPPHIRE_AND_RUBY;
    case themes.OBSIDIAN_AND_GOLD:
      return THEME_PALETTE.OBSIDIAN_AND_GOLD;
    case themes.TEAL_AND_BLUE:
      return THEME_PALETTE.TEAL_AND_BLUE;
    case themes.DEEP_PURPLE_AND_DARK_GREY:
      return THEME_PALETTE.DEEP_PURPLE_AND_DARK_GREY;
    case themes.BLACK_AND_DARK_RED:
      return THEME_PALETTE.BLACK_AND_DARK_RED;
    case themes.MOODY_BLUE:
      return THEME_PALETTE.MOODY_BLUE;
    case themes.FIRE_OPAL:
      return THEME_PALETTE.FIRE_OPAL;
    case themes.PEACOCK_FEATHER:
      return THEME_PALETTE.PEACOCK_FEATHER;

    default:
      return THEME_PALETTE.RED_SATIN; // Default theme
  }
};

const Home = () => {
  const navigate = useNavigate();
  const theme = useAppSelector(state => state.settings.theme);
  const isPopupOpen = useAppSelector(state => state.popup.isPopupOpened);
  const isNavBarOpen = useAppSelector(state => state.misc.isNavBarOpen);
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const [prof, setProfile] = useState<Profile | null>(null);
  const [customLoading, setCustomLoading] = useState<boolean>(true);
  const isProfileExists = useAppSelector(state => state.misc.isProfileExists);

  usePageView();

  const handleEscapeKey: (this: Document, ev: KeyboardEvent) => any = event => {
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
      if (_data) {
        setProfile(_data as Profile);
        if (
          _data.userId !== '' &&
          _data.fullname !== '' &&
          _data.userId !== null &&
          _data.fullname != null
        ) {
          dispatch(sliceSetIsProfileExists(true));
        }
      }
    }
  }, [profile, user]);

  useMemo(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  if (profile.fetching || customLoading) return <LogoLoading />;

  return (
    <div>
      {isProfileExists ? (
        <HomeParent>
          <HomeHeader className="home-header" />
          <PanelsParent className="panels" isNavBarOpen={isNavBarOpen}>
            <LeftPanel className="left"></LeftPanel>
            <CenterPanel className="center" id="center"></CenterPanel>
            <RightPanel className="right"></RightPanel>
          </PanelsParent>
          <Popup />
        </HomeParent>
      ) : (
        <SetProfile profile={prof} />
      )}
    </div>
  );
};

export default withUrqlClient(urqlClient)(Home);
