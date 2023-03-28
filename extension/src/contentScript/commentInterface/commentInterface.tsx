import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import {
  Card,
  Comment,
  CommentCardContainer,
  Delete,
  Like,
  MessageParent,
  Moderation,
  Profile,
  SpoilerTag,
  Stats,
} from './commentInterface.styles';
import { CommentInfo, User, textMap } from '../../Utils/interfaces';
import {
  Exact,
  useDeleteCommentMutation,
  useDeleteReplyMutation,
  useGetUserByNickNameMutation,
  useIsReportedQuery,
  useReportCommentMutation,
  useReportReplyMutation,
} from '../../generated/graphql';
import { MOOVY_URL, textMapTypes } from '../../constants';
import { MdDeleteForever, MdWarning, MdWarningAmber } from 'react-icons/md';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  slicePopSlideContentType,
  sliceSetPopSlide,
  sliceSetPopSlideData,
  sliceSetPopSlideUserId,
} from '../../redux/slices/settings/settingsSlice';
import {
  sliceSetToastBody,
  sliceSetToastVisible,
} from '../../redux/slices/toast/toastSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { CSSTransition } from 'react-transition-group';
import Confirmation from '../../components/confirmation/confirmation';
import { OperationResult } from 'urql';
import ReplyWindow from '../replyWindow/replyWindow';
import { batch } from 'react-redux';
import { iconsEnum } from '../../Utils/enums';
import { sliceSetIsReportActive } from '../../redux/slices/misc/miscSlice';
import { sliceSetTotalCommentsOfTheMovie } from '../../redux/slices/movie/movieSlice';
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
  const accentcolor = useAppSelector((state) => state.misc.accentColor);
  const movieId = useAppSelector((state) => state.movie.id);
  const isReportActive = useAppSelector((state) => state.misc.isReportActive);
  // Redux: App Selector Hook.
  const userId = useAppSelector((state) => state.user.id);
  // Redux: App Dispatch hook.
  const dispatch = useAppDispatch();
  const totalCommentCount = useAppSelector(
    (state) => state.movie.totalCommentsCountOfMovie
  );
  // State to check if the "like" is hovered, to style the parent component accordingly.
  const [deleteFlag, setDeleteFlag] = useState<boolean>(false);
  const [reportFlag, setReportFlag] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const [del, setDelete] = useState<boolean>(true);
  const isComment = useMemo(
    () => commentOrReply.__typename === 'Comment',
    [commentOrReply]
  );
  const [isReported] = useIsReportedQuery({
    variables: {
      uid: userId,
      isComment: isComment,
      isReportedId: commentOrReply.id,
    },
  });

  useEffect(() => {
    const { data, fetching } = isReported;
    if (!fetching && data) {
      const _data = data?.isReported;
      setReportFlag(() => _data);
    }
  }, [isReported]);
  // Check if the passed component is comment or reply.
  if (!commentOrReply) return <div>Invalid comment</div>;

  const commentRef = useRef<HTMLDivElement>(null);

  // Check if the component is mounted or not for animation purposes.
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const [_gu, getUserByNickName] = useGetUserByNickNameMutation();
  const [_dc, deleteComment] = useDeleteCommentMutation();
  const [_dr, deleteReply] = useDeleteReplyMutation();
  const [_rc, reportComment] = useReportCommentMutation();
  const [_rr, reportReply] = useReportReplyMutation();

  const profileClickHandler = useCallback(
    (username: string) => {
      getUserByNickName({ nickname: username }).then((res) => {
        const { error, data } = res;
        const userId = data?.getUserByNickName?.id!;
        batch(() => {
          dispatch(sliceSetPopSlide(true));
          dispatch(slicePopSlideContentType('profile'));
          dispatch(sliceSetPopSlideUserId(userId));
        });
      });
    },
    [dispatch, getUserByNickName]
  );
  // Conditional update.
  // typeOfMessage: TIME -> Seek the video to respective time.
  // typeOfMessage: USER -> Opens the user's profile page.
  const onLinkHandlerInMessage = useCallback(
    (message: textMap) => {
      if (message.type === textMapTypes.TIME) {
        // console.log('Seeking video to the time', message.message);
        chrome.runtime.sendMessage(
          { text: 'SEEK_VIDEO', time: message.message },
          (tabId) => {}
        );
      } else if (message.type === textMapTypes.USER) {
        profileClickHandler(message.message.slice(1));
      }
    },
    [profileClickHandler]
  );

  // Opens likes View window when the likes count is clicked on.
  const likeWindowHandler: any = () => {
    batch(() => {
      dispatch(sliceSetPopSlide(true));
      dispatch(slicePopSlideContentType('likes'));
      dispatch(
        sliceSetPopSlideData({
          data: { id: commentOrReply.id as string, type },
        })
      );
    });
  };

  const commonReport = (_report: boolean): Promise<boolean | undefined> => {
    return new Promise((resolve, reject) => {
      if (isComment) {
        reportComment({ cid: commentOrReply.id!, uid: userId, report: _report })
          .then((res) => {
            const _data = res.data;
            const x = _data?.reportComment;
            resolve(x?.report);
          })
          .catch((err) => reject(err));
      } else {
        reportReply({ rid: commentOrReply.id!, uid: userId, report: _report })
          .then((res) => {
            const _data = res.data;
            const x = _data?.reportReply;
            resolve(x?.report);
          })
          .catch((err) => reject(err));
      }
    });
  };

  const reportCommentOrReply = async (_report: boolean): Promise<void> => {
    const message = isComment ? 'Comment Reported' : 'Reply Reported';
    try {
      const result = await commonReport(_report);
      if (result) {
        dispatch(sliceSetIsReportActive(''));
        batch(() => {
          dispatch(sliceSetToastVisible(true));
          dispatch(
            sliceSetToastBody({
              icon: iconsEnum.ERROR,
              message,
            })
          );
        });
      }
    } catch (err) {
    } finally {
      // Code to be executed after try/catch block
    }
  };

  const commonDelete = (): Promise<OperationResult<any, Exact<any>>> => {
    return new Promise((resolve, reject) => {
      if (isComment) {
        deleteComment({ cid: commentOrReply.id!, mid: movieId })
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
  const deleteCommentOrReply = async (): Promise<void> => {
    const message: string = isComment ? 'Comment deleted' : 'Reply deleted';
    const errorMessage: string = isComment
      ? 'Error deleting comment'
      : 'Error deleting reply';
    try {
      const { data, error } = await commonDelete();
      if (error) {
        batch(() => {
          dispatch(sliceSetToastVisible(true));
          dispatch(
            sliceSetToastBody({
              icon: iconsEnum.ERROR,
              errorMessage,
            })
          );
        });
      }

      if (data) {
        setDelete(false);
        isComment &&
          dispatch(sliceSetTotalCommentsOfTheMovie(totalCommentCount! - 1));
        batch(() => {
          dispatch(sliceSetToastVisible(true));
          dispatch(
            sliceSetToastBody({
              icon: iconsEnum.DELETE_COMMENT,
              message,
            })
          );
        });
      }
    } catch (err) {
      batch(() => {
        dispatch(sliceSetToastVisible(true));
        dispatch(
          sliceSetToastBody({
            icon: iconsEnum.ERROR,
            errorMessage,
          })
        );
      });
    } finally {
      // Code to be executed after try/catch block
    }
  };

  const goToComment = useCallback(
    (e: any) => {
      e.stopPropagation();
      let url = `${MOOVY_URL}/${type}/${commentOrReply.id}`;
      chrome.runtime.sendMessage({
        type: 'OPEN_LINK',
        url: url,
      });
    },
    [commentOrReply, type]
  );

  return (
    <CSSTransition
      in={mounted.current && del}
      classNames='css-cmt-transition'
      timeout={300}
      nodeRef={commentRef}>
      <>
        <CommentCardContainer
          className={className}
          ref={commentRef}
          onClick={goToComment}>
          <div className='card-parent'>
            {commentedUser?.id === userId && (
              <Delete
                accentColor={accentcolor}
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
                  <Comment>
                    <div style={{ margin: '2px' }}>
                      <span
                        className='username'
                        onClick={(e) => {
                          e.stopPropagation();
                          profileClickHandler(commentedUser?.nickname);
                        }}>
                        {commentedUser?.nickname
                          ? commentedUser?.nickname
                          : commentedUser?.name}
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
                  {commentedUser?.id === userId ? (
                    <div
                      className='delete'
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleteFlag(!deleteFlag);
                      }}>
                      {deleteFlag ? 'Cancel' : 'Delete'}
                    </div>
                  ) : (
                    <div
                      className='delete'
                      onClick={(e) => {
                        e.stopPropagation();

                        if (commentOrReply.reported === true) {
                          reportCommentOrReply(false);
                        } else {
                          dispatch(
                            sliceSetIsReportActive(
                              `${isComment ? 'comment' : 'reply'}${
                                commentOrReply.id
                              }`
                            )
                          );
                        }
                      }}>
                      {commentOrReply.reported === true
                        ? 'Undo Report'
                        : 'Report'}
                    </div>
                  )}
                </Stats>
              </div>
              <Like
                accentColor={accentcolor}
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
          {commentOrReply.flagged && (
            <Moderation color={accentcolor}>
              <MdWarningAmber fill={accentcolor} />
              The comment is flagged for moderation
            </Moderation>
          )}
          {reportFlag && (
            <Moderation color='#ff0000'>
              <MdWarning fill='#ff0000' />
              You have reported this comment
            </Moderation>
          )}
          <ReplyWindow
            parentComment={commentOrReply}
            responseFromReplyWindow={responseFromReplyWindow}
          />
        </CommentCardContainer>
        {isReportActive ===
          `${isComment ? 'comment' : 'reply'}${commentOrReply.id}` && (
          <Confirmation reportCommentOrReply={reportCommentOrReply} />
        )}
      </>
    </CSSTransition>
  );
};

export default withUrqlClient(urqlClient)(CommentInterface);
