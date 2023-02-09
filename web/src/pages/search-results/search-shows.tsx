import React, { useMemo, useRef, useState } from 'react';
import { Title, useSearchTitlesQuery } from '../../generated/graphql';
import { useNavigate, useParams } from 'react-router-dom';

import { CatalogParent } from '../catalog/catalog.styles';
import EmptyPage from '../../components/empty-page/emptyPage';
import Loading from '../loading/loading';
import TitleCard from '../catalog/titleCard';
import { title } from 'process';

const SearchShows = () => {
  const { search } = useParams();
  let parentRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [titles, setTitles] = useState<Title[]>([]);
  const [{ data, error, fetching }] = useSearchTitlesQuery({
    variables: {
      search: search!,
      page: page,
      limit: 10,
    },
  });
  useMemo(() => {
    if (error) console.log(error);
    if (data && !fetching) {
      const _data = data.searchTitles;
      const _lastPage = _data?.lastPage;
      _lastPage && setLastPage(() => _lastPage);
      const _titles = _data?.titles;
      _titles && setTitles(() => _titles!);
    }
  }, [data, fetching, error, search]);

  if (fetching) return <Loading />;
  if (titles.length <= 0) return <EmptyPage msg='No Shows found' />;
  return (
    <CatalogParent ref={parentRef}>
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

export default SearchShows;
