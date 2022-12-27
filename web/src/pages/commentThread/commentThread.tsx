import { Comment, Reply } from '../../utils/interfaces';
import {
  MouseEventHandler,
  UIEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  User,
  useGetCommentLikesQuery,
  useGetCommentQuery,
  useGetCommentedUserQuery,
  useGetRepliesOfCommentQuery,
  useSetCommentLikeMutation,
} from '../../generated/graphql';

import CommentTemplate from './commentTemplate';
import Loading from '../loading/loading';
import NotFound from '../notFound/notFound';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useParams } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

const CommentThread = () => {
  const { id } = useParams();
  const userRef = useRef<User | null>(null);
  const loggedInUser = useAppSelector((state) => state.user);
  const [like, setLike] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);
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
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [, setCommentLike] = useSetCommentLikeMutation();

  const [commentLikeCountQuery, _executeQuery] = useGetCommentLikesQuery({
    variables: {
      cid: id!,
    },
    pause: isServer(),
  });

  useEffect(() => {
    const { data, fetching, error } = commentLikeCountQuery;
    if (error) console.log(error);
    if (!fetching && data) {
      const _count = data.getCommentLikes?.likesCount!;
      const _users = data.getCommentLikes?.likes;
      const findCurrentUser = _users?.find((u) => u.id === loggedInUser.id);
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
      const _data = data.getCommentedUser as User;
      userRef.current = _data;
    }
  }, [commentedQueryResult]);

  const [repliesQueryResult] = useGetRepliesOfCommentQuery({
    variables: {
      cid: id!,
      limit: 5,
      page: page,
    },
  });
  // Get replies.
  useMemo(() => {
    const { data, error, fetching } = repliesQueryResult;
    if (error) console.log(error);
    if (!fetching && data) {
      const _lastPage = data.getRepliesOfComment.lastPage!;
      const _repliesCount = data.getRepliesOfComment.repliesCount!;
      setComment((comm) => {
        let newComment = { ...comm, repliesCount: _repliesCount } as Comment;
        return newComment;
      });
      setLastPage(() => _lastPage);
    }
  }, [repliesQueryResult]);

  const updateLike: MouseEventHandler<HTMLSpanElement> = async (e) => {
    e.stopPropagation();
    setLike(!like);
    like ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    const res = await setCommentLike({
      uid: loggedInUser.id,
      cid: id!,
      like: !like,
      mid: comment?.movieId!,
    });
    const { data, error } = res;
    if (error) console.log(error);
    const _like = data?.setCommentLike?.likeStatus.like!;
    setLike(_like);
    setLikedUsers((users) => {
      let newUsers = [];
      if (_like) {
        newUsers = [...users, loggedInUser];
      } else {
        newUsers = users.filter((user) => user.id !== loggedInUser.id);
      }
      return newUsers;
    });
  };

  if (commentQueyResults.fetching) return <Loading />;
  if (!comment) return <NotFound />;
  if (repliesQueryResult.fetching) return <Loading />;
  const data = repliesQueryResult.data!;
  const _data = data && data.getRepliesOfComment;
  const replies = _data && _data.replies ? _data.replies : [];
  return (
    <CommentTemplate
      type='comment'
      userRef={userRef}
      replies={replies}
      comment={comment}
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

export default withUrqlClient(urqlClient)(CommentThread);
