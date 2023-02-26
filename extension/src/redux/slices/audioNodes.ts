import { AudioNodesInterface } from '../../Utils/interfaces';
import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

export const audioNodesState: AudioNodesInterface = {
  audioContext: null,
  biQuadFilter: null,
  stereo: null,
  analyser: null,
  gain: null,
  audioSource: null,
  pitchShift: null,
  distortion: null,
};

const audioNodesSlice = createSlice({
  name: 'audioNodes',
  initialState: audioNodesState,
  reducers: {
    sliceSetDistortion: (
      state,
      action: { payload: WaveShaperNode; type: string }
    ) => {
      return { ...state, distortion: action.payload };
    },
    sliceSetAudioContext: (
      state,
      action: { payload: AudioContext; type: string }
    ) => {
      return { ...state, audioContext: action.payload };
    },
    sliceSetBiQuadFilter: (
      state,
      action: { payload: BiquadFilterNode; type: string }
    ) => {
      return { ...state, biQuadFilter: action.payload };
    },

    sliceSetStereoPanNode: (state, action: { payload: StereoPannerNode }) => {
      return { ...state, stereo: action.payload };
    },

    sliceSetAnalyser: (state, action: { payload: AnalyserNode }) => {
      return { ...state, analyser: action.payload };
    },

    sliceSetPitch: (state, action) => {
      return { ...state, pitchShift: action.payload };
    },

    sliceSetGain: (state, action: { payload: GainNode }) => {
      return { ...state, gain: action.payload };
    },
    sliceResetAudioNodes: () => {
      return audioNodesState;
    },
    sliceSetAudioSource: (
      state,
      action: { payload: MediaElementAudioSourceNode }
    ) => {
      return { ...state, audioSource: action.payload };
    },
  },
});

export const {
  sliceSetDistortion,
  sliceSetAudioContext,
  sliceResetAudioNodes,
  sliceSetBiQuadFilter,
  sliceSetStereoPanNode,
  sliceSetAnalyser,
  sliceSetGain,
  sliceSetAudioSource,
} = audioNodesSlice.actions;
export default audioNodesSlice.reducer;
