import styled, { css } from 'styled-components';
import { rotate, scrollingText } from '../../../styles/keyframes';

export const SideBarParent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .info {
    flex-basis: 50%;
    display: flex;
    color: white;
    align-items: center;
    .disc {
      flex-basis: 20%;
      padding: 0 5px;
      .discIcon {
        animation: ${css`
          ${rotate} 2s linear infinite
        `};
      }
    }
    .wrap {
      width: 80%;
      float: right;
      overflow: hidden;
      .title {
        white-space: nowrap;
        transform: translateX(100%);
        animation: ${css`
          ${scrollingText} 8s linear infinite
        `};
      }
    }
  }
  .player {
    display: flex;
    flex-basis: 50%;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    .status,
    .pip,
    .volume {
      cursor: pointer;
    }
  }
`;
