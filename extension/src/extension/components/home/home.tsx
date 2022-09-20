import React, { Dispatch, useEffect, useState } from 'react';

import { HomeWindow } from './home.styles';
import LogIn from '../login/login';
import LogOut from '../logout/logout';
import { User } from '../../../Utils/interfaces';

type props = {
  user: User | undefined;
  setUser: (user: User) => void;
  setSideOpen: Dispatch<any>;
  userLoaded: boolean;
};

const Home: React.FC<props> = ({ user, setUser, setSideOpen, userLoaded }) => {
  const [isUserSet, setIsUserSet] = useState<boolean>(false);
  useEffect(() => {
    if (user && user.uid) {
      setIsUserSet(true);
    } else {
      setIsUserSet(false);
    }
  }, [user]);
  return (
    <HomeWindow>
      {!userLoaded ? (
        <></>
      ) : isUserSet ? (
        <LogOut
          user={user}
          setUser={setUser}
          setSideOpen={setSideOpen}></LogOut>
      ) : (
        <LogIn setUser={setUser}></LogIn>
      )}
    </HomeWindow>
  );
};

export default Home;
