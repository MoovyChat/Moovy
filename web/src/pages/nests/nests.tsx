import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNests } from './nests.styles';

const Nests = () => {
  return (
    <StyledNests>
      <div className="content">
        <Outlet />
      </div>
    </StyledNests>
  );
};

export default Nests;
