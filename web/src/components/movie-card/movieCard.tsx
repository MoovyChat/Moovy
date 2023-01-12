import React, { MouseEventHandler } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Image } from '../Image/image';
import { Movie } from '../../generated/graphql';
import { MovieCardParent } from './movieCard.styles';
import MovieInfo from '../comment-card/movieInfo';

type props = {
  movie: Movie;
};

const MovieCard: React.FC<props> = ({ movie }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const cardClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (location.pathname !== `/movie/${movie.id}`)
      navigate(`/movie/${movie.id}`);
  };
  return (
    <MovieCardParent bg={movie?.stills!} onClick={cardClickHandler}>
      <div className='container'>
        <div className='thumbs'>
          <Image src={movie?.thumbs!} alt='movie' loading='lazy' />
        </div>
        <div className='info'>
          <MovieInfo movie={movie} />
        </div>
      </div>
    </MovieCardParent>
  );
};

export default MovieCard;
