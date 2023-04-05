import './app.scss';

import { AppWindow, Footer } from './app.styles';
import React, { useEffect, useState } from 'react';

import Header from '../header/header';
import Home from '../home/home';
import { User } from '../../../Utils/interfaces';
import { constants } from '../../../constants';
import { getStoredUserLoginDetails } from '../../../Utils/storage';

export type OTTType = {
  title: string;
  imgUrl: string;
  color: string;
};

const OTT = {
  NETFLIX: {
    title: 'Netflix',
    imgUrl:
      'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
    color: '#c0141d',
  },
  DISNEY: {
    title: 'Disney',
    imgUrl:
      'https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=w240-h480-rw',
    color: '#022B78',
  },
  AMAZON: {
    title: 'Amazon',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41mpv9rBhmL.png',
    color: '#2b9ec1',
  },
  AHA: {
    title: 'Aha',
    imgUrl: 'https://www.aha.video/aha-logo.db810aeaa42b356a86a7.png',
    color: '#ff6d2e',
  },
  MOOVYCHAT: {
    title: 'MoovyChat',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/netflix-comments-357200.appspot.com/o/moovy-logo-white.png?alt=media&token=31b2558e-65b8-42cb-ae8c-dd51c22effde',
    color: '#451374',
  },
  OTHER: {
    title: 'Other',
    imgUrl:
      'https://static.vecteezy.com/system/resources/previews/007/126/739/original/question-mark-icon-free-vector.jpg',
    color: '#E50915',
  },
};
const App: React.FC = () => {
  const userIn: User = {
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
  const [OTTSite, setOTT] = useState<OTTType>(OTT.OTHER);
  const [userLoaded, setUserLoaded] = useState<boolean>(false);
  useEffect(() => {
    chrome.runtime.sendMessage({ type: 'GET_DOMAIN' }, function (response) {
      const domain = response.domain;
      switch (domain) {
        case 'MOOVYCHAT':
          setOTT(() => OTT.MOOVYCHAT);
          break;
        case 'NETFLIX':
          setOTT(() => OTT.NETFLIX);
          break;
        case 'AMAZON':
          setOTT(() => OTT.AMAZON);
          break;
        case 'DISNEY':
          setOTT(() => OTT.DISNEY);
          break;
        case 'AHA':
          setOTT(() => OTT.AHA);
          break;
        default:
          setOTT(() => OTT.OTHER);
      }
    });
  }, []);
  useEffect(() => {
    getStoredUserLoginDetails().then((res) => {
      setUser(res);
      setUserLoaded(true);
    });
  }, [user]);

  return (
    <AppWindow className="app" id="app" color={OTTSite.color}>
      <div className="floatRight">
        <Header></Header>
        <Home
          user={user}
          setUser={setUser}
          userLoaded={userLoaded}
          OTTSite={OTTSite}
        ></Home>
        <Footer>{constants.footer1}</Footer>
      </div>
    </AppWindow>
  );
};

export default App;
