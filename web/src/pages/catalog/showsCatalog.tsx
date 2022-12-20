import { Title, useGetPaginatedShowsQuery } from '../../generated/graphql';
import { useEffect, useMemo, useRef, useState } from 'react';

import CatalogTemplate from './catalogTemplate';
import Loading from '../loading/loading';
import { isServer } from '../../constants';

const ShowsCatalog = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(1);
  const [titles, setTitles] = useState<Title[] | null>(null);
  const [lastPage, setLastPage] = useState<number>(1);
  const totalTitleCount = useRef<number | null>(null);

  const [{ error, fetching, data }] = useGetPaginatedShowsQuery({
    variables: { limit: 20, page: page },
    pause: isServer(),
  });
  useMemo(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getPaginatedShows;
      setLastPage(_data?.lastPage!);
      setTitles(_data?.titles!);
      console.log(_data);
      totalTitleCount.current = _data?.totalTitleCount!;
    }
  }, [page, fetching, data]);

  if (fetching)
    return (
      <div>
        <Loading />
      </div>
    );
  return <CatalogTemplate parentRef={parentRef} titles={titles} />;
};

export default ShowsCatalog;
