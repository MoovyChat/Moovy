import { Outlet, useLocation, useParams } from 'react-router-dom';

import React from 'react';

const ProfileThreadComponent = () => {
  const location = useLocation();
  const key = location.pathname.slice(0, 3);
  return (
    <React.Fragment>
      <Outlet key={key} />
    </React.Fragment>
  );
};

export default ProfileThreadComponent;
