import {
  ChatTextBox,
  MessageBoxParent,
  ReplyTo,
  TextAreaIcon,
  TextAreaPost,
} from './messageBox.styles';
import { CommentInfo, User } from '../../Utils/interfaces';
import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import {
  ReplyInput,
  useGetUserMutMutation,
  useInsertCommentMutation,
  useInsertReplyMutation,
} from '../../generated/graphql';
import { handleMouseEnter, handleMouseLeave } from '../../extension/utils';
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

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AnyAction } from 'redux';
import ChatArea from '../../components/chat-area/chatArea';
import { IoArrowForwardCircle } from 'react-icons/io5';
import { MdTagFaces } from 'react-icons/md';
import { Profile } from '../commentInterface/commentInterface.styles';
import { batch } from 'react-redux';
import { iconsEnum } from '../../Utils/enums';
import { sliceSetNetworkError } from '../../redux/slices/loading/loadingSlice';
import { sliceSetPastLoadedCount } from '../../redux/slices/movie/movieSlice';
import { urqlClient } from '../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

type props = {
  replyWindowResponse: CommentInfo | undefined;
  setReplyClickResponse: Dispatch<SetStateAction<CommentInfo | undefined>>;
};
const MessageBox: React.FC<props> = ({
  replyWindowResponse,
  setReplyClickResponse,
}) => {
  // GraphQL: Mutations
  const [, insertComment] = useInsertCommentMutation();
  const [, getUser] = useGetUserMutMutation();
  const [, insertReply] = useInsertReplyMutation();
  // Redux: App selectors.
  const movieIdFromRedux = useAppSelector((state) => state.movie.id);
  const userFromRedux = useAppSelector((state) => state.user);
  const text = useAppSelector((state) => state.textArea.text);
  const accentColor = useAppSelector((state) => state.misc.accentColor);
  // Redux: App dispatch hook.
  const dispatch = useAppDispatch();
  // React: useState hooks.
  const [isReply, setIsReply] = useState<boolean>(false);
  const [repliedUser, setRepliedUser] = useState<string>('');
  const smileyHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetPopSlide(true));
    dispatch(slicePopSlideContentType('smiley'));
  };

  const postComment = async (
    user: User | undefined,
    dispatch: Dispatch<AnyAction>,
    replyWindowResponse: CommentInfo | undefined,
    setReplyClickResponse: Dispatch<SetStateAction<CommentInfo | undefined>>
  ) => {
    if (replyWindowResponse) {
      const newReply: ReplyInput = {
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
        }).then((response) => {
          const { data, error } = response;
          if (error) {
            if (error.networkError) dispatch(sliceSetNetworkError(true));
            dispatch(sliceSetToastVisible(true));
            dispatch(
              sliceSetToastBody({
                icon: iconsEnum.ERROR,
                message: 'Error adding Reply',
              })
            );
          }
          if (data) {
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
        });
        dispatch(sliceSetTextAreaMessage(''));
      }
    } else {
      if (text && user) {
        // Adding comments to 'comment' collection in database.
        insertComment({
          options: {
            commentedUserId: user.id,
            likesCount: 0,
            message: text,
            commentedUserName: user.nickname,
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
                message: 'Error adding Comment',
              })
            );
          }
          if (data) {
            const insertedComment = data?.insertComment;
            if (!insertedComment) {
              dispatch(sliceSetToastVisible(true));
              dispatch(
                sliceSetToastBody({
                  icon: iconsEnum.ERROR,
                  message: 'Error adding Comment',
                })
              );
            }
            // Adds the new comment to redux store.
            else
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
      const referredUser = parentComment.commentedUserId;
      if (referredUser) {
        getUser({ uid: referredUser }).then((res) => {
          const { data } = res;
          const nickName = data?.getUserMut?.nickname;
          nickName && dispatch(sliceSetTextAreaMessage(`@${nickName} `));
          nickName && setRepliedUser(nickName);
        });
      }
    }
  }, [replyWindowResponse]);

  return (
    <ChatTextBox className="chat-text-box" isReply={isReply}>
      <TextAreaIcon className="text-area-icon">
        <Profile profilePic={userFromRedux?.photoUrl}></Profile>
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
              className="close-button"
              onClick={() => {
                setReplyClickResponse(undefined);
                setIsReply(false);
                setRepliedUser('');
                dispatch(sliceSetTextAreaMessage(''));
              }}
            >
              <AiOutlineCloseCircle size={20} />
            </div>
          </ReplyTo>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </MessageBoxParent>
      <div
        className="smiley"
        onClick={smileyHandler}
        onMouseEnter={handleMouseEnter('Smileys')}
        onMouseLeave={handleMouseLeave('')}
      >
        <MdTagFaces className="icon" size={25} />
      </div>
      <TextAreaPost>
        <div
          className="text-send"
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
            postComment(
              userFromRedux,
              dispatch,
              replyWindowResponse,
              setReplyClickResponse
            );
          }}
          onMouseEnter={handleMouseEnter('Send')}
          onMouseLeave={handleMouseLeave('')}
        >
          <IoArrowForwardCircle fill={accentColor} size={25} />
        </div>
      </TextAreaPost>
    </ChatTextBox>
  );
};

export default withUrqlClient(urqlClient)(MessageBox);
