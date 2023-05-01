import styled from 'styled-components';

export const StyledToolTip = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 18px;
  color: ${(p) => p.theme.chatText};
  font-size: 1em;
  font-weight: 600;
  z-index: 16;
  backdrop-filter: blur(5px) contrast(0.7);
  padding: 5px 10px;
`;
