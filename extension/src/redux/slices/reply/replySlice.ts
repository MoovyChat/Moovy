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
      const reply: ReplyInfo = action.payload;
      const newReplies = [reply, ...state.replies];
      const removeDup = _.uniqBy(newReplies, 'rid');
      return { ...state, replies: removeDup };
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
      const replies = _.concat(state.replies, action.payload);
      const removeDuplicates = _.uniqBy(replies, 'rid');
      return { ...state, replies: removeDuplicates };
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
