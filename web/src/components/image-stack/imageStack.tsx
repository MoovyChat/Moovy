import { DIRECTION, TOOLTIP } from '../../utils/enums';
import { Follow, User } from '../../generated/graphql';
import { Outlet, useNavigate } from 'react-router-dom';
import React, { MouseEventHandler, useEffect, useState } from 'react';

import { ImageStackParent } from './imageStack.style';
import { LOGIN } from '../tooltip/constants';
import Tooltip from '../tooltip/tooltip';

type props = {
  followers?: User[];
  following?: User[];
  count: number;
};
const ImageStack: React.FC<props> = ({ followers, following, count }) => {
  const navigate = useNavigate();
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

  let defaultText = isFollowerSection
    ? `No followers`
    : `You are not following anyone`;
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
                  redirectToUserProfile(users[0].id);
                }}
              />
            </Tooltip>
          ) : (
            <img
              src='https://previews.123rf.com/images/jemastock/jemastock1904/jemastock190439528/122931084-woman-smiling-abstract-cartoon-profile-over-floral-square-frame-vector-illustration-graphic-design.jpg'
              alt='profile'
            />
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
                  redirectToUserProfile(users[1].id);
                }}
              />
            </Tooltip>
          ) : (
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Qd_6eOStzuACxdypRVIFykeevQjPb_KI2H3Nt_6YixKr_JWOtqw1QlxyRtoiVO9GDz0&usqp=CAU'
              alt='profile'
            />
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
                  redirectToUserProfile(users[2].id);
                }}
              />
            </Tooltip>
          ) : (
            <img
              src='https://thumbs.dreamstime.com/b/woman-smiling-cartoon-profile-abstract-over-floral-square-frame-vector-illustration-graphic-design-143190583.jpg'
              alt='profile'
            />
          )}
        </div>
      </div>
      <div className='count'>{count <= 0 ? defaultText : countText}</div>
    </ImageStackParent>
  );
};

export default ImageStack;
