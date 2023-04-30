import { createSlice } from '@reduxjs/toolkit';

const toolTipState = {
  visible: false,
  message: 'Default',
};

const ToolTipSlice = createSlice({
  name: 'toast',
  initialState: toolTipState,
  reducers: {
    sliceSetTooltipVisible: (state, action) => {
      return { ...state, visible: action.payload };
    },
    sliceSetToolTipMessage: (state, action) => {
      return { ...state, message: action.payload };
    },
  },
});

export const { sliceSetTooltipVisible, sliceSetToolTipMessage } =
  ToolTipSlice.actions;
export default ToolTipSlice.reducer;
