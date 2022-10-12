import Dark from '../../static/images/dark-chat.png';
import DisplayPlatforms from '../../components/display-platforms/displayPlatforms';
import { HomeParent } from './home.styles';
import Light from '../../static/images/light-chat.png';
import React from 'react';
import { RiArrowRightCircleFill } from 'react-icons/ri';
import { home } from '../../constants';

const Home = () => {
  return (
    <HomeParent>
      <div className='home'>
        <div className='pics'>
          <div className='first pic'>
            <picture>
              <img className='image' src={Light} alt='light' />
            </picture>
          </div>
          <div className='second pic'>
            <picture>
              <img className='image' src={Dark} alt='dark' />
            </picture>
          </div>
        </div>
        <div className='heading'>
          <div className='company'>Quiet Chat is here</div>
          <div className='text'>{home.heading}</div>
          <div className='sub'>{home.sub}</div>
          <div className='sub2'>{home.sub2}</div>
          <div className='get-started'>
            <label>Get Started</label>
            <RiArrowRightCircleFill size={25} />
          </div>
        </div>
      </div>
      <div className='supported'>
        <label className='supported-text'>{home.supported}</label>
        <DisplayPlatforms />
      </div>
    </HomeParent>
  );
};

export default Home;
