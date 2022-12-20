import { CatalogContainer } from './catalog.styles';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Catalog = () => {
  const [selectedContent, setSelectedContent] = useState<number>(0);

  return (
    <CatalogContainer selected={selectedContent}>
      <div className='heading'>Catalog</div>
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
