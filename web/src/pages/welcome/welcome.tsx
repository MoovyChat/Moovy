import Dark from '../../static/images/dark-chat.png';
import DisplayPlatforms from '../../components/display-platforms/displayPlatforms';
import Light from '../../static/images/light-chat.png';
import { RiArrowRightCircleFill } from 'react-icons/ri';
import { WelcomeParent } from './welcome.styles';
import { getStoredUserLoginDetails } from '../../storage/storage';
import { home } from '../../constants';
import { useEffect } from 'react';

const Welcome = () => {
  return (
    <WelcomeParent>
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
            <div className='fill'></div>
            <label>Get Started</label>
            <RiArrowRightCircleFill size={25} />
          </div>
        </div>
      </div>
      <div className='supported'>
        <label className='supported-text'>{home.supported}</label>
        <DisplayPlatforms />
      </div>
    </WelcomeParent>
  );
};

export default Welcome;
