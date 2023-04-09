import { DIRECTION, FOCUS_WINDOW } from '../../utils/enums';
import { MdMenu, MdOutlineClose } from 'react-icons/md';
import React, { MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import FocusWindow from '../../components/focus-window/focusWindow';
import { HomeHeaderParent } from './homeHeader.styles';
import { Image } from '../../components/Image/image';
import MoovyBlackLogo from '../../svgs/moovy-black.svg';
import MoovyWhiteLogo from '../../svgs/moovy-white.svg';
import SearchBar from '../../components/search-bar/searchBar';
import { sliceSetNavBar } from '../../redux/slices/miscSlice';
import { useTheme } from 'styled-components';

type props = {
  className: string;
};
const HomeHeader: React.FC<props> = ({ className }) => {
  const theme = useTheme();
  const isNavBarOpen = useAppSelector(state => state.misc.isNavBarOpen);
  const dispatch = useAppDispatch();
  const navBarHandler: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    dispatch(sliceSetNavBar(!isNavBarOpen));
  };

  const user = useAppSelector(state => state.user);
  return (
    <HomeHeaderParent className={className}>
      <div className="logo">
        <div className="logo-image">
          <img
            className="image"
            src={
              (theme as any).themeType === 'light'
                ? MoovyBlackLogo
                : MoovyWhiteLogo
            }
            alt="QuietChat"
            id="blur-escape"
            loading="lazy"
            width="40"
            height="40"
          />
          <p
            style={{
              fontWeight: 600,
              fontSize: '10px',
              alignSelf: 'flex-end',
              backgroundColor: '#993434',
              padding: '4px 6px',
              borderRadius: '10px',
            }}
          >
            Beta
          </p>
        </div>
        <div className="logo-icon" onClick={navBarHandler}>
          {isNavBarOpen ? (
            <MdOutlineClose className="icon" size={20} />
          ) : (
            <MdMenu className="icon" size={20} />
          )}
        </div>
      </div>
      <div className="search">
        <SearchBar />
      </div>
      <FocusWindow
        message={FOCUS_WINDOW.HEADER_OPTIONS}
        dir={DIRECTION.BOTTOM_LEFT}
        height="200px"
        width="220px"
      >
        <div className="user">
          <div className="logo-image">
            <Image
              className="image"
              src={user.photoUrl}
              alt="user"
              width="40"
              height="40"
            />
          </div>
        </div>
      </FocusWindow>
    </HomeHeaderParent>
  );
};

export default HomeHeader;
