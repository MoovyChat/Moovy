import styled from 'styled-components';

export const WelcomeParent = styled.div`
  display: flex;
  width: 99vvw;
  flex-direction: column;
  overflow: hidden;
  .home {
    position: relative;
    display: flex;
    height: 100vh;
    height: 100dvh;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    .pics {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      width: 45%;
      height: 100%;
      .pic {
        position: absolute;
        height: 70%;
        .image {
          height: 500px;
          width: 300px;
          transform: skew(351deg, 10deg) translateX(10px) translateY(50px);
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
        .supported-platforms {
          gap: 5px;
          display: flex;
        }
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
        z-index: 999;
        padding: 10px;
        width: 150px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-weight: 600;
        .fill {
          position: absolute;
          left: 0;
          height: 100%;
          width: 0%;
          z-index: -1;
          background-color: ${p => p.theme.background};
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
    .embed {
      color: transparent;
      font-size: 150px;
      letter-spacing: 60px;
      -webkit-text-stroke: 1px #6f4646;
      position: absolute;
      bottom: 10px;
      right: 50px;
    }
  }

  .supported {
    padding: 20px;
    .supported-text {
    }
  }

  @media (max-width: 900px) {
    .home {
      .pics {
        display: none;
      }
      .heading {
        width: 100%;
        margin-left: 20px;
      }
      .embed {
        right: 0;
        left: 30px;
      }
    }
  }
  @media (max-width: 800px) {
    .home {
      .embed {
        font-size: 100px;
        letter-spacing: 50px;
      }
    }
  }
  @media (max-width: 700px) {
    .home {
      .embed {
        letter-spacing: 20px;
      }
    }
  }
  @media (max-width: 500px) {
    .home {
      .embed {
        font-size: 80px;
        letter-spacing: 15px;
      }
    }
  }
  @media (max-width: 430px) {
    .home {
      .embed {
        font-size: 70px;
        letter-spacing: 15px;
      }
    }
  }
  @media (max-width: 400px) {
    .home {
      .embed {
        font-size: 50px;
        letter-spacing: 15px;
        right: 0;
        left: 30px;
      }
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

export const StyledFlaps = styled.div`
  position: fixed;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  .social-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 20px;
    padding: 5px;
    background: ${p => p.theme.trendingTiles};
    box-shadow: 0 0 4px ${p => p.theme.toggleBorder};
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    height: 40%;
    .social {
      cursor: pointer;
      border: none;
      background: none;
      text-decoration: none;
      color: inherit;
      font-family: inherit;
      :hover {
        transform: scale(1.3);
        transition: transform 0.5s;
      }
      :active {
        transform: scale(1);
        transition: transform 0.2s;
      }
    }
  }
`;
