import {
  Comment,
  Reply,
  Users,
  useGetCommentLikesQuery,
  useGetCommentQuery,
  useGetCommentRepliesQuery,
  useGetCommentedUserQuery,
  useSetCommentLikeMutation,
} from '../../generated/graphql';
import { MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react';

import CommentTemplate from './commentTemplate';
import Loading from '../loading/loading';
import NotFound from '../notFound/notFound';
import _ from 'lodash';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useFetchMoreRepliesOfComment } from '../../hooks/useFetchMoreCommentReplies';
import { useParams } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

const CommentThread = () => {
  const { id } = useParams();
  useEffect(() => {
    document.title = 'Comment - Moovy';
  }, []);
  const userRef = useRef<Users | null>(null);
  const loggedInUser = useAppSelector(state => state.user);
  const [like, setLike] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [cursor, setCursor] = useState<string>('');
  const [likedUsers, setLikedUsers] = useState<any[]>([]);
  const [commentQueyResults] = useGetCommentQuery({
    variables: { cid: id! },
    pause: isServer(),
  });
  const [commentedQueryResult] = useGetCommentedUserQuery({
    variables: { cid: id! },
    pause: isServer(),
  });
  const [comment, setComment] = useState<Comment>();
  const [, setCommentLike] = useSetCommentLikeMutation();

  const [commentLikeCountQuery, _executeQuery] = useGetCommentLikesQuery({
    variables: {
      cid: id!,
      limit: 10,
      page: 1,
    },
    pause: isServer(),
  });

  useEffect(() => {
    const { data, fetching, error } = commentLikeCountQuery;
    if (error) console.log(error);
    if (!fetching && data) {
      const _count = data.getCommentLikes?.likesCount!;
      const _users = data.getCommentLikes?.likes;
      const findCurrentUser = _users?.find(u => u.id === loggedInUser.id);
      if (findCurrentUser) setLike(true);
      else setLike(false);
      setLikedUsers(_users!);
      setLikeCount(_count);
    }
  }, [commentLikeCountQuery.fetching]);

  useMemo(() => {
    const { data, fetching, error } = commentQueyResults;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getComment as Comment;
      const likesCount = data.getComment.likesCount!;
      setLikeCount(() => likesCount);
      setComment(() => _data);
    }
  }, [commentQueyResults]);

  useMemo(() => {
    const { data, error, fetching } = commentedQueryResult;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getCommentedUser as Users;
      userRef.current = _data;
    }
  }, [commentedQueryResult]);

  const [repliesQueryResult] = useGetCommentRepliesQuery({
    variables: {
      cid: id!,
      first: 5,
      after: cursor,
    },
    pause: isServer(),
  });
  // Get replies.
  useEffect(() => {
    const { error, data, fetching } = repliesQueryResult;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getCommentReplies!;
      const nodes = _data.nodes as Reply[];
      setReplies(() => nodes);
    }
  }, [repliesQueryResult]);

  const { fetchMore } = useFetchMoreRepliesOfComment(
    comment,
    setReplies,
    repliesQueryResult,
    cursor,
    setCursor,
  );
  const updateLike: MouseEventHandler<HTMLSpanElement> = async e => {
    e.stopPropagation();
    setLike(!like);
    like ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    const res = await setCommentLike({
      uid: loggedInUser?.id,
      cid: id!,
      like: !like,
      mid: comment?.movieId!,
    });
    const { data, error } = res;
    if (error) console.log(error);
    const _like = data?.setCommentLike?.likeStatus.like!;
    setLike(_like);
    setLikedUsers(users => {
      let newUsers = [];
      if (_like) {
        newUsers = [...users, loggedInUser];
      } else {
        newUsers = users.filter(user => user?.id !== loggedInUser?.id);
      }
      return newUsers;
    });
  };

  if (commentQueyResults.fetching) return <Loading />;
  if (!comment) return <NotFound />;
  return (
    <CommentTemplate
      type="comment"
      userRef={userRef}
      replies={replies}
      comment={comment}
      like={like}
      fetchMore={fetchMore}
      setLike={setLike}
      likesCount={likeCount}
      likedUsers={likedUsers}
      updateLike={updateLike}
    />
  );
};

export default withUrqlClient(urqlClient)(CommentThread);
