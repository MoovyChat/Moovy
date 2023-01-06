import { CatalogContainer } from './catalog.styles';
import ChildHeader from '../../components/childHeader/childHeader';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Catalog = () => {
  return (
    <CatalogContainer>
      <ChildHeader text='Catalog' className='child-header' />
      <div className='options'>
        <NavLink to='/catalog/' end className='option movies' defaultChecked>
          <div>Movies</div>
        </NavLink>
        <NavLink to='/catalog/shows' className='option shows'>
          <div>Shows</div>
        </NavLink>
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </CatalogContainer>
  );
};

export default Catalog;
