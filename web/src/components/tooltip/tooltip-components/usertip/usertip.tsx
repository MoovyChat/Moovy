import ProfilePic from '../../../profilePic/profilePic';
import React from 'react';
import { User } from '../../../../generated/graphql';
import { UserTipParent } from './userTip.styles';
import { getShortDateFormat } from '../../../../utils/helpers';

type props = {
  user?: User;
};
const UserTip: React.FC<props> = ({ user }) => {
  return (
    <UserTipParent bg={user?.bg!}>
      <div className='container'>
        <div className='first'>
          <div className='pic'>
            <ProfilePic src={user?.photoUrl!} tooltip={true} />
          </div>
          <div className='text'>
            <div className='username'>@{user?.nickname!}</div>
            <div className='joined'>{getShortDateFormat(user?.joinedAt!)}</div>
          </div>
        </div>
        <div className='second'>
          <div className='batch'>
            <div className='name'>Followers</div>
            <div className='count'>
              {user?.followerCount ? user?.followerCount : 0}
            </div>
          </div>
          <div className='batch'>
            <div className='name'>Following</div>
            <div className='count'>
              {user?.followingCount ? user?.followingCount : 0}
            </div>
          </div>
        </div>
      </div>
    </UserTipParent>
  );
};

export default UserTip;
