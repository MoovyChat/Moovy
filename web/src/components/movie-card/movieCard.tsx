import { Movie } from '../../generated/graphql';
import { MovieCardParent } from './movieCard.styles';
import MovieInfo from '../comment-card/movieInfo';
import React from 'react';

type props = {
  movie: Movie;
};
const MovieCard: React.FC<props> = ({ movie }) => {
  return (
    <MovieCardParent bg={movie?.stills!}>
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
