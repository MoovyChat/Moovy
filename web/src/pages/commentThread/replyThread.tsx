import {
  Movie,
  Title,
  User,
  useGetRepliedUserQuery,
  useGetRepliesOfReplyQuery,
  useGetReplyQuery,
  useGetTitleInfoMutation,
} from '../../generated/graphql';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import CommentTemplate from './commentTemplate';
import { Reply } from '../../utils/interfaces';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { withUrqlClient } from 'next-urql';

const ReplyThread = () => {
  const { id } = useParams();
  const userRef = useRef<User | null>(null);
  const [commentQueyResults] = useGetReplyQuery({
    variables: { rid: id! },
    pause: isServer(),
  });
  const [commentedQueryResult] = useGetRepliedUserQuery({
    variables: { rid: id! },
    pause: isServer(),
  });
  const [repliesQueryResult] = useGetRepliesOfReplyQuery({
    variables: {
      rid: id!,
      limit: 10,
    },
    pause: isServer(),
  });

  const [comment, setComment] = useState<Reply>();
  const [replies, setReplies] = useState<Reply[]>();

  // Get Reply data
  useEffect(() => {
    const { data, fetching, error } = commentQueyResults;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getReply as Reply;
      setComment(_data);
    }
  }, [commentQueyResults]);

  // Get commented user data
  useEffect(() => {
    const { data, error, fetching } = commentedQueryResult;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getRepliedUser as User;
      userRef.current = _data;
    }
  }, [commentedQueryResult]);

  // Get replies.
  useEffect(() => {
    const { data, error, fetching } = repliesQueryResult;
    console.log(repliesQueryResult);
    if (error) console.log(error);
    if (!fetching && data) {
      const _repliesData = data.getRepliesOfReply.replies;
      setReplies(_repliesData);
    }
  }, [repliesQueryResult]);

  return (
    <CommentTemplate
      type='Reply'
      userRef={userRef}
      comment={comment}
      replies={replies}
    />
  );
};

export default withUrqlClient(urqlClient)(ReplyThread);
