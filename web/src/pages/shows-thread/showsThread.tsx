import {
  Movie,
  Title,
  useGetMoviesByTitleIdQuery,
  useGetTitleQuery,
} from '../../generated/graphql';
import React, { useMemo, useRef } from 'react';
import { ShowThreadParent, StyledTitleHeader } from './showThread.styles';

import ChildHeader from '../../components/childHeader/childHeader';
import Loading from '../loading/loading';
import MovieCard from '../../components/movie-card/movieCard';
import _ from 'lodash';
import { isServer } from '../../constants';
import { title } from 'process';
import useIsAuth from '../../utils/isAuthUser';
import { useParams } from 'react-router-dom';

const ShowsThread = () => {
  useIsAuth();
  const { id } = useParams();
  const titleRef = useRef<Title | null>(null);
  const moviesRef = useRef<Movie[] | null>(null);
  const [titleInfo] = useGetTitleQuery({
    variables: { getTitleId: id! },
    pause: isServer(),
  });
  const [movies] = useGetMoviesByTitleIdQuery({
    variables: { tid: id! },
    pause: isServer(),
  });

  useMemo(() => {
    const { data, error, fetching } = titleInfo;
    if (error) return console.error(error);
    if (!fetching && data) {
      titleRef.current = data.getTitle as Title;
    }
  }, [titleInfo.fetching]);
  useMemo(() => {
    const { data, error, fetching } = movies;
    if (error) return console.error(error);
    if (!fetching && data) {
      moviesRef.current = data.getMoviesByTitleId as Movie[];
      moviesRef.current = _.orderBy(moviesRef.current, 'id');
    }
  }, [movies.fetching]);

  if (movies.fetching || titleInfo.fetching) {
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Loading />
    </div>;
  }
  return (
    <ShowThreadParent>
      <ChildHeader className='movie-header'>
        <StyledTitleHeader>
          <div className='title-image'>
            <img src={titleRef.current?.boxart as string} alt='title' />
          </div>
          <div className='title-text'>{titleRef.current?.title}</div>
        </StyledTitleHeader>
      </ChildHeader>
      <div className='movies-container'>
        {moviesRef.current?.map((movie) => (
          <div className='movie'>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </ShowThreadParent>
  );
};

export default ShowsThread;
