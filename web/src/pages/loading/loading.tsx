import { Helmet } from 'react-helmet';
import { LoadingParent } from './loading.styles';
import React from 'react';

const Loading = () => {
  return (
    <LoadingParent>
      <Helmet>
        <title>{`Loading...`}</title>
        <meta name='description' content={`Loading...`} />
      </Helmet>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingParent>
  );
};

export default Loading;
