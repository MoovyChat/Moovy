import React, { useEffect, useRef, useState } from 'react';
import {
  Users,
  useGetCommentOrReplyQuery,
  useGetUserMutMutation,
} from '../../generated/graphql';

import ProfilePic from '../profilePic/profilePic';
import { StyledMiniCommentCard } from './miniCommentCard.styles';
import { getTimeFrame } from '../../utils/helpers';
import { isServer } from '../../constants';
import { useNavigate } from 'react-router-dom';

interface miniUser {
  __typename?: 'User' | undefined;
  id: string;
  name: string;
  photoUrl: string;
  nickname: string;
}
type props = {
  id: string;
  type: string;
  className: string;
  extendData?: boolean;
};
const MiniCommentCard: React.FC<props> = ({
  id,
  type,
  className,
  extendData,
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<miniUser | null>(null);
  const parentComment = useRef<any | null>(null);
  const [cardHeight, setCardHeight] = useState<string>('');
  const [isEllipsis, setIsEllipsis] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [, getUser] = useGetUserMutMutation();
  const [getParentComment] = useGetCommentOrReplyQuery({
    variables: {
      id,
      type,
    },
    pause: isServer(),
  });
  const messageRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const { data, error, fetching } = getParentComment;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getCommentOrReply;
      parentComment.current = _data?.comment ? _data.comment : _data?.reply;
      getUser({ uid: parentComment?.current?.commentedUserId }).then(res => {
        const { data, error } = res;
        if (error) console.log(error);
        if (data) {
          const _data = data.getUserMut!;
          setUser(() => _data as miniUser);
        }
      });
    }
  }, [getParentComment]);

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
      showMore={showMore}
      tabIndex={0}
      onClick={e => {
        e.stopPropagation();
        if (type === 'reply') {
          navigate(`/home/reply/${id}`);
        } else if (type === 'comment') {
          navigate(`/home/comment/${id}`);
        }
      }}
    >
      {parentComment.current ? (
        <React.Fragment>
          <div className="photo">
            <ProfilePic
              src={user?.photoUrl!}
              user={user as Users}
              tooltip={true}
            />
          </div>
          <div className="data">
            <div className="name">
              <span>{user && (user.nickname as string)}</span>
              <span className="time">
                {getTimeFrame(parentComment.current.createdAt!)}
              </span>
            </div>
            <div className="msg" ref={messageRef}>
              {parentComment.current.message}
            </div>
            {isEllipsis && extendData && (
              <div
                className="show-more"
                onClick={e => {
                  e.stopPropagation();
                  setShowMore(!showMore);
                }}
              >
                {showMore ? 'Show less' : 'Show more'}
              </div>
            )}
          </div>
        </React.Fragment>
      ) : (
        <div className="not-found">The comment/reply has been deleted.</div>
      )}
    </StyledMiniCommentCard>
  );
};

export default MiniCommentCard;
