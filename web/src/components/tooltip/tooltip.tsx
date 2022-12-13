import { DIRECTION, TOOLTIP } from '../../utils/enums';
import { GET_CONSTANT, LOGIN } from './constants';
import React, { useCallback, useEffect, useState } from 'react';

import Login from './tooltip-components/login/login';
import { ToolTipParent } from './tooltip.styles';
import { User } from '../../generated/graphql';
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
  const SelectedElement = useCallback(() => {
    switch (message) {
      case TOOLTIP.USER:
        return <UserTip user={data as User} />;
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
