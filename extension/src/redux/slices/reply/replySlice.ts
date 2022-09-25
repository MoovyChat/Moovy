import { ReplyInfo } from '../../../Utils/interfaces';
import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

export const replyState = {
  replies: [] as ReplyInfo[],
};

const ReplySlice = createSlice({
  name: 'replies',
  initialState: replyState,
  reducers: {
    sliceAddReply: (state, action) => {
      const { payload } = action;
      const reply: ReplyInfo = payload;
      const findReply = state.replies.find((r) => r.rid === reply.rid!);
      if (!findReply)
        return Object.assign({}, state, { replies: [...state.replies, reply] });
      return state;
    },
    sliceDeleteReply: (state, action) => {
      const { payload } = action;
      const { replies } = state;
      let newReplies = replies.filter(
        (reply) => reply.rid !== (payload as ReplyInfo).rid
      );
      return { ...state, replies: newReplies };
    },
    sliceAddAllReplies: (state, action) => {
      return { ...state, replies: action.payload };
    },
    sliceResetReply: () => {
      return replyState;
    },
  },
});

export const {
  sliceAddReply,
  sliceAddAllReplies,
  sliceDeleteReply,
  sliceResetReply,
} = ReplySlice.actions;
export default ReplySlice.reducer;
