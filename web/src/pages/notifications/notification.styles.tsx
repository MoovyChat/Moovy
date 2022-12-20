import styled from 'styled-components';

export const NotificationParent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .heading {
    padding: 20px 0;
    .count {
      margin-left: 10px;
      padding: 2px 10px;
      font-size: 0.6em;
      background-color: #0099ff;
      color: white;
      font-weight: 700;
      border-radius: 5px 0 5px 0;
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

type cardProps = {
  isRead: any;
};
export const NotificationCardParent = styled.div<cardProps>`
  display: flex;
  position: relative;
  width: 90%;
  min-height: 40px;
  padding: 25px;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 10px;
  .profile-pic {
    position: absolute;
    top: 20px;
    left: 25px;
    width: 50px;
    height: 50px;
  }
  .message {
    position: absolute;
    left: 80px;
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
      border-radius: 5px 0 5px 0;
    }
  }
  .timestamp {
    position: absolute;
    right: 20px;
    font-size: 0.8em;
    font-weight: 600;
  }
`;
