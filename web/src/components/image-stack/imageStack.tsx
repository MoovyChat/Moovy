import { DIRECTION, TOOLTIP } from '../../utils/enums';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';

import { Image } from '../Image/image';
import { ImageStackParent } from './imageStack.style';
import { LOGIN } from '../tooltip/constants';
import MoovyIcon from '../../svgs/moovy-logo-white.jpg';
import Tooltip from '../tooltip/tooltip';
import { User } from '../../generated/graphql';
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
  const dispatch = useAppDispatch();
  let [users, setUsers] = useState<User[]>([]);
  let [isFollowerSection, setIsFollowerSection] = useState<boolean>(false);
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

  const showFollowUsers: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const _sentData = {
      data: user.id,
      type: isFollowerSection ? 'Followers' : 'Following',
      isFollower: isFollowerSection,
    };
    batch(() => {
      dispatch(sliceSetPopupData(_sentData));
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetSelectedElement(popupStates.OPEN_FOLLOW));
    });
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
              <Image
                src={users[0]?.photoUrl}
                alt='profile'
                onClick={(e: any) => {
                  e.stopPropagation();
                  redirectToUserProfile(users[0].nickname);
                }}
              />
            </Tooltip>
          ) : (
            <Image src={MoovyIcon} alt='profile' />
          )}
        </div>
        <div className='two profile-box'>
          {users[1] ? (
            <Tooltip
              height='120px'
              message={LOGIN}
              width='200px'
              dir={DIRECTION.BOTTOM}>
              <Image
                src={users[1]?.photoUrl}
                alt='profile'
                onClick={(e: any) => {
                  e.stopPropagation();
                  redirectToUserProfile(users[1].nickname);
                }}
              />
            </Tooltip>
          ) : (
            <Image src={MoovyIcon} alt='profile' />
          )}
        </div>
        <div className='three profile-box'>
          {users[2] ? (
            <Tooltip
              height='120px'
              message={LOGIN}
              width='200px'
              dir={following ? DIRECTION.BOTTOM_LEFT : DIRECTION.BOTTOM}>
              <Image
                src={users[2]?.photoUrl}
                alt='profile'
                onClick={(e: any) => {
                  e.stopPropagation();
                  redirectToUserProfile(users[2].nickname);
                }}
              />
            </Tooltip>
          ) : (
            <Image src={MoovyIcon} alt='profile' />
          )}
        </div>
      </div>
      <div className='count' onClick={showFollowUsers}>
        {count <= 0 ? defaultText : countText}
      </div>
    </ImageStackParent>
  );
};

export default ImageStack;
