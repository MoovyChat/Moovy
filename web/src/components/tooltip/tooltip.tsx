import { GET_CONSTANT, LOGIN } from './constants';
import React, { useCallback, useState } from 'react';

import { DIRECTION } from '../../utils/enums';
import Login from './tooltip-components/login/login';
import { ToolTipParent } from './tooltip.styles';

interface props {
  children?: React.ReactNode;
  dir: DIRECTION;
  message: string;
  height: string;
  width: string;
}

const Tooltip: React.FC<props> = ({
  children,
  dir,
  message,
  height,
  width,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const SelectedElement = useCallback(() => {
    switch (message) {
      case GET_CONSTANT:
      case LOGIN:
        return <Login />;
      default:
        return <div></div>;
    }
  }, [message]);
  return (
    <ToolTipParent
      className='tooltip-wrapper'
      dir={dir}
      height={height}
      width={width}
      visible={visible}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}>
      <div className='component'>{children}</div>
      <div className={`tooltip ${dir || DIRECTION.BOTTOM}`}>
        <SelectedElement />
      </div>
    </ToolTipParent>
  );
};

export default Tooltip;
