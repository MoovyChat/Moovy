import styled, { css } from 'styled-components';

type props = {
  textPercent?: number;
};
export const AddCommentParent = styled.div<props>`
  position: relative;
  height: 50vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.background};
  .heading {
    position: relative;
    height: 10%;
    width: 100%;
    display: flex;
    margin: 5px 0;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    overflow: hidden;
    /* box-shadow: 0px 3px 4px 0px; */
    .close {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0px;
      right: 10px;
      border-radius: 50%;
      cursor: pointer;
      width: 30px;
      height: 30px;
      :hover {
        background-color: #ffffff57;
      }
    }
    .icon {
      margin: 0 10px;
    }
  }
  .context {
    position: relative;
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .user-container {
      height: 100%;
      flex: 1 1 15%;
      display: flex;
      justify-content: flex-end;
      margin-top: 80px;
      .user {
        width: 65px;
        height: 65px;
      }
    }
    .comment-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 40px;
      height: 100%;
      width: 80%;
      position: relative;
      .textarea-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 70%;
        width: 80%;
      }
      .title-details {
        position: relative;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .chip {
          margin: 0 5px;
        }
        .post {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: 70px;
          right: 40px;
          border-radius: 50%;
          background-color: #6d0e85;
          padding: 10px;
          cursor: pointer;
          transition: all 0.2s;

          :hover {
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0px 1px 2px 0px white, inset 0px -2px 2px black;
          }
          :active {
            transform: translateY(0px) scale(1);
            box-shadow: inset 0px 0px 5px black;
          }
        }
      }
      .options {
        display: flex;
        gap: 10px;
        margin: 10px;
        .chip {
          display: flex;
          gap: 5px;
          justify-content: center;
          align-items: center;
          background-color: #6d0e85;
          .icon {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .text {
          }
        }
        .down {
          pointer-events: none;
        }
      }
      .comment {
        width: 80%;
        .mini {
          width: 100%;
          height: 100%;
          .data {
            width: 80%;
            .msg {
              height: 100%;
              width: 100%;
              text-overflow: ellipsis;
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: pre-line;
            }
          }
        }
      }
    }
  }
  @media (max-width: 760px) {
    height: 98vh;
    width: 98vw;
    .context {
      .user-container {
        display: none;
      }
      .comment-section {
        width: 99%;
        justify-content: flex-start;
        .textarea-container {
          width: 95%;
          height: 25%;
        }
        .options,
        .comment {
          width: 95%;
        }
        .comment {
          .mini {
            min-height: 100px;
            width: 90%;
          }
        }
        .title-details {
          display: flex;
          height: 150px;
          width: 98vw;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          .post {
            position: relative;
            border-radius: 0px;
            display: flex;
            width: 60%;
            bottom: 0;
            right: 0;
            left: 0;
            top: 0;
          }
        }
      }
    }
  }
`;

const textAreaMixin = () => css`
  overflow-x: hidden;
  overflow-y: auto;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.2em;
  border: none;
  padding: 5px 0px;
  font-weight: 500;
  word-spacing: 0.2em;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 70%;
  width: 100%;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
`;

export const StyledTextArea = styled.textarea`
  ${textAreaMixin()}
  z-index: 2;
  background: transparent;
  color: #fafafa00;
  caret-color: ${p => p.theme.text};
`;

export const StyledTextAreaBack = styled.div`
  ${textAreaMixin()}
  z-index: 1;
  /* background-color: #0a0a0a;
  box-shadow: inset 0 0 10px black, inset 0 0 0px 2px; */
  .basic {
    white-space: pre-line;
  }
`;
