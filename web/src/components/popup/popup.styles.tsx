import styled from 'styled-components';

export const PopupParent = styled.div`
  position: fixed;
  width: 50vw;
  min-height: 50vh;
  box-shadow: inset 0 0 10px, 0 0 10px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;
