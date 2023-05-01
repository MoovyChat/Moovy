/* eslint-disable react/react-in-jsx-scope */

import { EXT_URL, constants } from "../../../../helpers/constants";
import { HeaderBlock, LogoBlock, Perimeter } from "./header.styles";

const Header = () => {
  return (
    <Perimeter>
      <LogoBlock>
        <img src={`${EXT_URL}/moovy/mcIconSmall.png`} alt="logo" />
      </LogoBlock>
      <HeaderBlock className="heading">
        <img src={`${EXT_URL}/moovy/mcLogoTextOnly.png`} alt="logo" />
      </HeaderBlock>
    </Perimeter>
  );
};

export default Header;
