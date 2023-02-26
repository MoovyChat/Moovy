import styled from 'styled-components';

export const StyledAV = styled.div`
  height: 140px;
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .canvas-hover {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .ch-text-container {
      position: absolute;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      backdrop-filter: brightness(50%);
      cursor: pointer;
      .ch-text {
        padding: 5px;
        font-size: 10px;
        border-radius: 30px;
        background: #5e5e5e8f;
      }
      canvas {
        width: 100%;
      }
    }
  }
`;
