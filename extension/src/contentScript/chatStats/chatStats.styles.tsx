import { rotate180, rotate180rev } from '../../styles/keyframes';
import styled, { css } from 'styled-components';

type props = {
  like: boolean;
  themeToggled: string;
  accentColor: string;
};
export const ChatStatContainer = styled.div<props>`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  height: 5%;
  color: inherit;
  .capsule {
    box-shadow: inset 0 0 3px ${(p) => p.theme.text};
    display: flex;
    border-radius: 20px;
    width: 200px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    .likes {
      padding: 5px;
      background: ${(p) => p.like && p.accentColor};
      box-shadow: ${(p) => p.like && `inset -2px 1px 5px 1px ${p.theme.text}`};
      transition: all 0.5s;
      .icon {
        mix-blend-mode: exclusion;
        color: ${(p) => p.like && 'white'};
      }
      span {
        mix-blend-mode: exclusion;
        color: ${(p) => p.like && p.theme.body};
      }
      :hover {
        box-shadow: inset -2px 1px 5px 1px;
      }
    }
    .div-cmt-count-style {
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
    .div-cmt-count-style {
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
        font-size: 1.3em;
        font-weight: 800;
        padding: 0 5px;
      }
    }
  }

  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;
    border-radius: 18px;
    .nn {
      cursor: pointer;
    }
    .ic {
      padding: 5px;
      border-radius: 50%;
      cursor: pointer;
      :hover {
        box-shadow: inset 0 0 4px;
        padding: 5px;
      }
    }
    h4 {
      padding: 4px 7px;
      font-size: 1.3em;
      border-radius: 18px;
      :hover {
        box-shadow: 0 0 5px;
      }
    }
  }
`;
