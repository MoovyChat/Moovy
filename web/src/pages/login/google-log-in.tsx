import {
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';
import { Users, useLoginMutation, useMeQuery } from '../../generated/graphql';
import { useEffect, useState } from 'react';

import { app } from '../../firebase';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

const GoogleLogIn = () => {
  const [, loginAction] = useLoginMutation();
  const [user, setUser] = useState<Users | null>(null);
  const dispatch = useAppDispatch();
  const auth = getAuth(app);
  const [{ data, fetching, error }] = useMeQuery();
  var provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      const _user = data?.me as Users;
      setUser(() => _user);
    }
  }, [fetching, data, error]);
  useEffect(() => {
    const checkLogin = async () => {
      if (user) {
        window.close();
      }
      try {
        await signInWithRedirect(auth, provider);
      } catch (error) {
        console.error(error);
      }
    };
    checkLogin();
  }, [user]);
  return <div>Logging in...</div>;
};

export default GoogleLogIn;
