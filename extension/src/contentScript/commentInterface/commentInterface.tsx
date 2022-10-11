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
import React, { useEffect, useState } from 'react';
import { ReplyInfo, User, textMap } from '../../Utils/interfaces';
import {
  sliceAddAllReplies,
  sliceDeleteReply,
} from '../../redux/slices/reply/replySlice';
import {
  sliceDeleteComment,
  sliceSetRepliesCount,
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
import {
  useDeleteCommentMutation,
  useDeleteReplyMutation,
  useGetRepliesQuery,
  useGetUserByNickNameMutation,
} from '../../generated/graphql';

import { CSSTransition } from 'react-transition-group';
import { MdDeleteForever } from 'react-icons/md';
import ReplyWindow from '../replyWindow/replyWindow';
import { batch } from 'react-redux';
import { colorLog } from '../../Utils/utilities';
import { iconsEnum } from '../../Utils/enums';
import { textMapTypes } from '../../constants';

type props = {
  commentedUser: User;
  messageArray: textMap[];
  time: string;
  commentOrReply: any;
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
  // Redux: App Selector Hook.
  const userId = useAppSelector((state) => state.user.uid);
  const allReplies = useAppSelector((state) => state.replies.replies);
  // Redux: App Dispatch hook.
  const dispatch = useAppDispatch();
  // State to check if the "like" is hovered, to style the parent component accordingly.
  const [deleteFlag, setDeleteFlag] = useState<boolean>(false);
  const [repliesCount, setRepliesCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [hovered, setHovered] = useState<boolean>(false);
  const [isCommentDeleted, setIsCommentDeleted] = useState<boolean>(false);
  const [lastPage, setLastPage] = useState<number>(1);
  const [del, setDelete] = useState<boolean>(true);

  // GraphQL
  const [repliesOfComment, _gr] = useGetRepliesQuery({
    variables: {
      cid: commentOrReply.cid!,
      limit: 5,
      page: page,
    },
    requestPolicy: 'cache-and-network',
  });
  const [_gu, getUserByNickName] = useGetUserByNickNameMutation();
  const [_dc, deleteComment] = useDeleteCommentMutation();
  const [_dr, deleteReply] = useDeleteReplyMutation();

  useEffect(() => {
    colorLog('commentInterface.tsx');
  }, []);
  useEffect(() => {
    if (type === 'comment') {
      const { data, error, fetching } = repliesOfComment;
      if (error) colorLog(error);
      if (!fetching && data) {
        const { replies, repliesCount, lastPage } = data.getRepliesOfComment;
        setRepliesCount(repliesCount);
        setLastPage(lastPage ? lastPage : 1);

        batch(() => {
          dispatch(sliceAddAllReplies(replies));
          dispatch(sliceSetRepliesCount(repliesCount));
        });
      }
    } else return;
  }, [repliesOfComment.fetching, type]);

  useEffect(() => {
    const replyCount = allReplies.filter(
      (reply: ReplyInfo) => reply.parentCommentCid === commentOrReply.cid!
    ).length;
    setRepliesCount(replyCount);
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
      const userId = data?.getUserByNickName?.uid!;
      batch(() => {
        dispatch(sliceSetPopSlide(true));
        dispatch(slicePopSlideContentType('profile'));
        dispatch(sliceSetPopSlideUserId(userId));
      });
    });
  };

  // TODO: Delete comment or reply.
  const deleteCommentOrReply = () => {
    if (type === 'comment') {
      deleteComment({ cid: commentOrReply.cid! }).then((res) => {
        let { data, error } = res;
        if (error) colorLog(error);
        if (data) {
          if (data.deleteComment?.cid) {
            colorLog(`Comment deleted! ${data.deleteComment?.cid}`);
            setDelete(false);
            batch(() => {
              dispatch(sliceSetToastVisible(true));
              dispatch(
                sliceSetToastBody({
                  icon: iconsEnum.DELETE_COMMENT,
                  message: 'Comment deleted',
                })
              );
            });
            setTimeout(() => {
              dispatch(sliceDeleteComment(data?.deleteComment?.cid));
            }, 300);
          }
        }
      });
    } else {
      deleteReply({ rid: commentOrReply.rid! }).then((res) => {
        let { data, error } = res;
        if (error) colorLog(error);
        if (data) {
          if (data.deleteReply?.rid) {
            colorLog(`Reply deleted! ${data.deleteReply?.rid}`);
            setDelete(false);
            batch(() => {
              dispatch(sliceSetToastVisible(true));
              dispatch(
                sliceSetToastBody({
                  icon: iconsEnum.DELETE_COMMENT,
                  message: 'Reply deleted',
                })
              );
            });
            setTimeout(() => {
              dispatch(sliceDeleteReply(data?.deleteReply?.rid));
            }, 300);
          }
        }
      });
    }
  };

  return (
    <CSSTransition in={del} classNames='comment' timeout={300} unmountOnExit>
      <CommentCardContainer className={className}>
        <div className='card-parent'>
          {commentedUser?.uid === userId && (
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
              <Profile
                profilePic={
                  !isCommentDeleted ? commentedUser?.photoUrl! : ''
                }></Profile>
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
                {commentedUser?.uid === userId && (
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
          page={page}
          lastPage={lastPage}
          setPage={setPage}
          repliesCount={repliesCount}
          parentComment={commentOrReply}
          responseFromReplyWindow={responseFromReplyWindow}
        />
      </CommentCardContainer>
    </CSSTransition>
  );
};

export default CommentInterface;
