import React, { useMemo, useState } from 'react';
import { User, useGetUserQuery } from '../../../../generated/graphql';

import FollowButton from '../../../follow-button/followButton';
import Loading from '../../../../pages/loading/loading';
import ProfilePic from '../../../profilePic/profilePic';
import { UserTipParent } from './userTip.styles';
import { getShortDateFormat } from '../../../../utils/helpers';
import { isServer } from '../../../../constants';

type props = {
  userId: string;
};
const UserTip: React.FC<props> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [getUser] = useGetUserQuery({
    variables: { uid: userId! },
    pause: isServer(),
  });
  useMemo(() => {
    const { data, error, fetching } = getUser;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getUser as User;
      setUser(() => _data);
    }
  }, [getUser]);
  if (getUser.fetching) return <Loading />;
  if (getUser.error) return <>Error</>;
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
          <div className='sec-follow'>
            <FollowButton userId={user?.id!} nickName={user?.nickname!} />
          </div>
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
