import {
  MdDynamicFeed,
  MdFavorite,
  MdModeComment,
  MdNightlight,
  MdNotificationsActive,
  MdOutlineReply,
  MdOutlineWbSunny,
  MdPerson,
  MdStorage,
} from 'react-icons/md';
import React, { MouseEventHandler, useEffect, useRef } from 'react';
import { batch, useDispatch } from 'react-redux';
import {
  sliceSetIsPopupOpened,
  sliceSetSelectedElement,
} from '../../../redux/slices/popupSlice';

import { LeftParent } from './leftPanel.styles';
import { NavLink } from 'react-router-dom';
import ProfilePic from '../../../components/profilePic/profilePic';
import { Users } from '../../../generated/graphql';
import { sliceSetNavBar } from '../../../redux/slices/miscSlice';
import { sliceSetTheme } from '../../../redux/slices/settingsSlice';
import { themes } from '../../../constants';
import { useAppSelector } from '../../../redux/hooks';
import useIsAuth from '../../../utils/isAuthUser';

type props = {
  className: string;
};
const LeftPanel: React.FC<props> = ({ className }) => {
  useIsAuth();
  const ref = useRef<HTMLDivElement>(null);
  const user = useAppSelector((state) => state.user);
  const theme = useAppSelector((state) => state.settings.theme);
  const dispatch = useDispatch();
  const themeHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const value = theme === themes.DARK ? false : true;
    dispatch(sliceSetTheme(value));
  };
  const iconSize = 30;
  // log changed data
  useEffect(() => {
    // console.log(user.photoUrl);
  }, [user.photoUrl]);

  useEffect(() => {
    function handleOutSideClick(event: any) {
      if (ref && !ref.current?.contains(event.target)) {
        dispatch(sliceSetNavBar(false));
      }
    }
    document.addEventListener('click', handleOutSideClick);
    return () => {
      document.removeEventListener('click', handleOutSideClick);
    };
  }, [ref]);

  const linkClickHandler: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(false));
      dispatch(sliceSetSelectedElement(''));
      dispatch(sliceSetNavBar(false));
    });
  };
  return (
    <LeftParent className={className} ref={ref}>
      <div className='profile'>
        <ProfilePic
          src={user?.photoUrl!}
          user={user as Users}
          tooltip={true}></ProfilePic>
      </div>
      <div className='options'>
        <NavLink to='/' className='option' end onClick={linkClickHandler}>
          <div className='icon feed'>
            <MdDynamicFeed size={iconSize} />
          </div>
          <div className='text'>Feed</div>
        </NavLink>
        <NavLink to='/catalog' className='option' onClick={linkClickHandler}>
          <div className='icon catalog'>
            <MdStorage size={iconSize} />
          </div>
          <div className='text'>Catalog</div>
        </NavLink>
        <NavLink
          to={`/profile/${user.nickname}`}
          className='option'
          onClick={linkClickHandler}>
          <div className='icon p'>
            <MdPerson size={iconSize} />
          </div>
          <div className='text'>Profile</div>
        </NavLink>
        <NavLink
          to={`activity/${user.nickname}/favorites`}
          className='option'
          onClick={linkClickHandler}>
          <div className='icon favorites'>
            <MdFavorite size={iconSize} />
          </div>
          <div className='text'>Favorites</div>
        </NavLink>
        <NavLink
          to={`/comments/${user.nickname}`}
          className='option'
          onClick={linkClickHandler}>
          <div className='icon comments'>
            <MdModeComment size={iconSize} />
          </div>
          <div className='text'>Comments</div>
        </NavLink>
        <NavLink
          to={`/replies/${user.nickname}`}
          className='option'
          onClick={linkClickHandler}>
          <div className='icon replies'>
            <MdOutlineReply size={iconSize} />
          </div>
          <div className='text'>Replies</div>
        </NavLink>
        <NavLink
          to='/notifications'
          className='option'
          onClick={linkClickHandler}>
          <div className='icon notifications'>
            <MdNotificationsActive size={iconSize} />
          </div>
          <div className='text'>Notifications</div>
        </NavLink>
        <div className='option' onClick={themeHandler}>
          {theme === themes.DARK ? (
            <React.Fragment>
              <div className='icon'>
                <MdOutlineWbSunny size={iconSize} />
              </div>
              <div className='text'>Light</div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className='icon'>
                <MdNightlight size={iconSize} />
              </div>
              <div className='text'>Dark</div>
            </React.Fragment>
          )}
        </div>
      </div>
    </LeftParent>
  );
};

export default LeftPanel;
