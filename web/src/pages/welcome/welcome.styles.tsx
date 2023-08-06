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
