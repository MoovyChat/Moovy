import { Users, useMeQuery } from '../generated/graphql';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import { sliceSetUser } from '../redux/slices/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useIsAuth = () => {
  const navigate = useNavigate();
  const [{ data, fetching, error }] = useMeQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      const user = data?.me as Users;
      if (!user) navigate('/');
      dispatch(sliceSetUser(user));
    }
  }, [fetching, data, error]);
};

export default useIsAuth;
