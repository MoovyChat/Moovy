import styled, { css, keyframes } from "styled-components";
import Snackbar from "@mui/base/Snackbar";

export const StyledMoovyNest = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  gap: 10px;
  overflow: hidden;
`;

export const TypingStatus = styled.div`
  font-size: 10px;
  color: #00fff2;
  font-style: italic;
  margin-left: 10px;
`;

export const NestHeading = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 12px;
  font-weight: 600;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
