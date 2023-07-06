import styled, { css } from "styled-components";
import { commentStyleMixin } from "../../helpers/mixins";

type props = {
  textAreaHeight: number;
};

const textAreaMixin = css<props>`
  overflow: hidden auto;
  border: none;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  font-size: 14px;
  width: 100%;
  padding: 5px 0px;
  max-height: 50px;
  word-spacing: 0.2em;
  outline: none;
  box-shadow: none;
  resize: none;
  font-family: Arial, sans-serif;
  font-weight: 500;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const ChatAreaParent = styled.textarea<props>`
  ${textAreaMixin}
  position: relative;
  background: transparent;
  height: ${(p) => p.textAreaHeight}px !important;
  z-index: 9;
  color: rgba(0, 0, 0, 0.001);
  caret-color: ${(p) => p.theme.chatText};

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    opacity: 0.5; /* Firefox */
  }
`;

export const Parent = styled.div<props>`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  .text-area-background {
    ${textAreaMixin}
    .basic {
      white-space: pre-line;
    }
    .time,
    .user {
      ${commentStyleMixin()}
    }
  }
`;
