import '../../extension/components/app/app.scss';

import styled from 'styled-components';

export const OptionsMain = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Lexend', sans-serif;
  width: 100vw;
  height: 100vh;
  background-color: #1e1e1e;
  justify-content: space-between;
  align-items: center;
  color: white;

  .header {
  }
  .video-container {
    display: flex;
    position: relative;
    width: 100%;
    height: 80%;
    overflow: hidden;
    margin-bottom: 30px;
    video {
      border: 1px solid;
      height: 98%;
      width: 100%;
      flex: 1 1 60%;
    }
    .attributes {
      flex: 1 1 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      .name {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .in {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .parent {
            display: flex;
            width: 80%;
            justify-content: center;
            align-items: center;
            border: 1px solid;
            border-radius: 10px;
            .icon {
              display: flex;
              width: 20%;
              align-items: center;
              justify-content: center;
            }
            input {
              font-family: 'Lexend', sans-serif;
              background: transparent;
              color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              border: none;
              width: 70%;
              height: 100%;
              padding: 10px;
              :hover,
              :active,
              :focus {
                background: transparent;
                border: none;
                outline: none;
              }
            }
          }
        }
      }
      .field {
        display: flex;
        width: 100%;
        margin: 20px 10px;
        .title {
          flex: 1 1 40%;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 1.2rem;
          background-color: #39d7ec5f;
          border-radius: 0 10px 10px 0;
          padding: 3px 0;
        }
        .value {
          flex: 1 1 60%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      }
      .save {
        border: 1px solid;
        width: 35%;
        height: 40px;
        display: flex;
        align-content: center;
        justify-content: space-evenly;
        border-radius: 20px;
        box-shadow: 0 0 6px 0px white;
        margin-top: 20px;
        .icon,
        .disk {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        :hover {
          cursor: pointer;
          box-shadow: inset 0 0 6px 0px white;
        }
        :active {
          box-shadow: inset 0 0 10px 0px white;
        }
      }
    }
  }
`;
