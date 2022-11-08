import React, { useEffect, useRef, useState } from 'react';
import {
  ReplyParent,
  ReplyWindowParent,
  ShowReplyText,
} from './replyWindow.styles';
import {
  sliceComment,
  sliceSetCurrentPage,
} from '../../redux/slices/comment/commentSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { COMMENT } from '../../redux/actionTypes';
import { CommentInfo } from '../../Utils/interfaces';
import ReplyCard from '../replyCard/replyCard';
import { ViewportList } from 'react-viewport-list';

type props = {
  page: number;
  lastPage: number;
  repliesCount: number;
  parentComment: CommentInfo;
  responseFromReplyWindow: (e: any) => void;
};
const ReplyWindow: React.FC<props> = ({
  page,
  lastPage,
  responseFromReplyWindow,
  parentComment,
  repliesCount,
}) => {
  const allReplies = useAppSelector((state) => state.replies.replies);
  const dispatch = useAppDispatch();
  const [replies, setReplies] = useState<CommentInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const parentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<any>(null);
  const replyWindowScrollSessionKey = `replyWindowScrollPosition${parentComment.id}`;
  const handleOnBeforeGetContent = () => {
    return new Promise((resolve) => {
      const filtered = allReplies.filter(
        (reply) => reply.parentCommentId === parentComment.id
      );
      setReplies(filtered);
      resolve(true);
    });
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    handleOnBeforeGetContent().then(() => {
      timeout = setTimeout(() => {
        setLoading(false);
        clearTimeout(timeout);
      }, 300);
    });
    return () => clearTimeout(timeout);
  }, [allReplies.length, loading]);

  const loadMoreReplies: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetCurrentPage({ page: page + 1, id: parentComment.id }));
  };

  // Handle scroll position.
  useEffect(() => {
    if (replies && replies.length > 0) {
      const scrollPos = sessionStorage.getItem(replyWindowScrollSessionKey);
      if (scrollPos) {
        if (parentRef && parentRef.current) {
          parentRef.current.scrollTo(0, parseInt(scrollPos, 10));
        }
        sessionStorage.removeItem(replyWindowScrollSessionKey);
      }
    }
  }, [replies]);

  const toggleReplyWindow: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    dispatch(
      sliceComment({
        payload: {
          id: parentComment.id,
          value: !parentComment.isReplyWindowOpen,
        },
        type: COMMENT.TOGGLE_REPLY_WINDOW,
      })
    );
  };

  const replyText = `${
    parentComment.isReplyWindowOpen ? 'Hide' : 'Show'
  } ${repliesCount} replies`;

  return (
    <ReplyWindowParent>
      {repliesCount !== 0 && (
        <ShowReplyText className='reply-status' onClick={toggleReplyWindow}>
          {replyText}
        </ShowReplyText>
      )}
      {!loading && (
        <ReplyParent
          replySection={parentComment.isReplyWindowOpen!}
          ref={parentRef}
          onScroll={() =>
            sessionStorage.setItem(
              replyWindowScrollSessionKey,
              `${parentRef!.current!.scrollTop!}`
            )
          }>
          <ViewportList ref={listRef} viewportRef={parentRef} items={replies}>
            {(reply) => (
              <ReplyCard
                key={reply.id}
                type='reply'
                responseFromReplyWindow={responseFromReplyWindow}
                className='reply-card'
                reply={reply}
              />
            )}
          </ViewportList>
          {page !== lastPage && (
            <div className='show-more-replies' onClick={loadMoreReplies}>
              show more replies ({page}/{lastPage})
            </div>
          )}
        </ReplyParent>
      )}
    </ReplyWindowParent>
  );
};

export default ReplyWindow;
