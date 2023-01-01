import { ButtonParent, Welcome, WithOutLoginWindow } from './login.styles';
import {
  GoogleAuthProvider,
  UserCredential,
  signInWithCredential,
} from 'firebase/auth';

import Button from '../../../components/button/button';
import { FcGoogle } from 'react-icons/fc';
import LoginAfter from '../login-after/loginAfter';
import { User } from '../../../Utils/interfaces';
import { auth } from '../../../firebase';
import constants from '../../../constants';
import { useState } from 'react';

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
}
const LogIn: React.FC<Props> = ({ setUser }) => {
  const [isUserFetched, setIsUserFetched] = useState<boolean>(false);
  const [userFromAuth, setUserFromAuth] = useState<UserCredential>();
  const SignIn = async () => {
    try {
      const credential = await getGoogleAuthCredential();
      const result = await signInWithCredential(auth, credential);
      // const { uid, displayName, email, photoURL } = result.user;
      setUserFromAuth(result);
      setIsUserFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WithOutLoginWindow>
      <Welcome>{constants.welcome}</Welcome>
      {!isUserFetched && !userFromAuth ? (
        <ButtonParent>
          <Button
            className=''
            bgColor='#990100'
            textColor='white'
            iconSize={25}
            text={constants.login}
            padding='10px 0px'
            onClick={async () => SignIn()}
            Icon={FcGoogle}
            textShadow='0 0 6px black, 0 0 5px #0000ff'
          />
        </ButtonParent>
      ) : (
        <LoginAfter setUser={setUser} userFromAuth={userFromAuth!} />
      )}
    </WithOutLoginWindow>
  );
};

export default LogIn;
