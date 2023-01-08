import styled from 'styled-components';

export const NotFoundParent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
  }
  .wave {
    position: absolute;
    z-index: -1;
    bottom: 0px;
    width: 100%;
  }
  .code {
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    text-shadow: 0px 20px 9px;
    font-size: 5em;
  }
  .text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
    letter-spacing: 4px;
  }
`;
