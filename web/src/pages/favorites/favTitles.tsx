import { CURRENT_DOMAIN, isServer } from '../../constants';
import { MovieStats, useGetFavTitlesQuery } from '../../generated/graphql';
import { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import NotFound from '../notFound/notFound';
import TitleListTemplate from './titleListTemplate';
import usePageView from '../../hooks/usePageView';
import { useParams } from 'react-router-dom';

const FavTitles = () => {
  const { id } = useParams();
  const [page, setPage] = useState<number>(1);
  const [movieStatsData, setMovieStats] = useState<MovieStats[]>([]);
  const [lastPage, setLastPage] = useState<number>(1);
  const [favTItlesQuery] = useGetFavTitlesQuery({
    variables: { page, uid: id!, limit: 6 },
    pause: isServer(),
  });
  usePageView();
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
    <>
      <Helmet>
        <title>{`${id}: Favorites`}</title>
        <meta name="description" content={`${id}: Favorites`} />
        <link
          rel="canonical"
          href={`${CURRENT_DOMAIN}/activity/${id}/favorites`}
        />
      </Helmet>
      <TitleListTemplate
        page={page}
        setPage={setPage}
        fetching={favTItlesQuery.fetching}
        lastPage={lastPage}
        movieStatsData={movieStatsData}
      />
    </>
  );
};

export default FavTitles;
