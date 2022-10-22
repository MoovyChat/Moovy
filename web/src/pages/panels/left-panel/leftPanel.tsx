import {
  MdDynamicFeed,
  MdFavorite,
  MdLocalFireDepartment,
  MdOutlineModeComment,
  MdOutlineNotificationsActive,
  MdOutlinePersonOutline,
  MdOutlineReply,
  MdOutlineWbSunny,
} from 'react-icons/md';

import { LeftParent } from './leftPanel.styles';
import ProfilePic from '../../../components/profilePic/profilePic';
import React from 'react';
import { useAppSelector } from '../../../redux/hooks';

type props = {
  className: string;
};
const LeftPanel: React.FC<props> = ({ className }) => {
  const user = useAppSelector((state) => state.user);
  const iconSize = 30;
  return (
    <LeftParent className={className}>
      <div className='profile'>
        <ProfilePic src={user.photoUrl!}></ProfilePic>
      </div>
      <div className='options'>
        <div className='option'>
          <div className='icon'>
            <MdDynamicFeed size={iconSize} />
          </div>
          <div className='text'>Feed</div>
        </div>
        <div className='option'>
          <div className='icon'>
            <MdLocalFireDepartment size={iconSize} />
          </div>
          <div className='text'>Trending</div>
        </div>
        <div className='option'>
          <div className='icon'>
            <MdOutlinePersonOutline size={iconSize} />
          </div>
          <div className='text'>Profile</div>
        </div>
        <div className='option'>
          <div className='icon'>
            <MdFavorite size={iconSize} />
          </div>
          <div className='text'>Favorites</div>
        </div>
        <div className='option'>
          <div className='icon'>
            <MdOutlineModeComment size={iconSize} />
          </div>
          <div className='text'>Comments</div>
        </div>
        <div className='option'>
          <div className='icon'>
            <MdOutlineReply size={iconSize} />
          </div>
          <div className='text'>Replies</div>
        </div>
        <div className='option'>
          <div className='icon'>
            <MdOutlineNotificationsActive size={iconSize} />
          </div>
          <div className='text'>Notifications</div>
        </div>
        <div className='option'>
          <div className='icon'>
            <MdOutlineWbSunny size={iconSize} />
          </div>
          <div className='text'>Light</div>
        </div>
      </div>
    </LeftParent>
  );
};

export default LeftPanel;
