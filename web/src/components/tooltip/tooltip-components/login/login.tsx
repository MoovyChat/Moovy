import { FcGoogle } from 'react-icons/fc';
import { LoginParent } from './login.styles';
import React from 'react';

const Login = () => {
  return (
    <LoginParent>
      <div className='login-btn'>
        <FcGoogle className='icon' />
        <div className='title'>Google</div>
      </div>
    </LoginParent>
  );
};

export default Login;
