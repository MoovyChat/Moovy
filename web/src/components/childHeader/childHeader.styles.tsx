import styled from 'styled-components';

export const ChildHeaderStyles = styled.div`
  position: sticky;
  top: 0;
  padding: 2% 0;
  display: flex;
  align-items: center;
  z-index: 5;
  width: 100%;
  backdrop-filter: blur(10px);
  .back-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 5px;
    margin-left: 2px;
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
