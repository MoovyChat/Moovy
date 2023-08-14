import React, { useEffect, useState } from 'react';
import {
  Users,
  useCreateUserMutation,
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} from '../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { sliceSetUser, userState } from '../../redux/slices/userSlice';
import {
  DropdownMenu,
  HeaderButton,
  HeaderButtons,
  HeaderParent,
  LogoImage,
} from './header.styles';

import { withUrqlClient } from 'next-urql';
import { useNavigate } from 'react-router-dom';
import { EXTENSION_URL, LOGO_128 } from '../../constants';
import { scrollIntoView } from '../../utils/helpers';
import { urqlClient } from '../../utils/urlClient';
import { googleSignIn } from '../login/login';

const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const [_userResult, createUser] = useCreateUserMutation();
  const [, loginAction] = useLoginMutation();
  const [, logOutAction] = useLogoutMutation();
  const [me, _] = useMeQuery({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const promiseNavigate = (path: string): Promise<void> => {
    return new Promise(resolve => {
      navigate(path);
      setTimeout(resolve, 100);
    });
  };

  const buttonKeyPressHandler = (event: any, action: any) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action(event);
    }
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
    try {
      const signedInUser = await googleSignIn();
      const res = await loginAction({ uid: signedInUser.id });
      const { data } = res;
      const user = data?.login?.user;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(sliceSetUser(user as Users));
        await navigate('/home');
      } else {
        const { name, email, photoUrl, nickname, id } = signedInUser;
        let user: Users = {
          name: name!,
          email: email!,
          photoUrl: photoUrl!,
          nickname: nickname!,
          id: id!,
        };
        const createUserRes = await createUser({
          options: user as any,
        });
        const _data = createUserRes.data?.createUser;
        if (_data) {
          localStorage.setItem('user', JSON.stringify(_data));
          dispatch(sliceSetUser(_data as Users));
          await loginAction({ uid: _data.id });
          await navigate('/home');
        }
      }
    } catch (err) {
      console.error('ERR: Unable to create user', err);
    }
  };

  const logOutHandler: React.MouseEventHandler<HTMLButtonElement> = async e => {
    e.stopPropagation();
    const result = await logOutAction({});
    const data = result.data;
    if (data) dispatch(sliceSetUser(userState));
  };

  return (
    <HeaderParent id="home">
      <LogoImage
        onClick={async e => {
          e.stopPropagation();
          await promiseNavigate('/');
          scrollIntoView('home');
        }}
        onKeyDown={e =>
          buttonKeyPressHandler(e, async () => {
            await promiseNavigate('/');
            scrollIntoView('home');
          })
        }
        tabIndex={0}
        role="button"
        aria-label="MoovyChat"
      >
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
        <span
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </span>
        {isMenuOpen && window.innerWidth < 767 && (
          <DropdownMenu isOpen={isMenuOpen}>
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
                onKeyDown={e =>
                  buttonKeyPressHandler(e, () => navigate('/home'))
                }
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
              onKeyDown={e =>
                buttonKeyPressHandler(e, async () => {
                  await promiseNavigate('/');
                  scrollIntoView('features');
                })
              }
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
              onKeyDown={e =>
                buttonKeyPressHandler(e, () => navigate('/about'))
              }
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
              onKeyDown={e =>
                buttonKeyPressHandler(e, async () => {
                  await promiseNavigate('/');
                  scrollIntoView('contact');
                })
              }
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
                onKeyDown={e => buttonKeyPressHandler(e, logOutHandler)}
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
                onKeyDown={e => buttonKeyPressHandler(e, loginHandler)}
              >
                Login
              </HeaderButton>
            )}
            <HeaderButton
              className="install-button hb"
              role="button"
              tabIndex={0}
              aria-label="Install Extension"
              onClick={e => {
                e.stopPropagation();
                window.open(EXTENSION_URL, '_blank');
              }}
              onKeyDown={e =>
                buttonKeyPressHandler(e, () =>
                  window.open(EXTENSION_URL, '_blank'),
                )
              }
            >
              Install Extension
            </HeaderButton>
          </DropdownMenu>
        )}
      </HeaderButtons>
    </HeaderParent>
  );
};

export default withUrqlClient(urqlClient)(Header);
