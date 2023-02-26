import './offsite.scss';

import { AppWindow, Footer } from '../../components/app/app.styles';

import { FilterView } from '../../../contentScript/videoStyles/videoStyles.styles';
import Header from '../../components/header/header';
import { MdLockClock } from 'react-icons/md';
import { OffsiteContent } from './offsite.styles';
import React from 'react';
import constants from '../../../constants';
import { createRoot } from 'react-dom/client';

const streamingServices = [
  {
    title: 'Netflix',
    imgUrl:
      'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
    color: '#E50915',
    home: 'https://www.netflix.com/',
  },
  {
    title: 'Disney+',
    imgUrl:
      'https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=w240-h480-rw',
    color: '#022B78',
    home: 'https://www.disneyplus.com/home',
  },
  {
    title: 'Hulu',
    imgUrl:
      'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bk8cux6dapq8qjzylfaj',
    color: '#21E684',
    home: 'https://www.hulu.com/',
  },
  {
    title: 'HBO Max',
    imgUrl:
      'https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8',
    color: '#370766',
    home: 'https://www.hbomax.com/',
  },
  {
    title: 'Amazon Prime Video',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41mpv9rBhmL.png',
    color: '#2b9ec1',
    home: 'https://www.amazon.com/gp/video/storefront/',
  },
];

const Offsite = () => {
  return (
    <AppWindow className='app' id='app' color={constants.main_color}>
      <div className='floatRight'>
        <Header></Header>
        <OffsiteContent>
          <div className='content'>
            Please open the video on below streaming services
          </div>
          <div className='services'>
            {streamingServices.map((service) => (
              <FilterView
                onClick={(e) => {
                  e.stopPropagation();
                  chrome.tabs.create({
                    url: service.home,
                    active: true,
                  });
                }}>
                <div className='photo'>
                  <img src={service.imgUrl} alt={service.title} />
                  {service.title !== 'Netflix' ? (
                    <div className='layover'>
                      <MdLockClock size={30} color={service.color} />
                    </div>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                </div>
              </FilterView>
            ))}
          </div>
        </OffsiteContent>
        <Footer>{constants.footer1}</Footer>
      </div>
    </AppWindow>
  );
};

var reactApp = document.createElement('div');
document.body.appendChild(reactApp);
document.body.style.setProperty('margin', '0');
const root = createRoot(reactApp);

root.render(
  <React.StrictMode>
    <Offsite />
  </React.StrictMode>
);
