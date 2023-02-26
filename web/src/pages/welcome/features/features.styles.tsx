import { animated } from '@react-spring/web';
import styled from 'styled-components';
import { welcomeHeaderColumn } from '../screenshots/screenshots.styles';

export const StyledFeatures = styled(animated.div)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
  .heading {
    ${welcomeHeaderColumn}
    justify-content:flex-end;
  }
  .features {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px;
  }
`;
