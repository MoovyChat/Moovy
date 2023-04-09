import React, { useEffect, useState } from 'react';

import { HomeWindow } from './home.styles';
import LogIn from '../login/login';
import LogOut from '../logout/logout';
import { OTTType } from '../app/app';
import { User } from '../../../Utils/interfaces';

type props = {
  user: User | undefined;
  setUser: (user: User) => void;
  userLoaded: boolean;
  OTTSite: OTTType;
};

const Home: React.FC<props> = ({ user, setUser, userLoaded, OTTSite }) => {
  const [isUserSet, setIsUserSet] = useState<boolean>(false);

  useEffect(() => {
    if (user && user.id) {
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
        <LogOut user={user} setUser={setUser} OTTSite={OTTSite}></LogOut>
      ) : (
        <LogIn setUser={setUser} OTTSite={OTTSite}></LogIn>
      )}
    </HomeWindow>
  );
};

export default Home;
