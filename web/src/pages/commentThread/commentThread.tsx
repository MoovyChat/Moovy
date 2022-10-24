import { Comment, User } from '../../utils/interfaces';
import {
  MdFavoriteBorder,
  MdKeyboardBackspace,
  MdOutlineMoreHoriz,
  MdReply,
} from 'react-icons/md';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import {
  useGetCommentQuery,
  useGetCommentedUserQuery,
  useGetUserQuery,
} from '../../generated/graphql';
import { useNavigate, useParams } from 'react-router-dom';

import { CommentThreadParent } from './commentThread.styles';
import NotFound from '../notFound/notFound';
import ProfilePic from '../../components/profilePic/profilePic';
import { error } from 'console';
import { getDateFormat } from '../../utils/helpers';
import { isServer } from '../../constants';

const CommentThread = () => {
  const { id } = useParams();
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
  return (
    <CommentThreadParent>
      <div className='comment-header'>
        <div className='back-button' onClick={backButtonHandler}>
          <MdKeyboardBackspace size={35} />
        </div>
        <div className='header-text'>Tweet</div>
      </div>
      <div className='comment-container'>
        <div className='comment-usr-detail'>
          <div className='user-container'>
            <div className='user'>
              <ProfilePic src={commentedUser?.photoUrl!} />
            </div>
            <div className='name'>{commentedUser?.nickname}</div>
          </div>
          <div className='options-container'>
            <div className='follow'>
              <div className='follow-btn'>Follow</div>
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
      <div className='comment-replies'></div>
    </CommentThreadParent>
  );
};

export default CommentThread;
