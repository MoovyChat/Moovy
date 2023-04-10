import styled from 'styled-components';

export const StyledHeaderOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.popup};
  box-shadow: 0 0 3px;
  border-radius: 5px;
  margin-bottom: 10px;
  .us {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px;
    gap: 5px;
    font-weight: 600;
    .full {
      font-size: 14px;
    }
    .nick {
      font-size: 14px;
      opacity: 0.7;
    }
  }
  .option {
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    margin: 0 10px;
    padding: 10px 0;
    .icon {
      flex: 1 1 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
    }
    .text {
      flex: 1 1 80%;
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
