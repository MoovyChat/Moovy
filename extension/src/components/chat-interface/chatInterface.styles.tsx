import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

type perimeterProps = {
  thumbs: string;
  enableBackground: string;
};
export const Perimeter = styled.div<perimeterProps>`
  position: fixed;
  height: 100%;
  width: 100%;
  max-width: 30%;
  display: flex;
  right: 0;
  bottom: 0;
  top: 0;
  color: ${({ theme }) => theme.chatText};
  transition: max-width 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  background-image: url(${(p) => p.enableBackground && p.thumbs});
  background: ${(p) => !p.enableBackground && p.theme.chatBody};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  ::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(11px);
    z-index: -1;
    background: ${({ theme }) => theme.chatBody};
    opacity: 0.7;
  }
`;

export const DragBar = styled.div`
  position: relative;
  height: 100%;
  width: 4px;
  :hover {
    background-color: ${(p) => p.theme.text};
    cursor: col-resize;
  }
`;

type chatWindowProps = {
  windowOpened: boolean;
};
export const ChatWindowParent = styled.div<chatWindowProps>`
  height: 100%;
  width: 100%;
  display: ${(p) => (p.windowOpened ? 'flex' : 'none')};
  position: relative;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 60%) -5px 0px 10px;
  overflow: hidden;
  .chat-box-container {
    height: 100%;
    margin: 5px auto;
  }

  &.fade {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to
  &.fade-exit-active {
    opacity: 0;
  }
`;

export const NoUserScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 1em;
  flex-wrap: wrap;
  word-break: break-all;
  gap: 10px;
`;
