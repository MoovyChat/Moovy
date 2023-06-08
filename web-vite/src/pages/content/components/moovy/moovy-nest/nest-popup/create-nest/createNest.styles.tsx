import styled from "styled-components";
import { switchClasses } from "@mui/base/Switch";

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

export const StyledInputElement = styled.input(
  ({ theme }) => `
    width: 200px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${theme.theme === "dark" ? grey[300] : grey[900]};
  background: ${theme.theme === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.theme === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 4px 30px ${theme.theme === "dark" ? grey[900] : grey[200]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.theme === "dark" ? blue[500] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

export const StyledCreateNest = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(p) => (p.theme.theme === "dark" ? grey[300] : grey[900])};
  background: ${(p) => (p.theme.theme === "dark" ? grey[900] : "#fff")};
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 0 3px 2px;
  gap: 15px;
  .container {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
`;

export const SyncButtonSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 10px;
  cursor: pointer;
  box-shadow: 0 0 1px 1px;
  border-radius: 50%;
  :hover {
    box-shadow: 0 0 2px 2px;
  }
  :active {
    box-shadow: 0 0 3px 3px;
  }
`;

export const CustomSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 10px;
  cursor: pointer;
`;

export const Root = styled("span")(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  margin: 10px;
  cursor: pointer;

  &.${switchClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchClasses.track} {
    background: ${theme.theme === "dark" ? grey[600] : grey[400]};
    border-radius: 16px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchClasses.thumb} {
    display: block;
    width: 16px;
    height: 16px;
    top: 4px;
    left: 4px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  }

  &.${switchClasses.focusVisible} .${switchClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchClasses.checked} {
    .${switchClasses.thumb} {
      left: 20px;
      top: 4px;
      background-color: #fff;
    }

    .${switchClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `
);
