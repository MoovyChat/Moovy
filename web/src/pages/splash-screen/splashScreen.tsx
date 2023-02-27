import { Users, useMeQuery } from '../../generated/graphql';
import { useEffect, useMemo } from 'react';

import App from '../app/app';
import Home from '../home/home';
import Loading from '../loading/loading';
import Moovy from '../../svgs/moovy-text-logo-white.png';
import { StyledSplashScreen } from './splashScreen.styles';
import { sliceSetUser } from '../../redux/slices/userSlice';
import { useAppDispatch } from '../../redux/hooks';
import { useLocation } from 'react-router-dom';

const SplashScreen = () => {
  const [{ data, fetching, error }] = useMeQuery();
  const location = useLocation();
  const dispatch = useAppDispatch();

  useMemo(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      const user = data?.me as Users;
      // console.log('splashscreen', user);
      if (user) {
        dispatch(sliceSetUser(user));
        localStorage.setItem('user', JSON.stringify(user));
      }
    }
  }, [fetching, data, error]);
  const me = data?.me;
  if (error) return <App />;
  if (fetching)
    return (
      <StyledSplashScreen>
        <div className='logo'>
          <img src={Moovy} alt='Moovy' />
        </div>
        <div className='loading'>
          <Loading />
        </div>
      </StyledSplashScreen>
    );
  if (me) {
    return <Home />;
  } else return <App />;
};

export default SplashScreen;
