import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

import { BiComment } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Movie } from '../../utils/interfaces';
import { MovieCardParent } from './movieCard.styled';
import ProfilePic from '../profilePic/profilePic';
import React from 'react';
import { getFormattedNumber } from '../../utils/helpers';

type props = {
  movie: Movie | undefined;
};
const MovieCard: React.FC<props> = ({ movie }) => {
  const like = false;
  const icon_size = 20;
  const netflixBaseUrl = 'https://www.netflix.com/watch/';
  const titleClickHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const url = `${netflixBaseUrl}${movie?.id!}`;
    window.open(url);
  };
  const showFullThreadHandler: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    e.stopPropagation();
  };
  return (
    <MovieCardParent like={false} themeToggled=''>
      <div className='group-pic'>
        <div className='parent'>
          <div className='container'>
            <ProfilePic src='https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI' />
          </div>
        </div>
        <div className='title name' onClick={titleClickHandler}>
          {movie?.name}
        </div>
        <Link to={`/movie/${movie?.id}`} className='thread title'>
          Show full thread
        </Link>
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
    </MovieCardParent>
  );
};

export default MovieCard;
