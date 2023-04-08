import styled from 'styled-components';

type props = {
  isTriggered: boolean;
};
export const StyledIFrameComponent = styled.div<props>`
  position: absolute;
  top: 0;
  z-index: 100;
  width: 99%;
  height: 100px;
  display: ${(p) => (p.isTriggered ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${(p) => p.theme.chatBody};
  iframe {
    width: 99%;
    height: 100%;
  }
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: ${(p) => p.theme.chatText};
    .close{
      cursor: pointer;
    }
    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 5px;
      }
    }
  }
`;
