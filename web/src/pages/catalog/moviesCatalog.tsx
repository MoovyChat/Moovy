import { Title, useGetPaginatedTitlesQuery } from '../../generated/graphql';
import { UIEventHandler, useEffect, useMemo, useRef, useState } from 'react';

import { CatalogParent } from './catalog.styles';
import CatalogTemplate from './catalogTemplate';
import EmptyPage from '../../components/empty-page/emptyPage';
import Loading from '../loading/loading';
import TitleCard from './titleCard';
import _ from 'lodash';
import { isServer } from '../../constants';
import { useFetchMoreTitles } from '../../hooks/useFetchMoreTitles';

const MoviesCatalog = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Movies - Moovy';
  }, []);

  const [titles, setTitles] = useState<Title[]>([]);
  const [paginatedTitles] = useGetPaginatedTitlesQuery({
    variables: { type: 'movie', first: 15, after: '' },
    pause: isServer(),
  });

  useMemo(() => {
    const { data, error, fetching } = paginatedTitles;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getPaginatedTitles;
      const _titles = _data?.nodes as Title[];
      setTitles(_titles);
    }
  }, [paginatedTitles]);

  const { fetchMore } = useFetchMoreTitles('movie', setTitles, paginatedTitles);

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      fetchMore();
    }
  };

  if (paginatedTitles.fetching)
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
