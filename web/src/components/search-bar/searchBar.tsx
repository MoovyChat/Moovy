import {
  Movie,
  ShortMovieFragment,
  ShortTitleFragment,
  Title,
  Users,
  useGetSearchResultsQuery,
} from '../../generated/graphql';
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  SearchBarParent,
  StyledMovieCard,
  StyledSearchResults,
  StyledTitleCard,
  StyledUserCard,
} from './searchBar.styles';
import { useLocation, useNavigate } from 'react-router-dom';

import { Image } from '../Image/image';
import Loading from '../../pages/loading/loading';
import { MdSearch } from 'react-icons/md';
import ProfilePic from '../profilePic/profilePic';
import _ from 'lodash';
import { isServer } from '../../constants';

const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const divRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string>('');
  const [debouncedValue, setDebouncedValue] = useState<string>('');
  const [searchBarActive, setSearchBarActive] = useState<boolean>(false);
  const [users, SetUsers] = useState<any[]>([]);
  const [movies, setMovies] = useState<ShortTitleFragment[]>([]);
  const [episodes, setEpisodes] = useState<ShortMovieFragment[]>([]);
  const [titles, setTitles] = useState<ShortTitleFragment[]>([]);
  const changeValueHandler: ChangeEventHandler<HTMLInputElement> = e => {
    e.stopPropagation();
    setValue(() => e.target.value);
  };
  useEffect(() => {
    const debouncedSetValue = _.debounce(v => {
      setDebouncedValue(v);
    }, 500);

    debouncedSetValue(value);

    return () => {
      debouncedSetValue.cancel();
    };
  }, [value]);

  const [searchResults] = useGetSearchResultsQuery({
    variables: { search: debouncedValue },
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
      const _episodes = _data?.episodes!;
      _users && SetUsers(() => _users);
      _movies && setMovies(() => _movies);
      _titles && setTitles(() => _titles);
      _episodes && setEpisodes(() => _episodes);
    }
  }, [searchResults, value]);

  const mouseDownHandler = (e: any) => {
    const element = e.target as HTMLDivElement;
    if (!divRef.current?.contains(element)) setSearchBarActive(() => false);
    document.removeEventListener('mousedown', mouseDownHandler);
  };
  document.addEventListener('mousedown', mouseDownHandler);

  const onFocusHandler: FocusEventHandler<HTMLInputElement> = e => {
    e.stopPropagation();
    setSearchBarActive(() => true);
  };
  const onBlurHandler: FocusEventHandler<HTMLInputElement> = e => {
    e.stopPropagation();
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.stopPropagation();
    e.preventDefault();
    let path = location.pathname;
    let defaultPath = `/home/search/${value}/episodes`;
    let pathArr = path.split('/');
    if (pathArr[1] === 'search') {
      defaultPath = `/home/${pathArr[1]}/${value}/${pathArr[3]}`;
    }
    navigate(defaultPath);
    setSearchBarActive(() => false);
  };
  return (
    <div ref={divRef}>
      <SearchBarParent>
        <div className="icon blur-escape">
          <MdSearch size={25} />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="search blur-escape"
            name="search"
            value={value}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            onChange={changeValueHandler}
            placeholder="Search people, movies, shows."
          />
        </form>
      </SearchBarParent>
      {searchBarActive && value && (
        <StyledSearchResults className="search-results">
          {searchResults.fetching ? (
            <Loading />
          ) : (
            <Fragment>
              <div className="heading">
                {value ? 'Search Results' : 'Recent searches'}
              </div>
              <div className="content">
                {!users && !movies && !titles && !episodes ? (
                  <div>No Recent searches were found</div>
                ) : (
                  <div className="content-container">
                    {users.length > 0 && (
                      <React.Fragment>
                        <div className="people">People</div>
                        <div className="users-content">
                          {users.map((user: any) => (
                            <StyledUserCard
                              onClick={e => {
                                navigate(`/home/profile/${user.nickname}`);
                                setSearchBarActive(() => false);
                              }}
                            >
                              <div
                                className="p"
                                onClick={e => {
                                  navigate(`/home/profile/${user.nickname}`);
                                  setSearchBarActive(() => false);
                                }}
                              >
                                <ProfilePic
                                  src={user.photoUrl}
                                  tooltip={true}
                                  user={user}
                                />
                              </div>
                              <div className="n">{user.nickname}</div>
                            </StyledUserCard>
                          ))}
                        </div>
                      </React.Fragment>
                    )}
                    {titles.length > 0 && (
                      <React.Fragment>
                        <div className="shows">Shows</div>
                        <div className="titles-content">
                          {titles.map((title: any) => (
                            <StyledTitleCard
                              onClick={e => {
                                e.stopPropagation();
                                navigate(`/home/show/${title.id}`);
                                setSearchBarActive(() => false);
                              }}
                            >
                              <Image
                                src={title.boxart}
                                alt={title.title}
                                className="thumbs"
                              />
                              <div className="t">{title.title}</div>
                            </StyledTitleCard>
                          ))}
                        </div>
                      </React.Fragment>
                    )}
                    {movies.length > 0 && (
                      <React.Fragment>
                        <div className="movies">Movies</div>
                        <div className="movies-content">
                          {movies.map((movie: any) => (
                            <StyledTitleCard
                              onClick={e => {
                                e.stopPropagation();
                                navigate(`/home/movie/${movie.id}`);
                                setSearchBarActive(() => false);
                              }}
                            >
                              <Image
                                src={movie.boxart}
                                alt={movie.title}
                                className="thumbs"
                              />
                              <div className="t">
                                {movie.title} ({movie.year})
                              </div>
                            </StyledTitleCard>
                          ))}
                        </div>
                      </React.Fragment>
                    )}
                    {episodes.length > 0 && (
                      <React.Fragment>
                        <div className="movies">Episodes</div>
                        <div className="movies-content">
                          {episodes.map(episode => (
                            <StyledTitleCard
                              onClick={e => {
                                e.stopPropagation();
                                navigate(`/home/movie/${episode.id}`);
                                setSearchBarActive(() => false);
                              }}
                            >
                              {episode.thumbs && (
                                <Image
                                  src={episode.thumbs}
                                  alt={episode.name}
                                  className="thumbs"
                                />
                              )}
                              <div className="t">
                                {episode.parentTitleName} - {episode.season} -
                                {episode.name} ({episode.year})
                              </div>
                            </StyledTitleCard>
                          ))}
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                )}
                {value && (
                  <div
                    className="more"
                    onClick={e => {
                      e.stopPropagation();
                      navigate(`/home/search/${value}/episodes`);
                      setSearchBarActive(() => false);
                    }}
                  >
                    Search more for "{value}"
                  </div>
                )}
              </div>
            </Fragment>
          )}
        </StyledSearchResults>
      )}
    </div>
  );
};

export default SearchBar;
