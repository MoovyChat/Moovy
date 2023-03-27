import { Movie, useSearchEpisodesQuery } from '../../generated/graphql';
import { UIEventHandler, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CURRENT_DOMAIN } from '../../constants';
import EmptyPage from '../../components/empty-page/emptyPage';
import { Helmet } from 'react-helmet';
import { Image } from '../../components/Image/image';
import Loading from '../loading/loading';
import { MovieCardParent } from '../../components/movie-card/movieCard.styles';
import MovieInfo from '../../components/comment-card/movieInfo';
import { SearchTitles } from './searchResults.styles';

const SearchEpisodes = () => {
  const { search } = useParams();
  const listRef = useRef<any>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [titles, setTitles] = useState<Movie[]>([]);
  const [{ data, error, fetching }] = useSearchEpisodesQuery({
    variables: {
      search: search!,
      page: page,
      limit: 10,
    },
  });
  useMemo(() => {
    if (error) console.log(error);
    if (data && !fetching) {
      const _data = data.searchEpisodes;
      const _lastPage = _data?.lastPage;
      _lastPage && setLastPage(() => _lastPage);
      const _titles = _data?.movies;
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
  if (titles.length <= 0) return <EmptyPage msg='No Episodes found' />;
  return (
    <SearchTitles onScroll={handleScroll}>
      <Helmet>
        <title>{`${search}: Episodes`}</title>
        <meta name='description' content={`${search}: Episodes`} />
        <link
          rel='canonical'
          href={`${CURRENT_DOMAIN}/search/${search}/episodes}`}
        />
      </Helmet>
      {titles.map((movie) => (
        <MovieCardParent
          bg={movie?.stills!}
          onClick={(e) => {
            e.stopPropagation();
            if (location.pathname !== `/movie/${movie.id}`)
              navigate(`/movie/${movie.id}`);
          }}>
          <div className='container'>
            <div className='thumbs'>
              <Image src={movie?.thumbs!} alt='movie' />
            </div>
            <div className='info'>
              <MovieInfo movie={movie!} />
            </div>
          </div>
        </MovieCardParent>
      ))}
    </SearchTitles>
  );
};

export default SearchEpisodes;
