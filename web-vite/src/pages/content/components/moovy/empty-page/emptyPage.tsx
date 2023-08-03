/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { EmptyParent } from "./emptyPage.styles";

type props = {
  msg: string;
  src: string;
  className?: string;
};
const EmptyPage: React.FC<props> = ({ msg, src, className }) => {
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
      <EmptyParent className={className}>
        <div className="moovychat-logo">
          <img src={src} alt="Moovy" />
        </div>
        <div className="text">{msg}</div>
      </EmptyParent>
    </CSSTransition>
  );
};

export default EmptyPage;
