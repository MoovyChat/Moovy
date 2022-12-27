import styled from 'styled-components';

export const PopupParent = styled.div`
  position: fixed;
  min-width: 10vw;
  min-height: 10vh;
  display: flex;

  box-shadow: 0px 0px 5px, 0px 0px 3px 1px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: ${(p) => p.theme.body};
  z-index: 8;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 100vw;
    height: 99vh;
  }
`;
