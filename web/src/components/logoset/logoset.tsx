import { Image } from '../Image/image';
import { LogoSetParent } from './logoset.styles';
import { streamingServices } from '../../pages/welcome/welcome';

type logoSetProp = {
  platform: typeof streamingServices[0];
};
export const LogoSet: React.FC<logoSetProp> = ({ platform }) => {
  return (
    <LogoSetParent className='platform'>
      <div className='set'>
        <Image
          src={platform.imgUrl}
          alt={platform.title}
          width='512'
          height='512'
        />
      </div>
    </LogoSetParent>
  );
};
