import { Title, useGetPaginatedMoviesQuery } from '../../generated/graphql';
import { UIEventHandler, useEffect, useMemo, useRef, useState } from 'react';

import { CatalogParent } from './catalog.styles';
import CatalogTemplate from './catalogTemplate';
import EmptyPage from '../../components/empty-page/emptyPage';
import Loading from '../loading/loading';
import TitleCard from './titleCard';
import _ from 'lodash';
import { isServer } from '../../constants';

const MoviesCatalog = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(1);
  const [titles, setTitles] = useState<Title[] | null>(null);
  const [lastPage, setLastPage] = useState<number>(1);
  const totalTitleCount = useRef<number | null>(null);
  const [{ error, fetching, data }] = useGetPaginatedMoviesQuery({
    variables: { limit: 15, page: page },
    pause: isServer(),
  });
  useEffect(() => {
    document.title = 'Movies - Moovy';
  }, []);

  useMemo(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getPaginatedMovies;
      setLastPage(_data?.lastPage!);
      setTitles((t) => {
        return _.chain(t)
          .concat(_data?.titles as Title[])
          .uniqBy('id')
          .orderBy('id')
          .value();
      });
      totalTitleCount.current = _data?.totalTitleCount!;
    }
  }, [page, fetching]);

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      if (page !== lastPage) {
        setPage((p: number) => p + 1);
      }
    }
  };

  if (fetching)
    return (
      <CatalogParent>
        <Loading />;
      </CatalogParent>
    );

  if (titles && titles?.length <= 0)
    return <EmptyPage msg='Movies catalog is empty' />;

  return (
    <CatalogParent ref={parentRef} onScroll={handleScroll}>
      {titles &&
        titles.map(
          (title, index) =>
            title && (
              <TitleCard
                title={title}
                parentRef={parentRef}
                index={index + 1}
                totalItems={titles.length}
                key={title.id}
              />
            )
        )}
    </CatalogParent>
  );
};

export default MoviesCatalog;
