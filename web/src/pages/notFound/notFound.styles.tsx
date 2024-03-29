import styled from 'styled-components';

export const NotFoundParent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100dvh;
  width: 100%;
  .bg {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0.1;
    display: flex;
    justify-content: center;
    align-items: center;
    .bg-img {
      width: 60vw;
    }
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
