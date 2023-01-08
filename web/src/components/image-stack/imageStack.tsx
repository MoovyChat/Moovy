import { DIRECTION, TOOLTIP } from '../../utils/enums';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import {
  User,
  useGetFollowersMutation,
  useGetFollowingsMutation,
} from '../../generated/graphql';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';

import { ImageStackParent } from './imageStack.style';
import { LOGIN } from '../tooltip/constants';
import MoovyIcon from '../../svgs/moovy-logo-white.jpg';
import Tooltip from '../tooltip/tooltip';
import { batch } from 'react-redux';
import { popupStates } from '../../constants';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

type props = {
  user: User;
  followers?: User[];
  following?: User[];
  count: number;
};
const ImageStack: React.FC<props> = ({ followers, following, count, user }) => {
  const navigate = useNavigate();
  let [users, setUsers] = useState<User[]>([]);
  let [isFollowerSection, setIsFollowerSection] = useState<boolean>(false);
  const [, getFollowers] = useGetFollowersMutation();
  const [, getFollowing] = useGetFollowingsMutation();
  const dispatch = useAppDispatch();
  const redirectToUserProfile = (id: string) => {
    navigate(`/profile/${id}`);
  };
  useEffect(() => {
    if (followers) {
      setUsers(followers);
      setIsFollowerSection(true);
    } else {
      if (following) {
        setUsers(following);
      }
    }
  }, [followers, following]);
  let countText = isFollowerSection
    ? `${count} followers`
    : `${count} following`;

  const showFollows: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (isFollowerSection) {
      getFollowers({ uid: user.id }).then((res) => {
        const { data, error } = res;
        if (error) console.log(error);
        if (data) {
          const _data = data?.getFollowers?.followers;
          const _sentData = {
            data: _data,
            type: 'Followers',
          };
          batch(() => {
            dispatch(sliceSetIsPopupOpened(true));
            dispatch(sliceSetSelectedElement(popupStates.OPEN_FOLLOW));
            dispatch(sliceSetPopupData(_sentData));
          });
        }
      });
    } else {
      getFollowing({ uid: user.id }).then((res) => {
        const { data, error } = res;
        if (error) console.log(error);
        if (data) {
          const _data = data?.getFollowings?.followings;
          const _sentData = {
            data: _data,
            type: 'Following',
          };
          batch(() => {
            dispatch(sliceSetIsPopupOpened(true));
            dispatch(sliceSetSelectedElement(popupStates.OPEN_FOLLOW));
            dispatch(sliceSetPopupData(_sentData));
          });
        }
      });
    }
  };

  let defaultText = isFollowerSection ? `No followers` : `0 following`;
  return (
    <ImageStackParent>
      <div className='gp'>
        <div className='one profile-box'>
          {users[0] ? (
            <Tooltip
              height='120px'
              message={TOOLTIP.USER}
              width='200px'
              data={users[0]}
              dir={followers ? DIRECTION.BOTTOM_RIGHT : DIRECTION.BOTTOM}>
              <img
                src={users[0]?.photoUrl}
                alt='profile'
                onClick={(e) => {
                  e.stopPropagation();
                  redirectToUserProfile(users[0].nickname);
                }}
              />
            </Tooltip>
          ) : (
            <img src={MoovyIcon} alt='profile' />
          )}
        </div>
        <div className='two profile-box'>
          {users[1] ? (
            <Tooltip
              height='120px'
              message={LOGIN}
              width='200px'
              dir={DIRECTION.BOTTOM}>
              <img
                src={users[1]?.photoUrl}
                alt='profile'
                onClick={(e) => {
                  e.stopPropagation();
                  redirectToUserProfile(users[1].nickname);
                }}
              />
            </Tooltip>
          ) : (
            <img src={MoovyIcon} alt='profile' />
          )}
        </div>
        <div className='three profile-box'>
          {users[2] ? (
            <Tooltip
              height='120px'
              message={LOGIN}
              width='200px'
              dir={following ? DIRECTION.BOTTOM_LEFT : DIRECTION.BOTTOM}>
              <img
                src={users[2]?.photoUrl}
                alt='profile'
                onClick={(e) => {
                  e.stopPropagation();
                  redirectToUserProfile(users[2].nickname);
                }}
              />
            </Tooltip>
          ) : (
            <img src={MoovyIcon} alt='profile' />
          )}
        </div>
      </div>
      <div className='count' onClick={showFollows}>
        {count <= 0 ? defaultText : countText}
      </div>
    </ImageStackParent>
  );
};

export default ImageStack;
