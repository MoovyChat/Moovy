import React, { useState } from "react";
import { StyledSnackbar } from "./snackBar.styles";
import { SnackbarCloseReason } from "@mui/base";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import {
  sliceSetSnackBar,
  sliceSetSnackBarText,
} from "../../../../../../redux/slices/toast/toastSlice";
import { store } from "../../../../../../redux/store";

interface SnackBarProps {}

export const openSnackBar = (text: string) => {
  store.dispatch(sliceSetSnackBar(true));
  store.dispatch(sliceSetSnackBarText(text));
};

const SnackBar: React.FC<SnackBarProps> = () => {
  const snackBarOpen = useAppSelector((state) => state.toast.snackBarOpen);
  const snackBarText = useAppSelector((state) => state.toast.snackBarText);
  const dispatch = useAppDispatch();
  const handleClose = (_: any, reason: SnackbarCloseReason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(sliceSetSnackBar(false));
    dispatch(sliceSetSnackBarText(""));
  };

  return (
    <StyledSnackbar
      open={snackBarOpen}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      {snackBarText}
    </StyledSnackbar>
  );
};

export default SnackBar;
