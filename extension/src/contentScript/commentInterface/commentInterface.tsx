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
  useGetRepliesQuery,
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
  sliceAddAllReplies,
  sliceDeleteReply,
  sliceReportReply,
} from '../../redux/slices/reply/replySlice';
import {
  sliceComment,
  sliceReportComment,
  sliceSetLastPage,
} from '../../redux/slices/comment/commentSlice';
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

import { COMMENT } from '../../redux/actionTypes';
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
  const allReplies = useAppSelector((state) => state.replies.replies);
  // Redux: App Dispatch hook.
  const dispatch = useAppDispatch();
  const totalCommentCount = useAppSelector(
    (state) => state.movie.totalCommentsCountOfMovie
  );
  // State to check if the "like" is hovered, to style the parent component accordingly.
  const [deleteFlag, setDeleteFlag] = useState<boolean>(false);
  const [reportFlag, setReportFlag] = useState<boolean>(false);
  const [repliesCount, setRepliesCount] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);
  const [del, setDelete] = useState<boolean>(true);
  const isComment = useMemo(
    () => commentOrReply.__typename === 'Comment',
    [commentOrReply]
  );
  // Check if the passed component is comment or reply.
  if (!commentOrReply) return <div>Invalid comment</div>;

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
  const [_rc, reportComment] = useReportCommentMutation();
  const [_rr, reportReply] = useReportReplyMutation();
  const [isReported] = useIsReportedQuery({
    variables: {
      isComment: isComment,
      uid: userId,
      isReportedId: commentOrReply.id,
    },
  });

  useEffect(() => {
    const { fetching, data } = isReported;
    if (!fetching && data) {
      const _data = data.isReported;
      setReportFlag(_data);
      isComment
        ? dispatch(
            sliceReportComment({
              id: commentOrReply.id,
              isReported: _data,
            })
          )
        : dispatch(
            sliceReportReply({
              id: commentOrReply.id,
              isReported: _data,
            })
          );
    }
  }, [isReported]);

  useEffect(() => {
    if (isComment) {
      _executeQuery();
      const { data, error, fetching } = getReplyQuery;
      if (error) console.log(error);
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

  const profileClickHandler = useCallback(
    (username: string) => {
      getUserByNickName({ nickname: username }).then((res) => {
        const { error, data } = res;
        if (error) console.log(error);
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
        console.log('Seeking video to the time', message.message);
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
    console.log('EXEC');
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
        setReportFlag(_report);
        batch(() => {
          dispatch(sliceSetToastVisible(true));
          dispatch(
            sliceSetToastBody({
              icon: iconsEnum.ERROR,
              message,
            })
          );
          isComment
            ? dispatch(
                sliceReportComment({
                  id: commentOrReply.id,
                  isReported: _report,
                })
              )
            : dispatch(
                sliceReportReply({
                  id: commentOrReply.id,
                  isReported: _report,
                })
              );
        });
      }
    } catch (err) {
      console.log(err);
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
    const message = isComment ? 'Comment deleted' : 'Reply deleted';
    try {
      const { data, error } = await commonDelete();
      if (error) console.log(error);

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
    } catch (err) {
      console.log(err);
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
          {commentOrReply.reported && (
            <Moderation color='#ff0000'>
              <MdWarning fill='#ff0000' />
              You have reported this comment
            </Moderation>
          )}
          <ReplyWindow
            page={page ? page : 1}
            lastPage={lastPage ? lastPage : 1}
            repliesCount={repliesCount}
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
