import React, { Fragment, useEffect, useState } from 'react';
import { Reply, useGetReplyQuery } from '../../../generated/graphql';

import Loading from '../../loading/loading';
import MiniCommentCard from '../../../components/mini-comment-card/miniCommentCard';
import ReplyCard from '../../../components/comment-card/replyCard';
import { StyledFeedReply } from './feedReply.styles';
import { isServer } from '../../../constants';

type props = {
  id: string;
};
const FeedReply: React.FC<props> = ({ id }) => {
  const [reply, setReply] = useState<Reply | null>(null);
  const [replyQuery] = useGetReplyQuery({
    variables: { rid: id },
    pause: isServer(),
  });

  useEffect(() => {
    const { error, data, fetching } = replyQuery;
    if (!fetching && data) {
      const _data = data.getReply! as Reply;
      setReply(() => _data);
    }
  }, [replyQuery]);
  if (!replyQuery.data) return <></>;
  if (replyQuery.fetching) return <Loading />;
  if (!reply) return <></>;
  return (
    <StyledFeedReply>
      <ReplyCard comment={reply} />
      <MiniCommentCard
        className='mini'
        type={
          reply.parentCommentId === reply.parentReplyId ? 'comment' : 'reply'
        }
        id={reply.parentReplyId as string}
      />
    </StyledFeedReply>
  );
};

export default FeedReply;
