import { bottomToTop1, topToBottom1 } from '../../styles/keyframes';
import styled, { css } from 'styled-components';

type props = {
  isPopSlideOpen: boolean;
};
export const PopSlideParent = styled.div<props>`
  position: absolute;
  width: 100%;
  bottom: -4px;
  /* border-radius: 10% 10% 0 0; */
  background-color: ${(p) => p.theme.body};
  z-index: 15;
  box-shadow: 0 0 10px black inset;
  animation: ${(p) =>
    p.isPopSlideOpen
      ? css`
          ${bottomToTop1} 0.5s
    cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards
        `
      : css`
          ${topToBottom1} 0.5s ease-out forwards
        `};
  display: flex;
  color: inherit;
  flex-direction: column;
  .header {
    display: flex;
    width: 100%;
    flex: 1;
    align-items: center;
    position: relative;
    .section {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 80%;
      justify-content: space-evenly;
      .title {
        font-weight: 800;
        font-size: 2em;
      }
      .sub {
        font-weight: 500;
        font-size: 1.3em;
      }
    }

    .close-icon {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
      z-index: 1;
    }
  }

  .content {
    flex: 9;
    overflow: auto;
    position: relative;
    display: flex;
  }
`;

export const LikesUserView = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  margin: 6px 0;
  .pic {
    flex: 2;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .nick {
    flex: 8;
    font-size: 1.7em;
    padding: 0 10px;
    font-weight: 700;
  }
`;
