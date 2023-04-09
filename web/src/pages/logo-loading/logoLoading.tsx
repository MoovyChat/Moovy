import { Helmet } from 'react-helmet';
import Loading from '../loading/loading';
import Moovy from '../../svgs/moovy-text-logo-white.png';
import { StyledLogoLoading } from './logoLoading.styles';

const LogoLoading = () => {
  return (
    <StyledLogoLoading>
      <Helmet>
        <title>{`Loading...`}</title>
        <meta name="description" content={`Loading...`} />
      </Helmet>
      <div className="logo">
        <img src={Moovy} alt="Moovy" />
      </div>
      <div className="loading">
        <Loading />
      </div>
    </StyledLogoLoading>
  );
};

export default LogoLoading;
