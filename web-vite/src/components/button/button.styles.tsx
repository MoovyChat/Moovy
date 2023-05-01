import styled from "styled-components";

type props = {
  bgColor?: string;
  textColor?: string;
  padding?: string;
  textShadow?: string;
};
export const ButtonWindow = styled.div<props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(p) => p.bgColor};
  color: ${(p) => p.textColor};
  padding: ${(p) => p.padding};
  cursor: pointer;
  border: 1px dotted white;
  transition: all 0.3s ease-in-out;

  :hover {
    border: 1px solid white;
    box-shadow: 2px 2px 5px white, -2px -2px 5px white;
    transform: scale(1.1, 1.1);
  }

  :active {
    box-shadow: none;
    transform: scale(1, 1);
  }
`;

export const ButtonIcon = styled.div`
  flex-basis: 20%;
  text-align: end;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.div<props>`
  flex-basis: 80%;
  text-shadow: ${(p) => p.textShadow};
`;
