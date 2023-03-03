import { ButtonParent, Welcome, WithOutLoginWindow } from './login.styles';
import {
  GoogleAuthProvider,
  UserCredential,
  signInWithCredential,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';

import Button from '../../../components/button/button';
import { FcGoogle } from 'react-icons/fc';
import LoginAfter from '../login-after/loginAfter';
import { OTTType } from '../app/app';
import Ott from '../ott/ott';
import { RiChromeFill } from 'react-icons/ri';
import { User } from '../../../Utils/interfaces';
import { auth } from '../../../firebase';
import constants from '../../../constants';

const getGoogleAuthCredential = () => {
  return new Promise<ReturnType<typeof GoogleAuthProvider.credential>>(
    (resolve, reject) => {
      chrome.identity.getAuthToken({ interactive: true }, (token) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          reject(chrome.runtime.lastError);
        }
        const credential = GoogleAuthProvider.credential(null, token);
        resolve(credential);
      });
    }
  );
};

interface Props {
  setUser: (user: User) => void;
  OTTSite: OTTType;
}
const LogIn: React.FC<Props> = ({ setUser, OTTSite }) => {
  let BrowserType = {
    Chrome: 'Chrome',
    Edge: 'Edge',
  };

  const [isUserFetched, setIsUserFetched] = useState<boolean>(false);
  const [userFromAuth, setUserFromAuth] = useState<UserCredential>();
  const [browserModel, SetBrowser] = useState<string>(BrowserType.Chrome);

  const SignIn = async () => {
    try {
      const credential = await getGoogleAuthCredential();
      const result = await signInWithCredential(auth, credential);
      setUserFromAuth(() => result);
      setIsUserFetched(() => true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf('Edg') !== -1) {
      SetBrowser(BrowserType.Edge);
    } else if (userAgent.indexOf('Chrome') !== -1) {
      SetBrowser(BrowserType.Chrome);
    }
  }, []);

  return (
    <WithOutLoginWindow>
      <Welcome>{constants.welcome}</Welcome>
      <Ott OTTSite={OTTSite} />
      {!isUserFetched && !userFromAuth ? (
        <React.Fragment>
          {browserModel === BrowserType.Chrome && (
            <ButtonParent>
              <Button
                className=''
                bgColor='#990100'
                textColor='white'
                iconSize={25}
                text={constants.chrome}
                padding='10px 0px'
                onClick={async () => SignIn()}
                Icon={RiChromeFill}
                textShadow='0 0 6px black, 0 0 5px #0000ff'
              />
            </ButtonParent>
          )}
          <ButtonParent>
            <Button
              id='google-log-in'
              className=''
              bgColor='#990100'
              textColor='white'
              iconSize={25}
              text={constants.login}
              padding='10px 0px'
              onClick={() => {
                chrome.runtime.sendMessage({ type: 'GOOGLE_LOGIN_IN_BCK' });
              }}
              Icon={FcGoogle}
              textShadow='0 0 6px black, 0 0 5px #0000ff'
            />
          </ButtonParent>
        </React.Fragment>
      ) : (
        <LoginAfter setUser={setUser} userFromAuth={userFromAuth!} />
      )}
      <div className='login-agreement'>
        By logging in, you agree to our{' '}
        <a href='https://www.moovychat.com/terms-and-conditions'>
          Terms and Conditions
        </a>{' '}
        and <a href='https://www.moovychat.com/privacy'>Privacy Policy</a>.
      </div>
    </WithOutLoginWindow>
  );
};

export default LogIn;
