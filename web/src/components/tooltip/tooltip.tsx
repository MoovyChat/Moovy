import { DIRECTION, TOOLTIP } from '../../utils/enums';
import React, { useCallback, useEffect, useState } from 'react';

import { ToolTipParent } from './tooltip.styles';
import UserTip from './tooltip-components/usertip/usertip';

interface props {
  children?: React.ReactNode;
  dir?: DIRECTION;
  message: string;
  height: string;
  width: string;
  data?: any;
}

const Tooltip: React.FC<props> = ({
  children,
  dir = DIRECTION.BOTTOM,
  message,
  height,
  width,
  data,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [touch, setTouch] = useState<boolean>(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setTouch(true);
    } else setTouch(false);
  }, []);

  const SelectedElement = useCallback(() => {
    switch (message) {
      case TOOLTIP.USER:
        return <UserTip userId={data as string} />;
      default:
        return <div></div>;
    }
  }, [message]);
  return (
    <ToolTipParent
      className="tooltip-wrapper"
      dir={dir}
      height={height}
      width={width}
      visible={visible}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="component">{children}</div>
      {!touch && (
        <div className={`tooltip ${dir || DIRECTION.BOTTOM}`}>
          <SelectedElement />
        </div>
      )}
    </ToolTipParent>
  );
};

export default Tooltip;
