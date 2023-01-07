import styled from 'styled-components';

type props = {
  dir: string;
  height: string;
  width: string;
  clicked: boolean;
};
const toolTipMargin = '10px';
export const StyledFocusWindow = styled.div<props>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  .component {
    position: relative;
  }
  .tooltip {
    position: absolute;
    display: ${(p) => (p.clicked ? 'flex' : 'none')};
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    line-height: 1;
    z-index: 999;
    width: ${(p) => p.width};
    height: ${(p) => p.height};
    justify-content: center;
    align-items: center;
  }
  .tooltip.bottom-right {
    bottom: calc((${(p) => p.height}) * -1);
    left: calc((${(p) => p.width}) * 0.5);
  }
  .tooltip.bottom-left {
    bottom: calc((${(p) => p.height}) * -1);
    right: calc((${(p) => p.width}) * 0.5);
  }
  .tooltip.bottom {
    bottom: calc((${(p) => p.height}) * -1);
  }
  .tooltip.top {
    top: calc((${(p) => p.height}) * -1);
  }
  .tooltip.right {
    left: calc((${(p) => p.width}) * 0.3);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-right-color: ${(p) => p.theme.background};
  }
  .tooltip.left {
    left: auto;
    right: calc(100% + ${toolTipMargin});
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }
`;
