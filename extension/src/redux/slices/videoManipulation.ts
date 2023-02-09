import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

export const manipulationState = {
  playbackRate: 1,
  filterType: 'lowpass',
  QValue: 1,
  frequency: 24000,
  gain: 1,
  stereo: 0,
  distortionCurve: 0,
  distortionOverSample: 'none',
};

const manipulationSlice = createSlice({
  name: 'manipulation',
  initialState: manipulationState,
  reducers: {
    sliceSetManipulation: (
      state,
      action: { payload: { key: string; value: any }; type: string }
    ) => {
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    },
  },
});

export const { sliceSetManipulation } = manipulationSlice.actions;
export default manipulationSlice.reducer;
