/* eslint-disable react/react-in-jsx-scope */
import { EXT_URL, constants } from '../../../constants';
import { HeaderBlock, LogoBlock, Perimeter } from './header.styles';

const Header = () => {
  return (
    <Perimeter>
      <LogoBlock>
        <img src={`${EXT_URL}/Moovy/moovyIcon.webp`} alt="logo" />
      </LogoBlock>
      <HeaderBlock className="heading">{constants.title}</HeaderBlock>
    </Perimeter>
  );
};

export default Header;
