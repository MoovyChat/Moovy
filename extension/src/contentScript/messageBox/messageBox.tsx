import { AiOutlineCloseCircle, AiOutlineSend } from 'react-icons/ai';
import {
  ChatTextBox,
  MessageBoxParent,
  ReplyTo,
  TextAreaIcon,
  TextAreaPost,
} from './messageBox.styles';
import {
  Comment,
  ReplyInput,
  useGetUserMutMutation,
  useInsertCommentMutation,
  useInsertReplyMutation,
} from '../../generated/graphql';
import { CommentInfo, User } from '../../Utils/interfaces';
import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import {
  slicePopSlideContentType,
  sliceSetPopSlide,
} from '../../redux/slices/settings/settingsSlice';
import {
  sliceSetIsTextAreaClicked,
  sliceSetIsTextAreaFocused,
  sliceSetTextAreaMessage,
} from '../../redux/slices/textArea/textAreaSlice';
import {
  sliceSetToastBody,
  sliceSetToastVisible,
} from '../../redux/slices/toast/toastSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { AnyAction } from 'redux';
import { COMMENT } from '../../redux/actionTypes';
import ChatArea from '../../components/chat-area/chatArea';
import { IoArrowForwardCircle } from 'react-icons/io5';
import { MdTagFaces } from 'react-icons/md';
import { Pic } from '../../extension/components/logout/logout.styles';
import { Profile } from '../commentInterface/commentInterface.styles';
import { batch } from 'react-redux';
import { iconsEnum } from '../../Utils/enums';
import { sliceSetNetworkError } from '../../redux/slices/loading/loadingSlice';
import { sliceSetPastLoadedCount } from '../../redux/slices/movie/movieSlice';
import { urqlClient } from '../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

