import styled from 'styled-components';

type props = {
  dir: string;
  visible: boolean;
  height: string;
  width: string;
};
const toolTipArrowSize = '6px';
const toolTipMargin = '10px';
export const ToolTipParent = styled.div<props>`
  display: inline-block;
  position: relative;
  justify-content: center;
  align-items: center;
  .component {
    position: relative;
  }
  .tooltip {
    position: absolute;
    display: ${(p) => (p.visible ? 'flex' : 'none')};
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    line-height: 1;
    z-index: 100;
    width: ${(p) => p.width};
    height: ${(p) => p.height};
    justify-content: center;
    align-items: center;
    ::before {
      content: ' ';
      left: 50%;
      border: solid transparent;
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-width: ${toolTipArrowSize};
      margin-left: calc(${toolTipArrowSize} * -1);
    }
  }
  .tooltip.bottom {
    bottom: calc((${(p) => p.height}) * -1);
    ::before {
      bottom: 100%;
      border-bottom-color: ${(p) => p.theme.text};
      box-shadow: inset 0 0 5px black;
    }
  }
  .tooltip.top {
    top: calc((${(p) => p.height}) * -1);
    ::before {
      top: 100%;
      border-top-color: ${(p) => p.theme.text};
    }
  }
  .tooltip.right {
    left: calc((${(p) => p.width}) * 0.9);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-right-color: ${(p) => p.theme.background};
    ::before {
      left: calc(${toolTipArrowSize} * -3);
      top: 50%;
      transform: translateX(0) translateY(-50%);
      border-right-color: ${(p) => p.theme.text};
    }
  }
  .tooltip.left {
    left: auto;
    right: calc(100% + ${toolTipMargin});
    top: 50%;
    transform: translateX(0) translateY(-50%);
    ::before {
      left: auto;
      right: calc(${toolTipArrowSize} * -4);
      top: 50%;
      transform: translateX(0) translateY(-50%);
      border-left-color: ${(p) => p.theme.text};
    }
  }
`;
