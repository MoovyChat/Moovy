import { MovieStats, useGetLikedTitlesQuery } from '../../generated/graphql';
import { UIEventHandler, useEffect, useRef, useState } from 'react';

import EmptyPage from '../../components/empty-page/emptyPage';
import { LikedStyles } from './favorites.styles';
import Loading from '../loading/loading';
import MovieCard from '../../components/movie-card/movieCard';
import NotFound from '../notFound/notFound';
import TitleListTemplate from './titleListTemplate';
import ViewportList from 'react-viewport-list';
import { isServer } from '../../constants';
import useIsAuth from '../../utils/isAuthUser';
import { useParams } from 'react-router-dom';

const LikedTitles = () => {
  const { id } = useParams();
  useEffect(() => {
    document.title = 'Liked - Moovy';
  }, []);

  useIsAuth();
  const [page, setPage] = useState<number>(1);
  const [movieStatsData, setMovieStats] = useState<MovieStats[]>([]);
  const [lastPage, setLastPage] = useState<number>(1);
  const [likedTitlesQuery] = useGetLikedTitlesQuery({
    variables: { page, uid: id!, limit: 6 },
    pause: isServer(),
  });

  useEffect(() => {
    const { data, error, fetching } = likedTitlesQuery;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getLikedTitles!;
      const movieStats = _data.movieStats! as MovieStats[];
      setMovieStats(() => movieStats);
      const _lastPage = _data.lastPage!;
      setLastPage(() => _lastPage);
    }
  }, [likedTitlesQuery]);

  if (likedTitlesQuery.error) return <NotFound />;
  return (
    <TitleListTemplate
      page={page}
      setPage={setPage}
      fetching={likedTitlesQuery.fetching}
      lastPage={lastPage}
      movieStatsData={movieStatsData}
    />
  );
};

export default LikedTitles;