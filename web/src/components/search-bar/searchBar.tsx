import {
  Movie,
  Title,
  User,
  useGetSearchResultsQuery,
} from '../../generated/graphql';
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  useEffect,
  useState,
} from 'react';
import {
  SearchBarParent,
  StyledMovieCard,
  StyledTitleCard,
  StyledUserCard,
} from './searchBar.styles';

import { MdSearch } from 'react-icons/md';
import ProfilePic from '../profilePic/profilePic';
import { isServer } from '../../constants';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>('');
  const [searchBarActive, setSearchBarActive] = useState<boolean>(false);
  const [users, SetUsers] = useState<any[]>([]);
  const [movies, setMovies] = useState<any[]>([]);
  const [titles, setTitles] = useState<any[]>([]);
  const changeValueHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    setValue(() => e.target.value);
  };
  const [searchResults] = useGetSearchResultsQuery({
    variables: { search: value },
    pause: isServer(),
  });
  useEffect(() => {
    const { data, error, fetching } = searchResults;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getSearchResults;
      const _users = _data?.users!;
      const _movies = _data?.movies!;
      const _titles = _data?.titles!;
      _users && SetUsers(_users);
      _movies && setMovies(_movies);
      _titles && setTitles(_titles);
    }
  }, [searchResults, value]);

  const mouseDownHandler = (e: any) => {
    const element = e.target as HTMLDivElement;
    const id = element.id;
    if (id !== 'blur-escape') {
      setSearchBarActive(() => false);
    }
    document.removeEventListener('mousedown', mouseDownHandler);
  };
  document.addEventListener('mousedown', mouseDownHandler);

  const onFocusHandler: FocusEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    setSearchBarActive(() => true);
  };
  const onBlurHandler: FocusEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    setSearchBarActive(() => false);
  };
  return (
    <SearchBarParent id='blur-escape'>
      <div className='icon'>
        <MdSearch size={25} />
      </div>
      <input
        type='text'
        id='search'
        name='search'
        value={value}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChange={changeValueHandler}
        placeholder='Search people, movies, shows.'
      />
      {searchBarActive && value && (
        <div className='search-results' id='blur-escape'>
          <div className='heading' id='blur-escape'>
            {value ? 'Search Results' : ' Recent searches'}
          </div>
          <div className='content' id='blur-escape'>
            {!users && !movies && !titles ? (
              <div>No Recent searches were found</div>
            ) : (
              <div className='content-container' id='blur-escape'>
                {users.length > 0 && (
                  <React.Fragment>
                    <div id='blur-escape' className='people'>
                      People
                    </div>
                    <div className='users-content' id='blur-escape'>
                      {users.map((user: any) => (
                        <StyledUserCard
                          id='blur-escape'
                          onClick={(e) => {
                            navigate(`/profile/${user.nickname}`);
                            setSearchBarActive(() => false);
                          }}>
                          <div className='p' id='blur-escape'>
                            <ProfilePic
                              src={user.photoUrl}
                              tooltip={true}
                              user={user}
                            />
                          </div>
                          <div className='n' id='blur-escape'>
                            {user.nickname}
                          </div>
                        </StyledUserCard>
                      ))}
                    </div>
                  </React.Fragment>
                )}
                {titles.length > 0 && (
                  <React.Fragment>
                    <div id=' blur-escape' className='shows'>
                      Shows
                    </div>
                    <div className='titles-content' id='blur-escape'>
                      {titles.map((title: any) => (
                        <StyledTitleCard
                          id='blur-escape'
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/show/${title.id}`);
                            setSearchBarActive(() => false);
                          }}>
                          <img
                            src={title.boxart}
                            alt={title.title}
                            className='thumbs'
                            id='blur-escape'
                          />
                          <div className='t' id='blur-escape'>
                            {title.title}
                          </div>
                        </StyledTitleCard>
                      ))}
                    </div>
                  </React.Fragment>
                )}
                {movies.length > 0 && (
                  <React.Fragment>
                    <div id='blur-escape' className='movies'>
                      Movies
                    </div>
                    <div className='movies-content' id='blur-escape'>
                      {movies.map((movie: any) => (
                        <StyledTitleCard
                          id='blur-escape'
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/movie/${movie.id}`);
                            setSearchBarActive(() => false);
                          }}>
                          <img
                            src={movie.boxart}
                            alt={movie.title}
                            className='thumbs'
                            id='blur-escape'
                          />
                          <div className='t' id='blur-escape'>
                            {movie.title} ({movie.year})
                          </div>
                        </StyledTitleCard>
                      ))}
                    </div>
                  </React.Fragment>
                )}
              </div>
            )}
            {value && <div className='more'>Search more for "{value}"</div>}
          </div>
        </div>
      )}
    </SearchBarParent>
  );
};

export default SearchBar;
