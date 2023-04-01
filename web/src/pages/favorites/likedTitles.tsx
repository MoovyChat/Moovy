import { CURRENT_DOMAIN, isServer } from '../../constants';
import { MovieStats, useGetLikedTitlesQuery } from '../../generated/graphql';
import { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import NotFound from '../notFound/notFound';
import TitleListTemplate from './titleListTemplate';
import { useParams } from 'react-router-dom';

const LikedTitles = () => {
  const { id } = useParams();
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
    <>
      <Helmet>
        <title>{`${id}: Liked Titles`}</title>
        <meta name='description' content={`${id}: Liked Titles`} />
        <link rel='canonical' href={`${CURRENT_DOMAIN}/activity/${id}/liked`} />
      </Helmet>
      <TitleListTemplate
        page={page}
        setPage={setPage}
        fetching={likedTitlesQuery.fetching}
        lastPage={lastPage}
        movieStatsData={movieStatsData}
      />
    </>
  );
};

export default LikedTitles;
