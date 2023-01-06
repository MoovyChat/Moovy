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
  className: string;
  extendData?: boolean;
};
const MiniCommentCard: React.FC<props> = ({
  comment,
  className,
  extendData,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [cardHeight, setCardHeight] = useState<string>('');
  const [isEllipsis, setIsEllipsis] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);

  const messageRef = useRef<HTMLDivElement | null>(null);
  const [{ data, error, fetching }] = useGetUserQuery({
    variables: { uid: comment?.commentedUserId! },
    pause: isServer(),
  });
  useEffect(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      const getUser = data?.getUser! as User;
      setUser(getUser);
    }
  }, [data, error, fetching, user, comment?.commentedUserId]);

  useEffect(() => {
    if (!messageRef) return;
    if (!messageRef.current) return;
    const { clientHeight, scrollHeight } = messageRef.current;
    setCardHeight(() => `${scrollHeight}px`);
    if (clientHeight < scrollHeight) {
      setIsEllipsis(() => true);
    } else {
      setIsEllipsis(() => false);
    }
  }, [messageRef.current]);

  return (
    <StyledMiniCommentCard
      className={className}
      cardHeight={cardHeight}
      showMore={showMore}>
      {comment ? (
        <React.Fragment>
          <div className='photo'>
            <ProfilePic
              src={user?.photoUrl!}
              user={user as User}
              tooltip={true}
            />
          </div>
          <div className='data'>
            <div className='name'>
              <span>{user && (user.nickname as string)}</span>
              <span className='time'>{getTimeFrame(comment.createdAt!)}</span>
            </div>
            <div className='msg' ref={messageRef}>
              {comment.message}
            </div>
            {isEllipsis && extendData && (
              <div
                className='show-more'
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMore(!showMore);
                }}>
                {showMore ? 'Show less' : 'Show more'}
              </div>
            )}
          </div>
        </React.Fragment>
      ) : (
        <div className='not-found'>The comment/reply has been deleted.</div>
      )}
    </StyledMiniCommentCard>
  );
};

export default MiniCommentCard;
