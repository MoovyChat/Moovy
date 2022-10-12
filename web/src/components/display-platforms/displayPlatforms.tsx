import React, { Fragment } from 'react';

import { DisplayPlatformsStyles } from './displayPlatforms.styles';
import { MdLockClock } from 'react-icons/md';

const DisplayPlatforms = () => {
  const streamingServices = [
    {
      title: 'Netflix',
      imgUrl:
        'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
      color: '#E50915',
      home: 'https://www.netflix.com/',
      status: 'Available',
    },
    {
      title: 'Disney+',
      imgUrl:
        'https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=w240-h480-rw',
      color: '#022B78',
      home: 'https://www.disneyplus.com/home',
      status: 'Available soon',
    },
    {
      title: 'Hulu',
      imgUrl:
        'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bk8cux6dapq8qjzylfaj',
      color: '#21E684',
      home: 'https://www.hulu.com/',
      status: 'Available soon',
    },
    {
      title: 'HBO Max',
      imgUrl:
        'https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8',
      color: '#370766',
      home: 'https://www.hbomax.com/',
      status: 'Available soon',
    },
    {
      title: 'Amazon Prime Video',
      imgUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41mpv9rBhmL.png',
      color: '#2b9ec1',
      home: 'https://www.amazon.com/gp/video/storefront/',
      status: 'Available soon',
    },
  ];

  return (
    <DisplayPlatformsStyles className='platform-buttons'>
      {streamingServices.map((platform) => (
        <div className='platform' key={platform.title}>
          {platform.title !== 'Netflix' ? (
            <div className='set'>
              <img src={platform.imgUrl} alt={platform.title} />
              <div className='layover'></div>
              <label>{platform.status}</label>
            </div>
          ) : (
            <div className='set'>
              <img src={platform.imgUrl} alt={platform.title} />
              <label>{platform.status}</label>
            </div>
          )}
        </div>
      ))}
    </DisplayPlatformsStyles>
  );
};

export default DisplayPlatforms;
