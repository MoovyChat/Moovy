import { ReactComponent as Moovy } from '../../svgs/moovy-white.svg';
import { NotFoundParent } from './notFound.styles';
import { ReactComponent as Wave } from '../../svgs/wave.svg';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = '404-NotFound';
  }, []);
  return (
    <NotFoundParent>
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
