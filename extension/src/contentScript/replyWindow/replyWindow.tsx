import { CommentInfo, ReplyInfo } from '../../Utils/interfaces';
import React, { useEffect, useRef, useState } from 'react';
import {
  ReplyParent,
  ReplyWindowParent,
  ShowReplyText,
} from './replyWindow.styles';

import ReplyCard from '../replyCard/replyCard';
import { useAppSelector } from '../../redux/hooks';

type props = {
  page: number;
  setPage: any;
  lastPage: number;
  repliesCount: number;
  parentComment: CommentInfo;
  responseFromReplyWindow: (e: any) => void;
};
const ReplyWindow: React.FC<props> = ({
  page,
  setPage,
  lastPage,
  responseFromReplyWindow,
  parentComment,
  repliesCount,
}) => {
  const allReplies = useAppSelector((state) => state.replies.replies);
  const [replies, setReplies] = useState<ReplyInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [replySection, setReplySection] = useState<boolean>(false);

  const handleOnBeforeGetContent = () => {
    // colorLog(allReplies, parentComment);
    return new Promise((resolve) => {
      const filtered = allReplies.filter(
        (reply) => reply.parentCommentCid === parentComment.cid
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
    console.log('Loading more replies');
    setPage(page + 1);
  };
  const replyText = `${replySection ? 'Hide' : 'Show'} ${repliesCount} replies`;
  return (
    <ReplyWindowParent>
      {repliesCount !== 0 && (
        <ShowReplyText
          className='reply-status'
          onClick={(e) => {
            e.stopPropagation();
            setReplySection(!replySection);
          }}>
          {replyText}
        </ShowReplyText>
      )}
      {!loading && (
        <ReplyParent replySection={replySection}>
          {replies.map((reply) => (
            <ReplyCard
              key={reply.rid}
              type='reply'
              responseFromReplyWindow={responseFromReplyWindow}
              className='reply-card'
              reply={reply}
            />
          ))}
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
