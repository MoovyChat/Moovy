import { CURRENT_DOMAIN, isServer } from '../../constants';
import {
  Movie,
  Title,
  useGetMoviesByTitleIdQuery,
  useGetTitleQuery,
} from '../../generated/graphql';
import React, {
  UIEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ShowThreadParent, StyledTitleHeader } from './showThread.styles';

import ChildHeader from '../../components/childHeader/childHeader';
import { Helmet } from 'react-helmet';
import Loading from '../loading/loading';
import MovieCard from '../../components/movie-card/movieCard';
import ViewportList from 'react-viewport-list';
import WatchVideo from '../../components/watch-video/watchVideo';
import _ from 'lodash';
import { useFetchMoreMovies } from '../../hooks/useFetchMoreMovies';
import useIsAuth from '../../utils/isAuthUser';
import { useParams } from 'react-router-dom';

const ShowsThread = () => {
  useIsAuth();
  const { id } = useParams();
  const listRef = useRef<any>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<Title | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [titleInfo] = useGetTitleQuery({
    variables: { getTitleId: id! },
    pause: isServer(),
  });
  const [getMovies] = useGetMoviesByTitleIdQuery({
    variables: { tid: id!, first: 10, after: '' },
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
    const { data, error, fetching } = getMovies;
    if (error) return console.error(error);
    if (!fetching && data) {
      const _data = data.getMoviesByTitleId!;
      const paginatedMovies = _data.nodes as Movie[];
      setMovies(() => paginatedMovies as Movie[]);
    }
  }, [getMovies]);

  const { fetchMore } = useFetchMoreMovies(id!, setMovies, getMovies);

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      fetchMore();
    }
  };

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
    <ShowThreadParent onScroll={handleScroll}>
      <Helmet>
        <title>{`Moovy: Show`}</title>
        <meta name='description' content={`List of all episodes of a show.`} />
        <link rel='canonical' href={`${CURRENT_DOMAIN}/show/${id}}`} />
      </Helmet>
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
                  <div className='movie' key={movie.id}>
                    <MovieCard movieId={movie.id} />
                  </div>
                );
              else <React.Fragment></React.Fragment>;
            }}
          </ViewportList>
        )}
      </div>
    </ShowThreadParent>
  );
};

export default ShowsThread;
