import CenterPanel from '../panels/center-panel/centerPanel';
import HomeHeader from '../home-header/homeHeader';
import { HomeParent } from './home.styles';
import LeftPanel from '../panels/left-panel/leftPanel';
import React from 'react';
import RightPanel from '../panels/right-panel/rightPanel';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useIsAuth } from '../../utils/isAuthUser';
import { withUrqlClient } from 'next-urql';
const Home = () => {
  useIsAuth();
  return (
    <HomeParent>
      <HomeHeader className='home-header' />
      <div className='panels'>
        <LeftPanel className='left'></LeftPanel>
        <CenterPanel className='center'></CenterPanel>
        <RightPanel className='right'></RightPanel>
      </div>
    </HomeParent>
  );
};
export default withUrqlClient(urqlClient)(Home);
