import { EmptyParent } from './emptyPage.styles';
import Moovy from '../../svgs/moovy-text.png';

type props = {
  msg: string;
};
const EmptyPage: React.FC<props> = ({ msg }) => {
  return (
    <EmptyParent>
      <div className='logo'>
        <img src={Moovy} alt='Moovy' />
      </div>
      <div className='text'>{msg}</div>
    </EmptyParent>
  );
};

export default EmptyPage;
