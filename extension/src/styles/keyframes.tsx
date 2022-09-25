import { keyframes } from 'styled-components';

export const bottomToTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const bottomToTop1 = keyframes`
  0% {
    opacity: 0;
    height: 0%
  }
  100% {
    opacity: 1;
    height: 80%
  }
`;

export const rightToLeft = keyframes`
  0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
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

export const scrollingText = keyframes`
  from {transform: translateX(100%); }
  to {transform: translateX(-140%); }
`;
