import styled from 'styled-components';

export const PopupParent = styled.div`
  position: fixed;
  width: 50vw;
  display: flex;
  min-height: 50vh;
  box-shadow: inset 0 0 10px, 0 0 10px;
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
