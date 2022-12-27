import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import {
  User,
  useGetReplyLikesQuery,
  useGetUserQuery,
  useSetReplyLikeMutation,
} from '../../generated/graphql';

import CardTemplate from './cardTemplate';
import { Reply } from '../../utils/interfaces';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

type props = {
  comment: Reply;
  isMain?: boolean;
};
const ReplyCard: React.FC<props> = ({ comment, isMain }) => {
  const movieId = comment.movieId;
  const navigate = useNavigate();
  const [likeCount, setLikeCount] = useState<number>(comment.likesCount!);
  const loggedInUser = useAppSelector((state) => state.user);
  const [like, setLike] = useState<boolean>(false);
  const [likedUsers, setLikedUsers] = useState<any[]>([]);
  const [replyLikeQuery, _executeQuery] = useGetReplyLikesQuery({
    variables: {
      rid: comment.id!,
    },
    pause: isServer(),
  });

  const [, setReplyLike] = useSetReplyLikeMutation();

  const goToReply: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    navigate(`/reply/${comment.id}`);
  };

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

  const updateLike: MouseEventHandler<HTMLSpanElement> = async (e) => {
    e.stopPropagation();
    setLike(!like);
    like ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    const res = await setReplyLike({
      uid: loggedInUser.id,
      rid: comment.id,
      like: !like,
      mid: movieId,
    });
    const { data, error } = res;
    if (error) console.log(error);
    const _like = data?.setReplyLike?.likeStatus.like!;
    setLike(_like);
  };

  return (
    <CardTemplate
      type='reply'
      isMain={isMain}
      updateLike={updateLike}
      likeCount={likeCount}
      like={like}
      goToComment={goToReply}
      comment={comment}
      likedUsers={likedUsers}
    />
  );
};

export default withUrqlClient(urqlClient)(ReplyCard);
