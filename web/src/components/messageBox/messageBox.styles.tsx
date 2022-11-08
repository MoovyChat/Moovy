import styled, { css } from 'styled-components';

type props = {
  textAreaHeight: number;
};

export const textAreaMixin = () => css<props>`
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  font-size: 14px;
  width: 100%;
  padding: 5px 0px;
  max-height: 50px;
  word-spacing: 0.2em;
  /* outline: none; */
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
`;

export const ChatAreaParent = styled.textarea<props>`
  ${textAreaMixin()}
  position: relative;
  /* background: transparent; */
  height: ${(p) => p.textAreaHeight}px !important;
  /* z-index: 9; */
  /* color: rgba(0, 0, 0, 0.001); */
  /* caret-color: ${(p) => p.theme.text}; */

  /* ::placeholder {
    Chrome, Firefox, Opera, Safari 10.1+
    opacity: 0.6; Firefox
  } */
`;

export const Parent = styled.div<props>`
  width: 100%;
  height: 100%;
  position: relative;
  .text-area-background {
    position: absolute;
    top: 0;
    left: 0;
    ${textAreaMixin()}
    .time,
    .user {
      color: #ffa1a1;
    }
  }
`;
