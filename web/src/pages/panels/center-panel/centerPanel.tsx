import { CenterParent } from './centerPanel.styles';
import { Outlet } from 'react-router-dom';
import React from 'react';
import useIsAuth from '../../../utils/isAuthUser';

type props = {
  className: string;
};
const CenterPanel: React.FC<props> = ({ className }) => {
  useIsAuth();
  return (
    <CenterParent className={className}>
      <Outlet />
    </CenterParent>
  );
};

export default CenterPanel;
