import React, { UIEventHandler, useEffect, useRef } from 'react';

import { CSSTransition } from 'react-transition-group';
import EmptyPage from '../../components/empty-page/emptyPage';
import { LikedStyles } from './favorites.styles';
import Loading from '../loading/loading';
import MovieCard from '../../components/movie-card/movieCard';
import { MovieStats } from '../../generated/graphql';
import ViewportList from 'react-viewport-list';

type props = {
  page: number;
  setPage: any;
  lastPage: number;
  movieStatsData: any[];
  fetching: boolean;
};

const TitleListTemplate: React.FC<props> = ({
  page,
  setPage,
  lastPage,
  movieStatsData,
  fetching,
}) => {
  const listRef = useRef<any>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const mounted = useRef<boolean>(false);
  // Check if the component is mounted or not for animation purposes.
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  // Scroll handler.
  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      if (page !== lastPage) {
        setPage((p: number) => p + 1);
      }
    }
  };
  return (
    <CSSTransition
      in={mounted.current}
      classNames='ttList'
      timeout={100}
      nodeRef={parentRef}>
      <LikedStyles
        onScroll={handleScroll}
        ref={parentRef}
        className='styled-titleList'>
        {movieStatsData.length > 0 ? (
          <React.Fragment>
            <ViewportList
              ref={listRef}
              viewportRef={parentRef}
              items={movieStatsData}>
              {(movieStat, index) => (
                <MovieCard
                  movieId={movieStat.movieId!}
                  key={movieStat.movieId!}
                />
              )}
            </ViewportList>
          </React.Fragment>
        ) : (
          <EmptyPage msg='List is empty.' />
        )}
        <div className='extra'>{fetching && <Loading />}</div>
      </LikedStyles>
    </CSSTransition>
  );
};

export default TitleListTemplate;
