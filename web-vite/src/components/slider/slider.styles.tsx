import styled from "styled-components";

interface props {
  accentColor: string;
}
export const SliderParent = styled.div<props>`
  width: 100%;
  display: flex;
  align-items: center;
  .slider-title {
    min-width: 20%;
    flex: 1 1 10%;
    text-transform: capitalize;
    font-size: 12px;
  }
  .slider {
    flex: 1 1 80%;
    input[type="range"] {
      width: 100%;
      accent-color: ${(p) => p.accentColor};
    }
  }
  .value {
    min-width: 10%;
    font-weight: 800;
    flex: 1 1 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    :hover {
      cursor: pointer;
      .val-icon {
        box-shadow: inset 0 0 5px ${(p) => p.accentColor};
        svg {
          color: ${(p) => p.accentColor};
        }
      }
    }
    .val-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 25px;
      width: 25px;
      border-radius: 50%;
    }
  }
`;
