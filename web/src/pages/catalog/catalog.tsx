import { CatalogContainer } from './catalog.styles';
import ChildHeader from '../../components/childHeader/childHeader';
import { NavLink } from 'react-router-dom';
import NavLinks from '../../components/nav-links/navLinks';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const Catalog = () => {
  useEffect(() => {
    document.title = 'Catalog - Moovy';
  }, []);
  return (
    <CatalogContainer>
      <ChildHeader text='Catalog' className='child-header' />
      <NavLinks className='options'>
        <NavLink to='/catalog/' end className='movies' defaultChecked>
          <div>Movies</div>
        </NavLink>
        <NavLink to='/catalog/shows' className='shows'>
          <div>Shows</div>
        </NavLink>
      </NavLinks>
      <div className='content'>
        <Outlet />
      </div>
    </CatalogContainer>
  );
};

export default Catalog;
