import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import {
  Card,
  Comment,
  CommentCardContainer,
  Delete,
  Like,
  MessageParent,
  Profile,
  SpoilerTag,
  Stats,
} from './commentInterface.styles';
import { CommentInfo, User, textMap } from '../../Utils/interfaces';
import {
  Exact,
  useDeleteCommentMutation,
  useDeleteReplyMutation,
  useGetRepliesQuery,
  useGetUserByNickNameMutation,
} from '../../generated/graphql';
import React, { useEffect, useRef, useState } from 'react';
import {
  sliceAddAllReplies,
  sliceDeleteReply,
} from '../../redux/slices/reply/replySlice';
import {
  sliceComment,
  sliceSetLastPage,
} from '../../redux/slices/comment/commentSlice';
import {
  slicePopSlideContentType,
  sliceSetPopSlide,
  sliceSetPopSlideLikes,
  sliceSetPopSlideUserId,
} from '../../redux/slices/settings/settingsSlice';
import {
  sliceSetToastBody,
  sliceSetToastVisible,
} from '../../redux/slices/toast/toastSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { COMMENT } from '../../redux/actionTypes';
import { CSSTransition } from 'react-transition-group';
import { MdDeleteForever } from 'react-icons/md';
import { OperationResult } from 'urql';
import ReplyWindow from '../replyWindow/replyWindow';
import { batch } from 'react-redux';
import { colorLog } from '../../Utils/utilities';
import { iconsEnum } from '../../Utils/enums';
import { sliceSetTotalCommentsOfTheMovie } from '../../redux/slices/movie/movieSlice';
import { textMapTypes } from '../../constants';
import { urqlClient } from '../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

type props = {
  commentedUser: User;
  messageArray: textMap[];
  time: string;
  commentOrReply: CommentInfo;
  like: boolean;
  likesCount: number;
  type: string;
  likedUsers: any[];
  subjectLike: (e: any) => void;
  responseFromReplyWindow: (comment: any) => void;
  className: any;
};

