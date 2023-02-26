import { OTTType } from '../app/app';
import React from 'react';
import { StyledOtt } from './ott.styles';

type props = {
  OTTSite: OTTType;
};
const Ott: React.FC<props> = ({ OTTSite }) => {
  return (
    <StyledOtt>
      <div className='ott'>
        <div className='ott-image'>
          <img src={OTTSite.imgUrl} alt='ott' />
        </div>
        <span className='ott-title'>{OTTSite.title}</span>
      </div>
    </StyledOtt>
  );
};

export default Ott;
