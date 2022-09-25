import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import {
  Card,
  Comment,
  CommentCardContainer,
  Delete,
  Like,
  MessageParent,
  Profile,
  ReplyParent,
  SpoilerTag,
  Stats,
  UserToolTip,
} from './commentInterface.styles';
import {
  CommentInfo,
  User,
  globalUIStyles,
  textMap,
} from '../../Utils/interfaces';
import React, { useEffect, useState } from 'react';
import {
  slicePopSlideContentType,
  sliceSetPopSlide,
  sliceSetPopSlideLikes,
} from '../../redux/slices/settings/settingsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { MdDeleteForever } from 'react-icons/md';
import { Pic } from '../../extension/components/logout/logout.styles';
import { batch } from 'react-redux';
import { colorLog } from '../../Utils/utilities';
import { getStoredGlobalUIStyles } from '../../Utils/storage';
import { textMapTypes } from '../../constants';

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
  responseFromReplyWindow: (comment: CommentInfo) => void;
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
  const allReplies = useAppSelector((state) => state.replies.replies);
  const userId = useAppSelector((state) => state.user.uid);

  // Redux: App Dispatch hook.
  const dispatch = useAppDispatch();

  // React: useState hooks.
  const [globalStyles, setGlobalStyles] = useState<globalUIStyles>();
  // State to check if the "like" is hovered, to style the parent component accordingly.
  const [deleteFlag, setDeleteFlag] = useState<boolean>(false);
  const [filReplies, setFilteredReplies] = useState<CommentInfo[]>([]);
  const [hovered, setHovered] = useState<boolean>(false);
  const [isCommentDeleted, setIsCommentDeleted] = useState<boolean>(false);
  const [replySection, setReplySection] = useState<boolean>(false);
  const [showReplies, setShowReplies] = useState<boolean>(false);
  const [showSpoiler, setShowSpoiler] = useState<boolean>(false);
  const [showToolTip, setShowToolTip] = useState<boolean>(false);

  // Chrome Storage: Get global styles.
  useEffect(() => {
    getStoredGlobalUIStyles().then((styles) => setGlobalStyles(styles));
  }, []);

  // Filtering replies by parent Id.
  useEffect(() => {
    // const getRepliesByParentId = () => {
    //   let commentId = '';
    //   if (commentOrReply.cid) commentId = commentOrReply.cid!;
    //   else commentId = commentOrReply.rid!;
    //   if (commentId === '') return;
    //   const filteredReplies = allReplies.filter(
    //     (reply: CommentInfo) => reply.parentComment === commentId
    //   );
    //   setFilteredReplies(filteredReplies);
    // };
    // getRepliesByParentId();
  }, [allReplies.length]);

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
    }
  };

  // Opens likes View window when the likes count is clicked on.
  const likeWindowHandler: any = () => {
    colorLog(likedUsers);
    batch(() => {
      dispatch(sliceSetPopSlide(true));
      dispatch(slicePopSlideContentType('likes'));
      dispatch(sliceSetPopSlideLikes(likedUsers));
    });
  };

  // TODO: Delete comment or reply.
  const deleteCommentOrReply = () => {
    let c = commentOrReply as CommentInfo;
    if (type === 'comment') {
      // deleteCommentBatch(c, userId).then((res) => {
      //   setIsCommentDeleted(true);
      //   setDeleteFlag(false);
      //   //Get the replies array from the comment.
      //   let replies = c.replies as CommentInfo[];
      //   // Delete the comment from redux.
      //   dispatch(sliceDeleteComment(c));
      //   // Loop the replies array and delete the replies from redux.
      //   if (replies && replies.length > 0) {
      //     replies.forEach((reply) => {
      //       dispatch(sliceDeleteReply(reply));
      //     });
      //   }
      // });
    } else if (type === 'reply') {
      // deleteReplyBatch(c, userId).then((res) => {
      //   setIsCommentDeleted(true);
      //   setDeleteFlag(false);
      //   let parentCommentId = c.parentComment!;
      //   let parentId = c.parent!;
      //   if (parentCommentId === parentId) {
      //     // Delete the id from parent comment replies
      //     dispatch(
      //       sliceRemoveReplyFromComments({ parent: parentId, rid: c.rid! })
      //     );
      //   } else {
      //     // Delete the id from parent reply replies.
      //     dispatch(
      //       sliceRemoveReplyFromParentReplies({ parent: parentId, rid: c.rid! })
      //     );
      //   }
      //   dispatch(sliceDeleteReply(c));
      // });
    }
  };

  return (
    <CommentCardContainer styles={globalStyles!} className={className}>
      <div className='card-parent'>
        {commentedUser?.uid === userId && (
          <Delete
            hovered={hovered}
            deleteFlag={deleteFlag}
            styles={globalStyles!}
            onClick={(e) => {
              e.stopPropagation();
              deleteCommentOrReply();
            }}>
            <MdDeleteForever size={20} />
          </Delete>
        )}
        <Card
          hovered={hovered}
          className='comment-card'
          deleteFlag={deleteFlag}
          styles={globalStyles!}>
          <div className='profile'>
            <Profile
              profilePic={
                !isCommentDeleted ? commentedUser?.photoUrl! : ''
              }></Profile>
          </div>

          <div className='container'>
            <div className='text'>
              <Comment className='comment'>
                <div style={{ margin: '2px' }}>
                  <span className='username'>
                    {!isCommentDeleted
                      ? commentedUser?.nickname
                        ? commentedUser?.nickname
                        : commentedUser?.name
                      : 'Author'}
                  </span>{' '}
                  <MessageParent>
                    {!isCommentDeleted ? (
                      messageArray.map((msg, index) =>
                        msg.type === textMapTypes.SPOILER ? (
                          <SpoilerTag
                            showSpoiler={showSpoiler}
                            key={index}
                            onClick={() => setShowSpoiler(!showSpoiler)}>
                            {msg.message}
                          </SpoilerTag>
                        ) : (
                          <React.Fragment key={index}>
                            {showToolTip && msg.type === textMapTypes.USER && (
                              <UserToolTip className='user-tooltip'>
                                {msg.message}
                              </UserToolTip>
                            )}
                            <span
                              onMouseEnter={(e) => {
                                e.stopPropagation();
                                if (msg.type === textMapTypes.USER)
                                  setShowToolTip(true);
                              }}
                              onMouseLeave={(e) => {
                                e.stopPropagation();
                                setShowToolTip(false);
                              }}
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
                      )
                    ) : (
                      <span style={{ color: '#6a6a6a', fontStyle: 'italic' }}>
                        [Message is deleted]
                      </span>
                    )}
                  </MessageParent>
                </div>
              </Comment>
            </div>
            <Stats>
              {!isCommentDeleted && (
                <>
                  <div className='timestamp'>{time}</div>
                  <div
                    className='likes'
                    onClick={(e) => {
                      e.stopPropagation();
                      likeWindowHandler();
                    }}>
                    {likesCount} likes
                  </div>
                  <div
                    className='replies'
                    onClick={(e) => {
                      setReplySection(!replySection);
                      responseFromReplyWindow(commentOrReply);
                    }}>
                    reply
                  </div>
                </>
              )}
              {!isCommentDeleted && commentedUser?.uid === userId && (
                <div
                  className='delete'
                  onClick={(e) => {
                    e.stopPropagation();
                    setDeleteFlag(!deleteFlag);
                  }}>
                  {deleteFlag ? 'cancel' : 'delete'}
                </div>
              )}
            </Stats>
          </div>
          {!isCommentDeleted && (
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
          )}
        </Card>
      </div>
      <ReplyParent>
        {/* {filteredRepliesState?.length! ? (
          <div
            className='reply-status'
            onClick={(e) => {
              e.stopPropagation();
              setShowReplies(!showReplies);
            }}></div>
        ) : (
          <React.Fragment></React.Fragment>
        )} */}
        <div>
          {/* <ReplyWindow
            parentComment={commentOrReply}
            repliesState={filteredRepliesState}
            repliesCount={repliesCount!}
            responseFromReplyWindow={responseFromReplyWindow}
          /> */}
        </div>
      </ReplyParent>
    </CommentCardContainer>
  );
};

export default CommentInterface;
