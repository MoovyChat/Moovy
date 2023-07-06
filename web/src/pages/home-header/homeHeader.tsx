import { DIRECTION, FOCUS_WINDOW } from '../../utils/enums';
import { MdMenu, MdOutlineClose, MdSearch } from 'react-icons/md';
import React, { MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import FocusWindow from '../../components/focus-window/focusWindow';
import { HomeHeaderParent } from './homeHeader.styles';
import { Image } from '../../components/Image/image';
import SearchBar from '../../components/search-bar/searchBar';
import { sliceSetNavBar } from '../../redux/slices/miscSlice';
import { useTheme } from 'styled-components';
import { LOGO_128, popupStates } from '../../constants';
import { RiPaintFill } from 'react-icons/ri';
import {
  sliceSetIsPopupOpened,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';

type props = {
  className: string;
};
const HomeHeader: React.FC<props> = ({ className }) => {
  const isNavBarOpen = useAppSelector(state => state.misc.isNavBarOpen);
  const dispatch = useAppDispatch();
  const navBarHandler: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    dispatch(sliceSetNavBar(!isNavBarOpen));
  };

  const openThemeHandler: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    dispatch(sliceSetIsPopupOpened(true));
    dispatch(sliceSetSelectedElement(popupStates.OPEN_THEME));
  };

  const openSearchHandler: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    dispatch(sliceSetIsPopupOpened(true));
    dispatch(sliceSetSelectedElement(popupStates.OPEN_SEARCH));
  };

  const user = useAppSelector(state => state.user);
  return (
    <HomeHeaderParent className={className}>
      <div className="logo">
        <div className="logo-image">
          <img
            className="image"
            src={LOGO_128}
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
              color: '#fff',
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
      <div className="search" onClick={openThemeHandler}>
        <RiPaintFill size={25} className="search-icon" />
      </div>
      <div className="search" onClick={openSearchHandler}>
        <MdSearch size={25} className="search-icon" />
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
