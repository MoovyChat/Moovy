import styled from "styled-components";

export const StyledOptionWindow = styled.div`
  position: absolute;
  display: flex;
  height: calc(100% - 105px);
  width: 99%;
  inset: 0px;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden auto;
  backdrop-filter: blur(10px);
  .section {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    animation: slideFromTop 0.3s linear forwards;

    .title {
      padding: 10px;
    }
    .wn-suggestions {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      .word {
        font-weight: 700;
        font-size: 1.2em;
        :hover {
          cursor: pointer;
          transform: scale(1.1);
          transition: transform 0.5s;
        }
      }
    }
    @keyframes slideFromTop {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
