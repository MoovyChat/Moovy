import styled from 'styled-components';

type props = {
  visible: boolean;
  progress: number;
};
export const ToastParent = styled.div<props>`
  position: absolute;
  bottom: ${(p) => (p.visible ? '0px' : '-60px')};
  left: 50%;
  transform: translate(-50%, 0%);
  margin-left: auto;
  margin-right: auto;
  min-width: 20%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50px;
  color: ${(p) => p.theme.body};
  font-size: 1.2em;
  font-weight: 600;
  background: linear-gradient(
    ${(p) => p.theme.text} 0%,
    ${(p) => p.theme.text} ${(p) => 100 - p.progress}%,
    red ${(p) => 100 - p.progress}%,
    red ${(p) => p.progress}%,
    red 100%
  );
  transition: bottom 0.5s
    ${(p) =>
      p.visible
        ? 'cubic-bezier(0.18, 0.89, 0.32, 1.28)'
        : 'cubic-bezier(0.6, -0.28, 0.74, 0.05)'};
  z-index: 16;
  .container {
    padding: 10px;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-style: italic;
    .icon {
      display: flex;
      flex: 0 1 25%;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
    }
    .msg {
      flex: 0 1 75%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      white-space: nowrap;
      font-size: 1em;
      padding: 0 10px;
    }
  }
`;