type props = {
  replyWindowResponse: CommentInfo | undefined;
  setReplyClickResponse: (e: any) => void;
};
const MessageBox: React.FC<props> = ({
  replyWindowResponse,
  setReplyClickResponse,
}) => {
  // GraphQL: Mutations
  const [_ic, insertComment] = useInsertCommentMutation();
  const [_gu, getUser] = useGetUserMutMutation();
  const [_ir, insertReply] = useInsertReplyMutation();
  // Redux: App selectors.
  const movieIdFromRedux = useAppSelector((state) => state.movie.id);
  const userFromRedux = useAppSelector((state) => state.user);
  const text = useAppSelector((state) => state.textArea.text);
  const accentColor = useAppSelector((state) => state.misc.accentColor);
  // Redux: App dispatch hook.
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => state.misc.toxicScores);
  // React: useState hooks.
  const [isReply, setIsReply] = useState<boolean>(false);
  const [repliedUser, setRepliedUser] = useState<string>('');
  const flagged = useAppSelector((state) => state.misc.flagged);
  const smileyHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetPopSlide(true));
    dispatch(slicePopSlideContentType('smiley'));
  };

  const postComment = async (
    user: User | undefined,
    dispatch: Dispatch<AnyAction>,
    replyWindowResponse: any,
    setReplyClickResponse: (e: any) => void
  ) => {
    if (replyWindowResponse) {
      let newReply: ReplyInput = {
        commentedUserId: userFromRedux.id,
        likesCount: 0,
        repliesCount: 0,
        commentedUserName: userFromRedux?.nickname as string,
        parentCommentId: replyWindowResponse.parentCommentId
          ? replyWindowResponse.parentCommentId
          : replyWindowResponse.id,
        parentReplyId: replyWindowResponse.id,
        parentRepliedUser: replyWindowResponse.commentedUserName,
        message: text,
        movieId: movieIdFromRedux,
        platformId: 1,
      };
      if (text) {
        // Adding replies to 'reply' collection in database.
        insertReply({
          options: newReply,
        })
          .then((response) => {
            const { data, error } = response;
            if (error) {
              if (error.networkError) dispatch(sliceSetNetworkError(true));
              dispatch(sliceSetToastVisible(true));
              dispatch(
                sliceSetToastBody({
                  icon: iconsEnum.ERROR,
                  message: 'Error adding reply',
                })
              );
            }
            if (data) {
              const insertedReply = data?.insertReply;
              batch(() => {
                dispatch(sliceSetToastVisible(true));
                dispatch(
                  sliceSetToastBody({
                    icon: iconsEnum.SUCCESS,
                    message: 'Reply added',
                  })
                );
              });
            }
            setIsReply(false);
            setReplyClickResponse(undefined);
          })
          .catch((err) => console.log(err));
        dispatch(sliceSetTextAreaMessage(''));
      }
    } else {
      if (text) {
        // Adding comments to 'comment' collection in database.
        insertComment({
          options: {
            commentedUserId: user?.id!,
            likesCount: 0,
            message: text,
            commentedUserName: user?.nickname!,
            movieId: movieIdFromRedux,
            platformId: 1,
          },
        }).then((response) => {
          const { error, data } = response;
          if (error) {
            if (error.networkError) dispatch(sliceSetNetworkError(true));
            dispatch(sliceSetToastVisible(true));
            dispatch(
              sliceSetToastBody({
                icon: iconsEnum.ERROR,
                message: 'Error adding reply',
              })
            );
          }
          if (data) {
            const insertedComment = data?.insertComment;
            // Adds the new comment to redux store.
            batch(() => {
              dispatch(sliceSetPastLoadedCount(1));
              dispatch(sliceSetToastVisible(true));
              dispatch(
                sliceSetToastBody({
                  icon: iconsEnum.SUCCESS,
                  message: 'Comment added',
                })
              );
            });
          }
          setIsReply(false);
          setReplyClickResponse(undefined);
        });
        dispatch(sliceSetTextAreaMessage(''));
      }
    }
    dispatch(sliceSetIsTextAreaFocused(false));
    dispatch(sliceSetIsTextAreaClicked(false));
  };

  // Handles reply window response action.
  useEffect(() => {
    if (replyWindowResponse) {
      setIsReply(true);
      const parentComment = replyWindowResponse as CommentInfo;
      // GraphQL: Handle reply user data.
      const referredUser = parentComment.commentedUserId!;
      getUser({ uid: referredUser }).then((res) => {
        const { data, error } = res;
        if (error) console.log(error);
        const nickName = data?.getUserMut?.nickname;
        dispatch(sliceSetTextAreaMessage(`@${nickName!} `));
        setRepliedUser(nickName!);
      });
    }
  }, [replyWindowResponse]);

  return (
    <ChatTextBox className='chat-text-box' isReply={isReply}>
      <TextAreaIcon className='text-area-icon'>
        <Profile profilePic={userFromRedux?.photoUrl!}></Profile>
      </TextAreaIcon>
      <MessageBoxParent>
        <ChatArea
          postComment={postComment}
          replyWindowResponse={replyWindowResponse}
          setReplyClickResponse={setReplyClickResponse}
        />
        {isReply ? (
          <ReplyTo>
            <p>Replying to {repliedUser}</p>
            <div
              className='close-button'
              onClick={() => {
                setReplyClickResponse(undefined);
                setIsReply(false);
                setRepliedUser('');
                dispatch(sliceSetTextAreaMessage(''));
              }}>
              <AiOutlineCloseCircle size={20} />
            </div>
          </ReplyTo>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </MessageBoxParent>
      <div className='smiley' onClick={smileyHandler}>
        <MdTagFaces className='icon' size={25} />
      </div>
      <TextAreaPost>
        <div
          className='text-send'
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
            postComment(
              userFromRedux,
              dispatch,
              replyWindowResponse,
              setReplyClickResponse
            );
          }}>
          <IoArrowForwardCircle fill={accentColor} size={25} />
        </div>
      </TextAreaPost>
    </ChatTextBox>
  );
};

export default withUrqlClient(urqlClient)(MessageBox);
