import styled from 'styled-components';

export const SliderParent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .slider-title {
    min-width: 20%;
    flex: 1 1 10%;
    text-transform: capitalize;
  }
  .slider {
    flex: 1 1 80%;
    input {
      accent-color: #ff005d;
    }
  }
  .value {
    min-width: 10%;
    font-weight: 800;
    flex: 1 1 10%;
    :hover {
      cursor: pointer;
    }
  }
`;
