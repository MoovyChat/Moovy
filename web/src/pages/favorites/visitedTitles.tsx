import { CURRENT_DOMAIN, isServer } from '../../constants';
import { Visited, useGetUserViewHistoryQuery } from '../../generated/graphql';
import { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import NotFound from '../notFound/notFound';
import TitleListTemplate from './titleListTemplate';
import useIsAuth from '../../utils/isAuthUser';
import { useParams } from 'react-router-dom';

const VisitedTitles = () => {
  const { id } = useParams();

  useIsAuth();
  const [page, setPage] = useState<number>(1);
  const [visited, setVisited] = useState<Visited[]>([]);
  const [lastPage, setLastPage] = useState<number>(1);

  const [visitedQuery] = useGetUserViewHistoryQuery({
    variables: { page, uid: id!, limit: 6 },
    pause: isServer(),
  });

  useEffect(() => {
    const { data, error, fetching } = visitedQuery;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getUserViewHistory!;

      if (_data) {
        const visitedStats = _data.visited! as Visited[];
        setVisited(() => visitedStats);
        const _lastPage = _data.lastPage!;
        setLastPage(() => _lastPage);
      }
    }
  }, [visitedQuery]);

  if (visitedQuery.error) return <NotFound />;
  return (
    <>
      <Helmet>
        <title>{`${id}: History`}</title>
        <meta name='description' content={`${id}: History`} />
        <link
          rel='canonical'
          href={`${CURRENT_DOMAIN}/activity/${id}/history`}
        />
      </Helmet>
      <TitleListTemplate
        page={page}
        setPage={setPage}
        fetching={visitedQuery.fetching}
        lastPage={lastPage}
        movieStatsData={visited}
      />
    </>
  );
};

export default VisitedTitles;
