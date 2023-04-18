/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

import { CSSTransition } from 'react-transition-group';
import { EXT_URL } from '../../constants';
import { EmptyParent } from './emptyPage.styles';

type props = {
  msg: string;
};
const EmptyPage: React.FC<props> = ({ msg }) => {
  const mounted = useRef<boolean>(false);
  const parentRef = useRef<HTMLDivElement | null>(null);
  // Check if the component is mounted or not for animation purposes.
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return (
    <CSSTransition
      in={mounted.current}
      classNames="empty"
      timeout={500}
      nodeRef={parentRef}
    >
      <EmptyParent>
        <div className="logo">
          <img
            src={`${EXT_URL}/moovy/moovy-text-logo-white.webp`}
            alt="Moovy"
          />
        </div>
        <div className="text">{msg}</div>
      </EmptyParent>
    </CSSTransition>
  );
};

export default EmptyPage;
