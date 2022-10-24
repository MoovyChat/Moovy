import React, { MouseEventHandler, useEffect, useState } from 'react';
import { Reply, User } from '../../utils/interfaces';
import { getFormattedNumber, getTimeFrame } from '../../utils/helpers';

import { CardParent } from './commentCard.styles';
import { IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineModeComment } from 'react-icons/md';
import ProfilePic from '../profilePic/profilePic';
import { isServer } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { useGetUserQuery } from '../../generated/graphql';
import { useNavigate } from 'react-router-dom';

type props = {
  comment: Reply;
};
const ReplyCard: React.FC<props> = ({ comment }) => {
  const movieId = comment.movieId;
  const navigate = useNavigate();
  const commentedUserId = comment.commentedUserId;
  const loggedInUser = useAppSelector((state) => state.user);
  const isSameUserAsLoggedIn = commentedUserId === loggedInUser.id;
  const [u, setUserInfo] = useState<User>();
  const [userInfo] = useGetUserQuery({
    variables: { uid: commentedUserId },
    pause: isSameUserAsLoggedIn && isServer(),
  });

  // Get user info.
  useEffect(() => {
    const { data, fetching, error } = userInfo;
    if (error) console.log(error);
    if (!fetching && data) {
      const _user = data.getUser as User;
      setUserInfo(_user);
    }
  }, []);

  const goToReply: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    navigate(`/reply/${comment.id}`);
  };

  return (
    <CardParent isReply onClick={goToReply}>
      <div className='content'>
        <div className='user-pic'>
          <div className='pic-container'>
            <ProfilePic
              src={isSameUserAsLoggedIn ? loggedInUser.photoUrl! : u?.photoUrl!}
            />
          </div>
        </div>
        <div className='message'>
          <div className='username'>
            <div className='user'>
              {isSameUserAsLoggedIn ? loggedInUser.nickname : u?.nickname}
            </div>
            <div className='time'>{getTimeFrame(comment.createdAt)}</div>
          </div>
          <div className='msg'>{comment.message}</div>
        </div>
        <div className='options'>
          <div className='likes c'>
            <span className='count'>
              {getFormattedNumber(comment.likesCount!)}
            </span>
            <span className='icon'>
              <IoMdHeartEmpty size={18} />
            </span>
          </div>
        </div>
      </div>
    </CardParent>
  );
};

export default ReplyCard;
