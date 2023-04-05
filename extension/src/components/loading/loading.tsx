import { LoadingParent } from './loading.styles';
import React from 'react';

const Loading = () => {
  return (
    <LoadingParent>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingParent>
  );
};

export default Loading;
