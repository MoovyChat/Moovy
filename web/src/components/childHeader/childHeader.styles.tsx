import styled from 'styled-components';

export const ChildHeaderStyles = styled.div`
  position: absolute;
  top: 2%;
  display: flex;
  align-items: center;
  width: 100%;
  .back-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 5px;
    :hover {
      cursor: pointer;
      background-color: #ffffff2c;
      box-shadow: 0 0 5px;
    }
    :active {
      background-color: #ffffffa2;
    }
  }
  .header-text {
    font-size: 1.1rem;
    margin-left: 10px;
  }
`;
