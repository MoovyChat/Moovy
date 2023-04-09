import { NavLink, Outlet } from 'react-router-dom';

import { CURRENT_DOMAIN } from '../../constants';
import ChildHeader from '../../components/childHeader/childHeader';
import { Helmet } from 'react-helmet';
import NavLinks from '../../components/nav-links/navLinks';
import React from 'react';
import { StyledSearchResults } from './searchResults.styles';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
  const { search } = useParams();

  return (
    <StyledSearchResults>
      <Helmet>
        <title>{`${search}: Search`}</title>
        <meta name="description" content={`${search}: Movies`} />
        <link rel="canonical" href={`${CURRENT_DOMAIN}/search/${search}}`} />
      </Helmet>
      <ChildHeader text={`Search Results (${search})`} className="child" />
      <NavLinks className="options">
        <NavLink to="episodes" end className="episodes nav" defaultChecked>
          <div>Episodes</div>
        </NavLink>
        <NavLink to="shows" className="shows nav">
          <div>Shows</div>
        </NavLink>
        <NavLink to="people" className="people nav">
          <div>People</div>
        </NavLink>
        <NavLink to="movies" className="movies nav">
          <div>Movies</div>
        </NavLink>
      </NavLinks>
      <div className="content">
        <Outlet />
      </div>
    </StyledSearchResults>
  );
};

export default SearchResults;
