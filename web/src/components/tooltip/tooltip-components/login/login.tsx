import React, { useEffect } from 'react';
import {
  User,
  useLoginMutation,
  useMeQuery,
} from '../../../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';

import { FcGoogle } from 'react-icons/fc';
import { LoginParent } from './login.styles';
import { googleSignIn } from '../../../../pages/login/login';
import { sliceSetUser } from '../../../../redux/slices/userSlice';
import { urqlClient } from '../../../../utils/urlClient';
import { withUrqlClient } from 'next-urql';

const Login = () => {
  return (
    <LoginParent
      id='login-parent'
      onClick={(e) => {
        e.stopPropagation();
      }}>
      <div className='login-btn'>
        <FcGoogle className='icon' />
        <div className='title'>Google</div>
      </div>
    </LoginParent>
  );
};

export default withUrqlClient(urqlClient)(Login);
