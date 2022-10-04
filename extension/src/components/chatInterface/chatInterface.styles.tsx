import { globalUIStyles } from '../../Utils/interfaces';
import { rotate } from '../../styles/keyframes';
import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

type chatWindowProps = {
  width: string;
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
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .logo {
    grid-area: 1 / 1 / 2 / 2;
    background: url('https://firebasestorage.googleapis.com/v0/b/netflix-comments-357200.appspot.com/o/qc.png?alt=media&token=f1b435bb-446b-4ea9-8c3c-9084a35397e1');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 25px;
    height: 25px;
  }
  .title {
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    grid-area: 1 / 3 / 2 / 4;
    margin-left: 5px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    display: -webkit-inline-box;

    .fav-count {
      max-width: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      .box {
        position: relative;
        width: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .star {
      :hover {
        animation: ${rotate} 1s ease-in-out reverse;
        transform: scale(1.05);
      }
      :active {
        transform: scale(0.95);
      }
    }
    :hover {
      cursor: pointer;
      filter: drop-shadow(0 0 1px ${(p) => p.theme.text});
      box-shadow: inset 0 0 1px ${(p) => p.theme.text};
      border-radius: 10px;
      .fav-count {
        max-width: 30px;
        color: ${(p) => p.theme.text};
        transition: all 1s linear;
      }
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
