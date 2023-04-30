import React, { useEffect, useState } from 'react';

import { StyledToolTip } from './tooltip.styles';
import { useAppSelector } from '../../redux/hooks';

interface Props {
  left: number;
  top: number;
}
const Tooltip: React.FC<Props> = ({ left, top }) => {
  const { visible, message } = useAppSelector((state) => state.tooltip);

  return (
    <>
      {visible && (
        <StyledToolTip
          style={{ position: 'absolute', left: left - 30, top: top + 15 }}
        >
          {message}
        </StyledToolTip>
      )}
    </>
  );
};

export default Tooltip;
