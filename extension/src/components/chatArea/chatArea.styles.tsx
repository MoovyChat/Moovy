import styled, { css } from 'styled-components';

import { commentStyleMixin } from '../../Utils/mixins';
import { globalUIStyles } from '../../Utils/interfaces';

type props = {
  styles: globalUIStyles;
};

export const textAreaMixin = () => css`
  overflow: auto;
  border: none;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  height: 50px !important;
  font-size: 12px;
  width: 100%;
  padding: 5px 0px;
  word-spacing: 0.25em;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
`;

export const ChatAreaParent = styled.textarea<props>`
  ${textAreaMixin()}
  background-color: ${(p) =>
    p.styles ? p.styles.backgroundColor : 'transparent'};
  position: relative;
  background: transparent;
  z-index: 9;
  color: #000; /* Fallback for older browsers */
  color: rgba(0, 0, 0, 0.001);
  caret-color: ${(p) => (p.styles ? p.styles.textColor : 'white')};

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(p) => (p.styles ? p.styles.textColor : 'white')};
    opacity: 0.6; /* Firefox */
  }
`;

export const Parent = styled.div<props>`
  width: 100%;
  height: 100%;
  position: relative;
  .text-area-background {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(p) =>
      p.styles ? p.styles.backgroundColor : 'transparent'};
    ${textAreaMixin()}
    .time, .user {
      ${commentStyleMixin()}
    }
  }
`;
