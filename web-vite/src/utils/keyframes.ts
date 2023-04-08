import { keyframes } from 'styled-components';

export const animateHeart = keyframes`
    0% {
        transform: scale(0.2);
      }
      40% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
`;

export const shine = keyframes`
 to {
    background-position-x: -200%;
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

export const rotateX180 = keyframes`
   0% {
    -ms-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  20%{
    -ms-transform: rotateX(180deg);
    -moz-transform: rotateX(180deg);
    -webkit-transform: rotateX(180deg);
    -o-transform: rotateX(180deg);
    transform: rotateX(180deg);
  }
  60%{
     -ms-transform: rotateX(180deg);
    -moz-transform: rotateX(180deg);
    -webkit-transform: rotateX(180deg);
    -o-transform: rotateX(180deg);
    transform: rotateX(180deg);
  }
  70%{
    -ms-transform: rotateX(360deg);
    -moz-transform: rotateX(360deg);
    -webkit-transform: rotateX(360deg);
    -o-transform: rotateX(360deg);
    transform: rotateX(360deg);
  }
  100%{
    -ms-transform: rotateX(360deg);
    -moz-transform: rotateX(360deg);
    -webkit-transform: rotateX(360deg);
    -o-transform: rotateX(360deg);
    transform: rotateX(360deg);
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
