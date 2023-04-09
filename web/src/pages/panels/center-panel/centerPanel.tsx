import { CenterParent } from './centerPanel.styles';
import { Outlet } from 'react-router-dom';
import React from 'react';
import useIsAuth from '../../../utils/isAuthUser';

type props = {
  className: string;
  id?: string;
};
const CenterPanel: React.FC<props> = ({ className, id }) => {
  useIsAuth();
  return (
    <CenterParent className={className} id={id}>
      <Outlet />
    </CenterParent>
  );
};

export default CenterPanel;
