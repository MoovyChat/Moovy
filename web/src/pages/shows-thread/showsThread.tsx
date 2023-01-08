import {
  Movie,
  Title,
  useGetMoviesByTitleIdQuery,
  useGetTitleQuery,
} from '../../generated/graphql';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ShowThreadParent, StyledTitleHeader } from './showThread.styles';

import ChildHeader from '../../components/childHeader/childHeader';
import Loading from '../loading/loading';
import MovieCard from '../../components/movie-card/movieCard';
import ViewportList from 'react-viewport-list';
import WatchVideo from '../../components/watch-video/watchVideo';
import _ from 'lodash';
import { isServer } from '../../constants';
import { title } from 'process';
import useIsAuth from '../../utils/isAuthUser';
import { useParams } from 'react-router-dom';

const ShowsThread = () => {
  useIsAuth();
  useEffect(() => {
    document.title = 'Show - Moovy';
  }, []);
  const { id } = useParams();
  const listRef = useRef<any>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<Title | null>(null);
  const [movies, setMovies] = useState<Movie[] | null>([]);
  const [lastPage, setLastPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [titleInfo] = useGetTitleQuery({
    variables: { getTitleId: id! },
    pause: isServer(),
  });
  const [getMovies] = useGetMoviesByTitleIdQuery({
    variables: { tid: id!, page: page, limit: 10 },
    pause: isServer(),
  });

  useEffect(() => {
    console.log('re-rendering', movies);
  }, []);

  useMemo(() => {
    const { data, error, fetching } = titleInfo;
    if (error) return console.error(error);
    if (!fetching && data) {
      titleRef.current = data.getTitle as Title;
    }
  }, [titleInfo.fetching]);

  useMemo(() => {
    const { data, error, fetching } = getMovies;
    if (error) return console.error(error);
    if (!fetching && data) {
      const _data = data.getMoviesByTitleId!;
      if (_data.id !== id) {
        setMovies([]);
        return;
      }
      const paginatedMovies = _data.movies!;
      const p = _data.page!;
      const lastPage = _data.lastPage!;
      let orderedMovies = _.chain(movies)
        .concat(paginatedMovies)
        .orderBy('id')
        .uniq()
        .value();
      setMovies(() => orderedMovies as Movie[]);
      setPage(() => p);
      setLastPage(lastPage);
    }
  }, [getMovies.fetching, page]);

  if (getMovies.fetching || titleInfo.fetching) {
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
          <WatchVideo
            className='watch-video'
            platform='NETFLIX'
            id={titleRef.current?.id}
            type='show'
          />
        </StyledTitleHeader>
      </ChildHeader>
      <div className='movies-container' ref={parentRef}>
        {movies && (
          <ViewportList ref={listRef} viewportRef={parentRef} items={movies}>
            {(movie, index) => {
              if (movie)
                return (
                  <div className='movie'>
                    <MovieCard movie={movie} />
                  </div>
                );
              else <React.Fragment></React.Fragment>;
            }}
          </ViewportList>
        )}
        {page < lastPage && (
          <div
            className='show-more'
            onClick={() => setPage((page) => page + 1)}>
            Show more titles
          </div>
        )}
      </div>
    </ShowThreadParent>
  );
};

export default ShowsThread;
