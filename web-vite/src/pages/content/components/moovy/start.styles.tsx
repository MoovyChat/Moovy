import styled from 'styled-components';

type props = {
  visible: boolean;
};
export const StyledStart = styled.div<props>`
  .main-audio {
    position: fixed;
    bottom: ${(p) => (p.visible ? '150px' : '0px')};
    width: 100vw;
    z-index: 1;
    transition: bottom 0.2s linear;
  }
`;
