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
        <NavLink to={`${id}/favorites`} end defaultChecked>
          <div>Favorite Titles</div>
        </NavLink>
        <NavLink to={`${id}/liked`}>
          <div>Liked Titles</div>
        </NavLink>
        <NavLink to={`${id}/history`}>
          <div>History</div>
        </NavLink>
      </NavLinks>
      <Outlet />
    </FavoriteStyles>
  );
};

export default Favorites;
