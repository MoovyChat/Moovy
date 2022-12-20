import React, { MouseEventHandler, useMemo, useState } from 'react';
import { ShowFollowParent, StyledUserCard } from './showFollow.styles';
import {
  User,
  useIsFollowingUserQuery,
  useToggleFollowMutation,
} from '../../generated/graphql';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { MdClose } from 'react-icons/md';
import ProfilePic from '../profilePic/profilePic';
import { batch } from 'react-redux';
import { isServer } from '../../constants';
import { useNavigate } from 'react-router-dom';

const ShowFollow = () => {
  const popup = useAppSelector((state) => state.popup);
  const users = popup.popupData as User[];
  const dispatch = useAppDispatch();
  const closeHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(false));
      dispatch(sliceSetSelectedElement(''));
      dispatch(sliceSetPopupData(null));
    });
  };
  return (
    <ShowFollowParent>
      <div className='follow-head'>
        <span>{users.length} follower(s)</span>
        <div className='close' onClick={closeHandler}>
          <MdClose size={25} />
        </div>
      </div>
      <div className='users-container'>
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </ShowFollowParent>
  );
};

type props = {
  user: User;
};
const UserCard: React.FC<props> = ({ user }) => {
  const currentUser = useAppSelector((state) => state.user);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [, toggleFollow] = useToggleFollowMutation();
  const isSameUser = user.id === currentUser.id;
  const [amIFollowingUser] = useIsFollowingUserQuery({
    variables: { uid: currentUser.id, fid: user.id },
    pause: isServer(),
  });
  const navigate = useNavigate();
  const cardClickHandler = (userId: string) => {
    navigate(`/profile/${userId}`);
  };
  useMemo(() => {
    const { data, error, fetching } = amIFollowingUser;
    if (error) console.log(error);
    console.log(data);
    if (!fetching && data) {
      const _data = data.isFollowingUser as boolean;
      setIsFollowing(() => _data);
    }
  }, [amIFollowingUser]);

  const toggleFollowHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setIsFollowing(!isFollowing);
    toggleFollow({
      uid: currentUser.id,
      followingId: user.id,
      follow: !isFollowing,
    }).then((res) => {
      const { data, error } = res;
      if (error) console.log(error);
      const _data = data?.toggleFollow?.follows as boolean;
      setIsFollowing(_data);
    });
  };
  let followStatus = isFollowing ? 'Following' : 'Follow';
  return (
    <StyledUserCard
      onClick={(e) => {
        e.stopPropagation();
        cardClickHandler(user.nickname);
      }}>
      <div className='user-block'>
        <div className='pic-container'>
          <ProfilePic src={user.photoUrl} tooltip={true} />
        </div>
        <div className='user-name'>{user.nickname}</div>
      </div>
      {!isSameUser && (
        <div className='follow' onClick={toggleFollowHandler}>
          {followStatus}
        </div>
      )}
    </StyledUserCard>
  );
};

export default ShowFollow;
