import { Comment, Reply, User } from '../../utils/interfaces';
import {
  CommentThreadParent,
  HeaderText,
  StyledButton,
} from './commentThread.styles';
import {
  MdFavoriteBorder,
  MdKeyboardBackspace,
  MdOutlineMoreHoriz,
  MdReply,
} from 'react-icons/md';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import {
  useGetCommentQuery,
  useGetCommentedUserQuery,
  useGetRepliesOfCommentQuery,
  useGetUserQuery,
} from '../../generated/graphql';
import { useNavigate, useParams } from 'react-router-dom';

import NotFound from '../notFound/notFound';
import ProfilePic from '../../components/profilePic/profilePic';
import ReplyCard from '../../components/comment-card/replyCard';
import { error } from 'console';
import { getDateFormat } from '../../utils/helpers';
import { isServer } from '../../constants';

const CommentThread = () => {
  const { id } = useParams();
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [commentQueyResults] = useGetCommentQuery({
    variables: { cid: id! },
    pause: isServer(),
  });
  const [commentedQueryResult] = useGetCommentedUserQuery({
    variables: { cid: id! },
    pause: isServer(),
  });
  const [comment, setComment] = useState<Comment>();
  const [commentHeight, setCommentHeight] = useState<number>(0);
  const [replies, setReplies] = useState<Reply[]>();
  const [replyCount, setReplyCount] = useState<number>(0);
  const [lastPage, setLastPage] = useState<number>(1);
  const [commentedUser, setCommentedUser] = useState<User>();
  const backButtonHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    navigate(-1);
  };
  useEffect(() => {
    const { data, fetching, error } = commentQueyResults;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getComment as Comment;
      setComment(_data);
    }
  }, [commentQueyResults]);
  useEffect(() => {
    const { data, error, fetching } = commentedQueryResult;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getCommentedUser as User;
      setCommentedUser(_data);
    }
  }, [commentedQueryResult]);
  const [repliesQueryResult] = useGetRepliesOfCommentQuery({
    variables: {
      cid: id!,
      limit: 10,
    },
  });
  // Get replies.
  useEffect(() => {
    const { data, error, fetching } = repliesQueryResult;
    if (error) console.log(error);
    if (!fetching && data) {
      const _repliesData = data.getRepliesOfComment.replies;
      const _repliesCount = data.getRepliesOfComment.repliesCount;
      const _lastPage = data.getRepliesOfComment.lastPage;
      setReplies(_repliesData);
      setReplyCount(_repliesCount);
      setLastPage(_lastPage);
    }
  }, [repliesQueryResult]);
  // Get comment height.
  useEffect(() => {
    setCommentHeight(ref.current?.clientHeight!);
  }, [ref.current]);
  return (
    <CommentThreadParent commentHeight={commentHeight}>
      <div className='comment-header'>
        <div className='back-button' onClick={backButtonHandler}>
          <MdKeyboardBackspace size={35} />
        </div>
        <HeaderText className='header-text'>Memo</HeaderText>
      </div>
      <div className='comment-container' ref={ref}>
        <div className='comment-usr-detail'>
          <div className='user-container'>
            <div className='user'>
              <ProfilePic src={commentedUser?.photoUrl!} />
            </div>
            <div className='name'>{commentedUser?.nickname}</div>
          </div>
          <div className='options-container'>
            <div className='follow'>
              <StyledButton className='follow-btn' color='#de1328'>
                Follow
              </StyledButton>
            </div>
            <div className='option'>
              <MdOutlineMoreHoriz className='icon' size={20} />
            </div>
          </div>
        </div>
        <div className='comment-usr-msg'>
          <div className='cm-us-xt'>{comment?.message}</div>
        </div>
        <div className='comment-usr-time'>
          {getDateFormat(comment?.createdAt)}
        </div>
        <div className='comment-usr-stats'>
          <div className='likes cus'>
            <MdFavoriteBorder size={20} />
            <div className='cmt-txt'>
              <div className='count'>{comment?.likesCount}</div>
              <div className='txt'>Likes</div>
            </div>
          </div>
          <div className='comment cus'>
            <MdReply size={20} />
            <div className='cmt-txt'>
              <div className='count'>{comment?.repliesCount}</div>
              <div className='txt'>Replies</div>
            </div>
          </div>
        </div>
      </div>
      <div className='comment-replies'>
        {replies?.map((reply) => (
          <ReplyCard comment={reply} key={`reply${reply.id!}`} />
        ))}
      </div>
    </CommentThreadParent>
  );
};

export default CommentThread;
