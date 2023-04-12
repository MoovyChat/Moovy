import { useEffect, useState } from 'react';

import Loading from '../loading/loading';
import MoovyBlack from '../../svgs/moovy-text-logo-black.png';
import MoovyWhite from '../../svgs/moovy-text-logo-white.png';
import { StyledLogoLoading } from './logoLoading.styles';
import { useTheme } from 'styled-components';

const LogoLoading = () => {
  const theme = useTheme();
  const [src, setSrc] = useState<string>(MoovyWhite);

  useEffect(()=>{
    if(theme){
      const themeType = (theme as any).themeType;
      if(themeType === "dark") setSrc(()=>MoovyWhite);
      else setSrc(()=>MoovyBlack);
    }
  }, [theme])
  return (
    <StyledLogoLoading>
      <div className="logo">
        <img src={src} alt="Moovy" />
      </div>
      <div className="loading">
        <Loading />
      </div>
    </StyledLogoLoading>
  );
};

export default LogoLoading;
