import { Users, useMeQuery } from '../../generated/graphql';

import App from '../app/app';
import Home from '../home/home';
import Loading from '../loading/loading';
import LogoLoading from '../logo-loading/logoLoading';
import Moovy from '../../svgs/moovy-text-logo-white.png';
import { StyledSplashScreen } from './splashScreen.styles';
import { sliceSetUser } from '../../redux/slices/userSlice';
import { useAppDispatch } from '../../redux/hooks';
import { useMemo } from 'react';

const SplashScreen = () => {
  const [{ data, fetching, error }] = useMeQuery();
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
  if (fetching) return <LogoLoading />;
  if (me) {
    return <Home />;
  } else return <App />;
};

export default SplashScreen;
