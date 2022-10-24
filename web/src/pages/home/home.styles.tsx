import styled from 'styled-components';

const offset = 50;
export const HomeParent = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  .home-header {
    display: flex;
    width: 99.9%;
    height: ${offset}px;
  }
  .panels {
    display: flex;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
    height: calc(100% - ${offset}px);
    width: 100%;
    .left {
      flex: 1 0 25%;
    }
    .center {
      flex: 1 0 50%;
    }
    .right {
      flex: 1 0 25%;
    }
  }
`;
