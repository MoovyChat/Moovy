import styled from 'styled-components';

export const ChildHeaderStyles = styled.div`
  position: absolute;
  top: 5%;
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 20px;
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
`;