const CommentInterface: React.FC<props> = ({
  commentedUser,
  messageArray,
  time,
  type,
  likesCount,
  commentOrReply,
  responseFromReplyWindow,
  subjectLike,
  like,
  likedUsers,
  className,
}) => {
  const mounted = useRef<boolean>(false);
  const nodeRef = useRef<any>(null);
  // Check if the passed component is comment or reply.
  if (!commentOrReply) return <div>Invalid comment</div>;
  const isComment = commentOrReply.__typename === 'Comment' ? true : false;
  const isReplyToComment =
    !isComment &&
    commentOrReply.parentCommentId === commentOrReply.parentReplyId;
  // Redux: App Selector Hook.
  const userId = useAppSelector((state) => state.user.id);
  const allReplies = useAppSelector((state) => state.replies.replies);
  // Redux: App Dispatch hook.
  const chatBoxRefElement = document.getElementById('chat-box-container');
  const dispatch = useAppDispatch();
  const totalCommentCount = useAppSelector(
    (state) => state.movie.totalCommentsCountOfMovie
  );
  // State to check if the "like" is hovered, to style the parent component accordingly.
  const [deleteFlag, setDeleteFlag] = useState<boolean>(false);
  const [repliesCount, setRepliesCount] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);
  const [isCommentDeleted, setIsCommentDeleted] = useState<boolean>(false);
  const [del, setDelete] = useState<boolean>(true);

  // Get Page and LastPage of the comments.

  const page = isComment && commentOrReply.page;
  const lastPage = isComment && commentOrReply.lastPage;

  const commentRef = useRef<HTMLDivElement>(null);

  // Check if the component is mounted or not for animation purposes.
  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  // GraphQL
  const [getReplyQuery, _executeQuery] = useGetRepliesQuery({
    variables: {
      cid: commentOrReply.id!,
      limit: 5,
      page: page ? page : 1,
    },
    pause: true,
  });
  const [_gu, getUserByNickName] = useGetUserByNickNameMutation();

  const [_dc, deleteComment] = useDeleteCommentMutation();
  const [_dr, deleteReply] = useDeleteReplyMutation();

  useEffect(() => {
    if (isComment) {
      _executeQuery();
      const { data, error, fetching } = getReplyQuery;
      if (error) colorLog(error);
      if (!fetching && data) {
        const { replies, repliesCount, lastPage } = data.getRepliesOfComment;
        setRepliesCount(repliesCount);
        dispatch(
          sliceSetLastPage({
            lastPage: lastPage ? lastPage : 1,
            id: commentOrReply.id,
          })
        );

        batch(() => {
          dispatch(sliceAddAllReplies(replies));
          dispatch(
            sliceComment({
              payload: { id: commentOrReply.id!, repliesCount },
              type: COMMENT.SET_REPLY_COUNT,
            })
          );
        });
      }
    } else return;
  }, [getReplyQuery.fetching, _executeQuery, type]);

  useEffect(() => {
    if (type === 'comment') {
      const replyCount = allReplies.filter(
        (reply: CommentInfo) => reply.parentCommentId === commentOrReply.id!
      ).length;
      setRepliesCount(replyCount);
    }
  }, [allReplies.length, allReplies, setRepliesCount]);

  // Conditional update.
  // typeOfMessage: TIME -> Seek the video to respective time.
  // typeOfMessage: USER -> Opens the user's profile page.
  const onLinkHandlerInMessage = (message: textMap) => {
    if (message.type === textMapTypes.TIME) {
      console.log('Seeking video to the time', message.message);
      chrome.runtime.sendMessage(
        { text: 'SEEK_VIDEO', time: message.message },
        (tabId) => {
          console.log('My tabId is', tabId);
        }
      );
    } else if (message.type === textMapTypes.USER) {
      profileClickHandler(message.message.slice(1));
    }
  };

  // Opens likes View window when the likes count is clicked on.
  const likeWindowHandler: any = () => {
    batch(() => {
      dispatch(sliceSetPopSlide(true));
      dispatch(slicePopSlideContentType('likes'));
      dispatch(sliceSetPopSlideLikes(likedUsers));
    });
  };

  const profileClickHandler = (username: string) => {
    getUserByNickName({ nickname: username }).then((res) => {
      const { error, data } = res;
      if (error) colorLog(error);
      const userId = data?.getUserByNickName?.id!;
      batch(() => {
        dispatch(sliceSetPopSlide(true));
        dispatch(slicePopSlideContentType('profile'));
        dispatch(sliceSetPopSlideUserId(userId));
      });
    });
  };

  const commonDelete = (): Promise<OperationResult<any, Exact<any>>> => {
    return new Promise((resolve, reject) => {
      if (isComment) {
        deleteComment({ cid: commentOrReply.id! })
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      } else {
        deleteReply({ rid: commentOrReply.id! })
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      }
    });
  };
  // TODO: Delete comment or reply.
  const deleteCommentOrReply = () => {
    const message = isComment ? 'Comment deleted' : 'Reply deleted';
    commonDelete().then((res) => {
      let { data, error } = res;
      if (error) console.log(error);
      if (data) {
        setDelete(false);
        colorLog(
          `${message} ${
            isComment ? data.deleteComment?.id : data.deleteReply?.id
          }`
        );
        isComment &&
          dispatch(sliceSetTotalCommentsOfTheMovie(totalCommentCount - 1));
        batch(() => {
          dispatch(sliceSetToastVisible(true));
          dispatch(
            sliceSetToastBody({
              icon: iconsEnum.DELETE_COMMENT,
              message,
            })
          );
        });
        setTimeout(() => {
          isComment
            ? dispatch(
                sliceComment({
                  payload: data?.deleteComment?.id,
                  type: COMMENT.DELETE_COMMENT,
                })
              )
            : dispatch(sliceDeleteReply(data?.deleteReply?.id));
        }, 300);
      }
    });
  };

  return (
    <CSSTransition
      in={mounted.current && del}
      classNames='comment'
      timeout={300}
      nodeRef={commentRef}>
      <CommentCardContainer className={className} ref={commentRef}>
        <div className='card-parent'>
          {commentedUser?.id === userId && (
            <Delete
              deleteFlag={deleteFlag}
              onClick={(e: any) => {
                e.stopPropagation();
                deleteCommentOrReply();
              }}>
              <MdDeleteForever size={20} />
            </Delete>
          )}
          <Card
            ref={commentRef}
            hovered={hovered}
            like={like}
            className='comment-card'
            deleteFlag={deleteFlag}>
            <div
              className='profile'
              onClick={(e) => {
                e.stopPropagation();
                profileClickHandler(commentedUser?.nickname);
              }}>
              <Profile profilePic={commentedUser?.photoUrl!}></Profile>
            </div>

            <div className='container'>
              <div className='text'>
                <Comment className='comment'>
                  <div style={{ margin: '2px' }}>
                    <span
                      className='username'
                      onClick={(e) => {
                        e.stopPropagation();
                        profileClickHandler(commentedUser?.nickname);
                      }}>
                      {!isCommentDeleted
                        ? commentedUser?.nickname
                          ? commentedUser?.nickname
                          : commentedUser?.name
                        : 'Author'}
                    </span>{' '}
                    <MessageParent>
                      {messageArray.map((msg, index) =>
                        msg.type === textMapTypes.SPOILER ? (
                          <SpoilerTag key={index}>{msg.message}</SpoilerTag>
                        ) : (
                          <React.Fragment key={index}>
                            <span
                              key={index}
                              className={msg.type}
                              onClick={(e) => {
                                e.stopPropagation();
                                onLinkHandlerInMessage(msg);
                              }}>
                              {msg.message + ' '}
                            </span>
                          </React.Fragment>
                        )
                      )}
                    </MessageParent>
                  </div>
                </Comment>
              </div>

              <Stats>
                <div className='timestamp'>{time}</div>
                <div
                  className='likes'
                  onClick={(e) => {
                    e.stopPropagation();
                    likeWindowHandler();
                  }}>
                  {likesCount} Likes
                </div>
                <div
                  className='replies'
                  onClick={(e) => {
                    e.stopPropagation();
                    responseFromReplyWindow(commentOrReply);
                  }}>
                  Reply
                </div>
                {commentedUser?.id === userId && (
                  <div
                    className='delete'
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteFlag(!deleteFlag);
                    }}>
                    {deleteFlag ? 'Cancel' : 'Delete'}
                  </div>
                )}
              </Stats>
            </div>
            <Like
              className='like'
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={(e) => {
                subjectLike(e);
              }}>
              {like ? (
                <AiFillLike className='fill' size={20} />
              ) : (
                <AiOutlineLike size={20} />
              )}
            </Like>
          </Card>
        </div>

        <ReplyWindow
          page={page ? page : 1}
          lastPage={lastPage ? lastPage : 1}
          repliesCount={repliesCount}
          parentComment={commentOrReply}
          responseFromReplyWindow={responseFromReplyWindow}
        />
      </CommentCardContainer>
    </CSSTransition>
  );
};

export default withUrqlClient(urqlClient)(CommentInterface);
