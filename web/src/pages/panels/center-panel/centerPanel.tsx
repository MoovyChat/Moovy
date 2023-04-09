import React, { Suspense } from 'react';

import { CenterParent } from './centerPanel.styles';
import LogoLoading from '../../logo-loading/logoLoading';
import { Outlet } from 'react-router-dom';

type props = {
  className: string;
  id?: string;
};
const CenterPanel: React.FC<props> = ({ className, id }) => {
  return (
    <CenterParent className={className} id={id}>
      <Suspense fallback={<LogoLoading />}>
        <Outlet />
      </Suspense>
    </CenterParent>
  );
};

export default CenterPanel;
