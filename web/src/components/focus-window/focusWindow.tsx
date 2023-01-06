import { DIRECTION, FOCUS_WINDOW } from '../../utils/enums';
import React, { useCallback, useState } from 'react';

import EmojiPicker from '../emojiPicker/emojiPicker';
import { StyledFocusWindow } from './focusWindow.styles';

interface props {
  children?: React.ReactNode;
  dir?: DIRECTION;
  message: string;
  height: string;
  width: string;
  data?: any;
}
const FocusWindow: React.FC<props> = ({
  children,
  dir = DIRECTION.BOTTOM,
  message,
  height,
  width,
  data,
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const SelectedElement = useCallback(() => {
    switch (message) {
      case FOCUS_WINDOW.EMOJI:
        return <EmojiPicker />;
      default:
        return <div></div>;
    }
  }, [message]);
  return (
    <StyledFocusWindow
      className='tooltip-wrapper'
      dir={dir}
      clicked={clicked}
      height={height}
      width={width}>
      <div className='component' onClick={() => setClicked(!clicked)}>
        {children}
      </div>
      {clicked && (
        <div className={`tooltip ${dir || DIRECTION.BOTTOM}`}>
          <SelectedElement />
        </div>
      )}
    </StyledFocusWindow>
  );
};

export default FocusWindow;
