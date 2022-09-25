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
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useGetUserMutMutation,
  useInsertCommentMutation,
  useInsertReplyMutation,
} from '../../generated/graphql';

import { AnyAction } from 'redux';
import ChatArea from '../../components/chatArea/chatArea';
import { Pic } from '../../extension/components/logout/logout.styles';
import { batch } from 'react-redux';
import { colorLog } from '../../Utils/utilities';
import { getStoredGlobalUIStyles } from '../../Utils/storage';
import { sliceAddComment } from '../../redux/slices/comment/commentSlice';
import { sliceAddReply } from '../../redux/slices/reply/replySlice';
import { sliceSetPastLoadedCount } from '../../redux/slices/movie/movieSlice';

const setSpoiler = (text: string, setText: Dispatch<any>) => {
  let newText = text + ' <s></s>';
  setText(newText);
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
  // Redux: App dispatch hook.
  const dispatch = useAppDispatch();

  // React: useState hooks.
  const [globalStyles, setGlobalStyles] = useState<globalUIStyles>();
  const [isReply, setIsReply] = useState<boolean>(false);
  const [repliedUser, setRepliedUser] = useState<string>('');
  const [text, setText] = useState<string>('');

  // Chrome storage: Gets the global ui styles.
  useEffect(() => {
    getStoredGlobalUIStyles().then((styles) => setGlobalStyles(styles));
  }, [globalStyles]);

  const postComment = async (
    text: string,
    setText: Dispatch<SetStateAction<string>>,
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
        setText('');
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
        setText('');
      }
    }
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
        setText(`@${nickName!} `);
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
        <Pic photoURL={user?.photoUrl}></Pic>
      </TextAreaIcon>
      <MessageBoxParent>
        <ChatArea
          user={user}
          text={text}
          setText={setText}
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
                setText('');
              }}>
              <AiOutlineCloseCircle size={20} />
            </div>
          </ReplyTo>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        <Spoiler styles={globalStyles!}>
          <div
            className='spoiler-tag'
            onClick={(e) => {
              e.stopPropagation();
              setSpoiler(text, setText);
            }}>
            <span>Spoiler</span>
          </div>
          <div className='word-count'>
            <TextAreaCount count={150 - text.length} styles={globalStyles!}>
              <span className='count'>{150 - text.length}</span>
            </TextAreaCount>
          </div>
        </Spoiler>
      </MessageBoxParent>
      <TextAreaPost>
        <div
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
            postComment(
              text,
              setText,
              user,
              dispatch,
              movieId,
              replyWindowResponse,
              setReplyClickResponse
            );
          }}>
          <AiOutlineSend size={25} />
        </div>
      </TextAreaPost>
    </ChatTextBox>
  );
};

export default MessageBox;
