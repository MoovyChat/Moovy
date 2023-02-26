import {
  DisplayPlatformsStyles,
  LogoSetParent,
} from './displayPlatforms.styles';

import { Image } from '../Image/image';
import React from 'react';
import { streamingServices } from '../../pages/welcome/welcome';

type logoSetProp = {
  platform: typeof streamingServices[0];
};
export const LogoSet: React.FC<logoSetProp> = ({ platform }) => {
  return (
    <LogoSetParent className='platform'>
      <div className='set'>
        <Image src={platform.imgUrl} alt={platform.title} />
      </div>
    </LogoSetParent>
  );
};

const DisplayPlatforms = () => {
  return (
    <DisplayPlatformsStyles className='platform-buttons'>
      {streamingServices.map((platform) => (
        <LogoSet platform={platform} key={platform.title} />
      ))}
    </DisplayPlatformsStyles>
  );
};

export default DisplayPlatforms;
