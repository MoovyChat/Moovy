import { CommentInfo } from '../../../Utils/interfaces';
import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

export const replyState = {
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
    sliceSetReplyLikeCount: (state, action) => {
      const [count, id] = action.payload;
      let updatedReplies = state.replies.map((r) =>
        r.id === id ? { ...r, likesCount: count } : r
      );
      return { ...state, replies: updatedReplies };
    },
    sliceAddToReplyLikes: (state, action) => {
      const { commentLikes, id } = action.payload;
      state.replies = state.replies.map((reply) =>
        reply.id === id ? { ...reply, likes: commentLikes } : reply
      );
    },
    sliceRemoveFromReplyLikes: (state, action) => {
      const { commentId, userId } = action.payload;
      state.replies = state.replies.map((reply) => {
        if (reply.id === commentId) {
          let UpdatedLikeArray = reply?.likes!.filter(
            (like) => like !== userId
          );
          return {
            ...reply,
            likes: UpdatedLikeArray,
          } as CommentInfo;
        } else return reply as CommentInfo;
      }) as CommentInfo[];
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
  sliceAddToReplyLikes,
  sliceRemoveFromReplyLikes,
  sliceSetReplyLikeCount,
  sliceResetReply,
} = ReplySlice.actions;

export default ReplySlice.reducer;
