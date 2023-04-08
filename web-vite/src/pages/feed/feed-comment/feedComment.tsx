import { Comment, useGetCommentQuery } from '../../../generated/graphql';
import React, { useEffect, useState } from 'react';

import CommentCard from '../../../components/comment-card/commentCard';
import Loading from '../../loading/loading';
import { isServer } from '../../../constants';

type props = {
  id: string;
};
const FeedComment: React.FC<props> = ({ id }) => {
  const [comment, setComment] = useState<Comment | null>(null);
  const [commentQuery] = useGetCommentQuery({
    variables: { cid: id },
    pause: isServer(),
  });

  useEffect(() => {
    const { error, data, fetching } = commentQuery;
    if (!fetching && data) {
      const _data = data.getComment! as Comment;
      setComment(() => _data);
    }
  }, [commentQuery]);
  if (commentQuery.fetching) return <Loading />;
  if (!comment) return <></>;
  return <CommentCard comment={comment} />;
};

export default FeedComment;
