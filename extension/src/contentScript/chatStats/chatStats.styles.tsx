import { rotate180, rotate180rev } from '../../styles/keyframes';
import styled, { css } from 'styled-components';

import { globalUIStyles } from '../../Utils/interfaces';

type props = {
  styles?: globalUIStyles;
  like: boolean;
  themeToggled: string;
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
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border-radius: 20px;
    width: 150px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    .likes {
      padding: 5px;
      background: ${(p) => p.like && ' #ff005d'};
      box-shadow: ${(p) => p.like && `inset -2px 1px 5px 1px ${p.theme.text}`};
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
    cursor: pointer;
    color: inherit;
  }
  * > h4 {
    padding: 2px 3px;
    font-size: 1.3em;
  }
`;

export const EditNickNameInput = styled.input`
  color: inherit;
  border: none;
  border-bottom: 1px solid white;
  background: none;
  font-size: 10px;
`;
