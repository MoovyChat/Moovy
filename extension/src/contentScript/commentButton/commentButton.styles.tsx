import styled from 'styled-components';

type props = {
  chatWindowSize: string;
  openChatWindow: boolean;
};
export const CommentHeader = styled.div<props>`
  position: fixed;
  right: ${(p) => p.chatWindowSize}%;
  top: 180px;
  height: 70px;
  width: 70px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  z-index: 99999;
  align-items: center;

  /* transition: all 0.1s ease-in-out; */
  animation: ${(p) =>
    p.openChatWindow
      ? 'smallIcon 0.5s ease-out forwards'
      : 'resetIcon 0.1s ease-in forwards'};
  :hover {
    transform: ${(p) => (p.openChatWindow ? 'scale(1)' : 'scale(1.2)')};
  }

  @keyframes smallIcon {
    0% {
      height: 70px;
      width: 70px;
      background-color: none;
    }

    100% {
      height: 25px;
      width: 25px;
      background-color: black;
      padding: 5px;
      border-radius: 0%;
    }
  }

  @keyframes resetIcon {
    0% {
      height: 25px;
      width: 25px;
      background-color: black;
      padding: 5px;
      border-radius: 0%;
    }

    100% {
      height: 70px;
      width: 70px;
      background-color: none;
      padding: 0px;
      border-radius: none;
    }
  }
`;
