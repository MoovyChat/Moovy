import React, { useMemo, useState } from 'react';
import { Title, useSearchMoviesQuery } from '../../generated/graphql';
import { useNavigate, useParams } from 'react-router-dom';

import EmptyPage from '../../components/empty-page/emptyPage';
import { Image } from '../../components/Image/image';
import Loading from '../loading/loading';
import { MovieCardParent } from '../../components/movie-card/movieCard.styles';
import MovieInfo from '../../components/comment-card/movieInfo';
import { SearchTitles } from './searchResults.styles';

const SearchMovies = () => {
  const { search } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [titles, setTitles] = useState<Title[]>([]);
  const [{ data, error, fetching }] = useSearchMoviesQuery({
    variables: {
      search: search!,
      page: page,
      limit: 10,
    },
  });
  useMemo(() => {
    if (error) console.log(error);
    if (data && !fetching) {
      const _data = data.searchMovies;
      const _lastPage = _data?.lastPage;
      _lastPage && setLastPage(() => _lastPage);
      const _titles = _data?.titles;
      _titles && setTitles(() => _titles!);
    }
  }, [data, fetching, error, search]);

  if (fetching) return <Loading />;
  if (titles.length <= 0) return <EmptyPage msg='No Movies found' />;

  return (
    <SearchTitles>
      {titles.map((movie) => (
        <MovieCardParent
          bg={movie?.artwork as string}
          onClick={(e) => {
            e.stopPropagation();
            if (location.pathname !== `/movie/${movie.id}`)
              navigate(`/movie/${movie.id}`);
          }}>
          <div className='container'>
            <div className='thumbs'>
              <Image src={movie?.boxart as string} alt='movie' />
            </div>
            <div className='info'>
              <MovieInfo title={movie!} />
            </div>
          </div>
        </MovieCardParent>
      ))}
    </SearchTitles>
  );
};

export default SearchMovies;
