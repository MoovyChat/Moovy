import { globalUIStyles } from '../../Utils/interfaces';
import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

type chatWindowProps = {
  width: string;
  styles: globalUIStyles;
  openChatWindow: boolean;
};
export const ChatWindowParent = styled.div<chatWindowProps>`
  height: 100%;
  width: ${(p) => (p.openChatWindow === true ? p.width : '0')}%;
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  bottom: 0;
  top: 0;
  box-shadow: rgb(0 0 0 / 60%) -5px 0px 10px;

  .chat-box-container {
    height: 100%;
    margin: 5px auto;
  }

  @keyframes openToLeft {
    0% {
      width: 0%;
      opacity: 0;
    }
    90% {
      opacity: 0.7;
    }
    100% {
      width: ${(p) => p.width}%;
      opacity: 1;
    }
  }

  @keyframes closeToRight {
    0% {
      width: ${(p) => p.width}%;
      opacity: 1;
    }
    100% {
      width: 0%;
      opacity: 0;
    }
  }
`;

export const ChatTitle = styled.div`
  opacity: 1;
  text-align: center;
  font-size: 1.3em;
  word-wrap: break-word;
  font-weight: bold;
  font-family: 'Lexend', sans-serif;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .title {
    width: 80%;
  }
  .icon {
    margin-left: 5px;
    :hover {
      cursor: pointer;
      color: gold;
      filter: drop-shadow(0 0 5px white);
      box-shadow: inset 0 0 5px white;
      border-radius: 50%;
      transform: scale(1.05);
    }
    :active {
      transform: scale(0.95);
    }
  }
`;

export const SettingsScreen = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99999;
  background-color: transparent;
  filter: blur(0.5);
  color: inherit; ;
`;

export const DragBar = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  width: 10px;
  :hover {
    background-color: #2c2c2c;
    cursor: col-resize;
  }
`;
