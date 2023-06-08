import { createSlice } from "@reduxjs/toolkit";
import { AvailableRoom } from "../../../helpers/interfaces";

interface NestStateInterface {
  type: string;
  visible: boolean;
  nests: AvailableRoom[];
}

const nestState: NestStateInterface = {
  type: "",
  visible: false,
  nests: [],
};

const nestSlice = createSlice({
  name: "manipulation",
  initialState: nestState,
  reducers: {
    sliceSetNestType: (state, action) => {
      return { ...state, type: action.payload };
    },
    sliceSetNests: (state, action) => {
      return { ...state, nests: action.payload };
    },
    sliceSetNestVisibility: (state, action) => {
      return { ...state, visible: action.payload };
    },
  },
});

export const { sliceSetNestType, sliceSetNestVisibility, sliceSetNests } =
  nestSlice.actions;
export default nestSlice.reducer;
