import './welcome.css';

import Dark from '../../static/images/dark-chat.png';
import DisplayPlatforms from '../../components/display-platforms/displayPlatforms';
import Light from '../../static/images/light-chat.png';
import { RiArrowRightCircleFill } from 'react-icons/ri';
import { WelcomeParent } from './welcome.styles';
import { home } from '../../constants';

const Welcome = () => {
  return (
    <WelcomeParent>
      <div className='custom-shape-divider-top-1672047931'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'>
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            className='shape-fill'></path>
        </svg>
      </div>
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
          <div className='company'>Moovy is here</div>
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
