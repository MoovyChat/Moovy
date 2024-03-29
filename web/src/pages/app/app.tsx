import React, { Suspense, useEffect, useState } from 'react';
import { Users, useMeQuery } from '../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { GlobalStyles } from '../../utils/themes/globalStyles';
import Header from '../header/header';
import { Helmet } from 'react-helmet';
import LogoLoading from '../logo-loading/logoLoading';
import { ThemeProvider } from 'styled-components';
import Welcome from '../welcome/welcome';
import { sliceSetUser } from '../../redux/slices/userSlice';
import { urqlClient } from '../../utils/urlClient';
import usePageView from '../../hooks/usePageView';
import { withUrqlClient } from 'next-urql';
import { getThemeForHome } from '../home/home';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { CURRENT_DOMAIN } from '../../constants';
import { AppParent } from './app.styles';

const App = () => {
  const dispatch = useAppDispatch();
  const [{ data, fetching, error }] = useMeQuery();
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useAppSelector(state => state.settings.theme);
  const isAuth = useAppSelector(state => state.user);

  // Assume we're loading until proven otherwise
  const [showLoading, setShowLoading] = useState(!isAuth);

  usePageView();

  useEffect(() => {
    // Log any errors with fetching user data
    if (error) {
      console.log(error);
    }
    // If user data is successfully fetched and not in the process of fetching, proceed
    if (!fetching && data) {
      // Retrieve user object and current path
      const user = data?.me as Users;
      // If a user object exists
      if (user) {
        // Update Redux store with user data and save user data in localStorage
        dispatch(sliceSetUser(user));
        if (location.pathname === '/') navigate('/home');
        else navigate(location.pathname);
        localStorage.setItem('user', JSON.stringify(user));
      }
      setShowLoading(false);
    }
  }, [fetching, data, error, isAuth]);

  if (showLoading) return <LogoLoading />;

  return (
    <AppParent>
      <Helmet>
        <title>Moovy: Welcome</title>
        <meta name="description" content="Welcome" />
        <link rel="canonical" href={`${CURRENT_DOMAIN}`} />
      </Helmet>
      {isAuth && isAuth.id ? (
        <Suspense fallback={<LogoLoading />}>
          <Outlet />
        </Suspense>
      ) : (
        <div className="homepage">
          <Header />
          <Welcome />
        </div>
      )}
    </AppParent>
  );
};

export default withUrqlClient(urqlClient)(App);
