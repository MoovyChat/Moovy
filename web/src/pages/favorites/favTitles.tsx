import {
  MovieStats,
  useGetFavTitlesQuery,
  useGetUserQuery,
} from '../../generated/graphql';
import { useEffect, useState } from 'react';

import NotFound from '../notFound/notFound';
import TitleListTemplate from './titleListTemplate';
import { isServer } from '../../constants';
import useIsAuth from '../../utils/isAuthUser';
import { useParams } from 'react-router-dom';

const FavTitles = () => {
  const { id } = useParams();
  useEffect(() => {
    document.title = 'Favorites - Moovy';
  }, []);
  useIsAuth();
  const [page, setPage] = useState<number>(1);
  const [movieStatsData, setMovieStats] = useState<MovieStats[]>([]);
  const [lastPage, setLastPage] = useState<number>(1);
  const [favTItlesQuery] = useGetFavTitlesQuery({
    variables: { page, uid: id!, limit: 6 },
    pause: isServer(),
  });

  useEffect(() => {
    const { data, error, fetching } = favTItlesQuery;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getFavTitles!;
      const movieStats = _data.movieStats! as MovieStats[];
      setMovieStats(() => movieStats);
      const _lastPage = _data.lastPage!;
      setLastPage(() => _lastPage);
    }
  }, [favTItlesQuery]);

  if (favTItlesQuery.error) return <NotFound />;
  return (
    <TitleListTemplate
      page={page}
      setPage={setPage}
      fetching={favTItlesQuery.fetching}
      lastPage={lastPage}
      movieStatsData={movieStatsData}
    />
  );
};

export default FavTitles;