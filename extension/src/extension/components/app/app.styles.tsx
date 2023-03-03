import styled from 'styled-components';

type props = {
  color: string;
};
export const AppWindow = styled.div<props>`
  text-align: center;
  font-family: 'Lexend', sans-serif;
  width: 300px;
  max-height: 600px;
  overflow: auto;
  background-color: black;

  .floatRight {
    position: relative;
    width: 300px;
    height: 100%;
    float: left;
    background-image: linear-gradient(black 30%, ${(p) => p.color});
    animation: none;
    z-index: 999;
  }
`;

export const SideBarOpen = styled.div`
  position: fixed;
  background-image: linear-gradient(black 0.5%, #232323);
  width: 200px;
  height: 100%;
  float: right;
  right: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
  box-shadow: rgb(255 255 255 / 0%) 0px 30px 60px -12px inset,
    rgb(255 255 255 / 96%) 0px 1px 36px -18px inset;
  .stats {
    flex-basis: 50%;
  }

  .side {
    flex-basis: 50%;
  }
`;

export const Footer = styled.div`
  position: relative;
  font-size: 13px;
  width: 300px;
  text-align: center;
  color: white;
  z-index: 999;
  margin-bottom: 10px;
`;
