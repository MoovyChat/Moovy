import { CURRENT_DOMAIN, isServer } from '../../constants';
import { Title, useGetPaginatedTitlesQuery } from '../../generated/graphql';
import { UIEventHandler, useMemo, useRef, useState } from 'react';

import { CatalogParent } from './catalog.styles';
import EmptyPage from '../../components/empty-page/emptyPage';
import { Helmet } from 'react-helmet';
import Loading from '../loading/loading';
import TitleCard from './titleCard';
import { useFetchMoreTitles } from '../../hooks/useFetchMoreTitles';

const MoviesCatalog = () => {
  const parentRef = useRef<HTMLDivElement>(null);

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
      <Helmet>
        <title>Moovy: Movies</title>
        <meta name='description' content='List of all movies' />
        <link rel='canonical' href={`${CURRENT_DOMAIN}/catalog`} />
      </Helmet>
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