import React, { MouseEventHandler, useEffect, useState } from 'react';
import {
  useDeleteCommentMutation,
  useGetCommentLikesQuery,
  useSetCommentLikeMutation,
} from '../../generated/graphql';

import CardTemplate from './cardTemplate';
import { Comment } from '../../utils/interfaces';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

type props = {
  comment: Comment;
  isMain?: boolean;
};
const CommentCard: React.FC<props> = ({ comment, isMain }) => {
  const movieId = comment.movieId;
  const navigate = useNavigate();
  const loggedInUser = useAppSelector((state) => state.user);
  const [like, setLike] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(comment.likesCount!);
  const [likedUsers, setLikedUsers] = useState<any[]>([]);
  const [commentLikeCountQuery, _executeQuery] = useGetCommentLikesQuery({
    variables: {
      cid: comment.id!,
    },
    pause: isServer(),
  });

  const [, setCommentLike] = useSetCommentLikeMutation();

  const goToComment: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    navigate(`/comment/${comment.id}`);
  };

  const updateLike: MouseEventHandler<HTMLSpanElement> = async (e) => {
    e.stopPropagation();
    setLike(!like);
    like ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    const res = await setCommentLike({
      uid: loggedInUser.id,
      cid: comment.id,
      like: !like,
      mid: movieId,
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

  return (
    <CardTemplate
      type='comment'
      isMain={isMain}
      updateLike={updateLike}
      likeCount={likeCount}
      like={like}
      goToComment={goToComment}
      comment={comment}
      likedUsers={likedUsers}
    />
  );
};

export default withUrqlClient(urqlClient)(CommentCard);
