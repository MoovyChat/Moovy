import { LoadingParent } from './loading.styles';
import { ReactComponent as Moovy } from '../../svgs/moovy-white.svg';

const Loading = () => {
  return (
    <LoadingParent>
      <div className='container'>
        <Moovy />
      </div>
    </LoadingParent>
  );
};

export default Loading;
