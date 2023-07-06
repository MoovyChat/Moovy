import styled from "styled-components";

export const StyledToxicitySlider = styled.div`
  margin: 5px;

  .toxicity-container {
    .toxicity-slider-label {
      flex: 1;
    }
    .toxicity-slider-row {
      display: flex;
      align-items: center;
      margin: 1px 5px;

      .toxicity-slider-value {
        margin-right: 5px;
      }

      .toxicity-slider-bar {
        height: 10px;
        border-radius: 5px;
        transition: width 0.5s ease-in-out;
        width: 100%;
        box-shadow: 0 0 2px;
        .toxic-slider-child {
          height: 10px;
          border-radius: 5px;
          transition: width 0.5s ease-in-out;
        }
      }
    }
  }
`;
