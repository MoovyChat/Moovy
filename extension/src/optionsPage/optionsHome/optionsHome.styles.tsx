import styled from 'styled-components';

export const OptionsMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #1e1e1e;
  color: white;
  .panels {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: inherit;
    .left,
    .right {
      width: 50%;
      height: 100%;
      color: inherit;
    }
  }
`;
