import styled from 'styled-components';

const offset = 60;
type props = {
  isNavBarOpen: boolean;
};
export const HomeParent = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 99.5vw;
  height: 100dvh;
  flex-direction: column;
  .home-header {
    display: flex;
    width: 99.9%;
    height: ${offset}px;
  }
`;

export const PanelsParent = styled.div<props>`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100% - ${offset}px);
  width: 99.9%;
  .left {
    flex: 1 0 25%;
    height: 100%;
  }
  .center {
    /* flex: 1 0 50%; */
  }
  .right {
    flex: 1 0 25%;
    height: 100%;
  }

  @media (max-width: 800px) {
    .right {
      display: none;
    }
    .left {
      flex: none;
      overflow: hidden;
      position: absolute;
      top: 0;
      z-index: 99;
      width: 60%;
      left: ${(p) => (p.isNavBarOpen ? '0%' : '-60%')};
      backdrop-filter: blur(15px);
      transition: left 0.3s linear;
    }
  }
  /* @media (max-width: 900px) {
      .right {
        display: none;
      }
    } */
`;
