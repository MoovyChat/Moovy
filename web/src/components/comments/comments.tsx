import React, { useEffect, useState } from 'react';

import { Comment } from '../../utils/interfaces';
import CommentCard from '../comment-card/commentCard';
import CommentGroup from './commentGroup';
import { CommentParent } from './comments.styles';
import { isServer } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { useGetCommentsOfTheUserQuery } from '../../generated/graphql';

export interface allCommentsInterface {
  [key: string]: Comment[];
}
const Comments = () => {
  const user = useAppSelector((state) => state.user);
  const [comments, setComments] = useState<allCommentsInterface>();
  const [{ data, fetching, error }] = useGetCommentsOfTheUserQuery({
    variables: { uid: user.id },
    pause: isServer(),
  });
  useEffect(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      const allComments: Comment[] | undefined =
        data.getCommentsOfTheUser?.comments;

      const reducedComments: allCommentsInterface | undefined =
        allComments?.reduce((acc, obj) => {
          const key = obj.movieId;
          if (!acc[key]) acc[key] = [];
          acc[key].push(obj);
          return acc;
        }, {} as allCommentsInterface);
      setComments(reducedComments!);
    }
  }, [fetching, data, error]);
  return (
    <CommentParent>
      {comments &&
        Object.keys(comments).map((child) => (
          <CommentGroup movieId={child} comments={comments[child]} />
        ))}
    </CommentParent>
  );
};

export default Comments;
