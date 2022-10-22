import { rotate180, rotateX180 } from '../../utils/keyframes';

import styled from 'styled-components';

const w = 12;
export const HomeHeaderParent = styled.div`
  display: flex;
  overflow: hidden;
  .logo,
  .user {
    position: relative;
    display: flex;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    background: black;
    border-radius: 20px;
    flex: 1 0 ${w}%;
    .logo-pic {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      img {
        width: 40px;
        height: 40px;
      }
      .logo-text {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .logo {
  }
  .user {
    justify-content: space-evenly;
    .logo-pic {
      display: flex;
      align-items: center;
      img {
        border-radius: 50%;
      }
    }
  }
  .stats {
    flex: 1 0 ${100 - 2 * w}%;
    height: 100%;
    perspective: 1000px;
    .inner {
      transform-style: preserve-3d;
      height: 100%;
      animation: ${rotateX180} 20s linear infinite;
      .front,
      .back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      .back {
        transform: rotateX(180deg);
      }
      .side {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
        .one {
          display: flex;
          width: 10%;
          justify-content: space-evenly;
          .count {
          }
          .text {
          }
        }
      }
    }
  }
`;
