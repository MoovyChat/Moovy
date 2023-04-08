import { Title, useSearchTitlesQuery } from '../../generated/graphql';
import { UIEventHandler, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CURRENT_DOMAIN } from '../../constants';
import { CatalogParent } from '../catalog/catalog.styles';
import EmptyPage from '../../components/empty-page/emptyPage';
import { Helmet } from 'react-helmet';
import Loading from '../loading/loading';
import TitleCard from '../catalog/titleCard';

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

  // Scroll handler.
  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      if (page !== lastPage) {
        setPage((page) => page + 1);
      }
    }
  };

  if (fetching) return <Loading />;
  if (titles.length <= 0) return <EmptyPage msg='No Shows found' />;
  return (
    <CatalogParent ref={parentRef} onScroll={handleScroll}>
      <Helmet>
        <title>{`${search}: Shows`}</title>
        <meta name='description' content={`${search}: Shows`} />
        <link
          rel='canonical'
          href={`${CURRENT_DOMAIN}/search/${search}/shows}`}
        />
      </Helmet>
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
