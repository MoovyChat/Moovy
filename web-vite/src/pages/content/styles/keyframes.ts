import { keyframes } from "styled-components";

export const topToBottom1 = (isOpenInFull: number) => keyframes`
  0% {
    opacity: 1;
    height: ${isOpenInFull % 2 === 0 ? "75%" : "100%"}
  }
 100% {
    opacity: 0;
    height: ${isOpenInFull % 2 === 0 ? "0%" : "0%"}
  }
`;

export const bottomToTop1 = (isOpenInFull: number) => keyframes`
  0% {
    height: ${
      isOpenInFull === 0 ? "0%" : isOpenInFull % 2 === 0 ? "100%" : "75%"
    }
  }
 100% {
    height: ${
      isOpenInFull === 0 ? "75%" : isOpenInFull % 2 === 0 ? "75%" : "100%"
    }
  }
`;

export const rotate = keyframes`
   from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const fillUp = keyframes`
  0% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
`;

export const rotate180 = keyframes`
   0% {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -ms-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
`;

export const rotate180rev = keyframes`
    0% {
    -ms-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
   100% {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

`;

export const scrollingText = keyframes`
  from {transform: translateX(100%); }
  to {transform: translateX(-140%); }
`;

export const wiggle = keyframes`
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0);
  }
`;
