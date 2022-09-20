import styled from 'styled-components';
import constants from '../../../constants';
import { motion } from 'framer-motion';

interface prop {
  photoURL: string | null | undefined;
}

export const SetTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  display: center;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

export const PicParent = styled.div`
  position: absolute;
  top: 10px;
  left: 30px;
`;
export const Pic = styled.div<prop>`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(${(p) => p.photoURL});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  align-self: center;
  box-shadow: 0 0 5px white, inset 0 0 5px 2px black;
  /* left: 40px;  */
`;

export const WelcomeInLogin = styled.div`
  display: flex;
  justify-content: flex-start;
  color: white;
  text-align: center;
  margin-bottom: 40px;
  .settings {
    position: absolute;
    right: 15px;
    top: 5px;
    color: #e2e2e2;
    :hover {
      cursor: pointer;
    }
    .icon {
      :hover {
        animation: spin 4s linear infinite;
      }
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg) scale(1);
    }
    75% {
      transform: rotate(270deg) scale(1.1);
    }
    50% {
      transform: rotate(180deg) scale(1);
    }
    25% {
      transform: rotate(90deg) scale(1.1);
    }
    0% {
      transform: rotate(0deg) scale(1);
    }
  }
`;

export const WelcomeMessage = styled.div`
  position: absolute;
  flex-basis: 80%;
  margin-left: 10px;
  text-align: center;
  justify-content: center;
  top: 10px;
  left: 90px;
`;

export const ButtonParentInLogin = styled.div`
  width: 40%;
  flex-basis: 30%;
`;

export const EmailInLogin = styled.div`
  position: absolute;
  display: flex;
  top: 31px;
  left: 100px;
  color: white;
  font-size: 10px;
  word-break: break-all;
  width: 150px;
  text-align: center;
`;

export const SideArrowButton = styled.div`
  color: white;
  position: absolute;
  left: 0px;
  bottom: 30px;
  cursor: pointer;
  background-color: rgb(255, 255, 255, 0.5);
  :hover {
    background-color: rgb(255, 255, 255);
    color: ${constants.main_color};
  }
`;

export const Refresh = styled(motion.div)`
  width: 25px;
  height: 25px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: rgb(255, 255, 255, 0.5);
  color: white;
  border-radius: 50%;
  right: 10px;
  bottom: 35px;
  :hover {
    cursor: pointer;
  }
`;
