import {
  AddCommentParent,
  StyledTextArea,
  StyledTextAreaBack,
} from './addComment.styles';
import {
  Comment,
  Movie,
  Reply,
  useInsertCommentMutation,
  useInsertReplyMutation,
} from '../../generated/graphql';
import { MdClose, MdModeComment } from 'react-icons/md';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import MovieCard from '../movie-card/movieCard';
import MovieChip from '../movie-chip/movieChip';
import MovieInfo from '../comment-card/movieInfo';
import ProfilePic from '../profilePic/profilePic';
import { batch } from 'react-redux';

type props = {
  type: string;
};
const AddComment: React.FC<props> = ({ type }) => {
  const [_ic, insertComment] = useInsertCommentMutation();
  const [_ir, insertReply] = useInsertReplyMutation();
  const ref = useRef<HTMLDivElement | null>(null);
  const user = useAppSelector((state) => state.user);
  const [text, setText] = useState<string>('');
  let popupData = useAppSelector((state) => state.popup.popupData);
  const [movieInfo, setMovieInfo] = useState<Movie>();
  const [comment, setComment] = useState<Comment | Reply>();
  const dispatch = useAppDispatch();
  const [commentInserted, setCommentInserted] = useState<number>(0);

  useEffect(() => {
    if (type === 'movie') setMovieInfo(popupData as Movie);
    else setComment(popupData as any);
  }, [type]);

  const closeHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(false));
      dispatch(sliceSetSelectedElement(''));
      dispatch(sliceSetPopupData({}));
    });
  };

  const postCommentHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (text === '') {
      return;
    }
    if (type === 'movie') {
      setCommentInserted(1);
      insertComment({
        options: {
          commentedUserId: user.id,
          commentedUserName: user.nickname,
          likesCount: 0,
          message: text,
          movieId: movieInfo?.id!,
          platformId: 1,
        },
      }).then((res) => {
        const { data, error } = res;
        if (error) {
          console.log(error);
          setCommentInserted(3);
        }
        if (data) {
          setCommentInserted(2);
          batch(() => {
            dispatch(sliceSetIsPopupOpened(false));
            dispatch(sliceSetSelectedElement(''));
            dispatch(sliceSetPopupData({}));
          });
        }
      });
    }

    if (type === 'comment') {
      setCommentInserted(1);
      let commentData = comment as Reply;
      let parentComment = commentData.parentCommentId as string;
      console.log(commentData);
      insertReply({
        options: {
          commentedUserId: user.id,
          commentedUserName: user.nickname as string,
          likesCount: 0,
          message: text,
          movieId: commentData?.movieId!,
          platformId: 1,
          repliesCount: 0,
          parentRepliedUser: commentData?.commentedUserName,
          parentCommentId: isNaN(parseInt(parentComment))
            ? commentData.id
            : parentComment,
          parentReplyId: commentData.id,
        },
      }).then((res) => {
        const { data, error } = res;
        if (error) {
          console.log(error);
          setCommentInserted(3);
        }
        if (data) {
          setCommentInserted(2);
          batch(() => {
            dispatch(sliceSetIsPopupOpened(false));
            dispatch(sliceSetSelectedElement(''));
            dispatch(sliceSetPopupData({}));
          });
        }
      });
    }
  };

  return (
    <AddCommentParent>
      <div className='heading'>
        <MdModeComment size={25} className='icon' />
        <span> Post your comment</span>
        <div className='close' onClick={closeHandler}>
          <MdClose size={20} />
        </div>
      </div>
      <div className='context'>
        <div className='user-container'>
          <div className='user'>
            <ProfilePic src={user?.photoUrl!} tooltip={true} />
          </div>
        </div>
        <div className='comment-section'>
          <div className='textarea-container'>
            <StyledTextArea
              placeholder='Hmm...'
              value={text}
              onChange={(e) => {
                e.stopPropagation();
                setText(e.target.value);
              }}></StyledTextArea>
            <StyledTextAreaBack ref={ref}>{text}</StyledTextAreaBack>
          </div>
          <div className='title-details'>
            <MovieChip name={movieInfo?.name!} />
            {commentInserted === 1 && <MovieChip name='Posting Comment' />}
            {commentInserted === 2 && <MovieChip name='Comment posted' />}
            {commentInserted === 3 && (
              <MovieChip name='Error posting comment' />
            )}
            <div className='post' onClick={postCommentHandler}>
              Comment
            </div>
          </div>
        </div>
      </div>
    </AddCommentParent>
  );
};

export default AddComment;
