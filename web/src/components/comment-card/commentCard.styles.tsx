import styled from 'styled-components';

export const CardParent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80px;
  justify-content: space-evenly;
  .content {
    display: flex;
    width: 100%;
    height: 100%;
    .user-pic {
      width: 60px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .pic-container {
        width: 40px;
        height: 40px;
      }
    }
    .message {
      display: flex;
      padding-left: 10px;
      width: calc(100% - 60px);
      flex-direction: column;
      justify-content: center;
      .username {
        display: flex;
        align-items: center;
        .user {
          font-weight: 700;
        }
        .time {
          display: flex;
          justify-content: center;
          height: 80%;
          align-items: flex-end;
          font-weight: 400;
          font-size: 0.5em;
          margin-left: 5px;
        }
      }
      .msg {
        font-size: 0.8em;
      }
    }

    .options {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 10%;
      .c {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        color: rgb(162, 162, 162);
        .icon {
          margin-right: 3px;
          display: flex;
        }
        .count {
          font-size: 0.8em;
        }
      }
    }
  }
`;
