import { HomeTitleKeyframes } from '../../utils/keyframes';
import styled from 'styled-components';

export const HomeParent = styled.div`
  display: flex;
  height: 130vh;
  width: 99vw;
  flex-direction: column;
  .home {
    position: relative;
    display: flex;
    height: 90%;
    width: 100%;
    font-family: 'Prompt', sans-serif;
    .pics {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
      .pic {
        position: absolute;
        height: 70%;
        .image {
          height: 100%;
          width: 100%;
          transform: skew(351deg, 10deg);
          border: 1px solid;
        }
      }
      .first {
        /* transform: skewY(10deg) skewX(10deg); */
        transform: rotate(349deg) translateY(-33px) translateX(-40px);
      }
      .second {
        /* transform: skewY(10deg) skewX(10deg); */
      }
    }
    .heading {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: flex-start;
      width: 50%;
      height: 100%;
      flex-direction: column;
      .company {
        font-weight: 900;
        font-size: 0.8rem;
        font-style: italic;
      }
      .text {
        padding: 5% 0%;
        padding-top: 0px;
        font-size: 3rem;
        font-weight: 600;
        text-transform: uppercase;
        animation: ${HomeTitleKeyframes} 4s linear forwards;
      }
      .platform-container {
        height: 30%;
        width: 100%;
        margin-top: 50px;
      }
      .sub2 {
        padding: 20px 0;
      }
      .get-started {
        border: 1px solid;
        padding: 10px;
        width: 150px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        label {
          cursor: pointer;
        }
      }
    }
  }
  .supported {
    padding: 20px;
    .supported-text {
    }
  }
`;
