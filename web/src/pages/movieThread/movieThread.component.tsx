import { Outlet, useLocation, useParams } from 'react-router-dom';

import React from 'react';

const MovieThreadComponent = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <Outlet key={location.pathname} />
    </React.Fragment>
  );
};

export default MovieThreadComponent;
