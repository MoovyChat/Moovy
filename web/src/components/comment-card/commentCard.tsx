import { CardParent, ReplyWindow } from './commentCard.styles';
import { Comment, Reply, User } from '../../utils/interfaces';
import {
  MdOutlineModeComment,
  MdOutlineSubdirectoryArrowRight,
} from 'react-icons/md';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { getFormattedNumber, getTimeFrame } from '../../utils/helpers';
import {
  useGetRepliesOfCommentQuery,
  useGetUserQuery,
} from '../../generated/graphql';

import { IoMdHeartEmpty } from 'react-icons/io';
import ProfilePic from '../profilePic/profilePic';
import ReplyCard from './replyCard';
import _ from 'lodash';
import { error } from 'console';
import { isServer } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

type props = {
  comment: Comment;
};
const CommentCard: React.FC<props> = ({ comment }) => {
  const movieId = comment.movieId;
  const navigate = useNavigate();
  const commentedUserId = comment.commentedUserId;
  const loggedInUser = useAppSelector((state) => state.user);
  const isSameUserAsLoggedIn = commentedUserId === loggedInUser.id;
  const [u, setUserInfo] = useState<User>();
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [repliesCount, setRepliesCount] = useState<number>(0);
  const [showR, setShowR] = useState<boolean>(false);
  const [replies, setReplies] = useState<Reply[]>();
  const [userInfo] = useGetUserQuery({
    variables: { uid: commentedUserId },
    pause: isSameUserAsLoggedIn && isServer(),
  });
  const [replyInfo] = useGetRepliesOfCommentQuery({
    variables: { cid: comment.id, limit: 5, page: page },
    pause: isServer(),
  });

  const showReplies: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowR(!showR);
  };

  const goToComment: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    navigate(`/comment/${comment.id}`);
  };

  // Get user info.
  useEffect(() => {
    const { data, fetching, error } = userInfo;
    if (error) console.log(error);
    if (!fetching && data) {
      const _user = data.getUser as User;
      setUserInfo(_user);
    }
  }, []);

  // Get replies
  useEffect(() => {
    const { data, error, fetching } = replyInfo;
    if (error) console.log(error);
    if (!fetching && data) {
      const _replies = data.getRepliesOfComment.replies;
      const _lastPage = data.getRepliesOfComment.lastPage;
      const _repliesCount = data.getRepliesOfComment.repliesCount;
      if (replies) setReplies(_.concat(replies, _replies!));
      else setReplies(_replies);
      setRepliesCount(_repliesCount);
      setLastPage(_lastPage);
    }
  }, [replyInfo]);
  return (
    <CardParent showReplies={showR} onClick={goToComment}>
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
              <IoMdHeartEmpty size={20} />
            </span>
          </div>
          <div className='likes c'>
            <span className='count'>
              {getFormattedNumber(comment.repliesCount!)}
            </span>
            <span className='icon'>
              <MdOutlineModeComment size={20} />
            </span>
          </div>
        </div>
      </div>
      {replies && replies.length > 0 && (
        <div className='show-replies'>
          <div className='reply-text' onClick={showReplies}>
            <div className='rt-wc'>
              <div className='icon'>
                <MdOutlineSubdirectoryArrowRight />
              </div>
              <span>Show replies</span>
            </div>
          </div>
          <ReplyWindow showReplies={showR}>
            {replies?.map((reply) => (
              <ReplyCard comment={reply} key={`reply${reply.id}`} />
            ))}
          </ReplyWindow>
        </div>
      )}
    </CardParent>
  );
};

export default CommentCard;
