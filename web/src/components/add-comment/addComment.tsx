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
import {
  MdClose,
  MdCode,
  MdEmojiEmotions,
  MdModeComment,
  MdSend,
} from 'react-icons/md';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { AiOutlineNumber } from 'react-icons/ai';
import CommentCard from '../comment-card/commentCard';
import { FOCUS_WINDOW } from '../../utils/enums';
import FocusWindow from '../focus-window/focusWindow';
import MiniCommentCard from '../mini-comment-card/miniCommentCard';
import MovieCard from '../movie-card/movieCard';
import MovieChip from '../movie-chip/movieChip';
import MovieInfo from '../comment-card/movieInfo';
import ProfilePic from '../profilePic/profilePic';
import { batch } from 'react-redux';
import { sliceSetTextAreaMessage } from '../../redux/slices/textAreaSlice';

type props = {
  type: string;
};
const AddComment: React.FC<props> = ({ type }) => {
  const [_ic, insertComment] = useInsertCommentMutation();
  const [_ir, insertReply] = useInsertReplyMutation();
  const text = useAppSelector((state) => state.textArea.text);
  const ref = useRef<HTMLDivElement | null>(null);
  const user = useAppSelector((state) => state.user);
  let popupData = useAppSelector((state) => state.popup.popupData);
  const [movieInfo, setMovieInfo] = useState<Movie>();
  const [comment, setComment] = useState<Comment | Reply>();
  const dispatch = useAppDispatch();
  const [commentInserted, setCommentInserted] = useState<number>(0);

  useEffect(() => {
    if (type === 'movie') setMovieInfo(popupData as Movie);
    else setComment(() => popupData as any);
  }, [type]);

  const closeHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(false));
      dispatch(sliceSetSelectedElement(''));
      dispatch(sliceSetPopupData({}));
      dispatch(sliceSetTextAreaMessage(''));
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
              maxLength={300}
              autoFocus
              onChange={(e) => {
                e.stopPropagation();
                dispatch(sliceSetTextAreaMessage(e.target.value));
              }}></StyledTextArea>
            <StyledTextAreaBack ref={ref}>{text}</StyledTextAreaBack>
          </div>
          <div className='options'>
            <FocusWindow
              message={FOCUS_WINDOW.EMOJI}
              height='200px'
              width='200px'>
              <div className='chip'>
                <div className='icon'>
                  <MdEmojiEmotions size={15} />
                </div>
                <div className='text'>Emoji</div>
              </div>
            </FocusWindow>
            <div
              className='chip'
              onClick={(e) => {
                e.stopPropagation();
                dispatch(sliceSetTextAreaMessage(text + '<s></s>'));
              }}>
              <div className='icon'>
                <MdCode size={15} />
              </div>
              <div className='text'>Spoiler</div>
            </div>
            <div
              className='chip down'
              style={{
                background: `linear-gradient(90deg, #df1212 ${
                  text.length / 3
                }%,#6d0e85 0%)`,
              }}>
              <div className='icon'>
                <AiOutlineNumber size={15} />
              </div>
              <div className='text'>{text.length}/300</div>
            </div>
          </div>
          {type === 'comment' && comment && comment.commentedUserId && (
            <div className='comment'>
              <MiniCommentCard
                id={comment.id}
                type={
                  (comment as any)?.parentCommentId ===
                  (comment as any)?.parentReplyId
                    ? 'comment'
                    : 'reply'
                }
                className='mini'
                extendData={false}
              />
            </div>
          )}

          <div className='title-details'>
            {type === 'movie' && <MovieChip name={movieInfo?.name!} />}
            {commentInserted === 1 && <MovieChip name='Posting Comment' />}
            {commentInserted === 2 && <MovieChip name='Comment posted' />}
            {commentInserted === 3 && (
              <MovieChip name='Error posting comment' />
            )}
            <div className='post' onClick={postCommentHandler}>
              <MdSend size={25} fill='white' />
            </div>
          </div>
        </div>
      </div>
    </AddCommentParent>
  );
};

export default AddComment;
