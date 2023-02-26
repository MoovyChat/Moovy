import { HeaderBlock, LogoBlock, Perimeter } from './header.styles';
import constants, { EXT_URL } from '../../../constants';

const Header = () => {
  return (
    <Perimeter>
      <LogoBlock>
        <img src={`${EXT_URL}/Moovy/moovyIcon.png`} alt='logo' />
      </LogoBlock>
      <HeaderBlock className='heading'>{constants.title}</HeaderBlock>
    </Perimeter>
  );
};

export default Header;
