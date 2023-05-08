import React, { MouseEventHandler, useState } from 'react';
import { CustomButton, StyledExtLoginButton } from './google-log-in.styles';
import { EXT_ID } from '../../constants';
import {
  Users,
  useCreateUserMutation,
  useLoginMutation,
} from '../../generated/graphql';
import { googleSignIn } from './login';
import { useAppDispatch } from '../../redux/hooks';
import { sliceSetUser } from '../../redux/slices/userSlice';
import { withUrqlClient } from 'next-urql';
import { urqlClient } from '../../utils/urlClient';
import { FcGoogle } from 'react-icons/fc';

const GoogleLoginForExtension = () => {
  const dispatch = useAppDispatch();
  const [, loginAction] = useLoginMutation();
  const [_userResult, createUser] = useCreateUserMutation();
  const [user, setUser] = useState<Users | null>(null);
  const [loggedInError, setLoggedInError] = useState<boolean>(false);
  const [loggedInSuccess, setLoggedInSuccess] = useState<boolean>(false);
  const loginHandler: MouseEventHandler<HTMLButtonElement> = async e => {
    e.stopPropagation();
    const signedInUser = await googleSignIn();
    const res = await loginAction({ uid: signedInUser.id });
    const { data } = res;
    const _user = data?.login?.user;
    if (_user) {
      try {
        chrome.runtime.sendMessage(
          EXT_ID,
          { type: 'EXTENSION_LOG_IN', user: _user as Users },
          (response: any) => {
            if (response.loggedIn) {
              setLoggedInSuccess(true);
            } else {
              setLoggedInError(true);
            }
          },
        );
      } catch (e) {
        console.log(e);
      }
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(sliceSetUser(_user as Users));
      setUser(() => _user as Users);
      window.parent.postMessage('LoginCompleted', '*');
    } else {
      const { name, email, photoUrl, nickname, id } = signedInUser;
      let user: Users = {
        name: name!,
        email: email!,
        photoUrl: photoUrl!,
        nickname: nickname!,
        id: id!,
      };
      createUser({
        options: user as any,
      })
        .then(res => {
          const { data, error } = res;
          if (error) console.log(error);
          const _data = data?.createUser;
          try {
            chrome.runtime.sendMessage(
              EXT_ID,
              { type: 'EXTENSION_LOG_IN', user: _data as Users },
              (response: any) => {
                if (response.loggedIn) {
                  setLoggedInSuccess(true);
                } else {
                  setLoggedInError(true);
                }
              },
            );
          } catch (e) {
            console.log(e);
          }
          localStorage.setItem('user', JSON.stringify(_data));
          dispatch(sliceSetUser(_data as Users));
          loginAction({ uid: _data?.id! });
          window.parent.postMessage('LoginCompleted', '*');
        })
        .catch((err: any) => {
          console.log('ERR: Unable to create user', err);
        });
    }
  };
  return (
    <StyledExtLoginButton>
      <CustomButton slots={{ root: 'span' }} onClick={loginHandler}>
        <FcGoogle size={15} />
        <div>Login With Google</div>
      </CustomButton>
    </StyledExtLoginButton>
  );
};

export default withUrqlClient(urqlClient)(GoogleLoginForExtension);
