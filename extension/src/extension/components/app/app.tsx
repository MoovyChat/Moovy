import './app.scss';

import { AppWindow, Footer, SideBarOpen } from './app.styles';
import React, { useEffect, useState } from 'react';
import {
  getStoredUserLoginDetails,
  setStoredUserLoginDetails,
} from '../../../Utils/storage';

import Header from '../header/header';
import Home from '../home/home';
import Sidebar from '../sidebar/sidebar';
import Stats from '../stats/stats';
import { User } from '../../../Utils/interfaces';
import constants from '../../../constants';

const App: React.FC = () => {
  let userIn: User = {
    photoUrl: '',
    name: '',
    email: '',
    id: '',
    nickname: '',
    comments: [],
    replies: [],
    joinedAt: '0',
    watchedMovies: [],
    favorites: [],
  };
  const [user, setUser] = useState<User>(userIn);
  const [userLoaded, setUserLoaded] = useState<boolean>(false);

  useEffect(() => {
    getStoredUserLoginDetails().then((res) => {
      setUser(res);
      setUserLoaded(true);
    });
  }, [user]);

  return (
    <AppWindow className='app' id='app'>
      <div className='floatRight'>
        <Header></Header>
        <Home user={user} setUser={setUser} userLoaded={userLoaded}></Home>
        <Footer>{constants.footer1}</Footer>
      </div>
    </AppWindow>
  );
};

export default App;
