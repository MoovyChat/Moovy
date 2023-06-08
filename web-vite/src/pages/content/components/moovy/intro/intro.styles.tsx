import styled from "styled-components";
import { countdownAnimation } from "../../../styles/keyframes";
import { animated } from "@react-spring/web";

export const StyledIntro = styled.div`
  width: 99%;
  height: 92%;
  backdrop-filter: brightness(0.5) contrast(0.8) blur(3px);
  position: absolute;
  z-index: 100;
  bottom: 0px;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNestGif = styled.img`
  width: 100px;
  border-radius: 18px;
`;

export const StyledIntroBox = styled(animated.div)`
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.theme === "dark" ? "#EF476F" : "#06D6A0"};
  color: ${({ theme }) => (theme.theme === "dark" ? "#000" : "#fff")};
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.2);
  transform: skew(-10deg) rotate(-2deg);
  transition: all 0.3s ease;
  font-size: 10px;
  line-height: 1.2;
  margin: 0.5rem 0px;
  position: relative;
  min-width: 70%;
  max-width: 70%;
  min-height: 200px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.theme === "dark" ? "#06D6A0" : "#EF476F"};
    z-index: -1;
    transform: skew(10deg) rotate(2deg);
  }
`;

export const StyledIntroButton = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  margin-right: 0.5rem;
  color: ${({ theme }) => (theme.theme === "dark" ? "#000" : "#fff")};
  background-color: ${({ theme }) =>
    theme.theme === "dark" ? "#06D6A0" : "#EF476F"};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme.theme === "dark" ? "#EF476F" : "#06D6A0"};
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledParagraph = styled.div`
  line-height: 1.6;
  font-family: "Netflix Sans";
  font-size: 12px;
`;

export const StepsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .final {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 200px;
  }
`;

export const CountdownCircle = styled.svg`
  display: inline-block;
  width: 50px;
  height: 50px;
  circle {
    transition: stroke-dashoffset 1s linear;
  }
`;

export const CountdownText = styled.text`
  font-size: 20px;
  font-weight: bold;
`;
