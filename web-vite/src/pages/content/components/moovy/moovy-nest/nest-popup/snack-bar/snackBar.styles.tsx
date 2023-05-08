import styled, { css, keyframes } from "styled-components";
import Snackbar from "@mui/base/Snackbar";

const blue = {
  50: "#F0F7FF",
  400: "#3399FF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  200: "#E0E3E7",
};

const snackbarInRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

export const StyledSnackbar = styled(Snackbar)(
  ({ theme }) => css`
    font-size: 14px;
    position: fixed;
    z-index: 5500;
    display: flex;
    right: 16px;
    bottom: 16px;
    left: auto;
    justify-content: start;
    max-width: 560px;
    min-width: 300px;
    background-color: ${theme.theme === "dark" ? blue[900] : blue[50]};
    border-radius: 8px;
    border: 1px solid ${theme.theme === "dark" ? blue[600] : blue[400]};
    box-shadow: ${theme.theme === "dark"
      ? `0 5px 13px -3px rgba(0,0,0,0.4)`
      : `0 5px 13px -3px ${grey[200]}`};
    padding: 0.75rem;
    color: ${theme.theme === "dark" ? "#fff" : blue[900]};
    font-weight: 600;
    animation: ${snackbarInRight} 500ms;
    transition: transform 0.2s ease-out;
  `
);
