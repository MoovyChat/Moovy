import React, { MouseEventHandler, useEffect, useState } from 'react';
import {
  useGetIsUserLikedReplyQuery,
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
  const movieId = comment && comment.movieId;
  const navigate = useNavigate();
  const [likeCount, setLikeCount] = useState<number>(
    comment ? comment.likesCount! : 0
  );
  const loggedInUser = useAppSelector((state) => state.user);
  const [like, setLike] = useState<boolean>(false);
  const [, setReplyLike] = useSetReplyLikeMutation();
  const [isUserLikedQuery] = useGetIsUserLikedReplyQuery({
    variables: { uid: loggedInUser.id, rid: comment && comment.id },
    pause: isServer(),
  });

  useEffect(() => {
    const { error, data, fetching } = isUserLikedQuery;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getIsUserLikedReply!;
      const isLiked = _data.isLiked as boolean;
      setLike(isLiked);
    }
  }, [isUserLikedQuery]);

  const goToReply: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    navigate(`/reply/${comment.id}`);
  };

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
    <>
      {comment && (
        <CardTemplate
          type='reply'
          isMain={isMain}
          updateLike={updateLike}
          likeCount={likeCount}
          like={like}
          goToComment={goToReply}
          comment={comment}
        />
      )}
    </>
  );
};

export default withUrqlClient(urqlClient)(ReplyCard);
