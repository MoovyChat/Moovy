import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { Comment, Movie } from '../../utils/interfaces';
import React, { useEffect, useState } from 'react';

import { BiComment } from 'react-icons/bi';
import CommentCard from '../comment-card/commentCard';
import { CommentGroupParent } from './comments.styles';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import ProfilePic from '../profilePic/profilePic';
import { getFormattedNumber } from '../../utils/helpers';
import { isServer } from '../../constants';
import { useGetMovieQuery } from '../../generated/graphql';

type props = {
  comments: Comment[];
  movieId: string;
};
const CommentGroup: React.FC<props> = ({ movieId, comments }) => {
  const icon_size = 20;
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
        <div className='group-pic'>
          <div className='container'>
            <ProfilePic src='https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI' />
          </div>
          <div className='title'>{movie?.name}</div>
        </div>
        <div className='capsule-container'>
          <div className='capsule'>
            <div
              className='likes'
              onClick={(e) => {
                e.stopPropagation();
                // toggleLike();
              }}>
              <span>{getFormattedNumber(movie?.likesCount!)}</span>
              {like ? (
                <AiFillLike className='icon' size={icon_size} />
              ) : (
                <AiOutlineLike size={icon_size} />
              )}
            </div>
            <div className='comment'>
              <span>{getFormattedNumber(movie?.commentCount!)}</span>
              <BiComment size={icon_size} />
            </div>
            <div className='comment'>
              <span>{getFormattedNumber(movie?.commentCount!)}</span>
              <MdOutlineRemoveRedEye size={icon_size} />
            </div>
          </div>
        </div>
      </div>
      <div className='comments'>
        <div className='comments-child'>
          {comments.map((comment) => (
            <CommentCard comment={comment} />
          ))}
        </div>
      </div>
    </CommentGroupParent>
  );
};

export default CommentGroup;
