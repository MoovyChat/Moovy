import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import {
  User,
  useGetRepliedUserQuery,
  useGetRepliesOfReplyQuery,
  useGetReplyLikesQuery,
  useGetReplyQuery,
  useSetReplyLikeMutation,
} from '../../generated/graphql';

import CommentTemplate from './commentTemplate';
import Loading from '../loading/loading';
import NotFound from '../notFound/notFound';
import { Reply } from '../../utils/interfaces';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useParams } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

const ReplyThread = () => {
  const { id } = useParams();
  useEffect(() => {
    document.title = 'Reply - Moovy';
  }, []);
  const userRef = useRef<User | null>(null);
  const loggedInUser = useAppSelector((state) => state.user);
  const [page, setPage] = useState<number>(1);
  const [like, setLike] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [likedUsers, setLikedUsers] = useState<any[]>([]);
  const [lastPage, setLastPage] = useState<number>(1);
  const [replyLikeQuery, _executeQuery] = useGetReplyLikesQuery({
    variables: {
      rid: id!,
      limit: 10,
      page: 1,
    },
    pause: isServer(),
  });

  const [, setReplyLike] = useSetReplyLikeMutation();

  const [commentQueryResults] = useGetReplyQuery({
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
      limit: 5,
      page: page!,
    },
    pause: isServer(),
  });

  const [comment, setComment] = useState<Reply>();

  useEffect(() => {
    const { data, fetching, error } = replyLikeQuery;
    if (error) console.log(error);
    if (!fetching && data) {
      const _count = data.getReplyLikes?.likesCount!;
      const _users = data.getReplyLikes?.likes;
      const findCurrentUser = _users?.find((u) => u.id === loggedInUser.id);
      if (findCurrentUser) setLike(true);
      else setLike(false);
      setLikedUsers(_users!);
      setLikeCount(_count);
    }
  }, [replyLikeQuery.fetching]);

  // Get Reply data
  useEffect(() => {
    const { data, fetching, error } = commentQueryResults;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getReply as Reply;
      setComment(() => _data);
    }
  }, [commentQueryResults]);

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
    if (error) console.log(error);
    if (!fetching && data) {
      const _repliesLastPage = data.getRepliesOfReply.lastPage;
      setLastPage(() => _repliesLastPage);
    }
  }, [repliesQueryResult]);

  const updateLike: MouseEventHandler<HTMLSpanElement> = async (e) => {
    e.stopPropagation();
    setLike(!like);
    like ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    const res = await setReplyLike({
      uid: loggedInUser.id,
      rid: id!,
      like: !like,
      mid: comment?.movieId!,
    });
    const { data, error } = res;
    if (error) console.log(error);
    const _like = data?.setReplyLike?.likeStatus.like!;
    setLike(_like);
  };

  if (commentQueryResults.fetching) return <Loading />;
  if (!comment) return <NotFound />;

  if (repliesQueryResult.fetching) return <Loading />;
  const data = repliesQueryResult.data!;
  const _data = data && data.getRepliesOfReply;
  const replies = _data && _data.replies ? _data.replies : [];

  return (
    <CommentTemplate
      type='reply'
      userRef={userRef}
      comment={comment}
      replies={replies}
      page={page}
      setPage={setPage}
      lastPage={lastPage}
      like={like}
      setLike={setLike}
      likesCount={likeCount}
      likedUsers={likedUsers}
      updateLike={updateLike}
    />
  );
};

export default withUrqlClient(urqlClient)(ReplyThread);
