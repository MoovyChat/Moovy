import styled from 'styled-components';

export const WelcomeParent = styled.div`
  display: flex;
  height: 130vh;
  width: 99vw;
  flex-direction: column;
  .home {
    position: relative;
    display: flex;
    height: 90%;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

        picture {
          /* ::after {
            position: absolute;
            top: 0;
            left: 0px;
            content: '';
            width: 100%;
            height: 100%;
            z-index: 2;
            transform: skew(351deg, 10deg);
            background: -webkit-linear-gradient(
              top,
              transparent,
              rgba(200, 200, 200, 0.1),
              transparent
            );
          } */
        }
        .image {
          height: 100%;
          width: 100%;
          transform: skew(351deg, 10deg);
          border: 1px solid;
          content: '';
        }
      }
      .first {
        /* transform: skewY(10deg) skewX(10deg); */
        transform: rotate(349deg) translateY(-33px) translateX(-40px);
        transition: all 0.5s;
      }
      .second {
        transition: all 0.5s;
      }
      :hover {
        .first {
          transform: rotate(340deg) translateY(-50px) translateX(-100px);
        }
        .second {
          transform: rotate(5deg) translateX(40px);
        }
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
      }
      .platform-container {
        height: 30%;
        width: 100%;
        margin-top: 50px;
      }
      .sub,
      .sub2 {
      }
      .sub2 {
        padding: 20px 0;
      }
      .get-started {
        border: 1px solid;
        position: relative;
        padding: 10px;
        width: 150px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        .fill {
          position: absolute;
          left: 0;
          height: 100%;
          width: 0%;
          z-index: -1;
          background-color: ${(p) => p.theme.background};
        }
        label {
          cursor: pointer;
        }
        :hover {
          .fill {
            animation: fillBox 1s linear forwards;
          }
        }
      }
    }
  }
  .supported {
    padding: 20px;
    .supported-text {
    }
  }

  @keyframes fillBox {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;
