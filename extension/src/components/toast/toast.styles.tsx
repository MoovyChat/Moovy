import styled, { css } from 'styled-components';

import { animated } from '@react-spring/web';
import { fillUp } from '../../styles/keyframes';

type props = {
  visible: string;
  accentcolor: string;
};
export const ToastParent = styled(animated.div)<props>`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  margin-left: auto;
  margin-right: auto;
  min-width: 20%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 60px;
  color: ${(p) => p.theme.chatBody};
  font-size: 1.2em;
  font-weight: 600;
  z-index: 16;

  .container {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-style: italic;

    background: ${(p) => p.theme.chatText};
    transition: bottom 0.5s
      ${(p) =>
        p.visible === 'true'
          ? 'cubic-bezier(0.18, 0.89, 0.32, 1.28)'
          : 'cubic-bezier(0.6, -0.28, 0.74, 0.05)'};
    .fill {
      position: absolute;

      background: ${(p) => p.accentcolor};
      top: 0;
      left: 0;
      right: 0;
      z-index: 17;
      animation: ${(p) =>
        p.visible === 'true'
          ? css`
              ${fillUp} 2s ease-in-out forwards reverse
            `
          : 'none'};
    }
    .toast-msg {
      position: relative;
      z-index: 18;
      padding: 10px;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      font-style: italic;
      .icon {
        display: flex;
        flex: 0 1 25%;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
      }
      .msg {
        flex: 0 1 75%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        white-space: nowrap;
        font-size: 1em;
        padding: 0 10px;
      }
    }
  }
`;
