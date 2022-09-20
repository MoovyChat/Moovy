import constants from '../../../constants';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AppWindow = styled(motion.div)`
  text-align: center;
  font-family: 'Lexend', sans-serif;
  width: 300px;
  height: 200px;
  background-color: black;

  .floatRight {
    position: relative;
    width: 300px;
    height: 100%;
    float: left;
    background-image: linear-gradient(black 30%, ${constants.main_color});
    animation: none;
    z-index: 999;
  }
`;

export const SideBarOpen = styled(motion.div)`
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
  position: absolute;
  bottom: 2px;
  font-size: 13px;
  width: 300px;
  text-align: center;
  color: white;
  z-index: 999;
`;
