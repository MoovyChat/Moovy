import styled from 'styled-components';

export const WelcomeParent = styled.div`
  display: flex;
  width: 99vvw;
  height: auto;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
  .second-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    > .mesh-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      > p {
        padding: 30px 0;
        color: #00204c;
        font-family: 'open sans', sans-serif;
        font-size: 20px;
        line-height: 32px;
        text-align: center;
      }
      @media (max-width: 767px) {
        width: auto;
      }
    }
  }
  .third-section {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    overflow: hidden; // Ensure that the image doesn't overflow the container
    perspective: 1px; // Create the parallax effect
    transform-style: preserve-3d; // Preserve 3D transformations
    > .image-overlay {
      position: absolute;
      width: 100%;
      height: 150vh;
      aspect-ratio: auto 980 / 900;
      z-index: 1;
      opacity: 0.8;
      background-color: #a700fa;
    }
    > img {
      position: absolute;
      width: 100%;
      height: 150vh;
      object-fit: cover;
      object-position: 50% 50%;
      overflow-clip-margin: content-box;
      overflow: clip;
      aspect-ratio: auto 980 / 900;
      pointer-events: none;
      z-index: 0;
      transform: scale(1.5);
      will-change: transform;
    }
    .third-sec-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 50%;
      padding-top: 5%;
      padding-left: 100px;
      height: 100vh;
      z-index: 1;
      > .title {
        color: #ffffff;
        display: inline;
        font: normal normal bold 24px/1.4em 'open sans', sans-serif;
      }
      > .subTitle {
        color: #ffffff;
        display: inline;
        line-height: 61.6px;
        font: normal normal 500 44px/1.4em poppins-extralight, poppins,
          sans-serif;
      }
      > button {
        width: 140px;
        height: 60px;
        font: normal normal bold 14px/1.4em 'open sans', sans-serif;
        align-items: center;
        background-color: #ffffff;
        border-color: #ffffff;
        border-radius: 100px;
        border-style: solid;
        border-width: 1px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;
        :hover {
          background-color: transparent;
          color: white;
        }
        :active {
          box-shadow: inset 0 0 5px;
        }
      }
    }
  }
  .fourth-section {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    top: -220px;
    z-index: 3;
    max-height: 60vh;

    > .image {
      > img {
        width: 300px;
        height: auto;
        object-fit: cover;
        object-position: 50% 50%;
        box-shadow: 0 0 0 #000;
        position: static;
        user-select: none;
      }
    }
    > .form {
      padding: 50px 30px;
      width: 35%;
      background-color: #ffffff;
      border-radius: 20px;
      box-shadow: hsla(280, 100%, 49%, 0.17) 6.43px 7.66px 10px 0px;
    }
    @media (max-width: 767px) {
      top: -50px;
      flex-direction: column;
      max-height: fit-content;
      > .form {
        width: auto;
      }
    }
  }
`;

export const HomeSection = styled.section`
  .mesh-container {
    > section {
    }
    .mesh-icons {
      .parallax-hands {
        width: 110vw;
        > img {
          width: 100%;
        }
      }
      .columns {
        display: flex;
        justify-content: space-evenly;
        .mini-card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          max-height: 50px;
          .mini-image-container {
            flex: 1 0 25%;
            margin: 10px;
            justify-content: center;
            align-items: center;
            display: flex;
            > img {
              border-radius: 50%;
              height: 50px;
              width: 50px;
              object-fit: contain;
              background-color: #ffffff;
              border-color: #ffffff;
              border-radius: 50%;
              border-style: solid;
              border-width: 6px;
              box-shadow: hsla(0, 0%, 0%, 0.2) 0px 0px 14px 0px;
              font-size: 10px;
            }
          }
        }
        .image-container {
          height: 180px;
          width: 150px;
          display: flex;
          align-items: flex-end;
          img {
            height: 120px;
            width: 120px;
            object-fit: contain;
          }
        }
      }
      .head-section {
        display: flex;
        flex-direction: column;
        > p {
          text-align: center;
          font-size: 28px;
        }
      }
    }
  }
`;

export const StyledSpan = styled.span`
  padding: 12px;
  background-color: #a700fa;
  border-radius: 100px;
`;

export const Heading1 = styled.h1`
  font-size: 70px;
  line-height: 1.2em;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 50px 0;
  > span {
    width: 70%;
  }
`;

export const Heading2 = styled.h2`
  color: #ffffff;
  display: inline;
  font-size: 44px;
  font-weight: 700;
  text-align: center;
  margin-block: 0;
  margin: 0;
  letter-spacing: normal;
  line-height: normal;
  font: normal normal 500 44px/1.4em poppins-extralight, poppins, sans-serif;
  > span {
    padding: 10px 50px;
  }
`;
