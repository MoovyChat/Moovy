import { NavLink, Outlet } from 'react-router-dom';

import ChildHeader from '../../components/childHeader/childHeader';
import NavLinks from '../../components/nav-links/navLinks';
import React from 'react';
import { StyledSearchResults } from './searchResults.styles';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
  const { search } = useParams();

  return (
    <StyledSearchResults>
      <ChildHeader text={`Search Results (${search})`} className='child' />
      <NavLinks className='options'>
        <NavLink to='episodes' end className='episodes' defaultChecked>
          <div>Episodes</div>
        </NavLink>
        <NavLink to='shows' className='shows'>
          <div>Shows</div>
        </NavLink>
        <NavLink to='people' className='people'>
          <div>People</div>
        </NavLink>
        <NavLink to='movies' className='movies'>
          <div>Movies</div>
        </NavLink>
      </NavLinks>
      <div className='content'>
        <Outlet />
      </div>
    </StyledSearchResults>
  );
};

export default SearchResults;