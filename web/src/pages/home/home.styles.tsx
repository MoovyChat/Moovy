import styled from 'styled-components';

const offset = 60;

type props = {
  isNavBarOpen: boolean;
};

export const HomeParent = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  height: 100vh;
  flex-direction: column;
  padding: 0 10px; // default padding for mobile view

  .home-header {
    display: flex;
    height: ${offset}px;
    width: calc(
      100% - 2 * 10px
    ); // Default mobile view: 2 times the horizontal padding
  }

  @media (min-width: 577px) {
    // Tablet view
    padding: 0 20px;

    .home-header {
      width: calc(
        100% - 2 * 20px
      ); // Adjusted for tablet view: 2 times the horizontal padding
    }
  }

  @media (min-width: 993px) {
    // Desktop view
    padding: 0 40px;

    .home-header {
      width: calc(
        100% - 2 * 40px
      ); // Adjusted for desktop view: 2 times the horizontal padding
    }
  }
`;

export const PanelsParent = styled.div<props>`
  display: flex;
  position: relative;
  height: calc(100% - ${offset}px);
  width: 99.9%;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;
