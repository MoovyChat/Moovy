import React, { MouseEventHandler, useEffect, useState } from 'react';
import {
  useGetIsUserLikedCommentQuery,
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
  const [, setCommentLike] = useSetCommentLikeMutation();
  const [isUserLikedQuery] = useGetIsUserLikedCommentQuery({
    variables: { uid: loggedInUser.id, cid: comment.id },
    pause: isServer(),
  });

  useEffect(() => {
    const { error, data, fetching } = isUserLikedQuery;
    if (!fetching && data) {
      const _data = data.getIsUserLikedComment!;
      const isLiked = _data.isLiked as boolean;
      setLike(isLiked);
    }
  }, [isUserLikedQuery]);

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
    const _like = data?.setCommentLike?.likeStatus.like!;
    setLike(_like);
  };

  return (
    <CardTemplate
      type='comment'
      isMain={isMain}
      updateLike={updateLike}
      likeCount={likeCount}
      like={like}
      goToComment={goToComment}
      comment={comment}
    />
  );
};

export default withUrqlClient(urqlClient)(CommentCard);
