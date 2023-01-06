import { rotateY360 } from '../../utils/keyframes';
import styled from 'styled-components';

export const LoadingParent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  .container {
    position: absolute;
    z-index: 1;
    width: 200px;
    height: 200px;
    border: 4px solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${rotateY360} 2s infinite;
    svg {
      animation: ${rotateY360} 2s infinite reverse;
    }
  }
`;
