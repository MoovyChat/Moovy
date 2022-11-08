import { CardParent, ReplyWindow } from './commentCard.styles';
import { Comment, Reply, User } from '../../utils/interfaces';
import {
  MdFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineModeComment,
  MdOutlineSubdirectoryArrowRight,
} from 'react-icons/md';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { getFormattedNumber, getTimeFrame } from '../../utils/helpers';
import {
  useGetIsUserLikedCommentQuery,
  useGetRepliesOfCommentQuery,
  useGetUserQuery,
  useSetCommentLikeMutation,
} from '../../generated/graphql';

import { IoMdHeartEmpty } from 'react-icons/io';
import ProfilePic from '../profilePic/profilePic';
import ReplyCard from './replyCard';
import _ from 'lodash';
import { error } from 'console';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

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
  const [like, setLike] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(comment.likesCount!);
  const [userInfo] = useGetUserQuery({
    variables: { uid: commentedUserId },
    pause: isSameUserAsLoggedIn && isServer(),
  });
  const [replyInfo] = useGetRepliesOfCommentQuery({
    variables: { cid: comment.id, limit: 5, page: page },
    pause: isServer(),
  });
  const [isUserLiked] = useGetIsUserLikedCommentQuery({
    variables: {
      uid: loggedInUser.id,
      cid: comment.id,
    },
  });
  const [, setCommentLike] = useSetCommentLikeMutation();

  const showReplies: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowR(!showR);
  };

  const goToComment: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    navigate(`/comment/${comment.id}`);
  };

  const updateLike: MouseEventHandler<HTMLSpanElement> = async (e) => {
    e.stopPropagation();
    setLike(!like);
    like ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    const res = await setCommentLike({
      uid: loggedInUser.id,
      cid: comment.id,
      like: !like,
      mid: movieId,
    });
    const { data, error } = res;
    if (error) console.log(error);
    const _like = data?.setCommentLike?.likeStatus.like!;
    setLike(_like);
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

  // Is user liked comment query.
  useEffect(() => {
    const { error, data, fetching } = isUserLiked;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = isUserLiked.data;
      const _liked = _data?.getIsUserLikedComment?.isLiked!;
      setLike(_liked);
    }
  }, [isUserLiked]);

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
            <span className='count'>{getFormattedNumber(likeCount)}</span>
            <span className='icon' onClick={updateLike}>
              {like ? (
                <MdFavorite size={20} fill='#ff005d' />
              ) : (
                <MdOutlineFavoriteBorder size={20} />
              )}
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

export default withUrqlClient(urqlClient)(CommentCard);
