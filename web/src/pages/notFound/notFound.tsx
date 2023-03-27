import { Helmet } from 'react-helmet';
import { ReactComponent as Moovy } from '../../svgs/moovy-white.svg';
import { NotFoundParent } from './notFound.styles';
import { ReactComponent as Wave } from '../../svgs/wave.svg';
import { useEffect } from 'react';

const NotFound = () => {
  return (
    <NotFoundParent>
      <Helmet>
        <title>{`404: Not Found`}</title>
        <meta name='description' content={`404: Not Found`} />
      </Helmet>
      <div className='bg'>
        <Moovy />
      </div>
      <div className='code'>404</div>
      <div className='text'>NOT FOUND</div>
      <div className='wave'>
        <Wave />
      </div>
    </NotFoundParent>
  );
};

export default NotFound;
