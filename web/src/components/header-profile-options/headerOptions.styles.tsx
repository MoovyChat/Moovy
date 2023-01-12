import styled from 'styled-components';

export const StyledHeaderOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.body};
  box-shadow: 0 0 3px;
  border-radius: 5px;
  .option {
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    margin: 0 10px;
    padding: 10px 0;
    .icon {
      flex: 1 1 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text {
      flex: 1 1 60%;
      font-size: 0.9em;
      font-weight: 500;
    }
    :hover {
      cursor: pointer;
      .icon {
        color: #ce2216;
      }
    }
  }
`;
