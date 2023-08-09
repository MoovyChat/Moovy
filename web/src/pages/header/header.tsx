import {
  HeaderButton,
  HeaderButtons,
  HeaderParent,
  LogoImage,
} from './header.styles';
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

import { EXTENSION_URL, LOGO_128 } from '../../constants';
import { googleSignIn } from '../login/login';
import { urqlClient } from '../../utils/urlClient';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { withUrqlClient } from 'next-urql';
import { scrollIntoView } from '../../utils/helpers';

const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const [_userResult, createUser] = useCreateUserMutation();
  const [, loginAction] = useLoginMutation();
  const [, logOutAction] = useLogoutMutation();
  const [me, _] = useMeQuery({});

  const promiseNavigate = (path: string): Promise<void> => {
    return new Promise(resolve => {
      navigate(path);
      setTimeout(resolve, 100); // Adjust this duration if needed
    });
  };

  useEffect(() => {
    const { data, error, fetching } = me;
    if (error) {
      console.log(error);
    }
    if (!fetching && data) {
      dispatch(sliceSetUser(data.me as Users));
    }
  }, [me.fetching]);

  const loginHandler: React.MouseEventHandler<HTMLButtonElement> = async e => {
    e.stopPropagation();
    const signedInUser = await googleSignIn();
    loginAction({ uid: signedInUser.id }).then(res => {
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
          .then(res => {
            const { data, error } = res;
            if (error) console.log(error);
            const _data = data?.createUser;
            localStorage.setItem('user', JSON.stringify(_data));
            dispatch(sliceSetUser(_data as Users));
            loginAction({ uid: _data?.id! });
            navigate('/home');
          })
          .catch((err: any) => {
            console.log('ERR: Unable to create user', err);
          });
      }
      navigate('/home');
    });
  };

  const logOutHandler: React.MouseEventHandler<HTMLButtonElement> = async e => {
    e.stopPropagation();
    const result = await logOutAction({});
    const data = result.data;
    if (data) dispatch(sliceSetUser(userState));
  };

  return (
    <HeaderParent id="home">
      <LogoImage>
        <div className="logo-image">
          <img
            className="image"
            src={LOGO_128}
            alt="MoovyChat Logo"
            id="blur-escape"
            loading="lazy"
            width="150"
            height="150"
          />
          <div className="beta">MoovyChat</div>
        </div>
      </LogoImage>
      <HeaderButtons className="header-buttons">
        {user && user.id && (
          <HeaderButton
            tabIndex={0}
            role="button"
            aria-label="Navigate to Home after Login"
            className="install-button hb"
            onClick={e => {
              e.stopPropagation();
              navigate('/home');
            }}
          >
            Home
          </HeaderButton>
        )}

        <HeaderButton
          tabIndex={0}
          role="button"
          aria-label="Navigate to features"
          className="install-button hb"
          onClick={async e => {
            e.stopPropagation();
            await promiseNavigate('/');
            scrollIntoView('features');
          }}
        >
          Features
        </HeaderButton>

        <HeaderButton
          tabIndex={0}
          role="button"
          aria-label="Navigate to about page"
          className="install-button hb"
          onClick={e => {
            e.stopPropagation();
            navigate('/about');
          }}
        >
          About
        </HeaderButton>

        <HeaderButton
          tabIndex={0}
          role="button"
          aria-label="Navigate to contact section"
          className="install-button hb"
          onClick={async e => {
            e.stopPropagation();
            await promiseNavigate('/');
            scrollIntoView('contact');
          }}
        >
          Contact
        </HeaderButton>

        {user && user.id ? (
          <HeaderButton
            className="hb"
            id="logout-btn"
            aria-label="Logout"
            onClick={logOutHandler}
            role="button"
            tabIndex={0}
          >
            Logout
          </HeaderButton>
        ) : (
          <HeaderButton
            className="hb"
            id="login-btn"
            onClick={loginHandler}
            role="button"
            tabIndex={0}
          >
            Login
          </HeaderButton>
        )}
        <HeaderButton
          className="install-button hb"
          role="button"
          tabIndex={0}
          aria-label="Install MoovyChat Chrome Extension"
          onClick={e => {
            e.stopPropagation();
            window.open(EXTENSION_URL, '_blank');
          }}
        >
          Install Extension
        </HeaderButton>
      </HeaderButtons>
    </HeaderParent>
  );
};

export default withUrqlClient(urqlClient)(Header);
