import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

import { CommentInfo } from '../../../Utils/interfaces';
import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

export const replyState = {
  replies: [] as CommentInfo[],
  repliesCount: 0,
  modifed: 0,
  added: 0,
  deleted: 0,
};

const ReplySlice = createSlice({
  name: 'replies',
  initialState: replyState,
  reducers: {
    sliceAddReply: (state, action) => {
      const { payload } = action;
      const reply: CommentInfo = payload;
      const findReply = state.replies.find((r) => r.rid === reply.rid!);
      if (!findReply)
        return Object.assign({}, state, { replies: [...state.replies, reply] });
      return state;
    },
    sliceDeleteReply: (state, action) => {
      const { payload } = action;
      const { replies } = state;
      let newReplies = replies.filter(
        (reply) => reply.rid !== (payload as CommentInfo).rid
      );
      return { ...state, replies: newReplies };
    },
    sliceAddAllReplies: (state, action) => {
      let docs = action.payload as QueryDocumentSnapshot<DocumentData>[];
      let replies = docs.map((doc) => {
        return doc.data() as CommentInfo;
      });
      return {
        ...state,
        replies,
      };
    },
    sliceModifyReplies: (state, action) => {
      return { ...state, modifed: state.modifed + action.payload };
    },
    sliceAddedReplies: (state, action) => {
      return { ...state, added: state.added + action.payload };
    },
    sliceDeletedReplies: (state, action) => {
      return { ...state, deleted: state.deleted + action.payload };
    },
    sliceUpdateRepliesInParentReplies: (state, action) => {
      const { parent, rid } = action.payload;
      let newArray = _.map(state.replies, (reply) => {
        return reply.rid === parent
          ? {
              ...reply,
              replies: [...reply?.replies!, rid],
            }
          : reply;
      });
      return { ...state, replies: newArray };
    },
    sliceUpdateReplyGeneric: (state, action) => {
      const { parent, rid } = action.payload as CommentInfo;
      let newArray = _.map(state.replies, (reply) => {
        return reply.rid === rid && reply.parent === parent
          ? action.payload
          : reply;
      });
      return { ...state, replies: newArray };
    },
    sliceRemoveReplyFromParentReplies: (state, action) => {
      const { parent, rid } = action.payload;
      let newReplies = state.replies.filter((reply) => {
        if (reply.rid === parent) {
          let UpdatedReplyArray = reply?.replies!.filter(
            (id: string) => id !== rid
          );
          return {
            ...reply,
            likes: UpdatedReplyArray,
          } as CommentInfo;
        } else return reply as CommentInfo;
      }) as CommentInfo[];
      return { ...state, replies: newReplies };
    },
    sliceAddToReplyLikes: (state, action) => {
      const { replyId, userId } = action.payload;
      state.replies = state.replies.map((reply) => {
        if (reply.rid === replyId) {
          let findLike = reply.likes!.find((l) => l === userId);
          if (findLike === undefined) {
            let updatedLikes = [...reply?.likes!, userId];
            return {
              ...reply,
              likes: updatedLikes,
            } as CommentInfo;
          }
        } else return reply as CommentInfo;
      }) as CommentInfo[];
    },
    sliceRemoveFromReplyLikes: (state, action) => {
      const { replyId, userId } = action.payload;
      state.replies = state.replies.map((reply) => {
        if (reply.rid === replyId) {
          let UpdatedLikeArray = reply?.likes!.filter(
            (like: string) => like !== userId
          );
          return {
            ...reply,
            likes: UpdatedLikeArray,
          } as CommentInfo;
        } else return reply as CommentInfo;
      }) as CommentInfo[];
    },
    sliceUpdateTotalRepliesCountOfMovie: (state, action) => {
      return { ...state, repliesCount: action.payload };
    },
    sliceResetReply: () => {
      return replyState;
    },
  },
});

export const {
  sliceAddReply,
  sliceAddAllReplies,
  sliceModifyReplies,
  sliceDeleteReply,
  sliceAddedReplies,
  sliceUpdateTotalRepliesCountOfMovie,
  sliceDeletedReplies,
  sliceAddToReplyLikes,
  sliceRemoveFromReplyLikes,
  sliceUpdateRepliesInParentReplies,
  sliceUpdateReplyGeneric,
  sliceRemoveReplyFromParentReplies,
  sliceResetReply,
} = ReplySlice.actions;
export default ReplySlice.reducer;
