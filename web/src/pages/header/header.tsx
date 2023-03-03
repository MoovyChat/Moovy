import { HeaderButton, HeaderParent } from './header.styles';
import React, { useEffect } from 'react';
import {
  Users,
  useCreateUserMutation,
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} from '../../generated/graphql';
import { sliceSetUser, userState } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import MoovyLogo from '../../svgs/moovy-white.svg';
import { googleSignIn } from '../login/login';
import { sliceSetTheme } from '../../redux/slices/settingsSlice';
import { urqlClient } from '../../utils/urlClient';
import { useNavigate } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [_userResult, createUser] = useCreateUserMutation();
  const [, loginAction] = useLoginMutation();
  const [, logOutAction] = useLogoutMutation();
  const [me, _] = useMeQuery({});

  useEffect(() => {
    const { data, error, fetching } = me;
    if (error) {
      console.log(error);
    }
    if (!fetching && data) {
      dispatch(sliceSetUser(data.me as Users));
    }
  }, [me.fetching]);
  const themeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetTheme(e.target.checked));
  };
  const loginHandler: React.MouseEventHandler<HTMLDivElement> = async (e) => {
    e.stopPropagation();
    const signedInUser = await googleSignIn();
    loginAction({ uid: signedInUser.id }).then((res) => {
      const { data } = res;
      const user = data?.login?.user;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(sliceSetUser(user as Users));
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
          .then((res) => {
            const { data, error } = res;
            if (error) console.log(error);
            const _data = data?.createUser;
            localStorage.setItem('user', JSON.stringify(_data));
            dispatch(sliceSetUser(_data as Users));
            loginAction({ uid: _data?.id! });
            navigate('/');
          })
          .catch((err: any) => {
            console.log('ERR: Unable to create user', err);
          });
      }
      navigate('/');
    });
  };

  const logOutHandler: React.MouseEventHandler<HTMLDivElement> = async (e) => {
    e.stopPropagation();
    const result = await logOutAction({});
    const data = result.data;
    if (data) dispatch(sliceSetUser(userState));
  };

  const scrollIntoView = (id: string) => {
    const divElement = document.getElementById(id);
    if (divElement) {
      const elementRect = divElement.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle = absoluteElementTop - window.innerHeight / 6;
      window.scrollTo({ top: middle, behavior: 'smooth' });
    }
  };
  return (
    <HeaderParent>
      <div className='header'>
        <div className='logo-image'>
          <img
            className='image'
            src={MoovyLogo}
            alt='QuietChat'
            id='blur-escape'
            loading='lazy'
          />
          <div className='beta'>(beta)</div>
        </div>
      </div>
      <div className='header-buttons'>
        <HeaderButton
          className='install-button hb'
          onClick={(e) => {
            e.stopPropagation();
            scrollIntoView('screenshots');
          }}>
          Screenshots
        </HeaderButton>
        <HeaderButton
          className='install-button hb'
          onClick={(e) => {
            e.stopPropagation();
            scrollIntoView('features');
          }}>
          Features
        </HeaderButton>
        {user && user.id ? (
          <HeaderButton className='hb' id='logout-btn' onClick={logOutHandler}>
            Logout
          </HeaderButton>
        ) : (
          <HeaderButton className='hb' id='login-btn' onClick={loginHandler}>
            Login
          </HeaderButton>
        )}
        <HeaderButton
          className='install-button hb'
          onClick={() => window.open('', '_blank')}>
          Install Extension
        </HeaderButton>
      </div>
    </HeaderParent>
  );
};

export default withUrqlClient(urqlClient)(Header);
