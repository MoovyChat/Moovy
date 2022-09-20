import styled from 'styled-components';

export const SliderParent = styled.div`
  width: 100%;
  padding: 5px 2px;
  color: black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .title {
    min-width: 20%;
    text-align: center;
  }
  .slider {
    input {
      accent-color: #ff005d;
    }
  }
  .value {
    min-width: 10%;
    font-weight: 800;
    :hover {
      cursor: pointer;
    }
  }
`;
