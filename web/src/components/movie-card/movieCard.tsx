import { Movie, useGetMovieQuery } from '../../generated/graphql';
import React, { MouseEventHandler, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Image } from '../Image/image';
import { MovieCardParent } from './movieCard.styles';
import MovieInfo from '../comment-card/movieInfo';
import { isServer } from '../../constants';
import { useAppSelector } from '../../redux/hooks';

type props = {
  movieId: string;
};

const MovieCard: React.FC<props> = ({ movieId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAppSelector((state) => state.user);
  const [movie, setMovie] = useState<Movie | null>(null);
  // GraphQL: Get movie info
  const [movieData, _executeQuery] = useGetMovieQuery({
    variables: { mid: movieId! },
    pause: isServer(),
  });

  // Set Movie Data.
  useMemo(() => {
    const { data, error, fetching } = movieData;
    if (error) console.log(error);
    if (!fetching && data) {
      const a = data.getMovie as Movie;
      setMovie(() => a);
    }
  }, [movieData]);

  const cardClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (location.pathname !== `/home/movie/${movieId}`)
      navigate(`/home/movie/${movieId}`);
  };

  return (
    <MovieCardParent bg={movie?.stills!} onClick={cardClickHandler}>
      <div className='container'>
        <div className='thumbs'>
          <Image src={movie?.thumbs!} alt='movie' />
        </div>
        <div className='info'>
          <MovieInfo movie={movie!} />
        </div>
      </div>
    </MovieCardParent>
  );
};

export default MovieCard;
