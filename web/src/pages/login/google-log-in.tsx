import {
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';
import { MouseEventHandler, useEffect, useState } from 'react';
import { Users, useLoginMutation, useMeQuery } from '../../generated/graphql';

import { app } from '../../firebase';
import { googleSignIn } from './login';
import { sliceSetUser } from '../../redux/slices/userSlice';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

const GoogleLogIn = () => {
  const [, loginAction] = useLoginMutation();
  const [user, setUser] = useState<Users | null>(null);
  const dispatch = useAppDispatch();
  const auth = getAuth(app);

  var provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const loginHandler: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.stopPropagation();
    const signedInUser = await googleSignIn();
    loginAction({ uid: signedInUser.id }).then((res) => {
      const { data } = res;
      const _user = data?.login?.user;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(sliceSetUser(_user as Users));
        setUser(() => _user as Users);
      }
      navigate('/');
    });
  };
  return (
    <div>
      <button onClick={loginHandler}>Log in</button>
    </div>
  );
};

export default GoogleLogIn;
