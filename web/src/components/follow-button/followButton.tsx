import React, { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useIsFollowingUserQuery,
  useToggleFollowMutation,
} from '../../generated/graphql';

import { StyledButton } from './followButton.styles';
import { isServer } from '../../constants';

type props = {
  userId: string;
  nickName: string;
};
const FollowButton: React.FC<props> = ({ userId, nickName }) => {
  const loggedUser = useAppSelector((state) => state.user);
  const isDifferentUser = loggedUser.id !== userId;
  const [followHovered, setFollowHovered] = useState<boolean>(false);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [, toggleFollow] = useToggleFollowMutation();
  const [amIFollowingUser] = useIsFollowingUserQuery({
    variables: { uid: loggedUser.id, fid: userId },
    pause: isServer(),
  });

  useMemo(() => {
    const { data, error, fetching } = amIFollowingUser;
    if (error) console.log(error);

    if (!fetching && data) {
      const _data = data.isFollowingUser as boolean;
      setIsFollowing(() => _data);
    }
  }, [amIFollowingUser]);

  const toggleFollowHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setIsFollowing(!isFollowing);
    toggleFollow({
      uid: loggedUser.id,
      followingId: userId,
      follow: !isFollowing,
    }).then((res) => {
      const { error, data } = res;
      if (error) console.log(error);
      const isFollowingRes = data?.toggleFollow?.follows;
      if (isFollowingRes !== null && isFollowingRes !== undefined) {
        setIsFollowing(isFollowingRes);
      }
    });
  };
  return (
    <div
      className='follow'
      onMouseEnter={() => setFollowHovered(() => true)}
      onMouseLeave={() => setFollowHovered(() => false)}>
      {isDifferentUser && (
        <StyledButton
          className='follow-btn'
          color={isFollowing ? '#13dbde31' : '#de1328'}
          isFollowingUser={isFollowing}
          onClick={toggleFollowHandler}>
          {isFollowing ? (followHovered ? 'UnFollow' : 'Following') : 'Follow'}
        </StyledButton>
      )}
    </div>
  );
};

export default FollowButton;
