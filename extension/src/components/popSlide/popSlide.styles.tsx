import { bottomToTop1 } from '../../styles/keyframes';
import styled from 'styled-components';

export const PopSlideParent = styled.div`
  position: absolute;
  height: 70%;
  width: 100%;
  bottom: -5px;
  border-radius: 10% 10% 0 0;
  background-color: #353535;
  z-index: 12;
  box-shadow: 0 0 10px black inset;
  animation: ${bottomToTop1} 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
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
        font-size: 1.7em;
      }
      .sub {
        font-weight: 500;
      }
    }

    .close {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
    }
  }

  .content {
    flex: 9;
    overflow: auto;
  }
`;

export const LikesUserView = styled.div`
  display: flex;
  width: 90%;
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
