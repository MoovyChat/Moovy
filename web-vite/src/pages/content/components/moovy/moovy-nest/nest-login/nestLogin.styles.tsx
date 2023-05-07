import styled from "styled-components";
import Button, { buttonClasses } from "@mui/base/Button";

export const StyledNestLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  padding-top: 15px;

  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .public-nests {
    box-shadow: 0 0 1px;
    padding: 10px;
  }
`;

interface Props {
  nestColor: string;
  nestHover: string;
  nestActive: string;
  size: number;
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
  display: flex;
  gap: 5px;
  font-size: ${(p) => `${p.size}px`};

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
