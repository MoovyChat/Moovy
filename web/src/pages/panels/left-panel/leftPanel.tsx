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
import React, { useEffect, useState } from 'react';

import { LeftParent } from './leftPanel.styles';
import { NavLink } from 'react-router-dom';
import ProfilePic from '../../../components/profilePic/profilePic';
import { sliceSetTheme } from '../../../redux/slices/settingsSlice';
import { themes } from '../../../constants';
import { useAppSelector } from '../../../redux/hooks';
import { useDispatch } from 'react-redux';

type props = {
  className: string;
};
const LeftPanel: React.FC<props> = ({ className }) => {
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
  return (
    <LeftParent className={className}>
      <div className='profile'>
        <ProfilePic src={user.photoUrl!}></ProfilePic>
      </div>
      <div className='options'>
        <NavLink to='/' className='option' end>
          <div className='icon'>
            <MdDynamicFeed size={iconSize} />
          </div>
          <div className='text'>Feed</div>
        </NavLink>
        <NavLink to='/trending' className='option'>
          <div className='icon'>
            <MdLocalFireDepartment size={iconSize} />
          </div>
          <div className='text'>Trending</div>
        </NavLink>
        <NavLink to='/profile' className='option'>
          <div className='icon'>
            <MdOutlinePersonOutline size={iconSize} />
          </div>
          <div className='text'>Profile</div>
        </NavLink>
        <NavLink to='/favorites' className='option'>
          <div className='icon'>
            <MdFavorite size={iconSize} />
          </div>
          <div className='text'>Favorites</div>
        </NavLink>
        <NavLink to='/comments' className='option'>
          <div className='icon'>
            <MdOutlineModeComment size={iconSize} />
          </div>
          <div className='text'>Comments</div>
        </NavLink>
        <NavLink to='/replies' className='option'>
          <div className='icon'>
            <MdOutlineReply size={iconSize} />
          </div>
          <div className='text'>Replies</div>
        </NavLink>
        <NavLink to='/notifications' className='option'>
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
