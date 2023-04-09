import { CommentInfo } from '../../../Utils/interfaces';
import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const replyState = {
  replies: [] as CommentInfo[],
};

const ReplySlice = createSlice({
  name: 'replies',
  initialState: replyState,
  reducers: {
    sliceAddReply: (state, action) => {
      const reply: CommentInfo = action.payload;
      const newReplies = [reply, ...state.replies];
      const removeDup = _.uniqBy(newReplies, 'id');
      return { ...state, replies: removeDup };
    },
    sliceDeleteReply: (state, action) => {
      const { replies } = state;
      let newReplies = replies.filter((reply) => reply.id !== action.payload);
      return { ...state, replies: newReplies };
    },
    sliceAddAllReplies: (state, action) => {
      const replies = _.concat(state.replies, action.payload);
      const removeDuplicates = _.uniqBy(replies, 'id');
      return { ...state, replies: removeDuplicates };
    },
    sliceReportReply: (
      state,
      action: { payload: { id: string; isReported: boolean } }
    ) => {
      const { id, isReported } = action.payload;
      const rcd = state.replies.map((reply) =>
        reply.id === id ? { ...reply, reported: isReported } : reply
      );
      return { ...state, replies: rcd };
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
  sliceReportReply,
} = ReplySlice.actions;

export default ReplySlice.reducer;
