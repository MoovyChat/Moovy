import { Outlet, useLocation, useParams } from 'react-router-dom';

import React from 'react';

const ShowsThreadComponent = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <Outlet key={location.pathname} />
    </React.Fragment>
  );
};

export default ShowsThreadComponent;
