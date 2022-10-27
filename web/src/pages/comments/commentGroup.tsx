import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { Comment, Movie } from '../../utils/interfaces';
import React, { useEffect, useState } from 'react';

import { BiComment } from 'react-icons/bi';
import CommentCard from '../../components/comment-card/commentCard';
import { CommentGroupParent } from './comments.styles';
import { Link } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import MovieCard from '../../components/movieCard/movieCard';
import ProfilePic from '../../components/profilePic/profilePic';
import { getFormattedNumber } from '../../utils/helpers';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useGetMovieQuery } from '../../generated/graphql';
import { withUrqlClient } from 'next-urql';

type props = {
  comments: Comment[];
  movieId: string;
};
const CommentGroup: React.FC<props> = ({ movieId, comments }) => {
  const [movie, setMovie] = useState<Movie>();
  const [like, setLike] = useState<boolean>();
  const [movieInfo] = useGetMovieQuery({
    variables: { mid: movieId },
    pause: isServer(),
  });
  // Get Movie info.
  useEffect(() => {
    const { data, fetching, error } = movieInfo;
    if (error) console.log(error);
    if (!fetching && data) {
      setMovie(data.getMovie);
    }
  }, [movieInfo]);

  return (
    <CommentGroupParent like={false} themeToggled=''>
      <div className='movie'>
        <MovieCard movie={movie} />
      </div>
      <div className='comments'>
        <div className='comments-child'>
          {comments.map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))}
        </div>
      </div>
    </CommentGroupParent>
  );
};

export default withUrqlClient(urqlClient)(CommentGroup);
