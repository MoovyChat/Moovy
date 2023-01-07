import './app.scss';

import { AppWindow, Footer, SideBarOpen } from './app.styles';
import React, { useEffect, useState } from 'react';

import Header from '../header/header';
import Home from '../home/home';
import Sidebar from '../sidebar/sidebar';
import Stats from '../stats/stats';
import { User } from '../../../Utils/interfaces';
import constants from '../../../constants';
import { getStoredUserLoginDetails } from '../../../Utils/storage';

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
  const [sideOpen, setSideOpen] = useState<boolean>();
  const [mid, setMovieId] = useState<string>('');
  const [userLoaded, setUserLoaded] = useState<boolean>(false);

  useEffect(() => {
    getStoredUserLoginDetails().then((res) => {
      setUser(res);
      setUserLoaded(true);
    });
  }, [user]);

  useEffect(() => {
    // Send the videoId to the extension
    chrome.runtime.sendMessage({ type: 'NEED_ID' }, (response) => {
      console.log('Response from background', response);
      if (response.id) {
        setMovieId(response.id);
      }
    });
  }, []);

  const animationClass = sideOpen ? { width: '500px' } : { width: '300px' };
  return (
    <AppWindow className='app' id='app'>
      <div className='floatRight'>
        <Header></Header>
        <Home
          user={user}
          setUser={setUser}
          setSideOpen={setSideOpen}
          userLoaded={userLoaded}></Home>
        <Footer>{constants.footer1}</Footer>
      </div>
    </AppWindow>
  );
};

export default App;
