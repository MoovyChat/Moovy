import styled from 'styled-components';

export const StyledPeopleCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  .usr-sec-1 {
    flex: 1 1 10%;
  }
  .usr-sec-2 {
    flex: 1 1 70%;
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    gap: 4px;
    .name {
      font-size: 16px;
      font-weight: 600;
      :hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .nickname {
      font-size: 12px;
      font-weight: 600;
      opacity: 0.8;
    }
  }
  .usr-sec-3 {
    flex: 1 1 15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
