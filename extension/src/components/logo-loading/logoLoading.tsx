import Loading from '../loading/loading';
import Moovy from '../../svgs/moovy-text-logo-white.png';
import { StyledSplashScreen } from './logoLoading.styles';

const LogoLoading = () => {
  return (
    <StyledSplashScreen>
      <div className='logo'>
        <img src={Moovy} alt='Moovy' />
      </div>
      <div className='loading'>
        <Loading />
      </div>
    </StyledSplashScreen>
  );
};

export default LogoLoading;
