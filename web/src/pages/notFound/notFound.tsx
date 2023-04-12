import ChildHeader from '../../components/childHeader/childHeader';
import { Helmet } from 'react-helmet';
import { ReactComponent as Moovy } from '../../svgs/moovy-white.svg';
import { NotFoundParent } from './notFound.styles';
import { useRouteError } from 'react-router-dom';

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
      <ChildHeader className='error' text='Not Found'/>
      <div className="bg">
        <Moovy className="bg-img" />
      </div>
      <div className="code">{error && error.status ? error.status : 404}</div>
      <div className="text">
        {error && (error?.statusText || error?.message)}
      </div>
    </NotFoundParent>
  );
};

export default NotFound;
