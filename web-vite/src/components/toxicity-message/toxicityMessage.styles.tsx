import styled from 'styled-components';

type props = {
  isError: boolean;
  allowed: string | undefined;
};
export const StyledToxicityMessage = styled.div<props>`
  display: ${(p) => (p.isError ? 'flex' : 'none')};
  color: ${(p) => (p.allowed === 'true' ? '#ff5900' : '#ff0000')};
  font-weight: 600;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
  border: 1px solid ${(p) => (p.allowed === 'true' ? '#ff5900' : '#ff0000')};
  padding: 10px 0;
  margin-top: 20px;
  svg {
    margin: 0 5px;
  }
`;
