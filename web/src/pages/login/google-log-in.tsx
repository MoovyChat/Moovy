import {
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';

import { app } from '../../firebase';
import { useAppDispatch } from '../../redux/hooks';
import { useEffect } from 'react';
import { useLoginMutation } from '../../generated/graphql';
import { useNavigate } from 'react-router-dom';

const GoogleLogIn = () => {
  const [, loginAction] = useLoginMutation();
  const dispatch = useAppDispatch();
  const auth = getAuth(app);

  var provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  useEffect(() => {
    const checkLogin = async () => {
      try {
        await signInWithRedirect(auth, provider);
      } catch (error) {
        console.error(error);
      }
    };
    checkLogin();
  }, []);
  return <div>Logging in...</div>;
};

export default GoogleLogIn;
