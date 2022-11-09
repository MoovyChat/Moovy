import styled from 'styled-components';

type props = {
  chatWindowSize: string;
  openChatWindow: boolean;
  isVisible?: boolean;
};
export const CommentHeader = styled.div<props>`
  .videoStyles {
    display: none;
    visibility: hidden;
    overflow: hidden;
  }

  position: fixed;
  right: ${(p) => p.chatWindowSize}%;
  top: 180px;
  height: 70px;
  width: 70px;
  cursor: pointer;
  display: ${(p) => (p.isVisible ? 'flex' : 'none')};
  justify-content: center;
  z-index: 99999;
  align-items: center;
  color: white;
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
    }

    100% {
      height: 25px;
      width: 25px;
      border-left: 1px solid white;
      padding: 5px;
      border-radius: 0%;
    }
  }

  @keyframes resetIcon {
    0% {
      height: 25px;
      width: 25px;
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
