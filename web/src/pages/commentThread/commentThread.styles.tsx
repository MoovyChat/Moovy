import styled from 'styled-components';

type props = {
  commentHeight: number;
};
export const CommentThreadParent = styled.div<props>`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .comment-header {
    position: absolute;
    top: 5%;
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 20px;
    .back-button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      padding: 5px;
      :hover {
        cursor: pointer;
        background-color: #ffffff2c;
        box-shadow: 0 0 5px;
      }
      :active {
        background-color: #ffffffa2;
      }
    }
    .header-text {
      font-size: 1.4em;
      margin-left: 30px;
      font-weight: 700;
    }
  }
  .comment-container {
    position: absolute;
    top: 12%;
    display: flex;
    width: 90%;
    flex-direction: column;
    max-height: 400px;
    .comment-usr-detail {
      display: flex;
      align-items: center;
      height: 20%;
      .user-container {
        display: flex;
        width: 50%;
        height: 100px;
        align-items: center;
        padding-left: 20px;
        .user {
          width: 55px;
          height: 55px;
        }
        .name {
          padding: 10px;
          font-size: 1.1em;
          font-weight: 550;
        }
      }
      .options-container {
        display: flex;
        width: 50%;
        height: 100px;
        align-items: center;
        justify-content: flex-end;

        .follow {
          padding: 0 10px;
        }
        .option {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          margin-right: 20px;
          width: 30px;
          height: 30px;
          :hover {
            cursor: pointer;
            background-color: #ffffff2c;
            box-shadow: 0 0 5px;
          }
          :active {
            background-color: #ffffffa2;
          }
        }
      }
    }

    .comment-usr-msg {
      padding: 10px 0;
      padding-left: 20px;
      max-height: 60%;
      .cm-us-xt {
        width: 100%;
        height: 100%;
        font-size: 2em;
        padding-bottom: 3px;
      }
    }
    .comment-usr-time {
      padding-left: 20px;
      opacity: 0.8;
      font-weight: 600;
      font-size: 0.7em;
    }
    .comment-usr-stats {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-around;
      border-top: 0.3px solid;
      border-bottom: 0.3px solid;
      margin: 10px 0;
      .cus {
        display: flex;
        flex: 1 0 50%;
        justify-content: center;
        padding: 10px 0;
        .cmt-txt {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40%;
          font-size: 0.8em;
          .count {
            width: 15px;
          }
          .txt {
          }
        }
      }
    }
  }
  .comment-replies {
    position: absolute;
    width: 90%;
    height: calc(88% - ${(p) => p.commentHeight + 50}px);
    overflow: auto;
    top: calc(12% + ${(p) => p.commentHeight + 50}px);
  }
`;

type ButtonProps = {
  color: string;
};
export const StyledButton = styled.div<ButtonProps>`
  padding: 10px 20px;
  font-size: 0.9em;
  font-weight: 700;
  border-radius: 10px;
  color: white;
  background-color: ${(p) => p.color};
  :hover {
    cursor: pointer;
    background-color: ${(p) => p.color};
  }
`;
