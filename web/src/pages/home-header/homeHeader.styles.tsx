import { rotate180, rotateX180 } from '../../utils/keyframes';

import styled from 'styled-components';

const w = 12;
export const HomeHeaderParent = styled.div`
  display: flex;
  overflow: hidden;
  width: 100vw;
  .logo,
  .user {
    position: relative;
    display: flex;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    flex: 1 0 ${w}%;
    .logo-image {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      .image {
        width: 40px;
        height: 40px;
      }
      .logo-text {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .logo-icon {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      .icon {
        display: none;
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
          font-weight: 600;
          font-size: 0.8em;
          .count {
          }
          .text {
          }
        }
      }
      @media (max-width: 900px) {
        .side {
          .one {
            width: 100%;
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    .stats {
      .inner {
        animation: none;
      }
    }
    .logo {
      .logo-image {
        display: none;
      }
      .logo-icon {
        .icon {
          display: flex;
          :hover {
            background-color: #6e6e6e50;
            cursor: pointer;
            border-radius: 50%;
            padding: 5px;
          }
          :active {
            background-color: #6e6e6e7d;
          }
        }
      }
    }
  }
`;
