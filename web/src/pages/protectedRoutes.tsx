import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Suspense, useMemo, useState } from 'react';
import { Users, useMeQuery } from '../generated/graphql';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import LogoLoading from './logo-loading/logoLoading';
import { sliceSetUser } from '../redux/slices/userSlice';

const ProtectedRoutes = () => {
  const location = useLocation();
  //   const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [{ data, fetching, error }] = useMeQuery();
  const isAuth = useAppSelector((state) => state.user);

  // Memoize the following code block to optimize performance
  useMemo(() => {
    if (isAuth && isAuth.id) return;
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
        localStorage.setItem('user', JSON.stringify(user));
      }
    }
  }, [fetching, data, error]);

  if (fetching) return <LogoLoading />;
  return isAuth && isAuth.id ? (
    <Suspense fallback={<LogoLoading />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to='/' replace state={{ from: location.pathname }} />
  );
};

export default ProtectedRoutes;
