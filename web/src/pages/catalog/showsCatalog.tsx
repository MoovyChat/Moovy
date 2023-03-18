import { Title, useGetPaginatedTitlesQuery } from '../../generated/graphql';
import { UIEventHandler, useEffect, useMemo, useRef, useState } from 'react';

import { CatalogParent } from './catalog.styles';
import EmptyPage from '../../components/empty-page/emptyPage';
import TitleCard from './titleCard';
import { isServer } from '../../constants';
import { useFetchMoreTitles } from '../../hooks/useFetchMoreTitles';

const ShowsCatalog = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [titles, setTitles] = useState<Title[]>([]);
  useEffect(() => {
    document.title = 'Shows - Moovy';
  }, []);

  const [paginatedTitles] = useGetPaginatedTitlesQuery({
    variables: { type: 'show', first: 15, after: '' },
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

  const { fetchMore } = useFetchMoreTitles('show', setTitles, paginatedTitles);

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      fetchMore();
    }
  };

  if (titles && titles.length <= 0)
    return <EmptyPage msg='Shows catalog is empty' />;

  return (
    <CatalogParent ref={parentRef} onScroll={handleScroll}>
      {titles &&
        titles.map((title, index) => (
          <TitleCard
            title={title}
            parentRef={parentRef}
            index={index + 1}
            totalItems={titles.length!}
            key={title.id!}
          />
        ))}
    </CatalogParent>
  );
};

export default ShowsCatalog;
