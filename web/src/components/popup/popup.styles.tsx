import styled from 'styled-components';

export const StyledPopUP = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 7;
  backdrop-filter: blur(20px) brightness(0.5);
`;
export const PopupParent = styled.div`
  position: fixed;
  min-width: 10vw;
  min-height: 10vh;
  display: flex;
  border-radius: 18px;
  box-shadow: 0px 0px 5px, 0px 0px 3px 1px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: ${p => p.theme.body};
  z-index: 8;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) {
    width: 100vw;
    height: 99vh;
    top: 50%;
  }
`;
