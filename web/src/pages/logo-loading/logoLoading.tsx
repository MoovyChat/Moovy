import Loading from '../loading/loading';
import { StyledLogoLoading } from './logoLoading.styles';
import { LOGO_128 } from '../../constants';

const LogoLoading = () => {
  return (
    <StyledLogoLoading>
      <div className="logo">
        <img src={LOGO_128} alt="Moovy" />
      </div>
      <div className="loading">
        <Loading />
      </div>
    </StyledLogoLoading>
  );
};

export default LogoLoading;
