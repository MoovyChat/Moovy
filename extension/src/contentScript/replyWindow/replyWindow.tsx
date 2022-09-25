import { CommentInfo, ReplyInfo } from '../../Utils/interfaces';
import React, { useEffect, useRef, useState } from 'react';

import Loading from '../../components/loading/loading';
import ReplyCard from '../replyCard/replyCard';
import { ReplyWindowParent } from './replyWindow.styles';
import { useAppSelector } from '../../redux/hooks';

type props = {
  parentComment: CommentInfo;
  responseFromReplyWindow: (e: any) => void;
};
const ReplyWindow: React.FC<props> = ({
  responseFromReplyWindow,
  parentComment,
}) => {
  const allReplies = useAppSelector((state) => state.replies.replies);
  const [replies, setReplies] = useState<ReplyInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const filtered = allReplies.filter(
      (reply) => reply.parentCommentCid === parentComment.cid
    );
    setReplies(filtered);
    const timeout = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeout);
    }, 200);
    return () => clearTimeout(timeout);
  }, [allReplies.length]);

  const loadMoreReplies = () => {
    console.log('Loading more replies...');
  };

  return (
    <ReplyWindowParent>
      {!loading ? (
        replies.map((reply) => (
          <ReplyCard
            key={reply.rid}
            type='reply'
            responseFromReplyWindow={responseFromReplyWindow}
            className='reply-card'
            reply={reply}
          />
        ))
      ) : (
        <Loading />
      )}
    </ReplyWindowParent>
  );
};

export default ReplyWindow;
