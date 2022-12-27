import { NotFoundParent } from './notFound.styles';
import React from 'react';
import Wave from '../../svgs/wave.svg';

const NotFound = () => {
  return (
    <NotFoundParent>
      <div className='code'>404</div>
      <div className='text'>NOT FOUND</div>
      <img src={Wave} alt='wave' />
    </NotFoundParent>
  );
};

export default NotFound;
