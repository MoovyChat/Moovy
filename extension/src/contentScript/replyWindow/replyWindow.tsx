/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { CommentInfo } from '../../Utils/interfaces';
import { ReplyWindowParent } from './replyWindow.styles';

type props = {
  parentComment: CommentInfo;
  repliesCount: number;
  repliesState: CommentInfo[];
  responseFromReplyWindow: (e: any) => void;
};
const ReplyWindow: React.FC<props> = ({
  repliesState,
  responseFromReplyWindow,
  parentComment,
}) => {
  const userId = useAppSelector((state) => state.user.uid);
  const [userComments, setUserComments] = useState<CommentInfo[]>([]);
  const [otherComments, setOtherComments] = useState<CommentInfo[]>([]);
  /**
   * HashMap
   * [LoggedUser: [...replies]]
   * Remaining replies
   * [Parent: [Children]] - Sort by number of comments and replies.
   *  */
  useEffect(() => {
    if (repliesState && repliesState.length > 0) {
      let loggedInComments: CommentInfo[] = repliesState.filter(
        (reply) => reply.commentedUserId === userId
      );
      setUserComments(loggedInComments);
      let otherUserComments: CommentInfo[] = repliesState.filter(
        (reply) => reply.commentedUserId !== userId
      );
      setOtherComments(otherUserComments);
    }
  }, [repliesState]);

  const loadMoreReplies = () => {
    console.log('Loading more replies...');
  };

  return (
    <ReplyWindowParent>
      {/* <ReplyBox
        responseFromReplyWindow={responseFromReplyWindow}
        userComments={repliesState}
      />
      {parentComment.repliesCount! -
        (userComments.length + otherComments.length) >
      0 ? (
        <React.Fragment>
          <ReplyMessage className='reply-message'>
            <div className='line'></div>
            <div
              className='replies-count'
              onClick={(e) => {
                e.stopPropagation();
                loadMoreReplies();
              }}>
              Show{' '}
              {parentComment.repliesCount! -
                (userComments.length + otherComments.length)}{' '}
              more replies
            </div>
          </ReplyMessage>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )} */}
    </ReplyWindowParent>
  );
};

export default ReplyWindow;
