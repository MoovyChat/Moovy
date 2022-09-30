import { AiOutlineCloseCircle, AiOutlineSend } from 'react-icons/ai';
import {
  ChatTextBox,
  MessageBoxParent,
  ReplyTo,
  Spoiler,
  TextAreaCount,
  TextAreaIcon,
  TextAreaPost,
} from './messageBox.styles';
import {
  CommentInfo,
  ReplyInfo,
  User,
  globalUIStyles,
} from '../../Utils/interfaces';
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
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useGetUserMutMutation,
  useInsertCommentMutation,
  useInsertReplyMutation,
} from '../../generated/graphql';

import { AnyAction } from 'redux';
import ChatArea from '../../components/chatArea/chatArea';
import { IoArrowForwardCircle } from 'react-icons/io5';
import { MdTagFaces } from 'react-icons/md';
import { Pic } from '../../extension/components/logout/logout.styles';
import { Profile } from '../commentInterface/commentInterface.styles';
import { batch } from 'react-redux';
import { colorLog } from '../../Utils/utilities';
import { getStoredGlobalUIStyles } from '../../Utils/storage';
import { sliceAddComment } from '../../redux/slices/comment/commentSlice';
import { sliceAddReply } from '../../redux/slices/reply/replySlice';
import { sliceSetPastLoadedCount } from '../../redux/slices/movie/movieSlice';

const setSpoiler = (text: string, dispatch: any) => {
  let newText = text + ' <s></s>';
  dispatch(sliceSetTextAreaMessage(newText));
};

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
  const movieId = useAppSelector((state) => state.movie.mid);
  const user = useAppSelector((state) => state.user);
  const text = useAppSelector((state) => state.textArea.text);
  // Redux: App dispatch hook.
  const dispatch = useAppDispatch();

  // React: useState hooks.
  const [globalStyles, setGlobalStyles] = useState<globalUIStyles>();
  const [isReply, setIsReply] = useState<boolean>(false);
  const [repliedUser, setRepliedUser] = useState<string>('');

  // Chrome storage: Gets the global ui styles.
  useEffect(() => {
    getStoredGlobalUIStyles().then((styles) => setGlobalStyles(styles));
  }, [globalStyles]);

  const smileyHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetPopSlide(true));
    dispatch(slicePopSlideContentType('smiley'));
  };

  const postComment = async (
    user: User | undefined,
    dispatch: Dispatch<AnyAction>,
    movieId: string,
    replyWindowResponse: any,
    setReplyClickResponse: (e: any) => void
  ) => {
    if (replyWindowResponse) {
      let newReply: any = {
        repliedUserUid: user?.uid!,
        likes: [],
        commentId: replyWindowResponse.cid
          ? replyWindowResponse.cid
          : replyWindowResponse.parentComment,
        parentReplyRid: replyWindowResponse.rid
          ? replyWindowResponse?.rid!
          : replyWindowResponse?.cid!,
        message: text,
        movieId: movieId,
        platformId: 1,
        likesCount: 0,
      };
      if (text) {
        // Adding replies to 'reply' collection in database.
        insertReply({
          options: newReply,
        })
          .then((response) => {
            const data = response.data;
            const insertedReply = data?.insertReply;
            // Adds the new comment to redux store.
            batch(() => {
              dispatch(sliceAddReply(insertedReply));
              // dispatch(sliceSetPastLoadedCount(1));
            });
            setIsReply(false);
            setReplyClickResponse(undefined);
          })
          .catch((err) => colorLog(err));
        dispatch(sliceSetTextAreaMessage(''));
      }
    } else {
      let newComment: CommentInfo | any = {
        commentedUserId: user?.uid,
        likes: [],
        likesCount: 0,
        message: text,
        movieId: movieId,
        platformId: 1,
      };
      if (text) {
        // Adding comments to 'comment' collection in database.
        insertComment({
          options: newComment,
        }).then((response) => {
          const data = response.data;
          const insertedComment = data?.insertComment;
          // Adds the new comment to redux store.
          batch(() => {
            dispatch(sliceAddComment(insertedComment));
            dispatch(sliceSetPastLoadedCount(1));
          });
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
      const parentComment = replyWindowResponse as any;
      // GraphQL: Handle reply user data.
      const referredUser = parentComment.commentedUserUid;
      getUser({ uid: referredUser }).then((res) => {
        const { data, error } = res;
        colorLog(data);
        if (error) colorLog(error);
        const nickName = data?.getUserMut?.nickname;
        dispatch(sliceSetTextAreaMessage(`@${nickName!} `));
        setRepliedUser(nickName!);
      });
    }
  }, [replyWindowResponse]);

  return (
    <ChatTextBox
      className='chat-text-box'
      isReply={isReply}
      styles={globalStyles!}>
      <TextAreaIcon className='text-area-icon'>
        <Profile profilePic={user?.photoUrl!}></Profile>
      </TextAreaIcon>
      <MessageBoxParent>
        <ChatArea
          user={user}
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
        {/* <Spoiler styles={globalStyles!}>
          <div
            className='spoiler-tag'
            onClick={(e) => {
              e.stopPropagation();
              setSpoiler(text, dispatch);
            }}>
            <span>Spoiler</span>
          </div>
          <div className='word-count'>
            <TextAreaCount count={150 - text.length} styles={globalStyles!}>
              <span className='count'>{150 - text.length}</span>
            </TextAreaCount>
          </div>
        </Spoiler> */}
      </MessageBoxParent>
      <div className='smiley' onClick={smileyHandler}>
        <MdTagFaces className='icon' size={25} />
      </div>
      <TextAreaPost>
        <div
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
            postComment(
              user,
              dispatch,
              movieId,
              replyWindowResponse,
              setReplyClickResponse
            );
          }}>
          <IoArrowForwardCircle fill='cyan' size={25} />
        </div>
      </TextAreaPost>
    </ChatTextBox>
  );
};

export default MessageBox;
