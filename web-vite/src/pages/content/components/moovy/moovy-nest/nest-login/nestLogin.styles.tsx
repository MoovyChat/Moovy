import styled from "styled-components";
import Button, { buttonClasses } from "@mui/base/Button";

export const StyledNestLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  padding-top: 15px;
  overflow: scroll;
  height: 100%;

  .nest-gif-logo {
    height: 50%;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .public-nests {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .public-nests-heading {
      display: flex;
      font-size: 15px;
      justify-content: flex-start;
      font-weight: 600;
    }
    .public-nests-list {
      box-shadow: 0 0 1px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 60px;
    }
  }
`;

interface Props {
  nestColor: string;
  nestHover: string;
  nestActive: string;
  size: number;
  height: number;
}
export const StyledNestButton = styled(Button)<Props>`
  font-weight: bold;
  background-color: ${(p) => p.nestColor};
  padding: 12px 24px;
  border-radius: 12px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  gap: 5px;
  font-size: ${(p) => `${p.size}px`};
  height: ${(p) => `${p.height}px`};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(p) => p.nestHover};
  }

  &.${buttonClasses.active} {
    background-color: ${(p) => p.nestActive};
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: ${(p) => `0 4px 20px 0 ${p.nestHover},
      0 0 0 5px ${p.nestActive}`};
    outline: none;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
