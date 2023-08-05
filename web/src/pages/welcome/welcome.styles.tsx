import styled from 'styled-components';

export const WelcomeParent = styled.div`
  display: flex;
  width: 99vvw;
  height: auto;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
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
        .head-title {
          font-size: 70px;
          line-height: 1.2em;
          text-align: center;
          display: flex;
          justify-content: center;
          margin: 50px 0;
          > span {
            width: 70%;
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
