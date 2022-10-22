import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { useLoginMutation, useMeQuery } from '../../../../generated/graphql';

import { FcGoogle } from 'react-icons/fc';
import { LoginParent } from './login.styles';
import { User } from '../../../../utils/interfaces';
import { googleSignIn } from '../../../../pages/login/login';
import { sliceSetUser } from '../../../../redux/slices/userSlice';
import { urqlClient } from '../../../../utils/urlClient';
import { withUrqlClient } from 'next-urql';

const Login = () => {
  const [, loginAction] = useLoginMutation();
  const [me, _] = useMeQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { data, error, fetching } = me;
    if (error) {
      console.log(error);
    }
    if (!fetching && data) {
      dispatch(sliceSetUser(data.me as User));
    }
  }, [me.fetching]);

  const loginHandler = () => {
    loginAction({ uid: 'fPckS1EG9DNyZrrbN0fXaJFCjKf1' }).then((res) => {
      const { data } = res;
      const user = data?.login?.user;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(sliceSetUser(user));
      }
    });
  };
  return (
    <LoginParent
      id='login-parent'
      onClick={(e) => {
        e.stopPropagation();
        loginHandler();
      }}>
      <div className='login-btn'>
        <FcGoogle className='icon' />
        <div className='title'>Google</div>
      </div>
    </LoginParent>
  );
};

export default withUrqlClient(urqlClient)(Login);
