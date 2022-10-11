import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { LikesUserView, LikesWindowStyle } from './likesWindow.styles';
import React, { useEffect, useState } from 'react';
import { colorLog, getFormattedNumber } from '../../Utils/utilities';
import {
  useAmIFollowingThisUserMutation,
  useGetUserFollowStatsMutation,
} from '../../generated/graphql';

import { MdOutlineAccountCircle } from 'react-icons/md';
import NotFound from '../notFound/notFound';
import { ProfileImage } from '../profileWindow/profileWindow.styles';
import { User } from '../../Utils/interfaces';
import { urqlClient } from '../../Utils/urqlClient';
import { useAppSelector } from '../../redux/hooks';
import { withUrqlClient } from 'next-urql';

type props = {
  user: User;
};
const UserTile: React.FC<props> = ({ user }) => {
  const uid = useAppSelector((state) => state.user.uid);
  const [userFollowingCount, setFollowingCount] = useState<number>(0);
  const [userFollowerCount, setFollowerCount] = useState<number>(0);
  const [isFollow, setIsFollowing] = useState<boolean>(false);
  const [followData, getFollowData] = useAmIFollowingThisUserMutation();

  const [_userFollowStat, getUserFollowStat] = useGetUserFollowStatsMutation();

  useEffect(() => {
    getFollowData({ uid, fid: user.uid! }).then((res) => {
      const { data, error } = res;
      colorLog(error);
      const isF = data?.amIFollowingThisUser;
      setIsFollowing(isF!);
    });
  }, []);

  useEffect(() => {
    getUserFollowStat({ uid: user.uid }).then((res) => {
      const { data, error } = res;
      if (error) colorLog(error);
      if (data) {
        const { followerCount, followingCount } = data.getUserFollowStats!;
        setFollowerCount(followerCount ? followerCount : 0);
        setFollowingCount(followingCount ? followingCount : 0);
      }
    });
  }, []);

  return (
    <LikesUserView key={user?.uid} className='likes-card'>
      <div className='first'>
        <div className='child'>
          <div className='pic'>
            <ProfileImage className='image' profilePic={user?.photoUrl!} />
          </div>
          <div className='name'>
            <div className='nick'>{user.nickname}</div>
            <div className='stats'>
              <div className='following'>
                {getFormattedNumber(userFollowingCount)} following
              </div>
              <div className='follower'>
                {getFormattedNumber(userFollowerCount)} followers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='second'>
        <div className='child'>
          {isFollow ? (
            <IoMdHeart fill='red' size={25} />
          ) : (
            <IoMdHeartEmpty size={25} />
          )}
          <MdOutlineAccountCircle fill='#565656' size={25} />
        </div>
      </div>
    </LikesUserView>
  );
};

const LikesWindow = () => {
  const likedUsers = useAppSelector((state) => state.settings.popSlideLikes);
  return (
    <LikesWindowStyle className='likes-window'>
      {likedUsers.length !== 0 ? (
        <div className='likes-container'>
          {likedUsers.map((user) => (
            <UserTile user={user} />
          ))}
        </div>
      ) : (
        <NotFound type='likes' />
      )}
    </LikesWindowStyle>
  );
};

export default withUrqlClient(urqlClient)(LikesWindow);
