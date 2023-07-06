import ChildHeader from '../../components/childHeader/childHeader';
import { Helmet } from 'react-helmet';
import { NotFoundParent } from './notFound.styles';
import { useRouteError } from 'react-router-dom';
import { LOGO_128 } from '../../constants';

interface ErrorProps {
  statusText?: string;
  message?: string;
  status?: any;
}
const NotFound = () => {
  const error = useRouteError() as ErrorProps;
  return (
    <NotFoundParent>
      <Helmet>
        <title>{`404: Not Found`}</title>
        <meta name="description" content={`404: Not Found`} />
      </Helmet>
      <ChildHeader className="error" text="Not Found" />
      <div className="bg">
        <img src={LOGO_128} className="bg-img" />
      </div>
      <div className="code">{error && error.status ? error.status : 404}</div>
      <div className="text">
        {error && (error?.statusText || error?.message)}
      </div>
    </NotFoundParent>
  );
};

export default NotFound;
