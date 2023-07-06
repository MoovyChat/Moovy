import { createSlice } from "@reduxjs/toolkit";

const toastState = {
  snackBarOpen: false,
  visible: false,
  message: "Default",
  icon: "",
  snackBarText: "",
};

const ToastSlice = createSlice({
  name: "toast",
  initialState: toastState,
  reducers: {
    sliceSetSnackBar: (state, action) => {
      return { ...state, snackBarOpen: action.payload };
    },
    sliceSetSnackBarText: (state, action) => {
      return { ...state, snackBarText: action.payload };
    },
    sliceSetToastVisible: (state, action) => {
      return { ...state, visible: action.payload };
    },
    sliceSetToastBody: (state, action) => {
      const { icon, message } = action.payload;
      return { ...state, icon, message };
    },
  },
});

export const {
  sliceSetToastVisible,
  sliceSetToastBody,
  sliceSetSnackBar,
  sliceSetSnackBarText,
} = ToastSlice.actions;
export default ToastSlice.reducer;
