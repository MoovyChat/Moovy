import { rotate180, rotate180rev } from '../../utils/keyframes';
import styled, { css } from 'styled-components';

export const CommentParent = styled.div`
  height: 100%;
  width: 95%;
  overflow: auto;
  display: flex;
  margin: 200px 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

type props = {
  like: boolean;
  themeToggled: string;
};
export const CommentGroupParent = styled.div<props>`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px 0px;
  .movie {
    display: flex;
    align-content: center;
    padding: 10px;
    background-image: linear-gradient(to right, #681515, #302b63, #3e2524);
    border-radius: 60px;
    .group-pic {
      display: flex;
      flex: 1 0 70%;
      .container {
        height: 40px;
        width: 40px;
      }
    }
    .title {
      margin-left: 20px;
      font-weight: 700;
      font-size: 0.9em;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .capsule-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .capsule {
        box-shadow: inset 0 0 3px ${(p) => p.theme.text};
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        border-radius: 20px;
        height: 80%;
        width: 150px;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        .likes {
          padding: 5px;
          background: ${(p) => p.like && ' #ff005d'};
          box-shadow: ${(p) =>
            p.like && `inset -2px 1px 5px 1px ${p.theme.text}`};
          transition: all 0.5s;
          .icon {
            color: ${(p) => p.like && p.theme.body};
          }
          span {
            color: ${(p) => p.like && p.theme.body};
          }
        }
        .comment {
          padding: 5px;
        }

        .theme-mode {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          color: inherit;
          flex: 1;
          .toggle-anim {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: -15px;
            animation: ${(p) =>
              p.themeToggled === 'dark'
                ? css`
                    ${rotate180} 1s ease-in-out forwards
                  `
                : css`
                    ${rotate180rev} 1s ease-in-out forwards
                  `};
            :first-child {
              padding: 5px 0;
            }
          }
        }

        .likes,
        .comment {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          cursor: pointer;
          color: inherit;
          flex: 1;
          span {
            font-size: 0.8em;
            font-weight: 500;
            padding: 0 5px;
          }
        }
      }
    }
  }
  .comments {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 99%;
    border-radius: 20px;
    background: black;
    box-shadow: inset 0 0 10px 1px white;
    .comments-child {
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: flex-end;
      width: 90%;
      border-radius: 20px;
      overflow: auto;
      padding: 10px;
    }
  }
`;
