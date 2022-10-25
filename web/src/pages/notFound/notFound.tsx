import { NotFoundParent } from './notFound.styles';
import React from 'react';

const NotFound = () => {
  return (
    <NotFoundParent>
      <div className='code'>404</div>
      <div className='text'>NOT FOUND</div>
    </NotFoundParent>
  );
};

export default NotFound;
