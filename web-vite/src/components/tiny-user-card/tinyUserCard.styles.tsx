import styled from 'styled-components';

export const StyledTinyUserCard = styled.div`
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .tuc-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :first-child {
    }
    :last-child {
      font-size: 1em;
      opacity: 0.7;
    }
  }
`;
