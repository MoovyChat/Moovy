import { rotate180, rotate180rev } from '../../utils/keyframes';
import styled, { css } from 'styled-components';

export const CommentParent = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .heading-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    .heading,
    .sort {
      padding: 0 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .heading {
    }
  }
  .child {
    height: calc(100% - 10px);
    width: 100%;
    overflow: auto;
    .extra {
      display: flex;
      max-height: 120px;
      justify-content: center;
      align-items: center;
    }
  }
`;
