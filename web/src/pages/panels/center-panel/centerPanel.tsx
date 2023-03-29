import React, { Suspense } from 'react';

import { CenterParent } from './centerPanel.styles';
import Loading from '../../loading/loading';
import LogoLoading from '../../logo-loading/logoLoading';
import { Outlet } from 'react-router-dom';
import useIsAuth from '../../../utils/isAuthUser';

type props = {
  className: string;
  id?: string;
};
const CenterPanel: React.FC<props> = ({ className, id }) => {
  useIsAuth();
  return (
    <CenterParent className={className} id={id}>
      <Suspense fallback={<LogoLoading />}>
        <Outlet />
      </Suspense>
    </CenterParent>
  );
};

export default CenterPanel;
