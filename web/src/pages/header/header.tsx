import { HeaderButton, HeaderParent } from './header.styles';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import React, { useEffect } from 'react';
import {
  User,
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} from '../../generated/graphql';
import { sliceSetUser, userState } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { DIRECTION } from '../../utils/enums';
import { LOGIN } from '../../components/tooltip/constants';
import Tooltip from '../../components/tooltip/tooltip';
import { googleSignIn } from '../login/login';
import { isServer } from '../../constants';
import { redirect } from 'react-router-dom';
import { sliceSetTheme } from '../../redux/slices/settingsSlice';
import { urqlClient } from '../../utils/urlClient';
import { useNavigate } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  const theme = useAppSelector((state) => state.settings.theme);
  const dispatch = useAppDispatch();
  const [, loginAction] = useLoginMutation();
  const [, logOutAction] = useLogoutMutation();
  const [me, _] = useMeQuery({});

  useEffect(() => {
    const { data, error, fetching } = me;
    if (error) {
      console.log(error);
    }
    if (!fetching && data) {
      dispatch(sliceSetUser(data.me as User));
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
        dispatch(sliceSetUser(user as User));
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
  return (
    <HeaderParent>
      <div className='header'></div>
      <div className='header-buttons'>
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
