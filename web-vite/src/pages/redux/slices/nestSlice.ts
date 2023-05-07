import { createSlice } from "@reduxjs/toolkit";

const nestState = {
  type: "",
  visible: false,
};

const nestSlice = createSlice({
  name: "manipulation",
  initialState: nestState,
  reducers: {
    sliceSetNestType: (state, action) => {
      return { ...state, type: action.payload };
    },
    sliceSetNestVisibility: (state, action) => {
      return { ...state, visible: action.payload };
    },
  },
});

export const { sliceSetNestType, sliceSetNestVisibility } = nestSlice.actions;
export default nestSlice.reducer;
