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

  .left,
  .center,
  .right {
    position: relative;
    transition: z-index 0.1s linear, transform 0.1s linear;
    box-shadow: inset 0 0 10px black;
    border-radius: 18px;

    &:hover {
      background-color: ${p => p.theme.hoverColor};
    }
  }

  .left {
    flex: 1 0 25%;
    border-radius: 18px;
    margin: 10px;
    margin-right: -20px; // add negative margin
    max-height: 99%;
    background-color: ${p => p.theme.primary};
    box-shadow: inset 0 0 10px black;
    z-index: 5;

    &:hover {
      z-index: 6;
      transform: scale(1.02);
    }
  }

  .center {
    margin-left: -20px; // add negative margin
    margin-right: -20px; // add negative margin
    background-color: ${p => p.theme.secondary};
    border: 1px solid;
    z-index: 1;
    > div {
      transition: width 0.1s linear;
      margin: auto;
      width: calc(100% - 80px);
    }
    &:hover {
      z-index: 6;
      transform: scale(1.02);
      > div {
        transition: width 0.1s linear;
        margin: 0%;
        width: 100%;
      }
    }
  }

  .right {
    flex: 1 0 25%;
    height: 100%;
    margin-left: -20px; // add negative margin
    background-color: ${p => p.theme.primary};
    border-radius: 18px;
    max-height: 99%;
    box-shadow: inset 0 0 10px black;
    z-index: 5;
    &:hover {
      z-index: 6;
      transform: scale(1.02);
    }
  }

  @media (max-width: 800px) {
    // ...
  }
`;
