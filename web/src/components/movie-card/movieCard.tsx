import React, { MouseEventHandler } from 'react';

import { Movie } from '../../generated/graphql';
import { MovieCardParent } from './movieCard.styles';
import MovieInfo from '../comment-card/movieInfo';
import { useNavigate } from 'react-router-dom';

type props = {
  movie: Movie;
};

const MovieCard: React.FC<props> = ({ movie }) => {
  const navigate = useNavigate();
  const cardClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    navigate(`/movie/${movie.id}`);
  };
  return (
    <MovieCardParent bg={movie?.stills!} onClick={cardClickHandler}>
      <div className='container'>
        <div className='thumbs'>
          <img src={movie?.thumbs!} alt='movie' />
        </div>
        <div className='info'>
          <MovieInfo movie={movie} />
        </div>
      </div>
    </MovieCardParent>
  );
};

export default MovieCard;
