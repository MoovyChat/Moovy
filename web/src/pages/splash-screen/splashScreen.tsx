import { User, useMeQuery } from '../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import App from '../app/app';
import Home from '../home/home';
import Loading from '../loading/loading';
import Moovy from '../../svgs/moovy-text-logo-white.png';
import { StyledSplashScreen } from './splashScreen.styles';
import { sliceSetUser } from '../../redux/slices/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const [{ data, fetching, error }] = useMeQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      const user = data?.me as User;
      if (!user) {
        dispatch(sliceSetUser(user));
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
