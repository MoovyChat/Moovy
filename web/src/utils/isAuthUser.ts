import { User, useMeQuery } from '../generated/graphql';

import { sliceSetUser } from '../redux/slices/userSlice';
import { useAppDispatch } from '../redux/hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useIsAuth = () => {
  const navigate = useNavigate();
  const [{ data, fetching, error }] = useMeQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      const user = data?.me as User;
      if (!user) navigate('/');
      dispatch(sliceSetUser(user));
    }
  }, [fetching, data, error]);
};

export default useIsAuth;
