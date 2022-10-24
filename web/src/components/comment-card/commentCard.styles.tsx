import styled, { css } from 'styled-components';

import { expandDown } from '../../utils/keyframes';

type props = {
  isReply?: boolean;
  showReplies?: boolean;
};
export const CardParent = styled.div<props>`
  display: flex;
  flex-direction: column;
  width: 99.5%;
  min-height: 60px;
  justify-content: space-evenly;
  align-items: ${(p) => (p.isReply ? 'flex-end' : 'center')};
  padding: 6px 0px;
  margin: 7px 0px;
  :first-child {
    margin-top: 10px;
  }
  :hover {
    cursor: pointer;
    background-image: linear-gradient(to right, #681515, #302b63, #3e2524);
  }
  .content {
    display: flex;
    width: ${(p) => (p.isReply ? '95%' : '90%')};
    height: 100%;
    align-items: center;
    .user-pic {
      width: 50px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .pic-container {
        width: 30px;
        height: 30px;
      }
    }
    .message {
      display: flex;
      padding-left: 10px;
      width: calc(100% - 50px);
      flex-direction: column;
      justify-content: center;
      .username {
        display: flex;
        align-items: center;
        .user {
          font-weight: 600;
          font-size: 0.9em;
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
        padding: 2px 0;
        font-weight: normal;
      }
    }

    .options {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 25%;
      height: 100%;
      .c {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 40px;
        height: 100%;
        .icon {
          margin-right: 3px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        .count {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.9em;
          height: 100%;
        }
      }
    }
  }

  .show-replies {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: calc(100% - 50px);
    justify-content: flex-end;
    transition: all 1s;
    .icon {
      display: flex;
      justify-content: flex-end;
    }
    .reply-text {
      display: flex;
      width: 100%;
      font-size: 0.7em;
      align-items: flex-end;
      justify-content: flex-end;
      font-weight: 600;
      :hover {
        text-decoration: underline;
      }
      .rt-wc {
        display: flex;
        width: 90%;
        padding-bottom: 10px;
        padding-top: 3px;
      }
    }
  }
`;

export const ReplyWindow = styled.div<props>`
  overflow: auto;
  width: 90%;
  position: relative;
  align-self: flex-end;
  border-left: 0.3px solid;
  height: 40vh;
  max-height: ${(p) => (p.showReplies ? '40vh' : '0vh')};
  transition: max-height 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
`;
