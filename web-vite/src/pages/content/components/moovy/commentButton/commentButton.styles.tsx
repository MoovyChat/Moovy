import styled from 'styled-components';

type props = {
  chatWindowSize: string;
  openChatWindow: boolean;
  isVisible?: boolean;
  accentColor: string;
};
export const CommentHeader = styled.div<props>`
  .videoStyles {
    display: none;
    visibility: hidden;
    overflow: hidden;
  }
  svg {
    mix-blend-mode: difference;
    stroke-width: 0.2;
  }
  position: fixed;
  right: 5px;
  top: 180px;
  cursor: pointer;
  display: ${(p) => (p.isVisible ? 'flex' : 'none')};
  justify-content: center;
  z-index: 99998;
  align-items: center;
  color: white;
  .logo {
    padding: 5px;
    img {
      width: 25px;
      height: 25px;
    }
  }

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
      height: 58px;
      width: 58px;
    }

    100% {
    }
  }

  @keyframes resetIcon {
    0% {
    }

    100% {
      background-color: none;
      border-radius: none;
    }
  }
`;
