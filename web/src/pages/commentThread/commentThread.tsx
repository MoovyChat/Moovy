import { Comment, Reply, User } from '../../utils/interfaces';
import { useEffect, useRef, useState } from 'react';
import {
  useGetCommentQuery,
  useGetCommentedUserQuery,
  useGetRepliesOfCommentQuery,
} from '../../generated/graphql';

import CommentTemplate from './commentTemplate';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useParams } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

const CommentThread = () => {
  const { id } = useParams();
  const userRef = useRef<User | null>(null);
  const [commentQueyResults] = useGetCommentQuery({
    variables: { cid: id! },
    pause: isServer(),
  });
  const [commentedQueryResult] = useGetCommentedUserQuery({
    variables: { cid: id! },
    pause: isServer(),
  });
  const [comment, setComment] = useState<Comment>();
  const [commentHeight, setCommentHeight] = useState<number>(0);
  const [replies, setReplies] = useState<Reply[]>();

  useEffect(() => {
    const { data, fetching, error } = commentQueyResults;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getComment as Comment;
      setComment(_data);
    }
  }, [commentQueyResults]);
  useEffect(() => {
    const { data, error, fetching } = commentedQueryResult;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getCommentedUser as User;
      userRef.current = _data;
    }
  }, [commentedQueryResult]);
  const [repliesQueryResult] = useGetRepliesOfCommentQuery({
    variables: {
      cid: id!,
      limit: 10,
    },
  });
  // Get replies.
  useEffect(() => {
    const { data, error, fetching } = repliesQueryResult;
    if (error) console.log(error);
    if (!fetching && data) {
      const _repliesData = data.getRepliesOfComment.replies;
      setReplies(_repliesData);
    }
  }, [repliesQueryResult]);

  return (
    <CommentTemplate
      type='Comment'
      userRef={userRef}
      replies={replies}
      comment={comment}
    />
  );
};

export default withUrqlClient(urqlClient)(CommentThread);
