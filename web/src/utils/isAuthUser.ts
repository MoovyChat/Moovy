import { sliceSetUser, userState } from '../redux/slices/userSlice';
import { useEffect, useState } from 'react';

import { User } from './interfaces';
import { isServer } from '../constants';
import { urqlClient } from './urlClient';
import { useAppDispatch } from '../redux/hooks';
import { useMeQuery } from '../generated/graphql';
import { useNavigate } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

const useIsAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>(userState);
  const [{ data, fetching, error }] = useMeQuery({});
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      const user = data?.me as User;
      if (!user) navigate('/welcome');
      dispatch(sliceSetUser(user));
    }
  }, [fetching, data, error]);
};

export default useIsAuth;
