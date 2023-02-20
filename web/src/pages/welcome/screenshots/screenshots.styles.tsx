import styled, { css } from 'styled-components';

import { animated } from 'react-spring';

export const welcomeHeaderColumn = css`
  display: flex;
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 20px;
  letter-spacing: 10px;
  color: transparent;
  -webkit-text-stroke: 2px #8c8c8c;
  word-break: break-all;
  @media (max-width: 500px) {
    font-size: 2rem;
    word-wrap: break-word;
  }
`;
export const StyledScreenShots = styled(animated.div)`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  gap: 20px;
  min-height: 100vh;
  min-height: 100dvh;
  .heading {
    ${welcomeHeaderColumn}
  }
`;
