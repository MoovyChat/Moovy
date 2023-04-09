import styled from 'styled-components';

export const NotificationParent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    .header-text {
      width: 100%;
    }
    .heading {
      padding: 20px 0;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .count {
        margin-left: 10px;
        padding: 2px 10px;
        font-size: 0.6em;
        background-color: ${(p) => p.theme.nav};
        color: white;
        font-weight: 700;
        border-radius: 18px;
      }
      .clear {
        font-size: 14px;
        margin-right: 10px;
        box-shadow: 0 0 1px;
        padding: 7px 10px;
        border-radius: 18px;
        cursor: pointer;
        :hover {
          box-shadow: 0 0 5px;
        }
      }
    }
  }
  .notifications {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
  }
`;

export const NotificationCardParent = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  padding: 25px 0px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top: 0.3px solid #8f8f8f81;
  :nth-last-child(2) {
    border-bottom: 0.3px solid #8f8f8f81;
  }
  .first {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 40px;
    .profile-pic {
      position: absolute;
      top: 20px;
      left: 25px;
      width: 50px;
      height: 50px;
    }
    .message {
      position: absolute;
      left: 90px;
      width: 70%;
      font-weight: 500;
      line-height: 16px;
      .new {
        margin-right: 10px;
        padding: 2px 10px;
        font-size: 0.7em;
        background-color: #0099ff;
        color: white;
        font-weight: 700;
        border-radius: 18px;
      }
    }
    .timestamp {
      position: absolute;
      right: 20px;
      font-size: 0.8em;
      font-weight: 600;
    }
  }
  .second {
    width: 70%;
  }
`;
