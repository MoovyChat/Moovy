import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
`;

type props = {
  index: number;
};
export const StyledVideo = styled.video<props>`
  position: absolute;
  top: ${(props) => Math.floor(props.index / 4) * 10}px;
  left: 10px;
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
  z-index: 1000000;
`;
