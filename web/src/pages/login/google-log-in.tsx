import {
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';
import { MouseEventHandler, useEffect, useState } from 'react';
import { Users, useLoginMutation, useMeQuery } from '../../generated/graphql';

import { EXT_ID } from '../../constants';
import Loading from '../loading/loading';
import Moovy from '../../svgs/moovy-text-logo-white.png';
import { StyledGoogleLogin } from './google-log-in.styles';
import { app } from '../../firebase';
import { googleSignIn } from './login';
import { sliceSetUser } from '../../redux/slices/userSlice';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

const GoogleLogIn = () => {
  const [, loginAction] = useLoginMutation();
  const [user, setUser] = useState<Users | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = Moovy;
    img.addEventListener('load', () => {
      setLoaded(true);
    });
  }, []);
  // Create an array of image sources for the icons
  const iconSources = [
    'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
    'https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=w240-h480-rw',
    'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bk8cux6dapq8qjzylfaj',
    'https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8',
    'https://images-na.ssl-images-amazon.com/images/I/41mpv9rBhmL.png',
  ];

  const loginHandler: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.stopPropagation();
    const signedInUser = await googleSignIn();
    const res = await loginAction({ uid: signedInUser.id });
    const { data } = res;
    const _user = data?.login?.user;
    if (_user) {
      chrome.runtime.sendMessage(
        EXT_ID,
        { type: 'EXTENSION_LOG_IN', user: _user },
        (response) => {
          console.log('response', response);
        }
      );
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(sliceSetUser(_user as Users));
      setUser(() => _user as Users);
      // send a message to all open tabs to reload
      const reloadTabsChannel = new BroadcastChannel('reloadTabsChannel');
      reloadTabsChannel.postMessage('reload');
      window.close();
    }
    navigate('/');
  };
  if (!loaded)
    <StyledGoogleLogin>
      <Loading />
    </StyledGoogleLogin>;
  return (
    <StyledGoogleLogin>
      <div className='bubble-container'>
        <div className='bubble'>
          <img src={iconSources[0]} alt='Netflix' />
        </div>
        <div className='bubble'>
          <img src={iconSources[1]} alt='Disney+' />
        </div>
        <div className='bubble'>
          <img src={iconSources[2]} alt='Amazon Prime Video' />
        </div>
        <div className='bubble'>
          <img src={iconSources[3]} alt='Hulu' />
        </div>
        <div className='bubble'>
          <img src={iconSources[4]} alt='Hulk' />
        </div>
      </div>

      <div className='logo'>
        <img src={Moovy} alt='Moovy' />
      </div>
      <button className='popup-spl-btn' onClick={loginHandler}>
        Log in
      </button>
      <div className='text-msg'>
        <div>**Currently, only Netflix is supported</div>
        <div>MoovyChat, 2023</div>
        <a href='www.moovychat.com' target='_blank'>
          www.moovychat.com
        </a>
      </div>
    </StyledGoogleLogin>
  );
};

export default GoogleLogIn;
