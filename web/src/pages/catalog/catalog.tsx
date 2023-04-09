// Import necessary packages and modules
import { CatalogContainer } from './catalog.styles';
import ChildHeader from '../../components/childHeader/childHeader';
import { NavLink } from 'react-router-dom';
import NavLinks from '../../components/nav-links/navLinks';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

// Define functional component named "Catalog"
const Catalog = () => {
  // Return JSX for the component
  return (
    <CatalogContainer>
      {/* Use ChildHeader sub-component to display a heading above the navigation links */}
      <ChildHeader text="Catalog" className="child-header" />
      {/* Render two NavLink components that direct users to either Movies or Shows categories */}
      <NavLinks className="options">
        <NavLink to="" end className="movies nav" defaultChecked>
          <div>Movies</div>
        </NavLink>
        <NavLink to="shows" className="shows nav">
          <div>Shows</div>
        </NavLink>
      </NavLinks>
      {/* Use the Outlet component from react-router-dom to render nested routes/components corresponding to either movies or shows */}
      <div className="content">
        <Outlet />
      </div>
    </CatalogContainer>
  );
};

// Export Catalog component as default
export default Catalog;
