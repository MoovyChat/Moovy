import { useEffect, useRef, useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import { EmptyParent } from './emptyPage.styles';
import Moovy from '../../svgs/moovy-text.png';
import MoovyBlack from '../../svgs/moovy-black-text.png';
import { useTheme } from 'styled-components';

type props = {
  msg: string;
};
const EmptyPage: React.FC<props> = ({ msg }) => {
  const theme = useTheme();
  const [src, setSrc] = useState<string>(Moovy);
  const mounted = useRef<boolean>(false);
  const parentRef = useRef<HTMLDivElement | null>(null);
  // Check if the component is mounted or not for animation purposes.
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (theme) {
      const themeType = (theme as any).themeType;
      if (themeType === 'dark') setSrc(() => Moovy);
      else setSrc(() => MoovyBlack);
    }
  }, [theme]);
    
  return (
    <CSSTransition
      in={mounted.current}
      classNames="empty"
      timeout={500}
      nodeRef={parentRef}
    >
      <EmptyParent>
        <div className="logo">
          <img src={src} alt="Moovy" />
        </div>
        <div className="text">{msg}</div>
      </EmptyParent>
    </CSSTransition>
  );
};

export default EmptyPage;
