import OptionsHeader from '../header/header';
import { OptionsMain } from './optionsHome.styles';

const OptionsHome = () => {
  return (
    <OptionsMain>
      <OptionsHeader />
      <div className='panels'></div>
    </OptionsMain>
  );
};

export default OptionsHome;
