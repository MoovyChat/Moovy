import { Comment, User, useGetUserQuery } from '../../generated/graphql';
import React, { useEffect, useRef, useState } from 'react';

import Loading from '../../pages/loading/loading';
import NotFound from '../../pages/notFound/notFound';
import ProfilePic from '../profilePic/profilePic';
import { StyledMiniCommentCard } from './miniCommentCard.styles';
import { getTimeFrame } from '../../utils/helpers';
import { isServer } from '../../constants';

type props = {
  comment: Comment;
};
const MiniCommentCard: React.FC<props> = ({ comment }) => {
  const [user, setUser] = useState<User | null>(null);
  const [{ data, error, fetching }] = useGetUserQuery({
    variables: { uid: comment?.commentedUserId! },
    pause: isServer(),
  });
  useEffect(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      const getUser = data?.getUser! as User;
      console.log(getUser);
      setUser(getUser);
    }
  }, [data, error, fetching, user, comment.commentedUserId]);

  if (fetching) return <Loading />;

  return (
    <StyledMiniCommentCard>
      <div className='photo'>
        <ProfilePic src={user?.photoUrl!} user={user as User} tooltip={true} />
      </div>
      <div className='data'>
        <div className='name'>
          <span>{user && (user.nickname as string)}</span>
          <span className='time'>{getTimeFrame(comment.createdAt!)}</span>
        </div>
        <div className='msg'>{comment.message}</div>
      </div>
    </StyledMiniCommentCard>
  );
};

export default MiniCommentCard;
