import styled from 'styled-components';

export const StyledHeaderOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(234, 242, 255);
  box-shadow: 0 0 3px;
  border-radius: 5px;
  font-size: 14px;
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
    .options-text {
      flex: 1 1 80%;
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
