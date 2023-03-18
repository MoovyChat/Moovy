import { NavLink, Outlet, useParams } from 'react-router-dom';

import ChildHeader from '../../components/childHeader/childHeader';
import { FavoriteStyles } from './favorites.styles';
import NavLinks from '../../components/nav-links/navLinks';

const Favorites = () => {
  const { id } = useParams();
  return (
    <FavoriteStyles>
      <ChildHeader text='Favorites' className='feed-header' />
      <NavLinks>
        <NavLink to={`${id}/favorites`} end defaultChecked className='nav'>
          <div>Favorite Titles</div>
        </NavLink>
        <NavLink to={`${id}/liked`} className='nav'>
          <div>Liked Titles</div>
        </NavLink>
        <NavLink to={`${id}/history`} className='nav'>
          <div>History</div>
        </NavLink>
      </NavLinks>
      <Outlet />
    </FavoriteStyles>
  );
};

export default Favorites;
