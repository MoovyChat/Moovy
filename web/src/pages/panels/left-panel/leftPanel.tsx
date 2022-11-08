import {
  MdDynamicFeed,
  MdFavorite,
  MdLocalFireDepartment,
  MdNightlight,
  MdOutlineModeComment,
  MdOutlineNotificationsActive,
  MdOutlinePersonOutline,
  MdOutlineReply,
  MdOutlineWbSunny,
} from 'react-icons/md';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { batch, useDispatch } from 'react-redux';
import {
  sliceSetIsPopupOpened,
  sliceSetSelectedElement,
} from '../../../redux/slices/popupSlice';

import { LeftParent } from './leftPanel.styles';
import { NavLink } from 'react-router-dom';
import ProfilePic from '../../../components/profilePic/profilePic';
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
    console.log(user);
  }, [user.photoUrl]);

  useEffect(() => {
    function handleOutSideClick(event: any) {
      console.log(ref, event.target, ref.current?.contains(event.target));
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
        <ProfilePic src={user.photoUrl!}></ProfilePic>
      </div>
      <div className='options'>
        <NavLink to='/' className='option' end onClick={linkClickHandler}>
          <div className='icon'>
            <MdDynamicFeed size={iconSize} />
          </div>
          <div className='text'>Feed</div>
        </NavLink>
        <NavLink to='/trending' className='option' onClick={linkClickHandler}>
          <div className='icon'>
            <MdLocalFireDepartment size={iconSize} />
          </div>
          <div className='text'>Trending</div>
        </NavLink>
        <NavLink to='/profile' className='option' onClick={linkClickHandler}>
          <div className='icon'>
            <MdOutlinePersonOutline size={iconSize} />
          </div>
          <div className='text'>Profile</div>
        </NavLink>
        <NavLink to='/favorites' className='option' onClick={linkClickHandler}>
          <div className='icon'>
            <MdFavorite size={iconSize} />
          </div>
          <div className='text'>Favorites</div>
        </NavLink>
        <NavLink to='/comments' className='option' onClick={linkClickHandler}>
          <div className='icon'>
            <MdOutlineModeComment size={iconSize} />
          </div>
          <div className='text'>Comments</div>
        </NavLink>
        <NavLink to='/replies' className='option' onClick={linkClickHandler}>
          <div className='icon'>
            <MdOutlineReply size={iconSize} />
          </div>
          <div className='text'>Replies</div>
        </NavLink>
        <NavLink
          to='/notifications'
          className='option'
          onClick={linkClickHandler}>
          <div className='icon'>
            <MdOutlineNotificationsActive size={iconSize} />
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
